import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createTuit } from "./reducers/tuits-reducer";
import { useDispatch } from "react-redux";
import {
  faImage,
  faChartSimple,
  faFaceSmile,
  faLocationDot,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        tuit: whatsHappening,
      };
      dispatch(createTuit(newTuit));
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
          <ToastContainer />
          <div className="d-flex justify-content-between mt-2 ps-3 pe-3 text-primary">
            <FontAwesomeIcon icon={faImage} />
            <FontAwesomeIcon icon={faFile} />
            <FontAwesomeIcon icon={faChartSimple} />
            <FontAwesomeIcon icon={faFaceSmile} />
            <FontAwesomeIcon icon={faLocationDot} />

            <button
              className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
              onClick={tuitClickHandler}
            >
              Tuit
            </button>
          </div>
        </div>
      </div>
      <div className="col-12">
        <hr />
      </div>
    </div>
  );
};
export default WhatsHappening;
