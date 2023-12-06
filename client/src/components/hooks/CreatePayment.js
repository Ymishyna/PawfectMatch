// import { useMutation } from 'react-query';
<<<<<<< HEAD

// export const useCreatePayment = () => {
//   const createPaymentMutation = useMutation(createPayment);

//   const createPayment = async (amount) => {
//     const response = await fetch('/api/create-payment', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         amount: amount,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch payment intent client secret');
//     }

//     const data = await response.json();
//     return data.payment;
//   };

//   return createPaymentMutation;
// };

// export default createPayment;
=======
// import {createPayment} from '../components/hooks/createPayment';

// export const useCreatePayment = () => {
//   const mutation = useMutation(createPayment);
//   return mutation;
// };
// export const createPayment = async (amount) => {
//     const response = await fetch('/api/createPayment', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         amount: amount,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch payment intent client secret');
//     }
//     const data = await response.json();
//     return data.payment;
//   };
  //export {CreatePayment};
>>>>>>> 6139cb336ebcec233a2667b6f96520e597f74d64
