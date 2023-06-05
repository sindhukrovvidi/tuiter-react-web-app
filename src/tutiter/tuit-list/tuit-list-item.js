import React from "react";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TuitStatus from "../tuit-status/tuit-status";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";

const TuitListItem = ({
  tuit = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title: `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
    image: "tesla.avif",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-3">
          <img
            width={"100%"}
            className="rounded-3"
            src={require(`../assets/${tuit.image}`)}
            alt=""
          />
        </div>
        <div className="col-9">
          <div>
            <FontAwesomeIcon
              className="float-end"
              icon={faXmark}
              onClick={() => deleteTuitHandler(tuit._id)}
            />
            <span className="fw-bolder">{tuit.topic}</span>{" "}
            <FontAwesomeIcon icon={faCircleCheck} /> {tuit.handle} . {tuit.time}
          </div>
          
          <div>{tuit.tuit}</div>
          <TuitStatus key={tuit._id} tuit={tuit} />
        </div>
      </div>
    </li>
  );
};
export default TuitListItem;
