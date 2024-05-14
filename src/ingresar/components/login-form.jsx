"use client";

import { useState } from "react";
import EmailForm from "@/app/login/_components/validate-email";
import PasswordForm from "@/app/login/_components/validate-password";

export default function LoginFormHandler() {
  const [emailField, setEmail] = useState("");

  return emailField ? <PasswordForm email={emailField.email}/> : <EmailForm setEmail={setEmail} />;
}