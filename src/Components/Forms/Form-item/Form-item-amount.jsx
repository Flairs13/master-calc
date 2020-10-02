import React from 'react';
import classes from './FormItemAmount.module.css'

const FormItemAmount = (props) => {

    const handleChange = (event) => {
        const value = event.target.value
        props.setAmount(props.id, value)


    }


    return (

            <td className={classes.tdContainer}>
                <input value={props.value} className={classes.inputItem} type={'number'} onChange={handleChange}/>
            </td>


    );
};

export default FormItemAmount;
