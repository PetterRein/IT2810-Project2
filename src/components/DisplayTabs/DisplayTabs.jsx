import React from 'react'
import {withStore} from 'store/Store'

class DisplayTabs extends React.Component {
    clickHandler = event => {
        const {updateDisplay} = this.props
        updateDisplay(event.id)
    }

    render() {
        const buttons = [
            {id: 1, text: "Display 1"},
            {id: 2, text: "Display 2"},
            {id: 3, text: "Display 3"},
            {id: 4, text: "Display 4"}
        ]

        return (
            <>
                {buttons.map(button =>
                    <a className="tab c2" key={button.id} onClick={() => this.clickHandler(button)}>{button.text}</a>
                )}
            </>
        )
    }
}

export default withStore(DisplayTabs)