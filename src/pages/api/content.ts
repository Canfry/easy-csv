import type { APIRoute } from 'astro';
import { XataClient } from '../../xata';
import * as csv from 'csv-string';

export const GET: APIRoute = async ({ cookies, request }) => {
  const xata = new XataClient({ apiKey: import.meta.env.XATA_API_KEY });
  const userId = cookies.get('userId');
  const { fileName } = await request.json();
  // const files = await xata.db.files.filter({ 'user.id': userId?.value }).getMany();

  if (!userId) {
    return new Response(JSON.stringify({ error: 'Not logged in' }), {
      status: 401,
    });
  }

  try {
    const correctFile = await xata.db.files
      .filter({ name: fileName, 'user.id': userId?.value })
      .getFirst();
    const file = await xata.db.files.read(correctFile!.id, [
      'id',
      'name',
      'file',
      'file.base64Content',
      'file.signedUrl',
    ]);
    const plainText = Buffer.from(
      file?.file?.base64Content!,
      'base64'
    ).toString('utf-8');
    const parsedCsv = csv.parse(plainText, { output: 'objects' });
    const headers = Object.keys(parsedCsv[0]);
    console.log(headers);
    return { headers, data: parsedCsv };
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Something went wrong',
      }),
      {
        status: 500,
      }
    );
  }
};
