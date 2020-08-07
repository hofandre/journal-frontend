import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Grid, Container, Segment, Header, Button, Item} from "semantic-ui-react"
import Entry from './Entry'
import EntryModal from '../EntryModal/EntryModal'
import EntryService from "../../services/entry.service.js";

import "./journal.scss"

const Journal = () => {
    const entryService = new EntryService();
    const dispatch = useDispatch();
    const entries = useSelector((state) => state.journalReducer.entries)
    const showModal = useSelector((state) => state.journalReducer.showModal)

    useEffect(() =>{
        async function getEntries() {
            const resp = await entryService.getEntries();
            dispatch({
                type: 'updateEntries',
                data: resp.data
            })
        }
        getEntries()
    }, [])

    const newEntry = () => {
        dispatch({type: 'updateEditState', state: 'CREATE'})
        toggleModal()
    }

    const toggleModal = () => {
        dispatch({type: 'toggleModal', data: !showModal})
    }

    const editEntry = (entryID) => {
        console.log(entryID)
        const index = entries.findIndex((elt) => {
            return elt._id === entryID
        })
        const entry = entries[index]
        update('Title', entry.title)
        update('Content', entry.content)
        dispatch({
            type: 'updateEditState',
            state: 'UPDATE'
        })
        toggleModal();
    }


    
    const update = (type, value) => {
        dispatch({type: 'update'+ type, data: value});
    }

    return (
        <>
            <EntryModal toggleModal={toggleModal} />
            <Container 
            id='journalContainer'>
                <Segment>
                    <Header as='h2'>
                        Journal for TEMP
                    </Header>
                    <Button
                    onClick={newEntry}>
                        Add a Journal Entry
                    </Button>
                </Segment>
                <Grid centered stackable columns={1}
                id='entryGrid'>
                    <Grid.Column>
                    {entries && entries.length > 0 ?
                    entries.map((entry) => (
                        <Entry entry={entry} key={entry._id} index={entry._id} editHandler={editEntry}/>
                    ))
                    :<Item>
                        <Item.Content>
                            <Item.Header>
                                <Header as='h3'>
                                    There are no journal entries
                                </Header>
                            </Item.Header>
                        </Item.Content>
                    </Item>
                    }
                    </Grid.Column>
                </Grid>
            </Container>
        </>
    )
}

export default Journal;