import React, { useState, useReducer } from "react"
import { Link } from "react-router-dom"
import Classes from "./headnav.module.css"
import { sideNavData } from "../../databucket/sidenavScreen"


const initialState = {
    iconVisual: sideNavData,
    decidedPick: {},
}

function reducer(state, action) {
    if (action.type === "SELECT_FIRST_DATA" && action.picked === 1) {
        return { ...state, firstIcon: !state.nameBoo.firstIcon, }
    }

    if (action.type === "REVERSE_EFFECT") {
        return { ...state, nameBoo: !state.nameBoo.firstIcon }
    }

    throw new Error("Type not found!")
}

function HeaderComp() {

    const [nameBoo, setNameBoo] = useState({
        firstIcon: false,
        secondIcon: false,
        thirdIcon: false,
        fourthIcon: false,
        fifthIcon: false,
    })
    // const [decidedPick, setDecidedPick] = useState({})

    const [manaData, dispatch] = useReducer(reducer, initialState)

    function handleLogic(id) {
        if (id === 1) {
            setNameBoo({ ...nameBoo, firstIcon: !nameBoo.firstIcon })
        }
        if (id === 2) {
            setNameBoo({ ...nameBoo, secondIcon: !nameBoo.secondIcon })
        }
        if (id === 3) {
            setNameBoo({ ...nameBoo, thirdIcon: !nameBoo.thirdIcon })
        }
        if (id === 4) {
            setNameBoo({ ...nameBoo, fourthIcon: !nameBoo.fourthIcon })
        }
        if (id === 5) {
            setNameBoo({ ...nameBoo, fifthIcon: !nameBoo.fifthIcon })
        }
    }

    function reverse(id) {
        if (id === 1) {
            setNameBoo({ ...nameBoo, firstIcon: !nameBoo.firstIcon })
        }
        if (id === 2) {
            setNameBoo({ ...nameBoo, secondIcon: !nameBoo.secondIcon })
        }
        if (id === 3) {
            setNameBoo({ ...nameBoo, thirdIcon: !nameBoo.thirdIcon })
        }
        if (id === 4) {
            setNameBoo({ ...nameBoo, fourthIcon: !nameBoo.fourthIcon })
        }
        if (id === 5) {
            setNameBoo({ ...nameBoo, fifthIcon: !nameBoo.fifthIcon })
        }

    }
    return (
        <nav className={Classes.sideNav}>
            <div className={Classes.firstNavComp}>
                <Link to="/"><span className={Classes.iconStyles}><i className="fa-solid fa-snowflake"></i></span></Link>
            </div>
            <div className={Classes.secNavComp}>
                <ul className={Classes.listBaby}>
                    <li id="1" key={manaData.iconVisual[0].id} onMouseEnter={(e) => handleLogic(manaData.iconVisual[0].id)} onMouseLeave={() => reverse(manaData.iconVisual[0].id)}>
                        <Link to="">
                            <span className={Classes.iconStyles}>
                                {manaData.iconVisual[0].iconName}
                            </span>
                        </Link>
                        {nameBoo.firstIcon && <p className={Classes.nameStyles}>{manaData.iconVisual[0].iconText}</p>}
                    </li>

                    <li key={manaData.iconVisual[1].id} onMouseEnter={(e) => handleLogic(manaData.iconVisual[1].id)} onMouseLeave={() => reverse(manaData.iconVisual[1].id)}>
                        <Link to="">
                            <span className={Classes.iconStyles}>
                                {manaData.iconVisual[1].iconName}
                            </span>
                        </Link>
                        {nameBoo.secondIcon && <p className={Classes.nameStyles}>{manaData.iconVisual[1].iconText}</p>}
                    </li>

                    <li key={manaData.iconVisual[2].id} onMouseEnter={(e) => handleLogic(manaData.iconVisual[2].id)} onMouseLeave={() => reverse(manaData.iconVisual[2].id)}>
                        <Link to="">
                            <span className={Classes.iconStyles}>
                                {manaData.iconVisual[2].iconName}
                            </span>
                        </Link>
                        {nameBoo.thirdIcon && <p className={Classes.nameStyles}>{manaData.iconVisual[2].iconText}</p>}
                    </li>

                    <li id="4" key={manaData.iconVisual[3].id} onMouseEnter={(e) => handleLogic(manaData.iconVisual[3].id)} onMouseLeave={() => reverse(manaData.iconVisual[3].id)}>

                        <span className={Classes.iconStyles}>
                            {manaData.iconVisual[3].iconName}
                        </span>

                        {nameBoo.fourthIcon && <p className={Classes.nameStyles}>{manaData.iconVisual[3].iconText}</p>}
                    </li>

                    <li key={manaData.iconVisual[4].id} onMouseEnter={(e) => handleLogic(manaData.iconVisual[4].id)} onMouseLeave={() => reverse(manaData.iconVisual[4].id)}>
                        <Link to="">
                            <span className={Classes.iconStyles}>
                                {manaData.iconVisual[4].iconName}
                            </span>
                        </Link>
                        {nameBoo.fifthIcon && <p className={Classes.nameStyles}>{manaData.iconVisual[4].iconText}</p>}
                    </li>

                    {/* {
                        manaData.iconVisual.map((icon) => {
                            return (
                                <li key={icon.id} onPointerEnter={(e) => handleLogic(icon.id)} onPointerLeave={reverse}>
                                    <Link to="">
                                        <span className={Classes.iconStyles}>
                                            {icon.iconName}
                                        </span>
                                    </Link>
                                    {manaData.nameBoo && <p className={Classes.nameStyles}>{manaData.decidedPick.iconText}</p>}
                                     <NavName Logic={manaData.nameBoo} pick={manaData.decidedPick} /> }
                                </li>
                            )
                        })
                    } */}
                </ul>
            </div>
        </nav>
    )
}


// function NavName({ Logic, pick }) {
//     return (
//         <>

//         </>
//     )
// }


function SmallScreenNav({ closureLogic }) {

    const [dataBuck, setDataBuck] = useState(sideNavData)

    return (
        <>
            <nav className={Classes.smallSideNav}>
                <div className={Classes.smallFirstNavBlock} onClick={closureLogic}>
                    <Link to="/"><span className={Classes.closeIconStyles}><i className="fa-solid fa-x"></i></span></Link>
                </div>
                <div className={Classes.smallSecNavBlock}>
                    <ul className={Classes.smallListBaby}>
                        {
                            dataBuck.map((icon) => {
                                return (
                                    <li key = {icon.id}>
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