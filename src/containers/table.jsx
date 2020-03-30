import React, { Component } from 'react'
import { Header, Table, Rating } from 'semantic-ui-react';
import { get, map } from "lodash";

export default class TableExamplePadded extends Component {
    render() {
        return (
            < Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell singleLine>Index</Table.HeaderCell>
                        <Table.HeaderCell>Tags</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Links</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                {get(this.props, "results.data", []).length > 0 ? map(get(this.props, "results.data"), (item, index) => {
                    return (
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>  {index + 1} </Table.Cell>
                                <Table.Cell singleLine>{get(item, "tags")}</Table.Cell>
                                <Table.Cell> {get(item, "title")} </Table.Cell>
                                <Table.Cell textAlign='center'>
                                    {get(item, "links")}
                                </Table.Cell>
                                <Table.Cell> {get(item, "description")}  </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    )
                }) : "No Results Found"}
            </Table >
        )
    }
}