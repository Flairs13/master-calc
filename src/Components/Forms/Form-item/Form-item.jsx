import React from 'react';
import classes from './FormItem.module.css'
import FormItemAmount from "./Form-item-amount";
import CreatableSelect from 'react-select/creatable';
import FormItemSum from "./Form-item-sum";

const FormItem = (props) => {

    const createOption = () => {
        return props.option.map (i => ({value: i.prices, label: i.value}))

    }

    const onChange = (event) => {
        if (event !== null) {
            const value = event.value
            const label = event.label
            props.setResult (label, value, props.id)
        } else {
            const value = ''
            const label = ''
            props.setResult (label, value, props.id)
        }


        // props.setSelectValue(label,value)
    }


    const customStyles = {
        control: () => ({
            border: 'none',
            display: 'flex'
        }),

    }

    return (

        <tr>
            <td>
                <CreatableSelect defaultValue={props.name} styles={customStyles}  isClearable={true}  value={props}  options={createOption ()} className={classes.selectItem} onChange={onChange}/>

            </td>
            <FormItemSum id={props.id} value={props.value} setSumValue={props.setSumValue}/>
            <FormItemAmount selectValue={props.selectValue} value={props.amount} name={props.name} setAmount={props.setAmount} id={props.id}/>
        </tr>
    );
};

export default FormItem;
