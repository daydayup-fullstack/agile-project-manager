import React, {useState} from "react";
import "./App.css";

const App = ({children}) => {
    const [shouldCollapse, setShouldCollapse] = useState(false);

    const onCollapse = () => setShouldCollapse(true);
    const onExpand = () => setShouldCollapse(false);

    return (
        <div className="App">
            <section className={"left"}>
                <header className={"SideMenuHeader"}>
                    <div>Logo</div>
                    <span className="material-icons" onClick={onCollapse}>
                menu_open
            </span>
                </header>
            </section>
            <section className={`right ${shouldCollapse ? "collapse" : "expand"}`}>
                <header className={"content-header"}>
                    <div className="title">
                        {shouldCollapse && (
                            <span className={"material-icons icon"} onClick={onExpand}>
                menu
              </span>
                        )}
                        <h2>Home</h2>
                    </div>

                    <div className={"more-content"}>-- Right section for more content to insert --</div>
                </header>
                <div className="content">
                    {children}
                </div>
            </section>
        </div>
    );
}

export default App;