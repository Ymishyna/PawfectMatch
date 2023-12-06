// import { useMutation } from 'react-query';
<<<<<<< HEAD
=======
// //import capturePayment from '../hooks/capturePayment';
>>>>>>> 6139cb336ebcec233a2667b6f96520e597f74d64

// export const useSubmitPayment = (elements, stripe, amount) => {
//   const mutation = useMutation(() => capturePayment(elements, stripe, amount));
//   return mutation;
// };

// const capturePayment = async (elements, stripe, clientSecret) => {
//     if (!stripe) {
//         throw new Error("Stripe hasn't yet loaded.");
//     }
//     const { error: submitError } = await elements.submit();
//     if (submitError) {
//         throw submitError;
//     }

//     const { error } = await stripe.confirmPayment({
//         elements,
//         clientSecret,
//         redirect: "if_required",
//     });

//     if (error) {
//         throw error;
//     }
//     else return {status: "success"};
// };
// export default capturePayment;