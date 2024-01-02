
import React from "react";
import Classes from "./footer.module.css"

function FooterCase() {

    return (
        <React.Fragment>
            <div className={Classes.footerBlock}>
                <div className={Classes.firstSect}>
                    <div className={Classes.introText}>
                        <p>I am a frontend webdeveloper buiding optimized applications to suite your needs, reach out to me via my social media channels or on <span className = {Classes.phoneCont}>+234 909 072 8598</span> I would be responding as soon as possible after a review of your message. Waiting to hear from you</p>
                    </div>
                    <div className={Classes.social}>
                    <a href = "www.linkedin.com/in/oladapo-obafemi-benson" target="_blank" rel = "noreferrer"><span className = {Classes.socialIcons}><i className="fa-brands fa-linkedin-in"></i></span></a>
                        <a href = "https://github.com/lilphemy" target="_blank" rel = "noreferrer"><span className = {Classes.socialIcons}><i className="fa-brands fa-github"></i></span></a>
                        <a href = "https://twitter.com/lil_phemy" target="_blank" rel = "noreferrer"><span className = {Classes.socialIcons}><i className="fa-brands fa-twitter"></i></span></a>
                        <a href = "" target="_blank" rel = "noreferrer"><span className = {Classes.socialIcons}><i className="fa-solid fa-envelope"></i></span></a>
                    </div>
                </div>
                <div className={Classes.secSect}>
                    <p>Copyright &copy; 2023. Designed by Obafemi Oladapo </p>
                </div>
            </div>

        </React.Fragment>
    )
}

export default FooterCase;