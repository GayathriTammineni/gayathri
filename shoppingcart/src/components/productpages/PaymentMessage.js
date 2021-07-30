import { colors } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { useState } from "react";
const page_paymentmessage='paymentmessage';
const page_ordermessage='ordermessage';

const PaymentMessage=()=>{
    const[page,setPage]=useState(page_ordermessage);

return (
    <h2>your Order Successfully Submited</h2>);

}
export default PaymentMessage;