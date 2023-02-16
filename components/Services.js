
import Image from 'next/image';
import Link from 'next/link';
import { ServiceData } from '../data';






const Services = () => {
  return (
    <section id="service" className='w-full my-[2rem] md:my-[3rem]  animate-top'>
        <h2 className='my-[2rem] text-[2rem] md:text-[1.4rem] font-semibold text-center dark:text-white dark:bg-black '>What do you want us to wash?</h2>
       <div className='w-[80%] md:flex-col md:items-center mx-auto lg:flex-wrap  flex gap-5 p-1'>
        {ServiceData.map((service, i) =>(
             <Link key={i} href={service.url}>
             <div className='bg-white dark:bg-gray-800 border-2 lg:w-[45%] border-light-blue cursor-pointer w-[25%] sm:w-full md:w-[70%] h-[22rem] items-center rounded-md shadow-md p-2 flex flex-col gap-2'>
              <div className='w-[40%] h-[30%] p-1 relative'>
                <Image src={service.image} alt="shirt" layout='fill' />
              </div>
              <div className='w-full  h-[60%] p-2 flex flex-col gap-2'>
                  <h4 className='text-[2rem] md:text-[1.5rem] text-light-blue  font-semibold text-center'>{service.title}</h4>
                  <p className='text-[1.2rem] md:text-[1rem] font-medium dark:text-white'>{service.description}</p>
              </div>
             </div>
            </Link>
        ))}
      
        {/* <Link href={'/wash/blanket'}>
         <div className='bg-white dark:bg-gray-800 border-2 lg:w-[45%] border-light-blue cursor-pointer w-[25%] sm:w-full md:w-[70%] h-[22rem] items-center rounded-md shadow-md p-2 flex flex-col gap-2'>
          <div className='w-[40%] h-[30%] p-1 relative'>
            <Image src={Blanket} alt="blanket" layout='fill' />
          </div>
          <div className='w-full  h-[60%] p-2 flex flex-col gap-2'>
              <h4 className='text-[2rem] text-light-blue  font-semibold text-center'>Blanket</h4>
              <p className='text-[1.2rem] font-medium dark:text-white'>Blankets, sheets, towels, curtain-cloth</p>
          </div>
         </div>
        </Link>
        <Link href={'/wash/bag'}>
         <div className='bg-white dark:bg-gray-800 border-2 lg:w-[45%] border-light-blue cursor-pointer w-[25%] sm:w-full md:w-[70%] h-[22rem] items-center rounded-md shadow-md p-2 flex flex-col gap-2'>
          <div className='w-[40%] h-[30%] p-1 relative'>
            <Image src={Baggage} alt="bag" layout='fill' />
          </div>
          <div className='w-full  h-[60%] p-2 flex flex-col gap-2'>
              <h4 className='text-[2rem] text-light-blue  font-semibold text-center'>Bags</h4>
              <p className='text-[1.2rem] font-medium dark:text-white text-center'>School bags, travelling bags and fabric materials for laundry.</p>
          </div>
         </div>
        </Link>
        <Link href={'/wash/shoe'}>
         <div className='bg-white dark:bg-gray-800 border-2 lg:w-[45%] border-light-blue cursor-pointer w-[25%] sm:w-full md:w-[70%] h-[22rem] items-center rounded-md shadow-md p-2 flex flex-col gap-2'>
          <div className='w-[40%] h-[30%] p-1 relative'>
            <Image src={Shoe} alt="shoe" layout='fill' />
          </div>
          <div className='w-full  h-[60%] p-2 flex flex-col gap-2'>
              <h4 className='text-[2rem] text-light-blue  font-semibold text-center'>Shoes</h4>
              <p className='text-[1.2rem] font-medium dark:text-white'>All kind of cleanable footwear</p>
          </div>
         </div>
        </Link> */}
       </div>
    </section>
  )
}

export default Services