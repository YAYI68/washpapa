import Main from "../components/Main"


function About() {
  return (
    <Main className="mt-[5rem] flex flex-col items-center justify-center">
      <section id="about" className="w-[50%] mt-[3rem]">
        <div className="">
         <h3 className="text-[2.5rem] font-semibold ">About AnyWash</h3>
         <p>Wash Papa is a setup headquater in lagos, Nigeria. We aim to achieve the provision of free access to quick, structured and regulated laundry 
          in real time. This helps the average population in getting their clothes bags, shoes etc as clean as they want it. At Wash Papa, we want everyone to find it easy to get cothes washed and cleaned up and it's additional services are delivered as quick as possible. Over time,People will 
          would grow and learn to use wash papa to connect well with their customers and provide first class laundry services to great nation's population in Nigeria.
         </p>
        </div>
        <div className="mt-[2rem]">
          <h3 className="text-[2.5rem]">Press</h3>
         <p>If you want to know more about our values, principles and ideology, Please contact us as soon as possible.</p>
        </div>
        <div className="mt-[2rem]">
           <h3 className="text-[2.5rem]">Business Enquiries</h3>
           <p>For business enquiries and dealings. Kindly message us on.</p>
        </div>

      </section>

    </Main>
  )
}

export default About