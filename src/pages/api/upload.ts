import type { APIRoute } from 'astro';
import { XataClient } from '../../xata';
import { XataFile } from '@xata.io/client';

const errors: Record<string, string> = {};

export const POST: APIRoute = async ({ redirect, cookies, request }): Promise<Response> => {
  const xata = new XataClient({ apiKey: import.meta.env.XATA_API_KEY });
  const userId = cookies.get('userId');
  const data = await request.formData();
  const fileToUpload = data.get('file') as File;
  const fileName = fileToUpload.name;

  // console.log(fileToUpload);
  
  try {
   if(!fileToUpload) {
      errors.file = "File is required"
    } else {
      const record = Buffer.from(await fileToUpload.arrayBuffer()).toString('base64');
      await xata.db.files.create({
        name: fileName,
        user: userId?.value,
        file: XataFile.fromBase64(record),
      })
    }
  } catch (error) {
    return new Response(null, { status: 404, statusText: 'Not Found' });  
  }

  return redirect('/dashboard')
};
