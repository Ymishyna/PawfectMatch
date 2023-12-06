// import { useMutation } from 'react-query';

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