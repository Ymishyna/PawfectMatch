// import express from 'express';

// export default function createStripeRoutes(stripe) {
//     const router = express.Router();

//     router.post('/api/create-payment-intent', async (req, res) => {
//         const { amount } = req.body;
//         try {
//             const paymentIntent = await stripe.paymentIntents.create({
//                 amount: amount * 100,
//                 currency: 'cad',
//                 automatic_payment_methods: { enabled: true },
//             });
//             res.send({
//                 paymentIntent
//             });
//         } catch (error) {
//             console.log(error);
//             res.status(500).json({ error: error.message });
//         }
//     })
//     return router;
// }
