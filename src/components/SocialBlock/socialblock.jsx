import React from "react"


function SocialBlock () {

    return (
        <React.Fragment>
            <div className = {Classes.firstBlock}>
                <div className = {Classes.socialBlock}>
                    <ul>
                        <li><Link to = "#"><span><i class="fa-brands fa-linkedin-in"></i></span></Link></li>
                        <li><Link to = "#"><span><i class="fa-brands fa-twitter"></i></span></Link></li>
                        <li><Link to = "#"><span><i class="fa-brands fa-youtube"></i></span></Link></li>
                        <li><Link to = "#"><span><i class="fa-brands fa-github"></i></span></Link></li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    ) 
}
