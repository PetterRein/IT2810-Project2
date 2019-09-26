import React from 'react'
import {withStore} from 'store/Store'

class Display extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          image: {
              url: ""
          },
          sound: {
              url: ""
          },
          text: null
        }
    }

    componentDidMount(){
        this.fetch()
    }

    componentDidUpdate = ({ display: prevDisplay, selected: prevSelected}) => {
        const picture = this.props.selected.picture
        const display = this.props.display
        const sound = this.props.selected.sound
        const text = this.props.selected.text

        if (prevDisplay !== display) {
            this.fetch()
        }
        if (prevSelected.picture !== picture) {
            this.fetchImg()
        }

        if (prevSelected.sound !== sound) {
            this.fetchSound()
        }

        if (prevSelected.text !== text) {
            this.fetchText()
        }

        if (this.refs.audio) {
            this.refs.audio.load()
        }
    }

    fetch = () => {
        fetch(`./assets/images/${this.props.selected.picture}/${this.props.selected.picture}_${this.props.display}.svg`).then(image => this.setState({ image }))
        fetch(`./assets/audio/${this.props.selected.sound}/${this.props.selected.sound}_${this.props.display}.mp3`).then(sound => this.setState({ sound }))
        fetch(`./assets/texts/${this.props.selected.text}s/${this.props.selected.text}_${this.props.display}.json`).then(response => {return response.json()}).then(text => {this.setState({ text })})
    }

    fetchImg = () => {
        fetch(`./assets/images/${this.props.selected.picture}/${this.props.selected.picture}_${this.props.display}.svg`).then(image => this.setState({ image }))
    }

    fetchSound = () => {
        fetch(`./assets/audio/${this.props.selected.sound}/${this.props.selected.sound}_${this.props.display}.mp3`).then(sound => this.setState({ sound }))
    }

    fetchText = () => {
        fetch(`./assets/texts/${this.props.selected.text}s/${this.props.selected.text}_${this.props.display}.json`).then(response => {return response.json()}).then(text => {this.setState({ text })})
    }

    render (){
        const { image, sound, text } = this.state
        return (
            <div>
                {image ? undefined : image.url = window.location.href + "assets/images/abstract/abstract_1.svg"}
                <img src={ image.url } alt="picture1"/>
                {sound ? undefined : sound.url = window.location.href + "assets/audio/pop/pop_1.mp3"}
                <audio controls ref="audio">
                    <source src={ sound.url } type="audio/mpeg" />
                        Your browser does not support the audio element.
                </audio> <br />
                { text ? <span>{text.text} <br />- {text.author}</span> : undefined }
            </div>
        )
    }
}

export default withStore(Display)