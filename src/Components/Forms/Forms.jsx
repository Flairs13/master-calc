import React from 'react';
import FormItem from "./Form-item/Form-item";
import classes from './Form.module.css'
import {NavLink} from "react-router-dom";
import Select from 'react-select';



const FormsList = (props) => {

    const totals = props.listWorks.reduce ((sum, cur) => cur.value !== '' ? sum + cur.value * cur.amount : sum, 0)
    const discount = props.discounts.value * totals
    const discountedValue = totals - discount

    const customStyles = {
        control: () => ({
            border: 'none',
            display: 'flex'
        }),

    }


   const handleDiscounts = (event) => {
       if (event !== null) {
           const value = event.value
           const label = event.label
           props.setDiscounts(value,label)
       } else {
           const value = ''
           const label = ''
           props.setDiscounts(value,label)
       }
    }

    const createSelect = () => {
        return props.listWorks.map (i => <FormItem option={i.option}
                                                   setResult={props.setResult}
                                                   name={i.name}
                                                   amount={i.amount}
                                                   value={i.value}
                                                   label={i.label}
                                                   setAmount={props.setAmount}
                                                   id={i.id}
                                                   setSelectValue={props.setSelectValue}
                                                   selectLabel={props.selectValue}
                                                   setSumValue={props.setSumValue}
                                    />
        )
    }

    const check = (event) => {
        const arrCheck = [];
        props.listWorks.forEach (item => {
            if (item.value !== '' && item.amount < 1 || item.value === '' && item.amount > 0) {
                arrCheck.push (false)
            }
            else {
                arrCheck.push (true)
            }
           

        })

        if (arrCheck.some (el => el === false)) {
             return <div>Поправь кол-во или выбери пункт бро :) </div>
          
        }
        else {
            return   <NavLink to={`/result/${1}`}>
                <button className={classes.btnCalc}>Расчитать</button>
            </NavLink>

        }

    }

    return (
        <div>
            <form className={classes.formWrapper}>
                <table className={classes.tableWrapper}>
                    <tr>
                        <th>Список работ</th>
                        <th>Сумма</th>
                        <th>Кол-во</th>
                    </tr>
                    {createSelect ()}
                    <tr>
                        <td colSpan={3}>
                            <Select styles={customStyles} isClearable={true} options={props.discounts.options} value={props.discounts} onChange={handleDiscounts}/>
                        </td>
                    </tr>
                </table>
            </form>
            <div className={classes.totalWrapper}>
                <div>Общая сумма <span>{totals}</span>руб</div>
                <div>Скидка <span>{discount}</span>руб</div>
                <div>Итого <span>{discountedValue}</span>руб</div>
            </div>
            <div className={classes.btnWrapper}>
                {check ()}
                <button className={classes.btnClear} onClick={props.defaultForms}>Очистить форму</button>
            </div>
        </div>
    );
};

export default FormsList;

