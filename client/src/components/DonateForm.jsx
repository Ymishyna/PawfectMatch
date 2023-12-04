import { Card, Fade, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useCreatePaymentIntent } from "../hooks/useCreatePaymentIntent";
import { Elements, } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import DonationInput from "./DonationInput";
import StripeForm from "./StripeForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function DonationForm() {
    const [amount, setAmount] = useState(10);
    const [paymentIntent, setPaymentIntent] = useState(null);
    const [confirmedPayment, setConfirmedPayment] = useState(null);
    const { mutate, isLoading, data, error } = useCreatePaymentIntent();

    const handleSubmit = () => (mutate(amount));

    const handleClear = () => {
        setPaymentIntent(null);
    }
    const handleChange = (e) => {
        setAmount(e.target.value);
    }

    const handleConfirmPayment = async (payment) => {
        setConfirmedPayment(payment);
        handleClear();
        await setTimeout(() => {
            setConfirmedPayment(null);
        }, 5000);
    }

    useEffect(() => {
        if (data) setPaymentIntent(data);
    }, [data]);

    return (
        <Card>
            <Fade in={!paymentIntent && !confirmedPayment} unmountOnExit>
                <Container>
                    <DonationInput amount={amount} handleChange={handleChange} handleSubmit={handleSubmit} isLoading={isLoading} data={data} error={error} />
                </Container>
            </Fade>
            <Fade in={!!paymentIntent && !confirmedPayment} unmountOnExit>
                <Container>
                    <Elements stripe={stripePromise} options={{ clientSecret: paymentIntent?.client_secret }}>
                        <StripeForm client_secret={paymentIntent?.client_secret} amount={paymentIntent?.amount} handleClear={handleClear} handleConfirmPayment={handleConfirmPayment} />
                    </Elements>
                </Container>
            </Fade>
            <Fade in={!!confirmedPayment} unmountOnExit>
                <Typography p={4} variant="h6" textAlign={'center'}>Your generosity goes a long way!</Typography>
            </Fade>
        </Card>
    )
}