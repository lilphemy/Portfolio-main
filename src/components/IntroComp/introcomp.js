
import React, {useState} from "react"
import { Link } from "react-router-dom"
import { SmallScreenNav } from "../Headnav/headnav"
import Classes from "./introcomp.module.css"


function IntroBlock() {
    
    const [booDecision, setBooDecision] =  useState(false)

    const menuBarView = () => {
        setBooDecision((prev) => !prev)
    }

    return (
        <React.Fragment>
            { booDecision && <SmallScreenNav closureLogic = {menuBarView}/>}
            <div className={Classes.firstIntroBlock}>
                <div className={Classes.menuBtn} onClick={menuBarView}>
                    <span className={Classes.menuBars}><i className="fa-solid fa-bars"></i></span>
                </div>
                <div className={Classes.textSection}>

                    <div className={Classes.headText}>
                        <p>Hello, i am</p>
                        <h2>OLADAPO OBAFEMI BENSON</h2>
                        <p className={Classes.textZone}>
                            <span>a front-end developer</span>
                        </p>
                    </div>


                    <div className={Classes.socials}>
                        <div className={Classes.menuBtn}>
                            <span className={Classes.menuBars}></span>
                        </div>
                        <a href="www.linkedin.com/in/oladapo-obafemi-benson" target="_blank" rel="noreferrer"><span className={Classes.socialIcons}><i className="fa-brands fa-linkedin-in"></i></span></a>
                        <a href="https://github.com/lilphemy" target="_blank" rel="noreferrer"><span className={Classes.socialIcons}><i className="fa-brands fa-github"></i></span></a>
                        <a href="https://twitter.com/lil_phemy" target="_blank" rel="noreferrer"><span className={Classes.socialIcons}><i className="fa-brands fa-twitter"></i></span></a>
                        <a href="" target="_blank" rel="noreferrer"><span className={Classes.socialIcons}><i className="fa-solid fa-envelope"></i></span></a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default IntroBlock
