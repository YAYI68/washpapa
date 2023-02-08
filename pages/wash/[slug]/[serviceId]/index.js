
import Main from "../../../../components/Main"
import WashDetail from "../../../../components/WashDetail"




const BagDetail = () => {
  
    return (
      <Main className=' mt-[5rem]'>
       <WashDetail  />
      </Main>
    )
  }
  


// export async function getStaticPaths(){

//   const data = await getAllService()
//   return {
//       paths:data.map((wash)=>({params:{slug:wash.typeofWash,serviceId:wash.name}})),
//       fallback: false,
//   }
// }  

// export async function getStaticProps(context){
//     const { params } = context;
//     const { serviceId } = params;
//     const data = await getService(serviceId)

//   return {
//     props:{
//       washService:data
//     }
//   }

// }

  export default BagDetail