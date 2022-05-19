import {MdPointOfSale} from 'react-icons/md';
import {GiReturnArrow} from 'react-icons/gi';
import {FaUsersCog} from 'react-icons/fa';
import {MdOutlineInventory} from 'react-icons/md';

import "./styles.css";

interface Props {
    option: number,
    title: string
}

export default function CardMenuItem({option, title}: Props) {
    const icons = [<MdPointOfSale/>, <GiReturnArrow/>, <FaUsersCog/>, <MdOutlineInventory/>]
    return (
       <div className={"g-col-2 g-col-sm-1"}>
           <div className="card border-success mb-3" >
               <div className="card-header">{icons[option]} </div>
               <div className="card-body text-success">
                   <h5 className="card-title">{title}</h5>
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                       card's content.</p>
               </div>
           </div>
       </div>
    )
}