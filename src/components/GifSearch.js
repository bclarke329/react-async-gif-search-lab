import React, {Component} from 'react'
class GifSearch extends React.Component {

    state = {
        search: " "
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGifs(this.state.search)
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.search} onChange={event => this.setState({search: event.target.value})}></input>
                </form>
            </div>
        )
    }
}

export default GifSearch