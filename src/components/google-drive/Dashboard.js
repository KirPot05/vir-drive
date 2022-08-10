import React from "react"
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap"
import { useFolder } from "../../hooks/useFolder"
import AddFolderButton from "./AddFolderButton"
import AddFileButton from "./AddFileButton"
import Folder from "./Folder"
import File from "./File"
import Navbar from "./Navbar"
import FolderBreadcrumbs from "./FolderBreadcrumbs"
import { useParams, useLocation } from "react-router-dom"

export default function Dashboard() {
	const { folderId } = useParams()
	const { state = {} } = useLocation()
	const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)

	return (
		<>
			<Navbar />
			<Container fluid>
				<div className="d-flex align-items-center mb-4 mt-2">
					<FolderBreadcrumbs currentFolder={folder} />

					<OverlayTrigger
						key="bottom"
						placement="bottom"
						overlay={
							<Tooltip id="tooltip-bottom">
								<strong>Add File</strong>.
							</Tooltip>
						}
					>
						<AddFileButton currentFolder={folder} />
					</OverlayTrigger>
					
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
						{childFolders.map(childFolder => (
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
						{childFiles.map(childFile => (
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
			</Container>
		</>
	)
}
