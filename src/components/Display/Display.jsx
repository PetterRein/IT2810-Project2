import React from 'react'
import _s from './Display.module.css'
import {withStore} from 'store/Store'


class Display extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          image: null
        }
    }

    componentDidMount() {
        this.fetch()
    }

    componentDidUpdate = ({ display: prevDisplay, selected: prevSelected
    }) => {
        const picture = this.props.selected.picture
        const display = this.props.display
        if (prevDisplay !== display || prevSelected.picture !== picture) {
            this.fetch()
        }
    }

    fetch = () => 
        fetch(`./assets/images/${this.props.selected.picture}/${this.props.selected.picture}_${this.props.display}.svg`).then(image => this.setState({ image })) 

    render (){
        const { image } = this.state
        return (
            <div className={_s.imageContainer}>
                {image ? <img src={ image.url } alt="picture1"/> : "Spinner"}
            </div>
        )
    }

}

export default withStore(Display)