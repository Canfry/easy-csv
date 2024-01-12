import { X as XataClient } from './_fileName__FNv7Xa1b.mjs';
import { XataFile } from '@xata.io/client';

const POST = async ({ redirect, cookies, request }) => {
  const xata = new XataClient({ apiKey: "xau_WfkZUvKI3vQS4yMUNgqmZGuKNJJUawB16" });
  const userId = cookies.get("userId");
  const data = await request.formData();
  const fileToUpload = data.get("file");
  const fileName = fileToUpload.name;
  try {
    if (!fileToUpload) {
      throw new Error("File is required");
    } else {
      const record = Buffer.from(await fileToUpload.arrayBuffer()).toString("base64");
      await xata.db.files.create({
        name: fileName,
        user: userId?.value,
        file: XataFile.fromBase64(record)
      });
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      error.message;
    }
  }
  return redirect("/dashboard");
};

export { POST };
