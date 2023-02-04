import React, {useState} from 'react'
import './DropdownMenu.css'
import { RiArrowDownSLine } from 'react-icons/ri'
import { TbMapSearch } from 'react-icons/tb'
import { FaMapSigns, FaMapMarkerAlt } from 'react-icons/fa'
import { MdMapsHomeWork } from 'react-icons/md'



function DropdownMenu({ options, selected, setSelected }) {

    const[isActive, setIsActive] = useState(false);

    const changeState = () => {
        setIsActive(!isActive);
    }

    

    const theIcon = () => {
        if ( options[0] === "type" ) { return( <MdMapsHomeWork/> ); }
        if ( options [0] === "wilaya" ) { return( <TbMapSearch/> ); }
        if ( options[0] === "commune" ) { return( <FaMapSigns/> ); }
    }
    

    return (
        <div className="dropdown">
    
            <div className="dropdown-btn" onClick={changeState}>
                {theIcon()}
                {selected}
                <RiArrowDownSLine/>
            </div>
        
            {isActive && (
                <div className="dropdown-content">
                    {options.map(option => (
                        <div onClick={() => {setSelected(option); setIsActive(false)}} className="dropdown-item">
                            {option}
                        </div>            
                    ))}
                </div>
            )}
        </div>
    )
}

export default DropdownMenu;