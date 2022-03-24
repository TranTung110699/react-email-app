import React, { Component, useState } from "react";
import { Link, useParams, useNavigate, Outlet } from "react-router-dom";
import { getMessageByFolder } from "../FakeDataMessage";

// interface Props extends RouteChildrenProps {
//   user: string;
// }

const MessagePreview = (props: any) => {
  const [activeId, setActivedId] = useState("");
  let navigate = useNavigate();
  const handleTableClick = (id: string, folder: string) => {
    navigate(`/messages/${folder}/${id}`);
    setActivedId(id);
  };

  const user: string = props.user;
  console.log(useParams<"folder">());
  const { folder } = useParams<"folder">() as any;
  console.log(folder);
  // const folder = this.props.match.params;
  // console.log(this.props.position?.pathname as any);
  const messages = getMessageByFolder(folder, props.user);
  console.log(messages);

  return (
    <div>
      <div className="email-preview">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sender</th>
              <th scope="col">Subject</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((item) => {
              return (
                <tr
                  className={activeId === item._id ? "bg-info text-white" : ""}
                  onClick={() => handleTableClick(item._id, "travel")}
                  key={item._id}
                >
                  <td>{item.from}</td>
                  <td>{item.subject}</td>
                  <td>{item.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />
      <hr />
      <Outlet />
    </div>
  );
};
export default MessagePreview;
