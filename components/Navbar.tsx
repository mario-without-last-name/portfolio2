import { FunctionComponent, useEffect, useState } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"

const NavItem:FunctionComponent<{
  activeItem:string,
  setActiveItem:Function,
  name:string,
  route:string
}> = ({activeItem,setActiveItem,name,route}) => {
  return (
    activeItem !== name ? (
      <Link href={route}>
        <span onClick={()=>setActiveItem(name)} className="hover:text-yellow-500">
          {name}
        </span>
      </Link>
    ) : null
  )
}

// In NextJs version 13+, you cannot do <Link><a>something</a></Link>
// It now must be either only... <Link>something</Link>
// Or... <Link legacyBehavior><a>something</a></Link>

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('')
  const {pathname} = useRouter();

  useEffect(()=>{
    if(pathname ==="/")setActiveItem('About')
    if(pathname ==="/projects")setActiveItem('Projects')
    if(pathname ==="/resume")setActiveItem('Resume')
  }, [])

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-yellow-500 border-b-4 border-yellow-500 md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg">
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route="/"/>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route="/projects"/>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route="/resume"/>
        {/* {activeItem !== 'About' && (
          <Link href="/">
            <span onClick={()=>setActiveItem('About')}>About</span>
          </Link>
        )}
        {activeItem !== 'Projects' && (
          <Link href="/">
            <span onClick={()=>setActiveItem('Projects')}>Projects</span>
          </Link>
        )}
        {activeItem !== 'Resume' && (
          <Link href="/">
            <span onClick={()=>setActiveItem('Resume')}>Resume</span>
          </Link>
        )} */}
      </div>
    </div>
  )
}

export default Navbar