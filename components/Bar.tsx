import { ISkill } from "@/type"
import { FunctionComponent } from "react"
import { motion } from "framer-motion"

const Bar:FunctionComponent<{data:ISkill}> = ({data:{Icon,level,name}}) => {
// const Bar:FunctionComponent<{value:ISkill}> = ({value:{Icon,level,name},}) => {
  const bar_width = `${level}`;
  const variants = {
    initial:{
      width:0
    },
    animate:{
      width:bar_width,
      transition: {
        delay: 0.5,
        duration: 0.4,
        type:"spring",
        damping:10,
        stiffness: 100,
      }
    }
  }
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-zinc-800"> 
      <motion.div
      className="flex items-center px-4 py-1 rounded-full flex-items-center bg-gradient-to-r from-yellow-400 to-yellow-600"
      // style={{width:level}}>
      style={{width:bar_width}}
      variants={variants}
      initial="initial"
      animate="animate">
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  )
}

export default Bar