import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Header from '../header/header'
import MessageBoxCont from './messageBoxCont'

const MessageBox = () => {
    const [currrentUser, setCurrrentUser] = useState([]);

    useEffect(() => {
        const isDoctor = localStorage.getItem('isDoctor')
        const idDoc = localStorage.getItem('doctor')
        const idPatient = localStorage.getItem('patient')
        if (isDoctor === 'true') {
            Axios.get(`http://localhost:7500/doctors/${idDoc}`)
                .then(res => setCurrrentUser(res.data))
        } else {
            Axios.get(`http://localhost:7500/patients/${idPatient}`)
                .then(res => setCurrrentUser(res.data))
        }
    }, [])

    return (
        <div>
            <Header title="Messages" />
            <MessageBoxCont firstname="Yasmine Monkey" date="2hours ago" message="blablablablablablalba" />
            <MessageBoxCont firstname="Yasmine Monkey" date="2hours ago" message="blablablablablablalba" />
            <MessageBoxCont firstname="Yasmine Monkey" date="2hours ago" message="blablablablablablalba" />
        </div>
    )
}









export default MessageBox