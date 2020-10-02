import React from 'react';
import classes from "./Form-item-sum.module.css"

const FormItemSum = (props) => {

    const handleChange = (event) => {
        const value = event.target.value
        props.setSumValue(value,props.id)


    }

    return (

            <td className={classes.tdContainer}>
                <input value={props.value} onChange={handleChange}  className={classes.inputItem} type={'number'} />
            </td>

    );
};

export default FormItemSum;
