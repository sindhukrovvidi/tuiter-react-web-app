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
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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
    "profile",
    "more",
  ];
  const linkIcons = [
    faHouse,
    faHashtag,
    faBell,
    faMessage,
    faBookmark,
    faList,
    faUser,
    faEllipsis,
  ];
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
      </div>
      <div className="d-lg-block d-xl-none col-2 col-sm-1 col-lg-1 mt-1 px-2">
        {links.map((link, index) => (
          <Link
            to={`/tuiter/${link}`}
            className={`list-group-item text-capitalize ${
              active === link ? "active" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={linkIcons[index]}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default NavigationSidebar;
