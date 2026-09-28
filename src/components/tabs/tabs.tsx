import "./tabs.scss";
import { useState } from "react";


type TabsProps = {
    tabType: "pill" | "underline";
    tabElements: tabItem[];
};

type tabItem = {
    label: string;
    badge?: {
        text: string;
        variant?: badgeVariant;
    };
    content: React.ReactNode;
};

type badgeVariant =  "negative" | "positive";


export function Tabs({tabType, tabElements}: TabsProps) {
    
    const tabStyles = {
        pill: {
            list: "",
            button: "tabs__item-btnpill",
            selected: "tabs__item-btnpill--selected",
        },
        underline: {
            list: "tabs__list--underline",
            button: "tabs__item-btnunderline",
            selected: "tabs__item-btnunderline--selected",
        },
    };

    const styles = tabStyles[tabType];

    const [selectedTab, setSelectedTab] = useState(0);


    return (
        <div className="tabs">
            <div className={`tabs__list ${styles.list}`} role="tablist">

                {tabElements.map((tabElement, index) => {
                    const isSelected = selectedTab === index;

                    return (
                        <div className="tabs__item" key={index}>
                            <button 
                                id={`tab-${index}`}
                                aria-controls={`panel-${index}`}
                                className={`${styles.button} ${isSelected ? styles.selected : ""}`}
                                onClick={() => setSelectedTab(index)}
                                role="tab"    
                                aria-selected={isSelected}
                            >
                                <span>{tabElement.label}</span>

                                {tabElement.badge && (
                                    <span className={`tabs__item-badge ${tabElement.badge.variant ? `tabs__item-badge--${tabElement.badge.variant}` : ""}`}>
                                        <span className="tabs__item-badgetxt">
                                            {tabElement.badge.text}
                                        </span>
                                    </span>
                                )

                                }
                                
                            </button>
                        </div>
                    );
                })}
            </div>

            <div className="tabs__content" role="tabpanel" id={`panel-${selectedTab}`} aria-labelledby={`tab-${selectedTab}`}>
                {tabElements[selectedTab].content}
            </div>
        </div>
        
    );
}