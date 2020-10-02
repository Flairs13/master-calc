import React from 'react';

const ResultItem = (props) => {
    // const checkDisplay = props.value === '' ? 'none' : ''

    const total = props.value * props.amount

    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.label}</td>
            <td>{props.amount}</td>
            <td>{props.value}</td>
            <td>{total}</td>
        </tr>
    );
};

export default ResultItem;
