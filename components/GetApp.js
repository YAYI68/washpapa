import Image from 'next/image';


function GetApp() {
  return (
    <section className='my-[7rem]'>
       <div className={`w-[80%] md:p-[2rem] h-[30rem] bg-[url('/images/gradient.jpg')] bg-cover mx-auto rounded-md relative flex items-center`}>
        <div className='w-full h-[80%] flex items-center flex-col gap-5'>
            <h2 className='text-light-blue text-[4rem] font-bold text-center md:text-[2rem]'>Download the app!</h2>
            <p className='text-[2rem] text-white md:text-[1.2rem]'>It takes less than 5 minutes to sign up!</p>
            <div className='flex gap-2 w-full md:flex-col items-center justify-center'>
            <button type="button" className='h-[5rem] w-[20%] md:w-[45%] relative '>
                <Image src="/images/playstore.png" alt="playstore" layout='fill'  />
            </button>
            <button type="button" className='h-[3.2rem] w-[20%] md:w-[45%] relative'>
                <Image src="/images/ios.png" alt="apple" layout='fill' />
            </button>
            </div>
        </div>
       </div>
    </section>
  )
}

export default GetApp