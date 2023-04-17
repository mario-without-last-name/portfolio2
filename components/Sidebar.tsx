import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import Image from 'next/legacy/image'
import { useTheme } from 'next-themes'

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme==="light"?"dark":"light")
  }
  return (
    <div>
      {/* <img src="my_face.jpg" alt="My Face" className='self-center w-32 h-32 mx-auto rounded-full'/> */}
      <Image width="128" height="128" layout="intrinsic" quality="100" src="/images/my_face.jpg" alt="My Face" className='mx-auto border rounded-full'/>
      {/* If the image was using an external image file on the web (https), then you must add something in "next.config.js" */}
      <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
        <span className='text-yellow-500 dark:text-white'>~</span><span className='text-black dark:text-yellow-500'> Mario </span><span className='text-yellow-500 dark:text-white'>~</span>
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-zinc-800'>
        Full-Stack Web Developer
      </p>
      <a className='flex justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-zinc-800 item-center' href="/CV2.pdf" download="CV2.pdf">
        <GiTie className="w-6 h-6"/>Download Resume
      </a>
      {/* Social Icon */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-yellow-500 md:w-full'>
        <a href="">
          <AiFillYoutube className='w-8 h-8 cursor-pointer' aria-label="Youtube"/>
        </a>
        <a href="">
          <AiFillGithub className='w-8 h-8 cursor-pointer' aria-label="Github"/>
        </a>
        <a href="">
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' aria-label="LinkedIn"/>
        </a>
      </div>
      {/* Address */}
      <div className='py-4 my-5 bg-gray-200 dark:bg-zinc-800' style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
        <div className='flex items-center justify-center space-x-2 dark:text-white'>
          <GoLocation />
          <span>Jakarta, Indonesia</span>
        </div>
        <p className='my-2'>mario.without.last.name@gmail.com</p>
        <p className='my-2'>0857-7280-3076</p>
      </div>
      {/* Email Button */}
      <button className='w-10/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-yellow-400 to-yellow-800 focus:outline-none'
      onClick={()=>window.open('mailto:mario.without.last.name@gmail.com')}>
        Email Me
      </button>
      <button onClick={changeTheme} className='w-10/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-yellow-400 to-yellow-800'>
        Toggle Theme
      </button>
    </div>
  )
}

export default Sidebar