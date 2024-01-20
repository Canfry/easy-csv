import type { FilesRecord } from '../xata';
import type { RecordArray, SelectedPick } from '@xata.io/client';
import { useState } from 'react';

import { IoTrashSharp } from 'react-icons/io5';

export default function ProfilefileList({files,
}: {
  files: RecordArray<Readonly<SelectedPick<FilesRecord, ['*']>>>;
}){
  const [fileList, setFileList] = useState(files ?? []);
  const [isLoading, setIsLoading] = useState(false);


  async function deleteFile(id: string) {
    setIsLoading(true);
    const res = await fetch(`${import.meta.env.BASE_URL}api/delete/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    const newFiles = files.filter((file) => file.id !== data.id);
    setFileList(newFiles as any);
    setIsLoading(false);
  }
  return (
    <>
      {isLoading && (
          <div className='flex items-center justify-center h-96'>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
          </div>
        )}
      <h1 className='text-3xl text-slate-700 mb-8'>Your list of files:</h1>
      <ul>
        {fileList.map((file: any) => (
          <div className='flex items-center gap-x-4'>
            <li key={file.id}>
              <a href={`/file/${file.id}`} className='text-orange-600 text-xl font-bold'>{file.name}</a>
            </li>
            <button onClick={() => deleteFile(file.id)}>
              <IoTrashSharp className='text-slate-600 cursor-pointer' />
            </button>
          </div>
        ))}

      </ul>
    </>
  )
}
