require("dotenv").config;
import Stripe from 'stripe';
import express, {json} from 'express';
//  import * as dotenv from 'dotenv';
import cors from 'cors';



const port = process.env.PORT || 3003;
const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(json());

app.use((error, req, res, next) => {
    res.status(500).json({ error: error.message });
});

app.listen(port, () => {
    console.log(`Server is running on PORT ${PORT}`);
});