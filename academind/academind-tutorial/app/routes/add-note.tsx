import { redirect } from "@remix-run/react";
import React, { FC } from "react";
import {getStoredNotes, storeNotes} from "../data/notes"
import NewNote from "~/components/NewNote";

interface routesProps {}

const AddNote: FC<routesProps> = (): React.JSX.Element => {
	return (
        <NewNote/>
	);
};

export async function action({ request }) {
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);
    
    console.log('🪳 ~ file: add-note.tsx:15 ~ action ~ noteData||', noteData);

    // Add validation...
    const existingNotes = await getStoredNotes();
    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData);
    await storeNotes(updatedNotes);
    return redirect('/add-note');
  }



  export default AddNote;
