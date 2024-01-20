import type { FilesRecord } from '../xata';
import type { RecordArray, SelectedPick } from '@xata.io/client';


export default function ProfilefileList({files,
}: {
  files: RecordArray<Readonly<SelectedPick<FilesRecord, ['*']>>>;
}){
  return (
    <>
      <h1>Your list of files:</h1>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            <a href={`/file/${file.id}`}>{file.name}</a>
          </li>
        ))}

      </ul>
    </>
  )
}
