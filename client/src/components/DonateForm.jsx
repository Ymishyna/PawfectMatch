// import { Card, Fade, Container, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { DonationInput } from "../Stripe/DonationInput";
// import { StripeForm } from "../Stripe/StripeForm";
// import { useCreatePayment } from "./hooks/createPayment";

// // Load the Stripe.js library
// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// export default function DonationForm() {
//   const [amount, setAmount] = useState(10);
//   const [payment, setPayment] = useState(null);
//   const [confirmedPayment, setConfirmedPayment] = useState(null);
//   const { mutate, isLoading, data, error } = useCreatePayment(); // Correct casing

//   const handleSubmit = () => mutate(amount);

//   const handleClear = () => {
//     setPayment(null);
//   };

//   const handleChange = (e) => {
//     setAmount(e.target.value);
//   };

//   const handleConfirmPayment = async (payment) => {
//     setConfirmedPayment(payment);
//     handleClear();
//     await setTimeout(() => {
//       setConfirmedPayment(null);
//     }, 5000);
//   };

//   useEffect(() => {
//     if (data) setPayment(data);
//   }, [data]);

//   return (
//     <Card>
//       <Fade in={!payment && !confirmedPayment} unmountOnExit>
//         <Container>
//           <DonationInput
//             amount={amount}
//             handleChange={handleChange}
//             handleSubmit={handleSubmit}
//             isLoading={isLoading}
//             data={data}
//             error={error}
//           />
//         </Container>
//       </Fade>
//       <Fade in={!!payment && !confirmedPayment} unmountOnExit>
//         <Container>
//           <Elements stripe={stripePromise}>
//             <StripeForm
//               client_secret={payment?.client_secret}
//               amount={payment?.amount}
//               handleClear={handleClear}
//               handleConfirmPayment={handleConfirmPayment}
//             />
//           </Elements>
//         </Container>
//       </Fade>
//       <Fade in={!!confirmedPayment} unmountOnExit>
//         <Typography p={4} variant="h6" textAlign={"center"}>
//           Your generosity goes a long way!
//         </Typography>
//       </Fade>
//     </Card>
//   );
// import { CreatePayment } from "./hooks/createPayment";
// import { Elements, } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { DonationInput } from "../Stripe/DonationInput";
// import { StripeForm } from "../Stripe/StripeForm";

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// export  function DonateForm() {
//     const [amount, setAmount] = useState(10);
//     const [payment, setPayment] = useState(null);
//     const [confirmedPayment, setConfirmedPayment] = useState(null);
//     const { mutate, isLoading, data, error } = CreatePayment();

//     const handleSubmit = () => (mutate(amount));

//     const handleClear = () => {
//         setPayment(null);
//     }
//     const handleChange = (e) => {
//         setAmount(e.target.value);
//     }

//     const handleConfirmPayment = async (payment) => {
//         setConfirmedPayment(payment);
//         handleClear();
//         await setTimeout(() => {
//             setConfirmedPayment(null);
//         }, 5000);
//     }

//     useEffect(() => {
//         if (data) setPayment(data);
//     }, [data]);

//     return (
//         <Card>
//             <Fade in={!payment && !confirmedPayment} unmountOnExit>
//                 <Container>
//                     <DonationInput amount={amount} handleChange={handleChange} handleSubmit={handleSubmit} isLoading={isLoading} data={data} error={error} />
//                 </Container>
//             </Fade>
//             <Fade in={!!payment && !confirmedPayment} unmountOnExit>
//                 <Container>
//                     <Elements stripe={stripePromise} options={{ clientSecret: payment?.client_secret }}>
//                         <StripeForm client_secret={payment?.client_secret} amount={payment?.amount} handleClear={handleClear} handleConfirmPayment={handleConfirmPayment} />
//                     </Elements>
//                 </Container>
//             </Fade>
//             <Fade in={!!confirmedPayment} unmountOnExit>
//                 <Typography p={4} variant="h6" textAlign={'center'}>Your generosity goes a long way!</Typography>
//             </Fade>
//         </Card>
//     )
// }