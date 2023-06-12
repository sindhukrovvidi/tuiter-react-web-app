import React, { useState } from "react";
// import { createTuit } from "./reducers/tuits-reducer";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AiOutlineBarChart,
  AiOutlineFileGif,
  AiOutlinePicture,
} from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { createTuitThunk } from "./services/tuits-thunks";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();

  const tuitClickHandler = () => {
    if (whatsHappening.length === 0) {
      toast.error("Please enter a message.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      const newTuit = {
        topic: "Random",
        username: "random",
        handle: "@random",
        time: "2h",
        image: "random.webp",
        title: "random Stuff",
        liked: false,
        likes: 0,
        replies: 0,
        retuits: 0,
        tuit: whatsHappening,
      };
      dispatch(createTuitThunk(newTuit));
      setWhatsHappening("");
    }
  };

  return (
    <div className="row">
      <div className="col-auto">
        <img src={require(`./assets/whats_happening.webp`)} width={60} alt="" />
      </div>
      <div className="col-10">
        <textarea
          value={whatsHappening}
          placeholder="What's happening?"
          className="form-control border-0"
          onChange={(event) => setWhatsHappening(event.target.value)}
        ></textarea>
        <div>
          <button
            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            onClick={tuitClickHandler}
          >
            Tuit
          </button>
          <div className="text-primary fs-2">
            <AiOutlinePicture className="me-3" />
            <AiOutlineFileGif className="me-3" />
            <AiOutlineBarChart className="me-3" />
            <BsEmojiSmile className="me-3" />
            <HiOutlineLocationMarker className="me-3" />
          </div>
        </div>
        <ToastContainer />
      </div>
      <div className="col-12">
        <hr />
      </div>
    </div>
  );
};
export default WhatsHappening;
