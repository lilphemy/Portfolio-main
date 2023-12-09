import React, { useState, useReducer } from "react"
import { Link } from "react-router-dom"
import Classes from "./headnav.module.css"
import { sideNavData } from "../../databucket/sidenavScreen"


const initialState = {
    iconVisual: sideNavData,
    nameBoo: false,
    decidedPick: {},
}

function reducer(state, action) {
    if (action.type === "SELECT_DATA") {
        return { ...state, nameBoo: !state.nameBoo, decidedPick: action.picked }
    }

    if (action.type === "REVERSE_EFFECT") {
        return { ...state, nameBoo: !state.nameBoo }
    }

    throw new Error("Type not found!")
}

function HeaderComp() {

    // const [nameBoo, setNameBoo] = useState(false)
    // const [decidedPick, setDecidedPick] = useState({})

    const [manaData, dispatch] = useReducer(reducer, initialState)


    function handleLogic(id) {
        const newValue = sideNavData.find((singleIcon) => id === singleIcon.id)
        dispatch({ type: "SELECT_DATA", picked: newValue })
    }

    function reverse() {
        dispatch({ type: "REVERSE_EFFECT" })
    }

    return (
        <nav className={Classes.sideNav}>
            <div className={Classes.firstNavComp}>
                <Link to="/"><span className={Classes.iconStyles}><i class="fa-solid fa-snowflake"></i></span></Link>
            </div>
            <div className={Classes.secNavComp}>
                <ul className={Classes.listBaby}>
                    {
                        manaData.iconVisual.map((icon) => {
                            return (
                                <li onPointerEnter={() => handleLogic(icon.id)} onPointerLeave={reverse}>
                                    <Link to="">
                                        <span className={Classes.iconStyles}>
                                            {icon.iconName}
                                        </span>
                                    </Link>
                                    <NavName Logic={manaData.nameBoo} pick={manaData.decidedPick} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}


function NavName({ Logic, pick }) {

    return (
        <>
            {Logic && <p className={Classes.nameStyles}>{pick.iconText}</p>}
        </>
    )
}


function SmallScreenNav({ closureLogic }) {

    const [dataBuck, setDataBuck] = useState(sideNavData)

    return (
        <>
            <nav className={Classes.smallSideNav}>
                <div className={Classes.smallFirstNavBlock} onClick={closureLogic}>
                    <Link to="/"><span className={Classes.closeIconStyles}><i class="fa-solid fa-x"></i></span></Link>
                </div>
                <div className={Classes.smallSecNavBlock}>
                    <ul className={Classes.smallListBaby}>
                        {
                            dataBuck.map((icon) => {
                                return (
                                    <li>
                                        <Link to="">
                                            <p>{icon.iconText}</p>
                                            <span className={Classes.smallIconStyles}>
                                                {icon.iconName}
                                            </span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}

export { HeaderComp, SmallScreenNav }