import React from "react";
import { faHeart, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faReply } from "@fortawesome/free-solid-svg-icons";

const TuitStatus = ({
  tuit = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title: `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
    image: "tesla.avif",
  },
}) => {
  return (
    <div className="row mt-4">
      <span className="d-flex justify-content-around">
      <span> <FontAwesomeIcon icon={faComment} /> {tuit.retuits}{" "} </span>
      <span> <FontAwesomeIcon icon={faReply} /> {tuit.replies}{" "} </span>
      <span> <FontAwesomeIcon style={{color: tuit.liked ? "red" : "gray"}}icon={faHeart} /> {tuit.likes}{" "}</span>
      <span> <FontAwesomeIcon icon={faUpload} /> </span>
      </span>
    </div>
  );
};
export default TuitStatus;
