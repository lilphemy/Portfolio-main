
import React from "react"
import Classes from "./skillscomp.module.css"

//icons for skill set and tools.

import linux from "../../iconfolder/linux.png"
import wordpress from "../../iconfolder/wordpress.png"
import html5 from "../../iconfolder/html-5.png"
import javascript from "../../iconfolder/js.png"
import css from "../../iconfolder/css.png"
import figma from "../../iconfolder/figma.png"
import git from "../../iconfolder/git.png"
import github from "../../iconfolder/code.png"
import node from "../../iconfolder/nodejs.png"
import react from "../../iconfolder/structure.png"
import python from "../../iconfolder/python.png"




function SkillsComp() {

    return (
        <React.Fragment>
            <div className={Classes.skillBox}>
                <div className={Classes.mySkillsHead}>
                    <h3>skill-set and tools</h3>
                    <div className={Classes.bottomLine}></div>
                </div>
                <div className={Classes.skillIcons}>
                    <div>
                        <img className={Classes.firstIconSet} src={wordpress} alt = "wordpress"></img>
                        <p>wordpress</p>
                    </div>
                    <div>
                        <img className={Classes.secIconSet} src={html5} alt = "html5"></img>
                        <p>html5</p>
                    </div>
                    <div>
                        <img className={Classes.firstIconSet} src={css} alt = "css3"></img>
                        <p>css3</p>
                    </div>
                    <div>
                        <img className={Classes.secIconSet} src={javascript} alt = "javascript"></img>
                        <p>javascript</p>
                    </div>
                    <div>
                        <img className={Classes.firstIconSet} src={react} alt = "reactjs"></img>
                        <p>reacjs</p>
                    </div>
                    <div>
                        <img className={Classes.secIconSet} src={git} alt="git"></img>
                        <p>git</p>
                    </div>
                    <div>
                        <img className={Classes.firstIconSet} src={github} alt = "github"></img>
                        <p>github</p>
                    </div>
                    <div>
                        <img className={Classes.secIconSet} src={linux} alt = "linux"></img>
                        <p>linux</p>
                    </div>
                    <div>
                        <img className={Classes.firstIconSet} src={python} alt = "python"></img>
                        <p>python</p>
                    </div>
                    <div>
                        <img className={Classes.secIconSet} src={node} alt = "node"></img>
                        <p>node</p>
                    </div>
                    <div>
                        <img className={Classes.firstIconSet} src={figma} alt = "figma"></img>
                        <p>figma</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default SkillsComp;