import { Button, CardActions, CardContent, CircularProgress, Typography } from "@mui/material";
import { PaymentElement, } from "@stripe/react-stripe-js";
import { useSubmitPayment } from "../components/hooks/capturePayment";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";

const StripeForm = ({ client_secret, amount, handleClear, handleConfirmPayment}) => {

    const stripe = useStripe();
    const elements = useElements();

    const { mutate, isLoading, data, error } = useSubmitPayment(elements, stripe, client_secret);

    const handleSubmit = async (e) => {
        elements.submit();
        e.preventDefault();
        mutate();
    };

    useEffect(() => {
        if (data) handleConfirmPayment(data);
    }, [data]);
        return (
        <CardContent>
        <Typography variant="h6" pb={3} color='primary'>Thanks for your support!</Typography>
        <PaymentElement/>
        <CardActions sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="outlined" onClick={handleClear}>Cancel</Button>
            <Button variant="contained" onClick={handleSubmit} disabled={isLoading}>{isLoading ? <CircularProgress/> :`Donate $${amount / 100}`}</Button>
        </CardActions>
        </CardContent>
        )
}
export default StripeForm