
import React from "react";
import Classes from "./contactform.module.css"


function ContactForm() {

    const Style = {
        display: "flex",
        flexDirection: "row",
        border: "2px solid dodgerblue",

    }

    return (

        <React.Fragment>
            <div className={Classes.contactBlock}>
                {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdmF_VgeE2tlrN-d4jw9qKjmResjS6jQQ2xzdRc6CLCPWtsEg/viewform?embedded=false" width="80%" height="4rem" frameborder="0" marginheight="0" marginwidth="0" className= {Classes.formStyles}>Loading…</iframe> */}
                <form className={Classes.mainForm} action="https://formspree.io/f/mqkvgekl" method="POST" >
                    <div className={Classes.formDesc}>
                        <h3>Contact Me</h3>
                    </div>
                    <div className={Classes.inputBlockStyle}>
                        <span htmlFor="email" className={Classes}>email</span>
                        <input placeHolder = "your email" autoComplete="off" type='email' name="email" required/>
                    </div>
                    <div className={Classes.inputBlockStyle}>
                        <span htmlFor="firstname" className={Classes}>First name</span>
                        <input placeHolder = "your first name" type='text' autoComplete="off" name="firstname" required/>
                    </div>
                    <div className={Classes.inputBlockStyle}>
                        <span htmlFor="lastname" className={Classes}>Last name</span>
                        <input placeHolder = "your last name" type='text' autoComplete="off" name="lastname" required/>
                    </div>
                    <div className={Classes.RadioBtn}> 
                        <div className={Classes.inputTitle}>Reason for contact</div>
                        <label htmlFor="contact" className = {Classes.container}>Business
                            <input type="radio" className={Classes.radioInput} name="business" value="Business" />
                            <span className={Classes.inputTitle}></span>
                        </label>
                        <label htmlFor="Personal" className = {Classes.container}>Personal
                            <input type="radio" className={Classes.radioInput} name="personal"/>
                            <span className={Classes.inputTitle}></span>
                        </label>
                    </div>
                    <div className={Classes.messageStyle}>
                        <span htmlFor="message" className={Classes}>Message</span>
                        <textarea placeHolder = "your message" type='text' data-rows="10" name="message" required></textarea>
                    </div>
                    <div className={Classes.btnStyles}>
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default ContactForm;