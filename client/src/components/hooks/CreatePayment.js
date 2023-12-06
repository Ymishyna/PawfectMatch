
import { useMutation } from 'react-query';
//import {CreatePayment} from '../api/CreatePayment';

export const useCreatePayment = () => {
  const mutation = useMutation(CreatePayment);
  return mutation;
};
export const CreatePayment = async (amount) => {
    const response = await fetch('/api/CreatePayment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch payment intent client secret');
    }
    const data = await response.json();
    return data.payment;
  };
  //export {CreatePayment};