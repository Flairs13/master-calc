import {NavLink} from "react-router-dom";
import ResultItem from "./ResultItem/ResultItem";
import classes from './Result.module.css'
import React, {Component} from 'react';

class ResultClass extends Component {

    createResultClousers = (count) => {
        let foo = 0
        return () => {
            let a = this.props.listWorks.map (item => {
                if (item.value === '') {
                    return ''
                }
                return <ResultItem label={item.label} value={item.value} amount={item.amount} index={++foo}/>
            })
            return a
        }
    }


    // createResult = () => {
    //     return this.props.listWorks.map ((item, index) => <ResultItem label={item.label} value={item.value} amount={item.amount} index={index}/>)
    // }


    calculateTotal = () => {
        const totals = this.props.listWorks.reduce ((sum, cur) => cur.value !== '' ? sum + cur.value * cur.amount : sum, 0)
        const discount = totals * this.props.discounts.value
        const discountedValue = totals - discount
        this.props.setTotal (totals)
        this.props.setDiscountedValue (discountedValue)

    }

    componentDidMount () {
        this.calculateTotal ()

    }

    render () {
        const discount = this.props.total.totalValue * this.props.discounts.value

        return (
            <div className={classes.container}>
                <h1>Расчетный лист ТАК ТО</h1>
                <div className={classes.tableGrid}>
                    <span className={classes.tableNumber}>Номер заказа</span>
                    <span className={classes.tableData}>Дата заказа</span>
                    <span className={classes.tableFullName}>Заказчик (ФИО)</span>
                    <span className={classes.tableAddress}>Адрес</span>
                    <span className={classes.tableConfig}>Конфигурация оборудования</span>
                    <span className={classes.tableDefect}>Заявленная неисправность</span>
                    <div className={classes.inputNumber}>{this.props.formOrder.valueOrder}</div>
                    <div className={classes.inputData}>{this.props.formOrder.valueDate}</div>
                    <div className={classes.inputFullName}>{this.props.formOrder.valueFullName}</div>
                    <div className={classes.inputAddress}>{this.props.formOrder.valueAddress}</div>
                    <div className={classes.inputConfig}>{this.props.formOrder.valueConfiguration}</div>
                    <div className={classes.inputDefect}>{this.props.formOrder.valueDefect}</div>
                </div>

                <table className={classes.resultTable}>
                    <thead>
                    <tr className={classes.ss}>
                        <th>№</th>
                        <th>Наименование услуг, материалов, оборудования</th>
                        <th>Кол-во</th>
                        <th>Цена</th>
                        <th>Сумма</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.createResultClousers ()()}
                    </tbody>
                </table>
                <div className={classes.totalWrapper}>
                    <div>Общая сумма <span>{this.props.total.totalValue}</span>руб</div>
                    <div>Скидка <span>{discount}</span>руб</div>
                    <div>Итого <span>{this.props.discounts.discountedValue}</span>руб</div>
                </div>

                <NavLink to={'/react-deploy'}>
                    <button className={classes.btn} onClick={this.props.defaultState}>Расчитать снова</button>
                </NavLink>
            </div>
        );
    }
}

export default ResultClass;
