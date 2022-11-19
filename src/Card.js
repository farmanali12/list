import { React, useEffect, useState } from "react";
import "./Card.css";

function Card() {
  const [data, setData] = useState("");
  const [tags, setTags] = useState("");
  // useEffect(() => {
  //   if(e)
  // },[])
  return (
    <div className="container">
      <div className="new_card">
        <div className="input">
          <input
            className="name-type"
            type="text"
            placeholder="Type a name...."
            onClick={(e) => setData}
          />{" "}
          <br />
          <input
            className="tags-style"
            type="text"
            placeholder="Add tags"
            onclick={(e) => setTags}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
