import Main from "../../../components/Main"
import WashDetail from "../../../components/WashDetail"




const BagDetail = () => {
    return (
      <Main className=' mt-[5rem]'>
       <WashDetail />
      </Main>
    )
  }
  


export async function getStaticPaths(){


  return{
    paths:[{params:{id:"1"}}],
    fallback:false,
  }
}  

export async function getStaticProps(context){

    

  return {
    props:{
      washService:data
    }
  }

}

  export default BagDetail