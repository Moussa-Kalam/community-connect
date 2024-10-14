export default function Stepper({ step }: { step: number }) {
  return (
    <ul className="steps steps-horizontal">
      <li className={`step ${step >= 1 ? "step-primary" : ""}`}>
        Personal Information
      </li>
      <li className={`step ${step >= 2 ? "step-primary" : ""}`}>
        Account Details
      </li>
      <li className={`step ${step >= 3 ? "step-primary" : ""}`}>
        Contact Information
      </li>
      <li className={`step ${step >= 4 ? "step-primary" : ""}`}>
        Account Type
      </li>
      <li className={`step ${step >= 5 ? "step-primary" : ""}`}>
        Account Security
      </li>
      <li className={`step ${step >= 6 ? "step-primary" : ""}`}>Bio</li>
    </ul>
  );
}
