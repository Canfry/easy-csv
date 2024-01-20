export default function Avatar({userId}: {userId: string}){
  return (
    <>
      <div className="dropdown dropdown-bottom dropdown-end bg-transparent">
        <div tabIndex={0} role="button" className="btn m-1">
          <button className='cursor-pointer max-md:hidden'>
            <div className="avatar placeholder">
              <div className="text-orange-600 text-xl w-full">
                <span>{userId.split(' ')[0][0].toUpperCase()}</span>
              </div>
            </div>
          </button>
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href='/profile' className='text-xl'>Profile</a></li>
        </ul>
      </div>
      
    </>
  )        
}
