import React from "react";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TuitStatus from "../tuit-status/tuit-status";
import { useDispatch } from "react-redux";
// import { deleteTuit } from "../reducers/tuits-reducer";
import {deleteTuitThunk} from "../services/tuits-thunks";

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
    dispatch(deleteTuitThunk(id));
  };
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img
            style={{height: "60px", width: "60px"}}
            className="rounded-circle"
            src={tuit.image && require(`../assets/${tuit.image}`)}
            alt=""
          />
        </div>
        <div className="col-10">
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
