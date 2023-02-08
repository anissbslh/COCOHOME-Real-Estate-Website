import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AI from './AI';

const Resultats = () => {

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
        <Fragment>

            <div className="annonces-container">
                {appState.annonces.map((annonce) => {
                    return (
                    <Link to={'annonces/'+annonce.annonceId}>
                        <AI key={annonce.annonceId} categorie={annonce.categorie} type={annonce.typeDuBien} wilaya={annonce.wilaya} commune={annonce.commune} prix={annonce.prix} date={annonce.dateDePublication}/>
                    </Link>
                    )
                })}
            </div>

        </Fragment>
    );
}

export default Resultats