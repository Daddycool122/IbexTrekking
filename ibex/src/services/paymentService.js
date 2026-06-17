import { apiUrl } from "../apiConfig";

async function postJson(path, payload) {
  const response = await fetch(apiUrl(path), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response.json();
}

export async function createPaymentOrder(amount) {
  const data = await postJson("/create-order", { amount });

  if (!data?.order_id) {
    throw new Error(data?.error || "Unable to create payment order");
  }

  return data.order_id;
}

export async function verifyPaymentOrder(bookingData) {
  return postJson("/verify-order", bookingData);
}

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export async function launchRazorpayPayment({
  amount,
  key,
  description,
  themeColor,
  prefill,
  buildBookingData,
  onVerified,
  onError,
  name = "IBEXICEAXE",
}) {
  try {
    const orderId = await createPaymentOrder(amount);

    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      throw new Error("Razorpay SDK failed to load. Are you online?");
    }

    const RazorpayCheckout = window?.Razorpay;
    if (!RazorpayCheckout) {
      throw new Error("Razorpay checkout is unavailable");
    }

    const options = {
      key,
      amount,
      currency: "INR",
      name,
      description,
      order_id: orderId,
      prefill,
      theme: { color: themeColor },
      handler: async (response) => {
        try {
          const bookingData = buildBookingData(response);
          const result = await verifyPaymentOrder(bookingData);

          if (result?.success) {
            onVerified?.(result, bookingData);
            return;
          }

          throw new Error(result?.error || "Payment verification failed");
        } catch (error) {
          onError?.(error);
        }
      },
    };

    new RazorpayCheckout(options).open();
  } catch (error) {
    onError?.(error);
  }
}