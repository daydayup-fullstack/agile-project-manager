import React, {useState} from "react";
import "./Drawer.css";

const Drawer = ({children}) => {
    const [shouldClose, setShouldClose] = useState(false);


    let openDrawer = () => setShouldClose(false);
    let closeDrawer = () => setShouldClose(true);

    return (
        <div className="Drawer">
            <section className={"left"}>
                <header className={"SideMenuHeader"}>
                    <div>Logo</div>
                    <span className="material-icons"
                          onClick={closeDrawer}>menu_open</span>

                </header>
            </section>

            <section className={`right ${shouldClose ? "close" : "open"}`}>
                <header className={"content-header"}>
                    <div className="title">
                        {shouldClose && (
                            <span className={"material-icons icon"}
                                  onClick={openDrawer}>menu</span>
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

export default Drawer;