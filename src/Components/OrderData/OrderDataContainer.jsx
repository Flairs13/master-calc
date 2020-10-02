import {updateValue} from "../../Redux/Main-page-reducer";
import {connect} from "react-redux";
import OrderData from "./OrderData";

let mapStateToProps = (state) => {
    return {
        orderForms: state.mainPageReducer.formOrder
    }
}

 const orderDataContainer = connect(mapStateToProps,{updateValue})(OrderData)
export default orderDataContainer