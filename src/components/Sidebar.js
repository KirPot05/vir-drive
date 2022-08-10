import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useFolder } from "../hooks/useFolder";
import { routes } from "../navData";
import AddFileButton from "./google-drive/AddFileButton";

function Sidebar() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder } = useFolder(folderId, state.folder);
  return (
    <div
      className="bg-white d-flex flex-column"
      style={{
        flex: "0.2",
        minHeight: "100vh",
        position: "fixed",
        width: "18%",
        zIndex: 1,
      }}
    >
      <div className="mt-4 p-2">
        <AddFileButton currentFolder={folder} />
      </div>
      <div className="p-3">
        {routes.map(({ title, url }) => (
          <Link
            key={title}
            className="d-block my-4 menu-item"
            style={{
              textDecoration: "none",
              backgroundColor: window.location.pathname === url && "#e0e0fa",
              color: window.location.pathname === url && "#8f93f6",
            }}
            to={url}
          >
            {" "}
            {title}{" "}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
