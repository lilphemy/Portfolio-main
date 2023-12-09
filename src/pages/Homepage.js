
import React, {useState} from "react"
import {HeaderComp, SmallScreenNav} from "../components/Headnav/headnav"
import IntroBlock from "../components/IntroComp/introcomp"
import AboutComp from "../components/aboutme/abooutme"
import SkillComp from "../components/skillsfolder/skillcomp"
import ProjectDisplay from "../components/projectscomp/projectcomp"
import ContactForm from "../components/contactform/contactform"
import FooterCase from "../components/footerfile/footer"



function ContentStructure() {

    return (
        <React.Fragment>
                <IntroBlock />
                <HeaderComp/>
                <AboutComp/>
                <SkillComp/>
                <ProjectDisplay/>
                <ContactForm/>
                <FooterCase/>
        </React.Fragment>
    )
}

export default ContentStructure