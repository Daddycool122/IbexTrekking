import React from "react";
import { launchRazorpayPayment } from "./services/paymentService";
import { downloadBase64Pdf } from "./utils/downloadPdf";

const RAZORPAY_TEST_KEY_ID = import.meta.env.VITE_RAZORPAY_TEST_KEY_ID;

function Payment() {
  const startPayment = async () => {
    await launchRazorpayPayment({
      amount: 500 * 100,
      key: RAZORPAY_TEST_KEY_ID,
      description: "Test Transaction",
      themeColor: "#3399cc",
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9876543210",
      },
      buildBookingData: (response) => ({
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
        name: "John Doe",
        email: "john@example.com",
        contact: "9876543210",
        name_of_trek: "Dayara Bugyal Trek",
        date_of_departure: "2025-10-15",
        number_of_people: 2,
        total_amount: 500,
        amount_paid: 500,
        invoice: "INV-12345",
      }),
      onVerified: (result, bookingData) => {
        downloadBase64Pdf(result.pdf, `${bookingData.invoice}.pdf`);
        alert("✅ Payment Successful!");
      },
      onError: (error) => {
        console.error(error);
        alert("❌ " + error.message);
      },
    });
  };

  return <button onClick={startPayment}>Pay ₹500</button>;
}

export default Payment;
