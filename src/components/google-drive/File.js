import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function File({ file }) {
  return (
    <a
      href={file.url}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline-dark text-truncate w-100 d-flex flex-column align-items-center"
    >
      <FontAwesomeIcon icon={faFile} className="mr-2 mb-2" size="2x" />
      {file.name.slice(0, 10) + "..."}
    </a>
  );
}
