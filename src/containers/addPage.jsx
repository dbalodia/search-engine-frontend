import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class FormExampleCaptureValues extends Component {
    intialState = { tags: '', title: '', submittedName: '', submittedEmail: '', description: '', links: '' };
    state = { tags: '', title: '', submittedName: '', submittedEmail: '', description: '', links: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { tags, title, description, links } = this.state

        const postData = {
            links,
            tags,
            title,
            description
        };

        fetch(`http://localhost:9000/tags/create`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(response => response.json())
            .then(
                data => {
                    // if (this.state.value.length < 1) return this.setState(initialState);
                    console.log("===data==============", data);
                    this.props.history.push('/');
                    return this.setState(this.intialState);

                })
            .catch(error => this.setState({ submittedName: tags }));
    }

    render() {
        const { title, tags, links, description, submittedName, submittedEmail } = this.state

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            width={8}
                            placeholder='Title'
                            name='title'
                            value={title}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            width={8}
                            placeholder='Tags'
                            name='tags'
                            value={tags}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            width={8}
                            placeholder='Links'
                            name='links'
                            value={links}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            width={8}
                            placeholder='Description'
                            name='description'
                            value={description}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Button content='Submit' />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default FormExampleCaptureValues;