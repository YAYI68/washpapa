
import HeaderContent from './HeaderContent'

function Header() {
  return (
    <header className='h-[100vh] md:h-[70vh] sm:h-[90vh] w-full  relative '>
       <div className='h-[100vh] md:h-[70vh] sm:h-[90vh] w-full dark:bg-black bg-white flex items-center justify-center'>
         <HeaderContent/>
       </div>
       <svg className='absolute left-0 bottom-0 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6200ee" fillOpacity="0.8" d="M0,96L80,133.3C160,171,320,245,480,240C640,235,800,149,960,133.3C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </header>
  )
}

export default Header