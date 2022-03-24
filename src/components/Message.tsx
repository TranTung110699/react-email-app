import React, { Component, useEffect } from "react";
import { message, getFolder } from "../FakeDataMessage";
import { Link, Route, NavLink, Outlet } from "react-router-dom";
import MessagePreview from "./MessagePreview";
import MessageDetail from "./MessageDetail";

const Message = (props: any) => {
  // useEffect(() => {
  //   const user: string = props.user;
  //   console.log(user);
  // }, []);
  const user: string = props.user;
  console.log(user);
  return (
    <div className="d-flex">
      <ul className="list-group">
        {getFolder(message, user).map((folder, index) => {
          return (
            <li key={index} className="list-group-item">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={`/messages/${folder}`}
              >
                {folder}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
      {/* <Route
          path="/messages/:folder"
          element={<MessagePreview user={user} />}
        /> */}
      {/* <Route path="/messages/:folder/:id" component={MessageDetail} /> */}
    </div>
  );
};
export default Message;
