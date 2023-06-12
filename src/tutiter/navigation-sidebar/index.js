import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBookmark,
  faEllipsis,
  faHashtag,
  faHouse,
  faList,
  faMessage,
  faRegistered,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const active = pathname.split("/")[2];
  const links = [
    "home",
    "explore",
    "notifications",
    "messages",
    "bookmarks",
    "lists",
    "more",
  ];
  const linkIcons = [
    faHouse,
    faHashtag,
    faBell,
    faMessage,
    faBookmark,
    faList,
    faEllipsis,
  ];
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="list-group">
      <div className=" col-mg-1 d-none d-xl-block mt-2">
        {links.map((link, index) => (
          <Link
            to={`/tuiter/${link}`}
            className={`list-group-item text-capitalize ${
              active === link ? "active" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={linkIcons[index]}
              style={{ paddingRight: "10px" }}
            />
            {link}
          </Link>
        ))}
        {!currentUser && (
          <Link
            to={`/tuiter/login`}
            className={`list-group-item text-capitalize ${
              active === "login" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={faHashtag}
              style={{ paddingRight: "10px" }}
            />
            Login
          </Link>
        )}
        {!currentUser && (
          <Link
            to={`/tuiter/register`}
            className={`list-group-item text-capitalize ${
              active === "register" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={faRegistered}
              style={{ paddingRight: "10px" }}
            />
            Register
          </Link>
        )}

        {currentUser && (
          <Link
            to={`/tuiter/profile`}
            className={`list-group-item text-capitalize ${
              active === "profile" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={faUser} style={{ paddingRight: "10px" }} />
            Profile
          </Link>
        )}
      </div>
      <div className="d-lg-block d-xl-none col-2 col-sm-1 col-lg-1 mt-1 px-2">
        {links.map((link, index) => (
          <Link
            to={`/tuiter/${link}`}
            className={`list-group-item text-capitalize ${
              active === link ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={linkIcons[index]} />
          </Link>
        ))}
        {!currentUser && (
          <Link
            to={`/tuiter/login`}
            className={`list-group-item text-capitalize ${
              active === "login" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={faHashtag} />
          </Link>
        )}
        {!currentUser && (
          <Link
            to={`/tuiter/register`}
            className={`list-group-item text-capitalize ${
              active === "register" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={faRegistered} />
          </Link>
        )}

        {currentUser && (
          <Link
            to={`/tuiter/profile`}
            className={`list-group-item text-capitalize ${
              active === "profile" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={faUser} />
          </Link>
        )}
      </div>
    </div>
  );
};
export default NavigationSidebar;
