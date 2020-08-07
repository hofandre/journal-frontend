import React from "react";
import {Button, Modal, Form, TextArea, Input} from "semantic-ui-react"
import EntryService from "../../services/entry.service.js";
import { useDispatch, useSelector } from "react-redux";

const EntryModal = (props) => {
    const entryService = new EntryService();

    const dispatch = useDispatch();
    const editState = useSelector((state) => state.journalReducer.editState)
    const entries = useSelector((state) => state.journalReducer.entries)
    const showModal = useSelector((state) => state.journalReducer.showModal)
    const title = useSelector((state) => state.journalReducer.currentTitle)
    const id = useSelector((state) => state.journalReducer.currentID)
    const content = useSelector((state) => state.journalReducer.currentContent)


    const updateContent = (event) => {
        update('Content', event.target.value)
    }

    const updateTitle = (event) => {
        update('Title', event.target.value)
    }
    
    const update = (type, value) => {
        dispatch({type: 'update'+ type, data: value});
    }

    const addEntry = async () => {
        if (editState === 'CREATE') {
            const newEntry = {
                _id: null,
                date: new Date(),
                title: title,
                content: content
            }
            const resp = await entryService.addEntry(newEntry)
            dispatch({type: 'addEntry', entry: resp.data})
        } else if (editState === 'UPDATE') {
            const newEntry = {
                _id: id,
                date: new Date(),
                title: title,
                content: content
            }
            const resp = await entryService.editEntry(newEntry)
            const arr = [...entries]
            const index = arr.findIndex((elt) => {
                return elt._id === id
            })
            arr[index] = newEntry
            dispatch({
                type: 'updateEntries',
                data: arr
            })
        }

        update('Title', '')
        update('Content', '')
        props.toggleModal()
    }

    return (
        <Modal
            open={showModal}>
                <Modal.Header>
                    Add a Journal Entry for DATE
                </Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field 
                        control={Input}
                        label="Title"
                        placeholder='Title'
                        onChange={updateTitle}
                        value={title}
                        />
                        
                        <TextArea
                        placeholder='Journal Entry'
                        onChange={updateContent}
                        value={content}
                        >
                        </TextArea>
                    </Form>
                    <Button
                    onClick={addEntry}>
                        Add Entry
                    </Button>
                </Modal.Content>
        </Modal>
    )
}

export default EntryModal;