import type { RecordArray, SelectedPick } from '@xata.io/client';
import type { Data } from '../pages/dashboard/index.astro';
import type { FileData } from '../pages/dashboard/index.astro';
import type { FilesRecord } from '../xata';
import { useState } from 'react';

export default function FileList({
  files,
  getFileData,
}: {
  files: RecordArray<Readonly<SelectedPick<FilesRecord, ['*']>>>;
  getFileData: (fileName: string) => Promise<Data>;
}) {
  const [headers, setHeaders] = useState<string[]>([]);
  const [fileData, setFileData] = useState<FileData['data']>([]);

  async function handleClick(fileName: string) {
    console.log('clicked');
    const { headers, data: parseCsv } = await getFileData(fileName);
    setHeaders(headers);
    setFileData(parseCsv);
  }

  return (
    <div className='grid grid-cols-[auto,1fr] w-full z-50'>
      <div className='py-16 px-8 bg-gray-50 flex flex-col gap-y-4'>
        {files.map((file) => (
          <button
            className='text-orange-600 font-bold'
            key={file.id}
            onClick={() => handleClick(file?.name ?? '')}
          >
            {file.name}
          </button>
        ))}
      </div>
      <div className='overflow-x-scroll w-full'>
        <table className='table w-full'>
          {/* head */}
          <thead className='text-xl'>
            <tr>
              {headers.map((header) => (
                <th>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fileData.map((row) => (
              <tr className='hover'>
                {Object.values(row).map((data) => (
                  <td>{data}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
