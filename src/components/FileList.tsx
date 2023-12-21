import type { RecordArray, SelectedPick } from '@xata.io/client';
import type Data from '../pages/dashboard/index.astro';
import type FileData from '../pages/dashboard/index.astro';
import type { FilesRecord } from '../xata';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function FileList({
  files,
}: {
  files: RecordArray<Readonly<SelectedPick<FilesRecord, ['*']>>>;
}) {
  const [headers, setHeaders] = useState<string[]>([]);
  const [fileData, setFileData] = useState<(typeof Data)[]>([]);
  const params = useParams();

  const { fileName } = params as { fileName: string };

  async function getData(fileName: string) {
    const response = await fetch(
      `http://localhost:4321/api/content/${fileName}`,
      {
        headers: {
          'Content-Type': 'application/text',
        },
      }
    );
    const data = await response.json();
    setHeaders(data.headers);
    setFileData(data.data);
  }

  useEffect(() => {
    if (!fileName) return;
    getData(fileName);
  }, [fileName]);

  return (
    <div className='grid grid-cols-[auto,1fr] w-full z-50'>
      <div className='py-16 px-8 bg-gray-50 flex flex-col gap-y-4'>
        {files.map((file) => (
          <button
            className='text-orange-600 font-bold'
            key={file.id}
            onClick={() => getData(file?.name ?? '')}
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
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fileData.map((row, index) => (
              <tr key={index} className='hover'>
                {Object.values(row).map((data, index) => (
                  <td key={index}>{data}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
