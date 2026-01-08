import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import { useState } from "react";

const TabForm = () => {

    const [data,setData]=useState({
        name:"Mahvish",
        age:"29",
        email:"mahvish@gmail.com",
        interests:["coding","javascript"],
        theme:"dark",
    });
    const [activeTab,setActiveTab]=useState(0)

    const tabs = [
        {
            name: "Profile",
            component: Profile,
        },
        {
            name: "Interests",
            component: Interests,
        },
        {
            name: "Settings",
            component: Settings,
        },
    ];
   
    const ActiveTabComponent=tabs[activeTab].component;
   
    return (
        <div>
            <div className="heading-container">
                {tabs.map((t,idx) => {
                   return <div key={idx} className="heading" onClick={()=> setActiveTab(idx)} >{t.name}</div>
                })}
            </div>
            <div className="tab-body">
                <ActiveTabComponent data={data} setData={setData}/>
            </div>
        </div>
    );
};

export default TabForm;