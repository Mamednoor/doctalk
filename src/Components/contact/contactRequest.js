import React from 'react'
import Header from '../header/header'
import ContactRequestContainer from './contactrequestcontainer'
const ContactRequest = () => {
    return (
        <div>
           <Header title="Contact Request"/>
           <div>
               <ContactRequestContainer  firstname="Yas" lastname="Monkey" object="Fatigue Fatigue FatigueFatigue" message="Je suis toujours fatiguée parce que je dors pas"/>
               
           </div>

        </div> 
    )
}


export default ContactRequest; 