import React from "react";
import {Button, Modal, Form, TextArea, Input} from "semantic-ui-react"
import EntryService from "../../services/entry.service.js";
import { useDispatch, useSelector } from "react-redux";

const EntryModal = (props) => {
    const entryService = new EntryService();

    const dispatch = useDispatch();
    const showModal = useSelector((state) => state.journalReducer.showModal)
    const title = useSelector((state) => state.journalReducer.currentTitle)
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
        const newEntry = {
            date: new Date(),
            title: title,
            content: content
        }
        const resp = await entryService(newEntry)
        dispatch({type: 'addEntry', entry: newEntry})
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