import type { RecordArray, SelectedPick } from '@xata.io/client';
/* import type Data from '../pages/dashboard/index.astro'; */
import type { FilesRecord } from '../xata';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoTrashSharp } from 'react-icons/io5';

type Data = {
  headers: string[];
  data: { [k: string]: string }[];
};

export default function FileList({
  files,
}: {
  files: RecordArray<Readonly<SelectedPick<FilesRecord, ['*']>>>;
}) {
  const [headers, setHeaders] = useState<string[]>([]);
  const [fileData, setFileData] = useState<Data[]>([]);
  const [fileList, setFileList] = useState(files ?? []);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const myModal = useRef<HTMLDialogElement>(null)
  const params = useParams();

  const { fileName } = params as { fileName: string };

  async function getData(fileName: string) {
    setIsLoading(true);
    const response = await fetch(
      `${import.meta.env.BASE_URL}api/content/${fileName}`
      // {
      //   headers: {
      //     'Content-Type': 'application/text',
      //   },
      // }
    );
    const data = await response.json();
    // console.log(data);
    setHeaders(data.headers);
    setFileData(data.data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (!fileName) return;
    getData(fileName);
  }, [fileList]);

  async function deleteFile(id: string) {
    const res = await fetch(`${import.meta.env.BASE_URL}api/delete/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    const newFiles = files.filter((file) => file.id !== data.id);
    setFileList(newFiles as any);
    getData(newFiles[0]?.name ?? '');
  }

  function handleChange() {
    const value = searchRef.current?.value;
    const newFiles = files.filter((file) =>
      file?.name?.includes(value as string)
    );
    setFileList(newFiles as any);
  }

  return (
    <div className='grid grid-cols-[auto,1fr] w-full z-50'>
      <div className='py-16 px-8 bg-gray-50 shadow-md shadow-slate-300 flex flex-col gap-y-4'>
        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <button
          className='text-center rounded-full w-8 h-8 bg-slate-600 flex items-center justify-center mx-auto pb-1 cursor-pointer'
          onClick={() => myModal.current?.showModal()}
        >
          <p className='text-3xl text-white'>+</p>
        </button>
        <dialog id='my_modal_1' className='modal' ref={myModal}>
          <div className='modal-box'>
            <h3 className='font-bold text-lg'>Upload file!!</h3>
            <p className='py-4'>
              Press <span className='font-bold'>ESC</span> key to close
            </p>
			<p>Your file <span className="font-bold">must have</span> the extension ".csv"</p>

            <form
              className='flex items-center gap-x-6 max-md:flex-col max-md:gap-y-6 my-4'
              method='POST'
              action='/api/upload'
              encType='multipart/form-data'
            >
              <input
                type='file'
                name='file'
                id='file'
				accept='.csv'
                required
                className='file-input file-input-bordered border-orange-600 file-input-[orange-600] w-full max-w-xs my-4'
              />
              <button
                type='submit'
                className='border border-slate-600 bg-transparent text-orange-600 py-2.5 px-4 rounded-md hover:bg-orange-600 hover:border-orange-600 hover:text-white'
              >
                Upload
              </button>
            </form>
            <div className='modal-action'>
              <form method='dialog'>
                {/* if there is a button in form, it will close the modal */}
                <div className='flex items-center gap-x-4'>
                  <button className='btn'>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
        <form>
          <input
            type='text'
            ref={searchRef}
            placeholder='Search...'
            autoComplete='off'
            className='py-2 px-3 border border-orange-600 rounded-md w-full max-w-xs'
            onChange={handleChange}
          />
        </form>
        {/* <button className='text-center rounded-full w-8 h-8 bg-orange-600 flex items-center justify-center mx-auto pb-1 cursor-pointer'>
          <p className='text-3xl text-white'>+</p>
        </button>*/}
        {fileList.map((file) => (
          <div
            key={file.id}
            className='flex items-center justify-center gap-x-2'
          >
            <button
              className='text-orange-600 font-bold'
              onClick={() => getData(file?.name ?? '')}
            >
              {file.name}
            </button>
            <button onClick={() => deleteFile(file.id)}>
              <IoTrashSharp className='text-slate-600 cursor-pointer' />
            </button>
          </div>
        ))}
      </div>
      <div className='overflow-x-scroll w-full'>
        {isLoading ? (
          <div className='flex items-center justify-center h-96'>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : (
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
                    <td key={index}>{data as string[]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
