import React from "react";
import Header from "../../components/header";
import LeadCard from "../../components/leadCard";
import Footer from "../../components/footer";
import SkillCard from "../../components/skillcard"
import "./index.css";

function Index() {
    return (
        <div>
        <Header/>
        <LeadCard/>
        <SkillCard/>
        <Footer/>
        </div>
    )
}

export default Index;