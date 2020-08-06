import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Grid, Container, Segment, Header, Button, Item} from "semantic-ui-react"
import Entry from './Entry'
import EntryModal from '../EntryModal/EntryModal'
import "./journal.scss"

const Journal = () => {
    const dispatch = useDispatch();
    const entries = useSelector((state) => state.journalReducer.entries)
    const showModal = useSelector((state) => state.journalReducer.showModal)

    const toggleModal = () => {
        dispatch({type: 'toggleModal', data: !showModal})
    }

    const removeEntry = (index) => {
        let newEntries = [...entries]
        newEntries.splice(index)
        console.log('running the delete entry function', entries,newEntries)
        dispatch({type: 'updateEntries', data: newEntries})
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
                    onClick={toggleModal}>
                        Add a Journal Entry
                    </Button>
                </Segment>
                <Grid centered stackable columns={1}
                id='entryGrid'>
                    <Grid.Column>
                    {entries && entries.length > 0 ?
                    entries.map((entry, i) => (
                        <Entry entry={entry} key={i} index={i} deleteHandler={removeEntry}/>
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