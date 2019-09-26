import React from 'react'
import _s from './MediaChooser.module.css'

function ListItem(props) {
    return (
        <li className={_s.checkBox}>
            <label><input type="radio" name={props.name}></input>{props.value}</label>
        </li>
    )
}
  
function TypeList(props) {
    const choices = props.choices
    const choiceTitle = Object.keys(choices)[0];
    const listItems = choices[choiceTitle].map((choice) =>
            <ListItem key={choice} value={choice} name={choiceTitle}/>
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
        {"Picture": ["Color", "Abstract", "Inverted"]},
        {"Sound": ["Pop", "Avantgarde", "Experimental"]},
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
