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
      display: 1
    }

    loadFavoritt = () => {
      let favoritt = JSON.parse(localStorage.getItem("favoritt"))
      this.setState({selected: favoritt})
    }

    saveFavoritt = () => {
      const value = {
        picture: this.state.selected.picture,
        text: this.state.selected.text,
        sound: this.state.selected.sound,
        display: this.state.selected.display
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
            ...this.state
          }}
        >
          {this.props.children}
        </Store.Provider>
      )
    }
  }