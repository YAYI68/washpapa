import Image from 'next/image';
import Apple from "/public/images/ios.png";
import PlayStore from "/public/images/playstore.png"

const DownloadApp = [
  {
      image:Apple
  },
  {
      image:PlayStore
  }
]


function GetApp() {
  return (
    <section className='my-[7rem]'>
       <div className={`w-[80%] md:p-[2rem] h-[30rem] bg-[url('/images/gradient.jpg')] bg-cover mx-auto rounded-md relative flex items-center`}>
        <div className='w-full h-[80%] flex items-center flex-col gap-5'>
            <h2 className='text-light-blue text-[4rem] font-bold text-center md:text-[2rem] sm:text-[1.8rem]'>Download the app!</h2>
            <p className='text-[2rem] text-white md:text-[1.2rem] sm:text-[1rem]'>It takes less than 5 minutes to sign up!</p>
            <div className='flex gap-2 w-full md:flex-col items-center justify-center'>
              {DownloadApp.map((app,i)=>(
                <button key={i} type="button" className='h-[5rem] w-[20%] md:w-[50%] sm:w-[90%] relative '>
                  <Image src={app.image} alt="playstore" layout='fill'  />
              </button>
              ))}
            </div>
        </div>
       </div>
    </section>
  )
}

export default GetApp