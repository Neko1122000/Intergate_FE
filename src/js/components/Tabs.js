import React, {useState} from "react";
import CalendarTab from "./CalendarTab"
import LoginTab from "./LoginTab"

export default function Tabs() {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
    };
    return (
        <div className="Tabs">
            {/* Tab nav */}
            <ul className="nav">
                <li className={activeTab === "tab1" ? "active" : ""}
                    onClick={handleTab1}>
                    Login
                </li>
                <li className={activeTab === "tab2" ? "active" : ""}
                    onClick={handleTab2}>Calendar</li>
            </ul>
            <div className="outlet">
                {activeTab === "tab1" ? <LoginTab /> : <CalendarTab />}
            </div>
        </div>    );
};