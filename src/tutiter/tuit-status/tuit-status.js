import React from "react";
import { faHeart, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faReply } from "@fortawesome/free-solid-svg-icons";
import { updateTuit } from "../reducers/tuits-reducer";
import { useDispatch } from "react-redux";

const TuitStatus = ({
  tuit = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title: `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
    image: "tesla.avif",
    liked: true,
    likes: 123,
  },
}) => {
  const dispatch = useDispatch();
  const updateLikes = (id) => {
    const newTuit = { ...tuit };
    if (tuit.liked) {
      newTuit.liked = false;
      newTuit.likes = newTuit.likes - 1;
    } else {
      newTuit.liked = true;
      newTuit.likes = newTuit.likes + 1;
    }
    dispatch(updateTuit(newTuit));
  };

  return (
    <div className="row mt-4">
      <span className="d-flex justify-content-around">
        <span>
          {" "}
          <FontAwesomeIcon icon={faComment} /> {tuit.retuits}{" "}
        </span>
        <span>
          {" "}
          <FontAwesomeIcon icon={faReply} /> {tuit.replies}{" "}
        </span>
        <span>
          {" "}
          <FontAwesomeIcon
            style={{ color: tuit.liked ? "red" : "gray" }}
            icon={faHeart}
            onClick={() => updateLikes(tuit._id)}
          />{" "}
          {tuit.likes}{" "}
        </span>
        <span>
          {" "}
          <FontAwesomeIcon icon={faUpload} />{" "}
        </span>
      </span>
    </div>
  );
};
export default TuitStatus;
