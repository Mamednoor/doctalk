import React from 'react'

import Header from '../header/header'
import MessageBoxCont from './messageBoxCont'

const MessageBox = () => {
    return(
        <div>
        <Header title="Messages"/>
        <MessageBoxCont firstname="Yasmine Monkey" date="2hours ago" message="blablablablablablalba"/>
        <MessageBoxCont firstname="Yasmine Monkey" date="2hours ago" message="blablablablablablalba"/>
        <MessageBoxCont firstname="Yasmine Monkey" date="2hours ago" message="blablablablablablalba"/>
        </div>
    )
}









export default MessageBox