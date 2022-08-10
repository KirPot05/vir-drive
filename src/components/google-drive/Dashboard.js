import React from "react";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useFolder } from "../../hooks/useFolder";
import AddFolderButton from "./AddFolderButton";
import Folder from "./Folder";
import File from "./File";
import Navbar from "./Navbar";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import { useParams, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import { useAuth } from "../../contexts/AuthContext";

export default function Dashboard() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders, childFiles } = useFolder(
    folderId,
    state.folder
  );
  const { currentUser } = useAuth();

  return (
    <>
      <Navbar />
      <Container fluid className="d-flex">
        <Sidebar />
        <div style={{ flex: "1", marginLeft: "16rem" }}>
          <div className="d-flex mt-3">
            <div
              className="bg-white mx-2 d-flex py-2 px-3 justify-content-between"
              style={{
                flex: "0.7",
              }}
            >
              <div className="mt-4">
                <h2
                  style={{
                    fontSize: "2rem",
                  }}
                >
                  Welcome {currentUser?.displayName || "User"}
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  You have 32 new notifications and 23 unread messages to reply
                </p>
              </div>
              <img
                style={{
                  objectFit: "contain",
                  height: "200px",
                }}
                src="https://templates.iqonic.design/cloudbox/html/assets/images/layouts/mydrive/background.png"
                alt="hero"
              />
            </div>

            <div
              className="bg-white mx-2"
              style={{
                flex: "0.4",
              }}
            >
              <h2 className="m-3">Quick Access</h2>
              <div className="d-flex mt-4 align-items-center justify-content-center">
                <div className="d-flex flex-column align-items-center">
                  <img
                    src="https://templates.iqonic.design/cloudbox/html/assets/images/layouts/mydrive/folder-1.png"
                    alt="quick"
                  />
                  <span>Planning</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img
                    src="https://templates.iqonic.design/cloudbox/html/assets/images/layouts/mydrive/folder-2.png"
                    alt="access"
                  />
                  <span>Wireframe</span>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center mb-4 mt-2 mx-2">
            <FolderBreadcrumbs currentFolder={folder} />

            {/* <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-bottom">
                  <strong>Add File</strong>.
                </Tooltip>
              }
            >
              <AddFileButton currentFolder={folder} />
            </OverlayTrigger> */}

            <OverlayTrigger
              key="bottoms"
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-bottoms">
                  <strong>Add File</strong>.
                </Tooltip>
              }
            >
              <AddFolderButton currentFolder={folder} />
              {/* <AddFileButton currentFolder={folder} /> */}
            </OverlayTrigger>
          </div>
          {childFolders.length > 0 && (
            <div className="d-flex flex-wrap">
              {childFolders.map((childFolder) => (
                <div
                  key={childFolder.id}
                  style={{ maxWidth: "250px" }}
                  className="p-2"
                >
                  <Folder folder={childFolder} />
                </div>
              ))}
            </div>
          )}
          {childFolders.length > 0 && childFiles.length > 0 && <hr />}
          {childFiles.length > 0 && (
            <div className="d-flex flex-wrap">
              {childFiles.map((childFile) => (
                <div
                  key={childFile.id}
                  style={{ maxWidth: "250px" }}
                  className="p-2"
                >
                  <File file={childFile} />
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
