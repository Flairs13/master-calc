import Forms from "./Forms";
import {connect} from "react-redux";
import {defaultForms, setAmount, setDiscounts, setResult, setSelectValue, setSumValue} from "../../Redux/Main-page-reducer";

let mapStateToProps = (state) => {
    return {
        listWorks: state.mainPageReducer.listWorks,
        selectValue: state.mainPageReducer.selectValue,
        discounts: state.mainPageReducer.discounts,
    }
}

export const FormsContainer = connect(mapStateToProps,{setResult,setAmount,defaultForms,setSelectValue,setDiscounts,setSumValue})(Forms)