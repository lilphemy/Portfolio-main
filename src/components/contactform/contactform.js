
import React from "react";
import Classes from "./contactform.module.css"


function ContactForm() {

    return (

        <React.Fragment>
            <div className={Classes.contactBlock}>

                {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdmF_VgeE2tlrN-d4jw9qKjmResjS6jQQ2xzdRc6CLCPWtsEg/viewform?embedded=false" width="80%" height="4rem" frameborder="0" marginheight="0" marginwidth="0" className= {Classes.formStyles}>Loading…</iframe> */}
                
                <form className={Classes.mainForm} action="https://formspree.io/f/mqkvgekl" method="POST" >
                    <div className={Classes.formDesc}>
                        <h3>Contact Me</h3>
                    </div>
                    <div className={Classes.inputBlockStyle}>
                        <span htmlFor="email" className={Classes.inputTitle}>email</span>
                        <input autoComplete="off" type='email' name="email" required></input>
                    </div>
                    <div className={Classes.inputBlockStyle}>
                        <span htmlFor="firstname" className={Classes.inputTitle}>First name</span>
                        <input type='text' autoComplete="off" name="firstname" required></input>
                    </div>
                    <div className={Classes.inputBlockStyle}>
                        <span htmlFor="lastname" className={Classes.inputTitle}>Last name</span>
                        <input type='text' autoComplete="off" name="lastname" required></input>
                    </div>
                    <div className={Classes.RadioBtn}>
                        <span className={Classes.inputTitle}>Reason for contact</span>
                        <label htmlFor="contact">
                            <input type="radio" id={Classes.radioInput} name="business" value="Business"></input>
                            <span>Business</span>
                        </label>
                        <label htmlFor="Personal" >
                            <input type="radio" id={Classes.radioInput} name="personal"></input>
                            <span className={Classes.inputTitle}>Personal</span>
                        </label>
                    </div>
                    <div className={Classes.inputBlockStyle}>
                        <span htmlFor="message" className={Classes.inputTitle}>Message</span>
                        <textarea type='text' data-rows="10" name="message" required></textarea>
                    </div>
                    <div className={Classes.inputBlockStyle}>
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default ContactForm;