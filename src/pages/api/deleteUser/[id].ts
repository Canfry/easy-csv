import type { APIRoute } from 'astro';
import { XataClient } from '../../../xata';

export const DELETE: APIRoute = async ({ params, cookies, redirect }) => {
  const xata = new XataClient({ apiKey: import.meta.env.XATA_API_KEY });
  const userId = cookies.get('userId');
  const id = params.id as string;

  if (!userId) {
    return new Response(JSON.stringify({ error: 'Not logged in' }), {
      status: 401,
    });
  }
  
  await xata.db.users.delete(id);

  return redirect('/logout');
  /*return new Response(JSON.stringify(user));*/
};
