import React, { useState } from 'react'
import { RiArrowDownSLine, RiCalendarTodoFill } from 'react-icons/ri';
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DropdownMenu from './DropdownMenu'
import './DropdownMenu.css'
import './Filtre.css'
import usersif from './testData.json';
import AI from './AI';


function Filtre() {

  const options1 = ["type", "Villa", "Appartement", "Terrain", "Terrain agricole", "Bungalow"];
  const options2 = ["wilaya", "Alger", "Tizi", "Setif"];
  const options3 = ["commune", "Bouzareah", "Kouba", "Biar"];

  const [selected1, setSelected1] = useState("type");
  const [selected2, setSelected2] = useState("wilaya");
  const [selected3, setSelected3] = useState("commune");
  const [dateDate, setdateDate] = useState("date");

  const [isDateActive, setIsDateActive] = useState(false);
  const [isSelected4, setIsSelected4] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  const changeDateState = () => {
    setIsDateActive(!isDateActive);
  }

  const changeDateStateOK = () => {
    setIsDateActive(!isDateActive);
    setIsSelected4(true);
    const e1 = startDate.getDate().toString().concat("-".concat(startDate.getMonth() + 1).toString().concat("-".concat(startDate.getFullYear().toString())));
    const e2 = endDate.getDate().toString().concat("-".concat(endDate.getMonth() + 1).toString().concat("-".concat(endDate.getFullYear().toString())));
    const e = ("du ").concat(e1).concat(" au ").concat(e2);
    if (e1 === e2) { setdateDate("le ".concat(e1)); } else { setdateDate(e); }
  }

  const changeDateStateCancel = () => {
    setIsDateActive(!isDateActive);
    setIsSelected4(false);
    setdateDate("date");
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const handleSelectDate = (date) => {
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
  }

  const compareDate = (e) => {
    const thisDate = new Date(e)
    if ((thisDate >= startDate) && (thisDate <= endDate)) { return (true); } else { return (false) }
  }

  const filtrer = () => {
    if (selected1 === "type") {
      if (selected2 === "wilaya") {
        if (selected3 === "commune") {
          if (isSelected4 === false) {
            return (<div className="annonces">{usersif.map(user => <AI categorie={user.categorie} type={user.type} wilaya={user.wilaya} commune={user.commune} prix={user.prix} date={user.date} surface={user.surface} />)}</div>);
          } else {
            return (<div className="annonces">{usersif.filter(userf => (compareDate(userf.date) === true)).map(user => <AI categorie={user.categorie} type={user.type} wilaya={user.wilaya} commune={user.commune} prix={user.prix} date={user.date} surface={user.surface} />)}</div>);
          }
        } else {
          if (isSelected4 === false) {
            return (<div className="annonces">{usersif.filter(userf => (userf.commune === selected3)).map(user => <AI categorie={user.categorie} type={user.type} wilaya={user.wilaya} commune={user.commune} prix={user.prix} date={user.date} surface={user.surface} />)}</div>);
          } else {
            return (<div className="annonces">{usersif.filter(userf => ((userf.commune === selected3) && (compareDate(userf.date) === true))).map(user => <AI categorie={user.categorie} type={user.type} wilaya={user.wilaya} commune={user.commune} prix={user.prix} date={user.date} surface={user.surface} />)}</div>);
          }
        }
      } else {
        if (selected3 === "commune") {
          if (isSelected4 === false) {
            return (<div className="annonces">{usersif.filter(userf => (userf.wilaya === selected2)).map(user => <AI categorie={user.categorie} type={user.type} wilaya={user.wilaya} commune={user.commune} prix={user.prix} date={user.date} surface={user.surface} />)}</div>);
          } else {
            return (<div className="annonces">{usersif.filter(userf => ((userf.wilaya === selected2) && (compareDate(userf.date) === true))).map(user => <AI categorie={user.categorie} type={user.type} wilaya={user.wilaya} commune={user.commune} prix={user.prix} date={user.date} surface={user.surface} />)}</div>);
          }
        } else {
          if (isSelected4 === false) {
            return (<div className="annonces">{usersif.filter(userf => ((userf.wilaya === selected2) && (userf.commune === selected3))).map(user => <AI categorie={user.categorie} type={user.type} wilaya={user.wilaya} commune={user.commune} prix={user.prix} date={user.date} surface={user.surface} />)}</div>);
          } else {
            return (<div className="annonces">{usersif.filter(userf => ((userf.wilaya === selected2) && (userf.commune === selected3) && (compareDate(userf.date) === true))).map(user => <AI categorie={user.categorie} type={user.type} wilaya={user.wilaya} commune={user.commune} prix={user.prix} date={user.date} surface={user.surface} />)}</div>);
          }
        }
      }
    } else {
      if (selected2 === "wilaya") {
        if (selected3 === "commune") {
          if (isSelected4 === false) {
            return (<div className="annonces">{usersif.filter(userf => (userf.type === selected1)).map(user => <AI categorie={user.categorie} type={user.type} wilaya={user.wilaya} commune={user.commune} prix={user.prix} date={user.date} surface={user.surface} />)}</div>);
          } else {
            return (<div className="annonces">{usersif.filter(userf => ((userf.type === selected1) && (compareDate(userf.date) === true))).map(user => <AI categorie={user.categorie} type={user.type} wilaya={user.wilaya} commune={user.commune} prix={user.prix} date={user.date} surface={user.surface} />)}</div>);
          }
        } else {
          if (isSelected4 === false) {
            return (<div className="annonces">{usersif.filter(userf => ((userf.type === selected1) && (userf.commune === selected3))).map(user => <AI categorie={user.categorie} type={user.type} wilaya={user.wilaya} commune={user.commune} prix={user.prix} date={user.date} surface={user.surface} />)}</div>);
          } else {
            return (<div className="annonces">{usersif.filter(userf => ((userf.type === selected1) && (userf.commune === selected3) && (compareDate(userf.date) === true))).map(user => <AI categorie={user.categorie} type={user.type} wilaya={user.wilaya} commune={user.commune} prix={user.prix} date={user.date} surface={user.surface} />)}</div>);
          }
        }
      } else {
        if (selected3 === "commune") {
          if (isSelected4 === false) {
            return (<div className="annonces">{usersif.filter(userf => ((userf.type === selected1) && (userf.wilaya === selected2))).map(user => <AI categorie={user.categorie} type={user.type} wilaya={user.wilaya} commune={user.commune} prix={user.prix} date={user.date} surface={user.surface} />)}</div>);
          } else {
            return (<div className="annonces">{usersif.filter(userf => ((userf.type === selected1) && (userf.wilaya === selected2) && (compareDate(userf.date) === true))).map(user => <AI categorie={user.categorie} type={user.type} wilaya={user.wilaya} commune={user.commune} prix={user.prix} date={user.date} surface={user.surface} />)}</div>);
          }
        } else {
          if (isSelected4 === false) {
            return (<div className="annonces">{usersif.filter(userf => ((userf.type === selected1) && (userf.wilaya === selected2) && (userf.commune === selected3))).map(user => <AI categorie={user.categorie} type={user.type} wilaya={user.wilaya} commune={user.commune} prix={user.prix} date={user.date} surface={user.surface} />)}</div>);
          } else {
            return (<div className="annonces">{usersif.filter(userf => ((userf.type === selected1) && (userf.wilaya === selected2) && (userf.commune === selected3) && (compareDate(userf.date) === true))).map(user => <AI categorie={user.categorie} type={user.type} wilaya={user.wilaya} commune={user.commune} prix={user.prix} date={user.date} surface={user.surface} />)}</div>);
          }
        }
      }
    }
  }


  return (
    
    <div className='home-filtre'>
      
      <div className='filter-label'>Filtrer les résultats</div>

      <div className="themenu">

        <DropdownMenu options={options1} selected={selected1} setSelected={setSelected1} />
        <DropdownMenu options={options2} selected={selected2} setSelected={setSelected2} />
        <DropdownMenu options={options3} selected={selected3} setSelected={setSelected3} />

        <div className="dropdownDate">
          
          <div className="dropdownDate-btn" onClick={changeDateState}>
            <RiCalendarTodoFill/>
            {dateDate}
            <RiArrowDownSLine />
          </div>

          {isDateActive && (
            <div className="dropdownDate-content">
              <DateRangePicker ranges={[selectionRange]} onChange={handleSelectDate} rangeColors={['#FFAC12']} direction="horizontal" />
              <div className="date-btns">
                <button className="annulation-btn" onClick={changeDateStateCancel}>Annuler</button>
                <button className="confirmation-btn" onClick={changeDateStateOK}>OK</button>
              </div>
            </div>
          )}

        </div>

      </div>

      <div>
        {filtrer()}
      </div>

    </div>
  )
}

export default Filtre