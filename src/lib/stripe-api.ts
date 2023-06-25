import { Stripe, loadStripe } from '@stripe/stripe-js';
import { RedirectToCheckoutClientOptions } from '@stripe/stripe-js';

export async function checkout({ lineItems }: { lineItems: RedirectToCheckoutClientOptions["lineItems"] }) {
  let stripePromise: Stripe | null = null;

  const getStripe = async () => {
    if (!stripePromise) {
      if (!process.env.NEXT_PUBLIC_STRIPE_KEY_TEST) {
        throw new Error('Stripe public key not found.');
      }
      stripePromise = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY_TEST);
    }
    return stripePromise;
  };
  
  const stripe = await getStripe();
  if (stripe == null) {
    throw new Error('Stripe not initialized.');
  }

  await stripe.redirectToCheckout({
    mode: 'payment',
    lineItems,
    successUrl: `${window.location.origin}/?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });

}
