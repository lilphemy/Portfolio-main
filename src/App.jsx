import React from "react"
import ContentStructure from "./pages/Homepage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function PageCombiner () {

    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route path = "/" element = {<ContentStructure/>}/>
                    <Route path = "*" element = {<ContentStructure/>}/>
                </Routes>
            </Router>
            
        </React.Fragment>
    )
}


export default PageCombiner;