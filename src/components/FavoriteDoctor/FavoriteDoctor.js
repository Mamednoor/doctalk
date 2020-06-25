import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardDoctor from '../SearchDoctor/CardDoctor';

function FavoriteDoctor(props) {
    const [favoriteDoc, setFavoriteDoc] = useState([])
    useEffect(() => {
        const patient_id = 1
        axios.get(`http://localhost:7500/patients/${patient_id}/doctors`)
            .then(res => setFavoriteDoc(res.data))
    })
    axios.get()
    return (
        <div className='FavoriteDoctor'>
            {favoriteDoc.map(doctor => {
                return <CardDoctor doctor={doctor} />
            })
            }

        </div>
    );
}

export default FavoriteDoctor;