import React from "react";
import { faHeart, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faReply,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
// import { updateTuit } from "../reducers/tuits-reducer";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../services/tuits-thunks";

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

  const updateLikes = () => {
    const newTuit = { ...tuit };
    if (tuit.liked) {
      newTuit.liked = false;
      newTuit.likes = newTuit.likes - 1;
    } else {
      newTuit.liked = true;
      newTuit.likes = newTuit.likes + 1;
    }
    dispatch(updateTuitThunk(newTuit));
  };

  const updateDislikes = () => {
    const newTuit = { ...tuit };
    if (tuit.disliked) {
      newTuit.disliked = false;
      newTuit.dislikes = newTuit.dislikes - 1;
    } else {
      newTuit.disliked = true;
      newTuit.dislikes = newTuit.dislikes + 1;
    }
    dispatch(updateTuitThunk(newTuit));
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
            onClick={() => updateLikes()
              // dispatch(
              //   updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true })
              // )
            }
          />{" "}
          {tuit.likes}{" "}
        </span>
        <span>
          <FontAwesomeIcon
            icon={faThumbsDown}
            onClick={() => updateDislikes()
              // dispatch(
              //   updateTuitThunk({ ...tuit, dislikes: (tuit.dislikes || 0) + 1 })
              // )
            }
          />
          {tuit.dislikes}{" "}
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
