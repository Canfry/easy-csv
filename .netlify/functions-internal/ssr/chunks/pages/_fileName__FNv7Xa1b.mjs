import { buildClient } from '@xata.io/client';
import * as csv from 'csv-string';

const tables = [
  {
    name: "users",
    columns: [
      { name: "name", type: "string", notNull: true, defaultValue: "" },
      {
        name: "email",
        type: "email",
        notNull: true,
        defaultValue: "dev@dev.com"
      },
      { name: "password", type: "string", notNull: true, defaultValue: "" }
    ],
    revLinks: [{ column: "user", table: "files" }]
  },
  {
    name: "files",
    columns: [
      { name: "user", type: "link", link: { table: "users" }, unique: true },
      { name: "file", type: "file" },
      { name: "name", type: "string", defaultValue: "" }
    ]
  }
];
const DatabaseClient = buildClient();
const defaultOptions = {
  databaseURL: "https://Christophe-Anfry-s-workspace-phgkqo.us-east-1.xata.sh/db/easy-csv"
};
class XataClient extends DatabaseClient {
  constructor(options) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

const GET = async ({ cookies, params }) => {
  const xata = new XataClient({ apiKey: "xau_WfkZUvKI3vQS4yMUNgqmZGuKNJJUawB16" });
  const userId = cookies.get("userId");
  const fileName = params.fileName;
  if (!userId) {
    return new Response(JSON.stringify({ error: "Not logged in" }), {
      status: 401
    });
  }
  try {
    const correctFile = await xata.db.files.filter({ name: fileName, "user.id": userId?.value }).getFirst();
    const file = await xata.db.files.read(correctFile.id, [
      "id",
      "name",
      "file",
      "file.base64Content",
      "file.signedUrl"
    ]);
    const plainText = Buffer.from(
      file?.file?.base64Content,
      "base64"
    ).toString("utf-8");
    const parsedCsv = csv.parse(plainText, { output: "objects" });
    const headers = Object.keys(parsedCsv[0]);
    return new Response(JSON.stringify({ headers, data: parsedCsv }));
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Something went wrong"
      }),
      {
        status: 500
      }
    );
  }
};

const _fileName_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

export { XataClient as X, _fileName_ as _ };
