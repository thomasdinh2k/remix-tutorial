import React, { FC } from "react";

interface routesProps {}

const notes = [
	{ title: "Time", content: "New", id: "2024-09-11T07:10:16.348Z" },
	{
		title: "test",
		content: "sfkljasklfjaskljkl",
		id: "2024-09-11T07:15:02.890Z",
	},
	{
		title: "jj",
		content: "sjdakj",
		id: "2024-09-11T07:15:27.402Z",
	},
	{
		title: "test new",
		content: "new test",
		id: "2024-09-11T07:16:37.599Z",
	},
];

const allNotes: FC<routesProps> = (): React.JSX.Element => {
	return (
		<>
			<h1>all Notes</h1>

            { notes ? (
                notes.map( note => (
                    <p key={note.id}>{note.title}</p>
                ))
            ) : <p>No notes</p>}
		</>
	);
};

export default allNotes;
