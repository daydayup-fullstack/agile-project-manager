import React, { useRef,useState } from "react";
import SideMenuHeader from "../../SideMenuHeader/SideMenuHeader";
import ProjectCard from "../../ProjectCard/ProjectCard";
import MultipleUserProfile from "../../MultipleUserProfile/MultipleUserProfile";
import { users } from "../../../model/newModel"
import AddButton from "../../AddButton/AddButton"
import Profile from "../../Profile/Profile"
import "./FilterBar.css";
import FilterSort from "../FilterSort/FilterSort";


const FilterBar = ({user}) => {
    const [shouldCollapse, setShouldCollapse] = useState(false);
    const styles = {
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        paddingRight:"1rem"
       
    };
    const onCollapse = () => setShouldCollapse(true);
    const onExpand = () => setShouldCollapse(false);
    const mock_multiple_users = [users.c8dc5864, users.b803c8e6, users["8ddb8913"]]
    return (
        <div className="container">
            <section className={"left"}>
                <SideMenuHeader iconName={"menu_open"} onHandleClick={onCollapse} />
            </section>
            <section style={styles} className={`right ${shouldCollapse ? "collapse" : "expand"}`}>
                <header className={"content-header"}>
                    <div className="title">
                        {shouldCollapse && (
                            <span className={"material-icons icon"} onClick={onExpand}>
                                menu
                            </span>
                        )}
                        <div className="sprintContainer">
                            <div className="sprint"></div>
                            <h3 >Sprint</h3>
                            <span className="material-icons">
                                keyboard_arrow_down
                            </span>
                            <span className="material-icons ">
                                info
                            </span>
                            <span className="material-icons ">
                                star_border
                            </span>
                            <span className='multi_user'>
                                <MultipleUserProfile multipleUsers={mock_multiple_users} projectName={"DayDayUp"} />
                            </span>
                            <span>
                                <span className="material-icons search_bar">
                                    search
                                </span>
                                <input placeholder='Search' />
                            </span>
                            <span className='add_button'>
                                <AddButton />
                            </span>
                            <span class="material-icons question">help_outline</span>
                            <button>
                                Upgrade
                            </button>
                            <span>
                                <Profile user={user}/>
                            </span>
                        </div>
                    
                    </div>

                    
                </header> 
            </section>
        </div>
    );
};

export default FilterBar;
