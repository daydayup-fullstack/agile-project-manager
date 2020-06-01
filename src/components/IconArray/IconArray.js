import React from "react";
import "./IconArray.css";

export const iconNames = [
  "radio_button_checked",
  "whatshot",
  "poll",
  "emoji_objects",
  "fireplace",
  "storefront",
  "spa",
  "event_note",
  "money",
  "terrain",
  "tag_faces",
  "flash_on",
  "security",
  "folder",
  "format_quote",
  "weekend",
  "send",
  "archive",
  "next_week",
  "chat",
  "track_changes",
  "pets",
  "store",
  "extension",
  "done_outline",
  "fitness_center",
  "beenhere",
  "assessment",
];

const IconArray = () => {
  return (
    <div className="IconArray">
      <div className="content">
        {iconNames.map((iconName, index) => {
          return (
            <div className={"item"} key={index}>
              <span className={"material-icons-two-tone"}>{iconName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconArray;
