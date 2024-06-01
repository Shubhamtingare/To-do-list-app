import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function List(props) {
  const [line, setLine] = useState(false);
  const cutIt = () => {
    if (line === true) {
      setLine(false);
    } else {
      setLine(true);
    }
  };

  return (
    <div className="cross">
      <span className="cross-icon" onClick={cutIt}>
        <DeleteIcon />
      </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}
