import {useNavigate} from "react-router-dom";
import {MdPointOfSale} from 'react-icons/md';
import {GiReturnArrow} from 'react-icons/gi';
import {FaUsersCog} from 'react-icons/fa';
import {MdOutlineInventory} from 'react-icons/md';

import "./styles.css";

interface Props {
    option: number,
    title: string,
    description: string,
    link: string
}


export default function CardMenuItem({option, title,description,link}: Props) {
    const navigate = useNavigate();
    const icons = [<MdPointOfSale/>, <GiReturnArrow/>, <FaUsersCog/>, <FaUsersCog/>, <MdOutlineInventory/>]
    const handleClick = () => {
        navigate(link)
        console.log(option,link);
    }
    return (
       <div className={"g-col-2 g-col-sm-1"}>
           <div className="card border-success mb-3" >
               <div className="card-header">{icons[option]} </div>
               <div className="card-body text-success">
                   <h5 className="card-title">{title}</h5>
                   <p className="card-text">{description}</p>
                   <button className={"btn btn-success"} onClick={handleClick}>Start</button>
               </div>
           </div>
       </div>
    )
}