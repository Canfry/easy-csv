import fs from 'fs';
import csv from 'csv-parser';

import type { APIRoute } from 'astro';
import { XataClient } from '../../xata';
import { XataFile } from '@xata.io/client';

// export const GET: APIRoute = async ({ redirect }) => {
//   const xata = new XataClient({ apiKey: import.meta.env.XATA_API_KEY });

//   const records = await xata.db.files
//     .select([
//       'id',
//       'file.id',
//       'file.name',
//       'file.signedUrl',
//       'file.mediaType',
//       'file.size',
//       'file.enablePublicUrl',
//       'file.url',
//       'user.id',
//       'user.name',
//       'user.email',
//       'user.password',
//     ])
//     .getAll();

//   console.log(records);
//   return redirect('/dashboard');
// };

export const POST: APIRoute = async ({ redirect, cookies, request }) => {
  const xata = new XataClient({ apiKey: import.meta.env.XATA_API_KEY });
  const userId = cookies.get('userId');
  const data = await request.formData();
  const fileToUpload = data.get('file') as File;
  const fileName = fileToUpload.name;

  console.log(fileToUpload.name);

  const record = Buffer.from(await fileToUpload.arrayBuffer()).toString(
    'base64'
  );
  console.log(record);

  await xata.db.files.create({
    name: fileName,
    user: userId?.value,
    file: XataFile.fromBase64(record),
  });

  // console.log(records);
  return redirect('/dashboard');
};
