import { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AI from './AI';
import Filtre from './Filtre';


import { RiArrowDownSLine, RiCalendarTodoFill } from 'react-icons/ri';
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DropdownMenu from './DropdownMenu'
import '../DropdownMenu.css'
import '../Filtre.css'
import usersif from '../testData.json';


const Resultats = () => {

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

	const search = 'search';
	const [appState, setAppState] = useState({
		search: '',
		annonces: [],
	});

	useEffect(() => {
		axiosInstance.get(search + '/' + window.location.search).then((res) => {
			const allAnnonces = res.data;
			setAppState({ annonces: allAnnonces });
			console.log(res.data);
		});
	}, [setAppState]);

	return (
        <Filtre annonces={appState.annonces}/>
    );
}

export default Resultats