
interface Props{
    title:string,
    link:string,
    image:string,
}

export default function MenuItem({title,link,image}:Props){
    const handleClick = ()=>{
       console.log(title)
    }
   return(
       <div className="container">
           <div className="card" onClick={handleClick}>
               <div className="card-body">
                   <h5 className="card-title">{title}</h5>
                   <img src={image} alt={title} width="150px"/>
               </div>
           </div>
       </div>
   )
}