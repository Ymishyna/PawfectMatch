import { useMutation } from 'react-query';
import capturePayment from '../functions/capturePayment';

export const useSubmitPayment = (elements, stripe, amount) => {
  const mutation = useMutation(() => capturePayment(elements, stripe, amount));
  return mutation;
};

const capturePayment = async (elements, stripe, clientSecret) => {
    if (!stripe) {
        throw new Error("Stripe hasn't yet loaded.");
    }
    const { error: submitError } = await elements.submit();
    if (submitError) {
        throw submitError;
    }

    const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        redirect: "if_required",
    });

    if (error) {
        throw error;
    }
    else return {status: "success"};
};
export default capturePayment;