import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header, Button } from 'semantic-ui-react'
import TableExamplePadded from './table'

const initialState = { isLoading: false, results: [], value: '' }

export default class SearchExampleStandard extends Component {
    state = initialState

    handleResultSelect = (e, { result }) => {
        console.log("sdddd", result, "wwwwwww", e);
        return this.setState({ value: result.title })
    }

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        fetch(`http://localhost:9000/tags/search?tags=${value}`)
            .then(response => response.json())
            .then(
                data => {
                    if (this.state.value.length < 1) return this.setState(initialState);
                    console.log("===data==============", data);
                    return this.setState({
                        results: data,
                        value: _.get(data, "[0].title"),
                        isLoading: false,
                    })
                }
            )
            .catch(error => this.setState(initialState));
    }

    onBtnClick = (e) => {
        this.props.history.push('/add');
    }

    render() {
        const { isLoading, value, results } = this.state

        return (<div>
            <div>
                <Button size='large' floated='right' color='green' onClick={this.onBtnClick}>+</Button>
            </div>

            <div>
                <h3>Infinity Search </h3>
                <Grid>
                    <Grid.Column width={20}>
                        <Search
                            loading={isLoading}
                            onResultSelect={this.handleResultSelect}
                            onSearchChange={_.debounce(this.handleSearchChange, 500, {
                                leading: true,
                            })}
                            results={results}
                            value={value}
                            {...this.props}
                        />
                        <h2> Results </h2>
                        <TableExamplePadded results={results} />
                    </Grid.Column>
                </Grid>
            </div>
        </div>

        )
    }
}
