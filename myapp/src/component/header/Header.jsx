import './header.css'
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faBed,faPlane,faCar,faTaxi,faCalendarDays,faPerson} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'
import {format} from 'date-fns';
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [destination, setDestination] = useState("");
  const[opendate,setopendate]=useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const navigate = useNavigate();

  const handelSearch=()=>{
    navigate("/hotels",{state:{destination,date,options}});
  }

  const handelOption=(name,operation)=>{
    setOptions(prev=>{return{
      ...prev,[name]:operation==="i"?options[name]+1:options[name]-1,
    };
    });
  };
  return (
    <div className="header">
      <div className={type==="list"?"headercontainer Listmode":"headercontainer"}>
        <div className="headerList">
        <div className="headerListItems active">
        <FontAwesomeIcon icon={faBed}/>
        <span>Stays</span>
        </div>
        <div className="headerListItems">
        <FontAwesomeIcon icon={faPlane}/>
        <span>Flights</span>
        </div>
        <div className="headerListItems">
        <FontAwesomeIcon icon={faCar}/>
        <span>Car Rentals</span>
        </div>
        <div className="headerListItems">
        <FontAwesomeIcon icon={faBed}/>
        <span>Attraction</span>
        </div>
        <div className="headerListItems">
        <FontAwesomeIcon icon={faTaxi}/>
        <span>Airport Taxi</span>
        </div>
        </div>
       { type!=="list" &&
        <>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
        </p>
        <button className="headerBtn">Sign in / Register</button>
      <div className="headerSearch">
        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faBed} className="headerIcon"/>
        <input type="text"  placeholder='Where are you going?'
         className='headerSearchInput' onChange={(e)=>setDestination(e.target.value)}/>
        </div>
        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
        <span onClick={()=>setopendate(!opendate)} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
        {
        opendate && <DateRange
           editableDateInputs={true}
           onChange={item => setdate([item.selection])}
           moveRangeOnFirstSelection={false}
           ranges={date}
          className='date'   
          minDate={new Date()}
        />
         }
        </div>
        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
        <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
        {   openOptions && <div  className="option">
            <div className="optionItem">
           
            <span className='optionText'>Adult</span>
            <div className="optioncount">
            <button disabled={options.adult<=1} className='optionButton' onClick={()=>handelOption("adult","d")}>-</button>
            <span className='optionNumber'>{options.adult}</span>
            <button className='optionButton' onClick={()=>handelOption("adult","i")}>+</button>
            </div>
          </div>
          <div className="optionItem">
          
            <span className='optionText'>Children</span>
            <div className="optioncount">
            <button n disabled={options.children<=0} className='optionButton' onClick={()=>handelOption("children","d")}>-</button>
            <span className='optionNumber'>{options.children}</span>
            <button className='optionButton' onClick={()=>handelOption("children","i")}>+</button>
            </div>
          </div>
          <div className="optionItem">
         
            <span className='optionText'>Room</span>
            <div className="optioncount">
            <button  disabled={options.room<=1} className='optionButton' onClick={()=>handelOption("room","d")}>-</button>
            <span className='optionNumber'>{options.room}</span>
            <button className='optionButton' onClick={()=>handelOption("room","i")}>+</button>
            </div>
          </div>
             
         </div>
         }
        </div>
        <div className="headerSearchItem">
        <button className="headerBtn" onClick={handelSearch}>Search</button>
        </div>
        
      </div>
      </>
         }
        </div>
    </div>
  )
}

export default Header