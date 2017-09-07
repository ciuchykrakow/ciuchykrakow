import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import content from '../../markdowns/main.md'

class Main extends Component {
    constructor () {
        super()
        this.state = {
            text: ''
        }
    }
    componentWillMount () {
        fetch(content)
            .then(response => {
            return response.text()
            })
            .then(text => this.setState({ text }))
    }
    render () {
        const { text } = this.state
        return (
            <ReactMarkdown source={text || ''} />
        )
    }
}

export default Main
