import React from "react";
import Header from "../../components/header";
import ContactCard from "../../components/contactCard";
import Footer from "../../components/footer";
import "./contact.css";

function Contact() {
    return (
        <div>
        <Header/>
        <ContactCard id="contactCard"/>
        <Footer/>
        </div>
    )
}

export default Contact;