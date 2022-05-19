interface Props{
    price: number;
}

export default function DisplayTotal({price}: Props) {
   return(
       <div className={"container text-center"}>
           {
               price === 0 ? <h1>No items in cart</h1> : <h1>Total: {price}</h1>
           }
       </div>
   )
}
