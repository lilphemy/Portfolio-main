import React, { useState } from "react"
import { projectData } from "../../databucket/projectdata"
import Classes from "./projectcomp.module.css"
import theFile from "../../projectimg/maihomeProj.png"



function ProjectDisplay() {

    const [dataBuck, setDataBuck] = useState(projectData);

    //alert(window.innerHeight)

    return (
        <React.Fragment>
            <div id="4" className={Classes.projBuck}>
                <div className={Classes.projTitle}>
                    <h3>Projects</h3>
                    <div className={Classes.bottomLine}></div>
                </div>
                <div className={Classes.projBlock}>
                    {
                        dataBuck.map((item) => {
                            const { id, name, imgdir, linkResource } = item
                            return (
                                <React.Fragment key={id}>
                                    <div className={Classes.singleItem}>
                                        <div className={Classes.imgCont}>
                                            <img alt={name} className={Classes.imgPitch} src={imgdir}></img>
                                        </div>
                                        <div className={Classes.imgText}>
                                            <p>{name}</p>
                                        </div>
                                        <div className={Classes.btnLink}>
                                            <a className={Classes.anchLink} target="_blank" rel="noreferrer" href={linkResource}>view project</a>
                                        </div>
                                    </div>
                                </React.Fragment >
                            )

                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}



export default ProjectDisplay
