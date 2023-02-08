import { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom"
import axios from "axios"
import axiosInstance from "../axios";
import ProgressBar from 'react-loader-spinner';
import PropTypes from 'prop-types';

import SearchBar from 'material-ui-search-bar';

const Recherche = (props) => {

	let history = useHistory();
	const [data, setData] = useState({ search: '' });

	const goSearch = (e) => {
		history.push({
			pathname: '/search',
			search: '?search=' + data.search,
		});
		window.location.reload();

    };


    
  return (
    <div className="recherche">
        <SearchBar
						value={data.search}
						onChange={(newValue) => setData({ search: newValue })}
						onRequestSearch={() => goSearch(data.search)}
					/>

        
    </div>
    


  )
}



export default Recherche