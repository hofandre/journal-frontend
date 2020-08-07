import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Grid, Container, Segment, Header, Button, Item} from "semantic-ui-react"

const EditButton = (props) => {
    const dispatch = useDispatch();
    const currentDate = new Date();
    const creationDate = new Date(props.entry.date);
    const editEntry = () => {
        dispatch({
            type: 'updateID',
            data: props.entry._id
        })
        props.editHandler(props.entry._id)
    }
    return (
        <>
            { 
                currentDate.getDate() === creationDate.getDate() &&
                currentDate.getMonth() === creationDate.getMonth() &&
                currentDate.getFullYear() === creationDate.getFullYear()
                ?
                <Button
                onClick={editEntry}>
                    Edit Entry
                </Button>
                :
                null
            }       
        </>


    )
}

export default EditButton;