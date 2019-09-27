import React, {Component, createContext} from 'react'

const Store = createContext()

export const withStore = WrappedComponent =>
  class extends Component {
    render() {
      return (
        <Store.Consumer>
          {value =>
            <WrappedComponent
              {...value}
              {...this.props}
            />
          }
        </Store.Consumer>
      )
    }
  }

  export default class StoreDB extends Component {

    state = {
      selected: {
        picture: "abstract",
        text: "poem",
        sound: "pop"
      },
      display: 1, 
      displayValues: {
        image: {
            url: ""
        },
        sound: {
            url: ""
        },
        text: null
      }
    }

    saveToSession = () => {
      let session = sessionStorage.getItem("session") ? JSON.parse(sessionStorage.getItem("session")) : []
      const value = {
        image: this.state.displayValues.image,
        sound: this.state.displayValues.sound,
        text: this.state.displayValues.text
      }
      console.log(session)
      session.push(value)
      sessionStorage.setItem("session", JSON.stringify(session))
    }

    loadFavoritt = () => {
      let favoritt = JSON.parse(localStorage.getItem("favoritt"))
      this.setState({displayValues: favoritt})
    }

    saveFavoritt = () => {
      const value = {
          image: this.state.displayValues.image,
          sound: this.state.displayValues.sound,
          text: this.state.displayValues.text
      }
      localStorage.setItem("favoritt", JSON.stringify(value))
    }

    handleSelect = ({target:{
        value, name
      }}) =>
        this.setState(({selected}) => ({selected: {
          ...selected,
          [name.toLowerCase()]: value.toLowerCase()
        }}))

    updateDisplay = (value) => {
      this.setState({display: value}, () => {
      })
    }

    render() {
      return(
        <Store.Provider
          value={{
            updateDisplay: this.updateDisplay,
            handleSelect: this.handleSelect,
            saveFavoritt: this.saveFavoritt,
            loadFavoritt: this.loadFavoritt,
            saveToSession: this.saveToSession,
            ...this.state
          }}
        >
          {this.props.children}
        </Store.Provider>
      )
    }
  }