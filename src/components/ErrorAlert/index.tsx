import {MdError} from 'react-icons/md'

interface Props{
    title:string,
    description:string,
}
export default function AlertMessageError({title,description}:Props){
   return (
       <div className={"alert alert-danger"}>
         <h4 className={"alert-heading"}><MdError />{title}</h4>
           <hr/>
           <blockquote>{description}</blockquote>
       </div>
   )
}