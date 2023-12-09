
import React from "react"
import Classes from "./aboutme.module.css"
import myImage from "../../imagesproj/lilphemy.PNG"




const AboutComp = function () {

    return (

        <React.Fragment>
            <div className={Classes.aboutStyle}>

                <div className={Classes.aboutHead}>
                    <h3>About me</h3>
                    <div className={Classes.bottomLine}></div>
                </div>
                
                <div className={Classes.aboutImg}>

                    <div className={Classes.imgCase}>
                        <img src = {myImage}></img>
                    </div>

                    {/* <div className={Classes.imgRingOne}>
                        <div className={Classes.imgRingTwo}>
                            <div className={Classes.imgRingThree}>
                                
                            </div>
                        </div>
                    </div> */}

                    <div className={Classes.aboutText}>
                        <p>An enthusiastic front-end developer who creates scintillating technological web products as a thrilling solution problems. I seek to leverage the use of technology to working and building exceptional products that are user-centered and friendly, for a more optimising way to approaching modern problems. I hope to work with you, creating a sophisticated and viable solutions for your endearing utilization. Do reach out to me for project proposals or business chats, using the available contact form or via my social media handles and i would get back within the shortest possible time. </p>
                        <p></p>
                    </div>
                </div>
                
            </div>


        </React.Fragment>
    )
}

export default AboutComp