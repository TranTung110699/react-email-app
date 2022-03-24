import React, { Component } from "react";
// import { RouteChildrenProps, useParams } from 'react-router-dom';
import { getMessageById } from "../FakeDataMessage";
import { Link, useParams } from "react-router-dom";

const MessageDetail = (props: any) => {
  const { id } = useParams<"id">() as any;
  console.log(id);
  const message = getMessageById(id);
  return (
    <div className="mt-4">
      <header className="d-flex bg-secondary">
        <p>
          {message.subject} {message.from}-&gt{message.to}
        </p>
        <p>{message.date}</p>
      </header>
      <main>{message.body}</main>
    </div>
  );
};
export default MessageDetail;
