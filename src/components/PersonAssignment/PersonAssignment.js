import React from "react";
import "./PersonAssignment.css";
import Profile from "../Profile/Profile";
import { db_users } from "../../data/database";

const PersonAssignment = ({ members }) => {
  const persons = members.map((id) => db_users[id]);
  return (
    <div className={"PersonAssignment"}>
      <ul className={"List"}>
        {persons.map((person) => (
          <li className={"person"} key={person.id}>
            <Profile user={person} />
            <span className={"firstName"}>{person.firstName}</span>
            <span className={"email"}>{person.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonAssignment;
