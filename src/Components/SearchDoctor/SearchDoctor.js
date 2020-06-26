import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './SearchDoctor.css'
import CardDoctor from '../CardDoctor/CardDoctor';
import Header from '../header/header'

function SearchDoctor(props) {
    const [professions, setProfessions] = useState([])
    const [doctors, setDoctors] = useState([])
    const [search, setSearch] = useState('')
    const [city, setCity] = useState('')
    const [professionType, setProfessionType] = useState('')
    useEffect(() => {
        axios.get('http://localhost:7500/professions')
            .then(res => setProfessions(res.data))
        axios.get('http://localhost:7500/doctors')
            .then(res => setDoctors(res.data))
    }, [])

    return (
        <div>
        <Header title="Search"/>
        <div className='SearchDoctor'>
            <input placeholder='doctor name' onChange={(e) => setSearch(e.target.value)} value={search} />
            <input placeholder='city' onChange={(e) => setCity(e.target.value)} value={city} />
            <select id='profession-select' onChange={(e) => setProfessionType(e.target.value)}>
                <option value="">--Please select a profession-</option>
                {professions.map((profession, key) => {
                    return (
                        <option key={key} value={profession.name}>{profession.name}</option>
                    )
                })}

            </select>
            <div className='card-doctor-container'>
                {doctors
                    .filter(doctor => doctor.doc_firstname.toLowerCase().startsWith(search.toLowerCase()) || doctor.doc_lastname.toLowerCase().startsWith(search.toLowerCase()))
                    .filter(doctor => doctor.doc_city.startsWith(city))
                    .filter(doctor => doctor.pro_name.includes(professionType))
                    .map((doctor, key) => {
                        if(search !== '' || city !== '' || professionType !== ''){
                            return <CardDoctor key={key} doctor={doctor} />
                        }else{
                            return <></>
                        }
                    })}
            </div>
        </div>
        </div>
    );
}

export default SearchDoctor;