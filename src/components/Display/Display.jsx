import React from 'react'
import _s from './Display.module.css'


class Display extends React.Component {

    render (){
        return (
            <div className={_s.imageContainer}>
                <img src={ require('assets/images/abstract/abstract_1.jpg') } alt="picture1"/>
            </div>
        )
    }

}

export default Display