import React, { useEffect } from "react";
import { Form } from "../components";
import profile from "../assets/images/farmer.png";

export default function FormContainer() {
  useEffect(() => {
    const Script = document.createElement("script");
    const Form = document.getElementById("donateForm");
    Script.setAttribute(
      "src",
      "https://checkout.razorpay.com/v1/payment-button.js"
    );
    Script.setAttribute("data-payment_button_id", "pl_IX1W6uPWuOFLbK");
    Form.appendChild(Script);
  }, []);

  return (
    <Form id="donateForm">
      <Form.Text>
        According to India’s National Crime Records Bureau, since 1994, a farmer
        commits suicide every 41 minutes
      </Form.Text>

      <Form.Pane />
      <Form.Profile src={profile} />
      <Form.Pane />

      <Form.Text>
        <Form.Span>
          Once in your life, you need a doctor, a lawyer, a policeman and a
          preacher. But everyday, three times a day, you need a FARMER. Help us
          save them!
        </Form.Span>
      </Form.Text>
      <Form.Pane />
    </Form>
  );
}
