import { X as XataClient } from './_fileName__FNv7Xa1b.mjs';

const DELETE = async ({ params, cookies }) => {
  const xata = new XataClient({ apiKey: "xau_WfkZUvKI3vQS4yMUNgqmZGuKNJJUawB16" });
  const userId = cookies.get("userId");
  const id = params.id;
  if (!userId) {
    return new Response(JSON.stringify({ error: "Not logged in" }), {
      status: 401
    });
  }
  const record = await xata.db.files.delete(id);
  return new Response(JSON.stringify(record));
};

export { DELETE };
