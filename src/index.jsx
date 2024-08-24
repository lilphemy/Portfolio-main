
import React from "react"
import ReactDom from "react-dom/client";
import PageCombiner from "./App";




class DisplayerComp extends React.Component {

    render () {
        return (
            <React.StrictMode>
                <main >
                    <PageCombiner/>
                </main>
            </React.StrictMode>
        )
    }
}


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<DisplayerComp/>)
