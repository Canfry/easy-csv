import type { FilesRecord } from '../xata';
import type { RecordArray, SelectedPick } from '@xata.io/client';
import { useState } from 'react';

import { IoTrashSharp } from 'react-icons/io5';

export default function ProfilefileList({files, userId
}: {
  files: RecordArray<Readonly<SelectedPick<FilesRecord, ['*']>>>; userId: string;
}){
  const [fileList, setFileList] = useState(files ?? []);
  const [isLoading, setIsLoading] = useState(false);

  async function deleteUser(id: string){
    await fetch(`${import.meta.env.BASE_URL}api/deleteUser/${id}`, {
    method: 'DELETE',
    });

    window.location.href = `${import.meta.env.BASE_URL}`;
  }

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
      {isLoading ? (
          <div className='flex items-center justify-center h-32'>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : (
          <div className='h-32'></div>
        )}
      <h1 className='text-3xl text-slate-700 mb-8'>Your list of files:</h1>
      {fileList.length === 0 ? (
      <p className='text-slate-700 text-xl'>You have no files.</p>
      ) : (
      <ul>
        {fileList.map((file) => (
          <div key={file.id} className='flex items-center gap-x-4'>
            <li>
              <a href={`/file/${file.id}`} className='text-orange-600 text-xl font-bold'>{file.name}</a>
            </li>
            <button onClick={() => deleteFile(file.id)}>
              <IoTrashSharp className='text-slate-600 cursor-pointer' />
            </button>
          </div>
        ))}
      </ul>
      )}
      
      <hr className='my-8 h-1 bg-slate-700' />
      <h1 className='text-3xl text-slate-700 mb-4'>Delete your account:</h1>
      <p className='text-slate-700 text-xl'><span className='text-orange-600 font-bold text-xl'>Warning: </span>This will delete your account, but not your files. Be sure to delete all your files (clicking on the bin next to each file) before deleting your account. This action is irreversible.</p>
      <button onClick={() => deleteUser(userId)} className='w-[40%] rounded-md font-bold py-2 px-3 bg-red-600 text-white mt-4 text-xl max-md:text-sm uppercase'>Delete account</button>
    </>
  )
}
