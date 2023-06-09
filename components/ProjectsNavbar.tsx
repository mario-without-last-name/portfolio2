import { Category } from "@/type"
import { FunctionComponent } from "react"

export const NavItem:FunctionComponent<{value:Category | 'all'; handlerFilterCategory:Function; active:string}> = ({value, handlerFilterCategory, active}) => {
  
  let className = "capitalize cursor-pointer hover:text-yellow-500"

  if(active === value) className += " text-yellow-500"
  
  return (
    <li className={className} onClick={()=>handlerFilterCategory(value)}>
      {value}
    </li>
  )
}

const ProjectsNavbar: FunctionComponent<{handlerFilterCategory:Function,active:string}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem  value='all' {...props}/>
      <NavItem  value='react' {...props}/>
      <NavItem  value='mongo' {...props}/>
      <NavItem  value='django' {...props}/>
      <NavItem  value='node' {...props}/>
    </div>
  )
}

export default ProjectsNavbar