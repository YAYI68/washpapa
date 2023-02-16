import Image from 'next/image';
import Link from 'next/link';
import { GoTriangleRight } from "react-icons/go";
import Laundry from '/public/images/laundrry.jpg';


const HeaderContent = () => {
  
  return (
    <div className='w-[90%] h-[90%] mt-4  flex z-10 ' >
      <div className='w-[60%] lg:w-full h-full pt-12 flex flex-col items-center justify-center animate-right'>
        <div className='w-[80%] md:w-full h-[90%]  flex flex-col gap-5'>       
        <h1 className={`text-[3rem] md:text-[2rem] sm:text-[1.5rem] font-bold dark:text-white  font-quickbold `}>
          Get laundry services at your doorstep.
        </h1>
        <p className='text-[1.4rem] md:text-[1.1rem] sm:text-[1rem] md:my-[.7rem] font-semibold sm:my-[.5rem] text-light-blue '>
          Wash, dry and iron your clothes and shoes at affordable prices.
        </p>  
        <ul className='text-[1.3rem]  md:text-[1rem] md:my-[.7rem]   font-semibold dark:text-white'>
           <li className='flex items-center gap-4'> <GoTriangleRight className="fill-light-blue" /> <span> We &apos;ll collect your laundry</span> </li> 
           <li className='flex items-center gap-4'> <GoTriangleRight className="fill-light-blue" /> <span> Hygienically clean it,</span></li>
           <li className='flex items-center gap-4'> <GoTriangleRight className="fill-light-blue" /> <span> Deliver it back to you freshly cleaned </span></li>
           <li className='flex items-center gap-4'><GoTriangleRight className="fill-light-blue" /> <span> Ironed and nicely packaged.</span> </li>
        </ul>
           <Link href={`/wash`}>
             <a  className="w-fit cursor-pointer px-4 py-2 text-center bg-light-blue md:mx-auto text-white ml-[3rem] font-quicksand text-[1.3rem] font-semibold rounded-md">Lets wash</a>
           </Link>
        </div>
      </div>
      <div className='w-[40%] h-full z-[3] lg:hidden animate-grow'>
        <div className=' h-full w-full flex flex-col items-center justify-center'>       
        <Image src={Laundry} alt="" height={480} width={480} className="rounded-full shadow-xl border-2  object-cover " />
        </div>
      </div>
    </div>
  )
}

export default HeaderContent