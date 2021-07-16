import React from "react";
import "./CreateButton.css"
import {createNoteAction} from "../../redux/state";


const CreateButton = (props) => {
    let eventAction = () => {
        props.dispatch(createNoteAction(), null, props.tbody);
    }
    let editMode = () => {
        for (let i = 0; i < props.tbody.length; i++) {
            if (props.tbody[i].editMode === true) {
                return true;
            }
        }
        return false;
    }

    return (
        <button id={'create-button'} onClick={eventAction} disabled={editMode()}>Create note</button>
    )


}

export default CreateButton;