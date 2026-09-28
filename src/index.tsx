import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";

import {Tabs} from "./components/tabs/tabs"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <Tabs 
            tabType="pill"
            tabElements={[
                {
                    label: "Tab1",
                    content: 
                    <div className="tabs__content-example1">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                },
                {
                    label: "Tab2",
                    badge: {
                        text: "Badge",
                        variant: "negative"
                    },
                    content: 
                    <div className="tabs__content-example2">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                },
                {
                    label: "Tab3",
                    badge: {
                        text: "Info",
                    },
                    content: 
                    <div className="tabs__content-example1">
                        <div></div>
                    </div>
                },
                {
                    label: "Tab4",
                    badge: {
                        text: "Badge",
                        variant: "positive"
                    },
                    content: 
                    <div className="tabs__content-example2">
                        <div></div>
                        <div></div>
                    </div>
                }
            ]}
        />
    </React.StrictMode>
);
