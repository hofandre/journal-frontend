import React from "react";
import { Item, Header, Button } from "semantic-ui-react"
import "./entry.scss"

const Entry = (props) => {
    
    const del = () => {
        props.deleteHandler(props.index)
    }

    return (
        <Item>
            <Item.Content>
                <Item.Header>
                    <Header as='h3'>
                        {props.entry.title}
                    </Header>

                </Item.Header>
                <Item.Meta id='entryMeta'>
                    Journal Entry from {props.entry.date.toLocaleDateString()}
                </Item.Meta>
                <Item.Description>
                    {props.entry.content}
                </Item.Description>
            </Item.Content>
        </Item>
    )
}
export default Entry;