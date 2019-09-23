import React from 'react'
import _s from './MediaChooser.module.css'

function ListItem(props) {
    return (
        <li className={_s.checkBox}>
            <label><input type="checkbox"></input>{props.value}</label>
        </li>
    )
}
  
function TypeList(props) {
    const choices = props.choices
    const choiceTitle = Object.keys(choices)[0];
    const listItems = choices[choiceTitle].map((choice) =>
            <ListItem key={choice} value={choice} />
    );
    return (
        <div className={_s.title}>
            {choiceTitle}
            <ul className={_s.list}>
                {listItems}
            </ul>
        </div>
    );  
}

class MediaChooser extends React.Component {

    typeChoices = [
        {"Picture": ["Color", "Abstract", "inverted"]},
        {"Sound": ["Fast", "Slow", "Pitched"]},
        {"Text": ["Small", "Big", "Scrambled"]}
    ]

    choiceList = this.typeChoices.map((choices) =>
        <TypeList choices={choices} key={Object.keys(choices)[0]}/>
    );

    render() {
        return (
            <div className={_s.mediaChooser}>
                {this.choiceList}
            </div>
        )

    }
}

export default MediaChooser