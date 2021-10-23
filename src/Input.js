import React from 'react';
import {StyleInput} from './styled-components/style';

const Input = (props) => {


    return (
        <StyleInput placeholder={props.placeholder} type={props.type} onChange={props.onName} />

    )
}

export default Input;