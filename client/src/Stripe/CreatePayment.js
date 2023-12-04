
import { useMutation } from 'react-query';
import {createPaymentIntent} from '../api/createPaymentIntent';

export const useCreatePaymentIntent = () => {
  const mutation = useMutation(createPaymentIntent);
  return mutation;
};
export const createPaymentIntent = async (amount) => {
    const response = await fetch('/api/create-payment-intent', {
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
    return data.paymentIntent;
  };