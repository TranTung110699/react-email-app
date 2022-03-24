import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  Link,
  NavLink,
} from "react-router-dom";
import Message from "./components/Message";
import Contacts from "./components/Contacts";
import Preferences from "./components/Preferences";
import MessageDetail from "./components/MessageDetail";
import { getUser } from "./FakeDataMessage";
import MessagePreview from "./components/MessagePreview";
import { log } from "console";
import path from "path";
import { match } from "assert";

const App = (props: any) => {
  const [user, setUser] = useState("");

  const handleSelect = (value: string) => {
    setUser(value);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              to="/messages"
            >
              Message
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              to="/contacts"
            >
              Contacts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              to="/preferences"
            >
              Preferences
            </NavLink>
          </li>
        </ul>
        <select
          className="select-user"
          id="exampleFormControlSelect1"
          onChange={(event: any) => handleSelect(event.target.value)}
        >
          <option>Choose User</option>
          {getUser().map((user, index) => (
            <option key={index} value={user}>
              {user}
            </option>
          ))}
        </select>
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/messages" replace />} />
        {/* <Navigate to="/messages" /> */}
        <Route path="/messages" element={<Message user={user} />}>
          <Route path=":folder" element={<MessagePreview user={user} />}>
            <Route path=":id" element={<MessageDetail />} />
          </Route>
        </Route>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </div>
  );
};

export default App;
