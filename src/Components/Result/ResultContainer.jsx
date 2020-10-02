
import {connect} from "react-redux";
import {defaultState, setDiscountedValue, setTotal} from "../../Redux/Main-page-reducer";
import ResultClass from "./ResultClass";
import Example from "./ResultClass";


const mapStateToProps = (state) => {
    return {
        formOrder: state.mainPageReducer.formOrder,
        listWorks: state.mainPageReducer.listWorks,
        total: state.mainPageReducer.total,
        discounts: state.mainPageReducer.discounts

    }
}

 export const ResultContainer = connect(mapStateToProps,{defaultState,setTotal,setDiscountedValue})(Example)