import React from 'react'
import {withStore} from 'store/Store'

class Display extends React.Component {

    componentDidMount(){
        this.fetch()
    }

    componentDidUpdate = ({ display: prevDisplay, selected: prevSelected}) => {
        this.props.saveToSession()
        const picture = this.props.selected.picture
        const display = this.props.display
        const sound = this.props.selected.sound
        const text = this.props.selected.text

        if (prevDisplay !== display) {
            this.fetch()
        }
        if (prevSelected.picture !== picture) {
            this.fetch()
        }

        if (prevSelected.sound !== sound) {
            this.fetch()
        }

        if (prevSelected.text !== text) {
            this.fetch()
        }

        if (this.refs.audio) {
            this.refs.audio.load()
        }
    }

    random() {
        let value = Math.floor((Math.random() * 4) + 1)
        return value
    }

    updateStateIm(value) {
        let displayValues  = this.props.displayValues;
        displayValues.image.url = value.image.url;
        console.log(displayValues)
        this.setState({ displayValues })
    }

    updateStateSound(value) {
        let displayValues  = this.props.displayValues;
        displayValues.sound.url = value.sound.url;
        this.setState({ displayValues })
    }

    updateStateText(value) {
        let displayValues  = this.props.displayValues;
        displayValues.text = value.text;
        this.setState({ displayValues })
    }

    cachedFetch = (url, options) => {
        // Use the URL as the cache key to sessionStorage
        let cacheKey = url
      
        // START new cache HIT code
        let cached = sessionStorage.getItem(cacheKey)
        if (cached !== null) {
          // it was in sessionStorage! Yay!
          let response = cached
          return Promise.resolve(response)
        }
        // END new cache HIT code
      
        return fetch(url, options).then(response => {
          // let's only store in cache if the content-type is
          // JSON or something non-binary
          if (response.status === 200) {
            let ct = response.headers.get('Content-Type')
            if (ct && (ct.match(/application\/json/i) || ct.match(/text\//i) || ct.match(/audio\//i) || ct.match(/image\//i))) {
              // There is a .json() instead of .text() but
              // we're going to store it in sessionStorage as
              // string anyway.
              // If we don't clone the response, it will be
              // consumed by the time it's returned. This
              // way we're being un-intrusive.
              response.clone().text().then(content => {
                sessionStorage.setItem(cacheKey, content)
              })
            }
          }
          return response
        })
      }

    fetch() {
        fetch(`./assets/images/${this.props.selected.picture}/${this.props.selected.picture}_${this.random()}.svg`).then(image => this.updateStateIm({image}))
        fetch(`./assets/audio/${this.props.selected.sound}/${this.props.selected.sound}_${this.random()}.mp3`).then(sound => this.updateStateSound({sound}))
        fetch(`./assets/texts/${this.props.selected.text}s/${this.props.selected.text}_${this.random()}.json`).then(response => {return response.json()}).then(text => this.updateStateText({text}))
    }

    render (){
        const { image, sound, text } = this.props.displayValues
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
                <br />
                <button onClick={this.props.saveFavoritt}>Save Favoritt</button>
                <button onClick={this.props.loadFavoritt}>Load Favoritt</button>
            </div>
        )
    }
}

export default withStore(Display)