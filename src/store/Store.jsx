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
        Picture: "abstract",
        Text: "poem",
        Sound: "bass"
      },
      display: 1
    }

    handleSelect = ({target:{
        value, name
      }}) =>
        this.setState(({selected}) => ({selected: {
          ...selected,
          [name]: value
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
            ...this.state
          }}
        >
          {this.props.children}
        </Store.Provider>
      )
    }
  }