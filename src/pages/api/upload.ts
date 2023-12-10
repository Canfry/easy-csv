import fs from 'fs';
import csv from 'csv-parser';

import type { APIRoute } from 'astro';
import { XataClient } from '../../xata';

export const GET: APIRoute = async ({ redirect }) => {
  const xata = new XataClient({ apiKey: import.meta.env.XATA_API_KEY });

  const records = await xata.db.files
    .select([
      'id',
      'file.id',
      'file.name',
      'file.signedUrl',
      'file.mediaType',
      'file.size',
      'file.enablePublicUrl',
      'file.url',
      'user.id',
      'user.name',
      'user.email',
      'user.password',
    ])
    .getAll();

  console.log(records);
  return redirect('/dashboard');
};
