import React from 'react';
import styled from 'styled-components'
import classes from './OrderData.module.css'

const OrderData = (props) => {

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        props.updateValue (name, value)

    }

    return (
        <OrderWrapper>
            <Title>Договор на оказание услуг</Title>
                <div className={classes.tableGrid}>
                    <span className={classes.tableNumber}>Номер заказа</span>
                    <span className={classes.tableData}>Дата заказа</span>
                    <span className={classes.tableFullName}>Заказчик (ФИО)</span>
                    <span className={classes.tableAddress}>Адрес</span>
                    <span className={classes.tableConfig}>Конфигурация оборудования</span>
                    <span className={classes.tableDefect}>Заявленная неисправность</span>
                    <div className={classes.inputNumber}><input className={classes.inputs} type="number" value={props.orderForms.valueOrder} onChange={handleChange} placeholder={'Номер заказа'} name="Order"/></div>
                    <div className={classes.inputData}><input className={classes.inputs} type="date" value={props.orderForms.valueDate} onChange={handleChange} placeholder={'Дата заказа'} name={'Date'}/></div>
                    <div className={classes.inputFullName}><input className={classes.inputs} type="name" value={props.orderForms.valueFullName} onChange={handleChange} placeholder={'ФИО Клиента'} name={'FullName'}/></div>
                    <div className={classes.inputAddress}><input className={classes.inputs} type="text" value={props.orderForms.valueAddress} onChange={handleChange} placeholder={'Адрес'} name={'Address'}/></div>
                    <div className={classes.inputConfig}><input className={classes.inputs} type="text" value={props.orderForms.valueConfiguration} onChange={handleChange} placeholder={'Конфигурация оборудования'} name={'Configuration'}/></div>
                    <div className={classes.inputDefect}><input className={classes.inputs} type="text" value={props.orderForms.valueDefect} onChange={handleChange} placeholder={'Заявленная неисправность'} name={'Defect'}/></div>
                </div>
        </OrderWrapper>
    );

}

export default OrderData;


const OrderWrapper = styled.div`
    
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;

`;
const InputData = styled.input`
  margin-left: 15px;
`;

const DataWrapper = styled.div`
display: flex;
`;
const Test = styled.div`
  display: flex;
  justify-content: space-between;
`;