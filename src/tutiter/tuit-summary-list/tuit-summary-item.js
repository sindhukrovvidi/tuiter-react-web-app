import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const TuitSummaryItem = ({
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
    <li className="list-group-item">
      <div className="row">
        <div className="col-10">
          <div>
          <span className="fw-bolder">{tuit.topic}</span>{" "}
            <FontAwesomeIcon icon={faCircleCheck} /> {tuit.handle} . {tuit.time}
          </div>
          <div className="fw-bolder">{tuit.topic}</div>
          <div>{tuit.tuit}</div>
        </div>
        <div className="col-2">
          <img
            width={70}
            className="float-end rounded-3"
            src={require(`../assets/${tuit.image}`)}
            alt=""
          />
        </div>
      </div>
    </li>
  );
};
export default TuitSummaryItem;
