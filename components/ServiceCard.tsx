import { IService } from '@/type'
import { FunctionComponent } from 'react'

const ServiceCard:FunctionComponent<{service:IService}> = ({service:{Icon,about,title}}) => {
  
  // So that all <> tags in a string will be interpreted as actual html tags, especially the <b></b> being used
  const createMarkup = () => {
    return {
      __html: about,
    }
  }
  
  return (
    <div className='flex items-center p-2 space-x-4'>
      <Icon className='w-40 h-20 text-yellow-500' />
      <div>
        <h4 className='font-bold'>{title}</h4>
        {/* <p>{about}</p> */}
        <p dangerouslySetInnerHTML={createMarkup()}/>
      </div>
    </div>
  )
}

export default ServiceCard