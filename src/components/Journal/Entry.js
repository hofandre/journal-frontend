import React from "react";
import { Item, Header, Button } from "semantic-ui-react"
import "./entry.scss"
import EditButton from '../EditButton/EditButton'

const Entry = (props) => {
    return (
        <Item>
            <Item.Content>
                <Item.Header>
                    <Header as='h3'>
                        {props.entry.title}
                    </Header>

                </Item.Header>
                <Item.Meta>
                    Journal Entry from {new Date(props.entry.date).toLocaleString()}
                </Item.Meta>
                <Item.Description>
                    <p>{props.entry.content}</p>
                </Item.Description>
                <Item.Extra>
                    <EditButton entry={props.entry} editHandler={props.editHandler}/>
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}
export default Entry;