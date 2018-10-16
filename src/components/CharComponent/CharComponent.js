import React from 'react';

const CharComponent = (props) => {
    return(
        <div  style={props.estilo} onClick={props.click}>
            {props.char}
        </div>        
    )
}

export default CharComponent;