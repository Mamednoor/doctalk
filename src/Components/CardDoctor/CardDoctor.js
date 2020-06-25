import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './CardDoctor.css'
import mailIcon from '../../images/mail-02.svg'
import heartIcon from '../../images/heart-02.svg'
import fillHeartIcon from '../../images/heart-01.svg'

function CardDoctor(props) {
    const [favorite, setFavorite] = useState()
    const [invitation, setInvitation] = useState(false)
    const { doctor } = props

    useEffect(() => {
        const patient_id = 1
        axios.get(`http://localhost:7500/patients/${patient_id}/doctors/${doctor.id}`)
        .then(res => res.data.length !== 0 ? setFavorite(true) : setFavorite(false))
    }, [])

    const createProfilIcon = () => {
        return (
            <div className='profil-icon'>
                <h2>{doctor.doc_firstname.slice(0, 1)}
                    {doctor.doc_lastname.slice(0, 1)}</h2>
            </div>
        )
    }
    const sendInvitation = (e) => {
        const target = e.target
        setInvitation(!invitation)
        if (invitation)
            target.style.opacity = '0.3'
        else
            target.style.opacity = '1'
    }
    const handleSetFavorite = (e, id = 1) => {
        const target = e.target
        setFavorite(!favorite)
        if (!favorite)
            axios.post('http://localhost:7500/patients/doctors', { patient_id: id, doctor_id: parseInt(target.parentNode.id) })
        else
            axios.delete('http://localhost:7500/patients/doctors', { data: { patient_id: id, doctor_id: parseInt(target.parentNode.id) } })
    }

    return (
        <div id={doctor.id} className='CardDoctor'>
            <h3>{doctor.doc_firstname} <span>{doctor.doc_lastname.toUpperCase()}</span></h3>
            <p>{doctor.pro_name}</p>
            <p>({doctor.doc_city})</p>
            {createProfilIcon()}
            <img onClick={(e) => sendInvitation(e)} src={mailIcon} alt='' />
            <img onClick={(e) => handleSetFavorite(e)} src={favorite ? fillHeartIcon : heartIcon} alt='' />
        </div>
    );
}

export default CardDoctor;