import React from 'react'
import cx from 'classnames'
import _s from './DisplayTabs.module.css'
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
            <div className={cx(_s.DisplayTabs)}>
                {buttons.map(button =>
                    <button key={button.id} onClick={() => this.clickHandler(button)}>{button.text}</button>
                )}
            </div>
        )
    }
}

export default withStore(DisplayTabs)