import React from 'react'

class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    render() {
        return(
            <div>

            </div>
        )
    }

    fetchGIFs = search => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({ gifs: data.map(gif => ({url: gif.images.original.url }) ) })
        })
    }

    componentDidMount() {
        this.fetchGIFs()
    }

}

export default GifListContainer