import Main from "../components/Main"
import Image from "next/Image"


function About() {
  return (
    <Main className="mt-[5rem] flex flex-col items-center justify-center">
      <section id="about" className="w-[50%] mt-[3rem] lg:w-[70%] md:w-[90%]">
        <div className="">
         <h3 className="text-[2.5rem] font-semibold ">About AnyWash</h3>
         <p>anywash is a setup headquater in lagos, Nigeria. We aim to achieve the provision of free access to quick, structured and regulated laundry 
          in real time. This helps the average population in getting their clothes bags, shoes etc as clean as they want it. At anywash, we want everyone to find it easy to get cothes washed and cleaned up and its additional services are delivered as quick as possible. Over time,People will 
          would grow and learn to use wash papa to connect well with their customers and provide first class laundry services to great nations population in Nigeria.
         </p>
        </div>
        <div className="mt-[2rem]">
          <h3 className="text-[2.5rem]">Press</h3>
         <p>If you want to know more about our values, principles and ideology, Please contact us as soon as possible.</p>
        </div>
        <div className="mt-[2rem]">
           <h3 className="text-[2.5rem]">Business Enquiries</h3>
           <p>For business enquiries and dealings. Kindly message us on.</p>
           <div className="">
            <button type="" className="mx-[1rem]">
              <Image src={'/images/gmail.png'} alt="gmail" width={50} height={50} />
            </button>
            <button type="" className="mx-[1rem]">
              <Image src={'/images/whatsapp.jpeg'} alt="whatsapp" width={50} height={50} />
            </button>
           </div>
        </div>
      </section>

    </Main>
  )
}

export default About