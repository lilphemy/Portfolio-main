
import React from "react"
import ReactDom from "react-dom/client";
import PageCombiner from "./App";
import Classes from "./index.module.css"




class DisplayerComp extends React.Component {


    render () {
        return (
            <React.StrictMode>
                <main className = {Classes.bodyBlock}>
                    <PageCombiner/>
                </main>
            </React.StrictMode>
        )
    }
}


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<DisplayerComp/>)
