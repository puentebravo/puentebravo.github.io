import React from "react";
import Header from "../../components/header";
import ContactCard from "../../components/contactCard";
import Spacer from "../../components/spacer";
import Footer from "../../components/footer";
import "./contact.css";

function Contact() {
    return (
        <div>
        <Header/>,
        <ContactCard/>,
        <Spacer/>
        <Footer/>
        </div>
    )
}

export default Contact;