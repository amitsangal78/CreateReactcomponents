export const multiStepFormData = [
  {
    id: 1,
    name: "Personal Info",
    fields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        value: "", // from personalInfo.Name
        placeholder: "Name",
        required: true,
        disabled: false,
        title: "name",
        size: "L",
        validation: ["empty", "name"],
      },
      {
        name: "email",
        label: "Email",
        type: "text",
        value: "", // from personalInfo.Email
        placeholder: "Email",
        required: true,
        disabled: false,
        title: "Email",
        size: "L",
        validation: ["empty", "email"],
      },
      {
        name: "phonenumber",
        label: "Phone Number",
        type: "text",
        value: "", // from personalInfo.phoneNumber
        placeholder: "Phone Number",
        required: true,
        disabled: false,
        title: "Phone Number",
        size: "L",
        validation: ["empty", "phonenumber"],
      }
    ]
  },
  {
    id: 2,
    name: "Address",
    fields: [
      {
        name: "street",
        label: "Street",
        type: "text",
        value: "", // from address.street
        placeholder: "Street",
        required: true,
        disabled: false,
        title: "Street",
        size: "L",
        validation: ["empty"],
      },
      {
        name: "city",
        label: "City",
        type: "text",
        value: "", // from address.city
        placeholder: "City",
        required: true,
        disabled: false,
        title: "City",
        size: "L",
        validation: ["empty"]
      },
      {
        name: "state",
        label: "State",
        type: "text",
        value: "", // from address.state
        placeholder: "State",
        required: true,
        disabled: false,
        title: "State",
        size: "L",
        validation: ["empty"]
      },
      {
        name: "zip",
        label: "Zip",
        type: "text",
        value: "", // from address.zip
        placeholder: "Zip",
        required: true,
        disabled: false,
        title: "Zip",
        size: "L",
        validation: ["empty", "zip"]
      },
      {
        name: "country",
        label: "Country",
        type: "text",
        value: "", // from address.country
        placeholder: "Country",
        required: true,
        disabled: false,
        title: "Country",
        size: "L",
        validation: ["empty"]
      }
    ]
  },
  {
    id: 3,
    name: "Payment",
    fields: [
      {
        name: "cardNumber",
        label: "Card Number",
        type: "text",
        value: "", // from payment.cardNumber
        placeholder: "Card Number",
        required: true,
        disabled: false,
        title: "Card Number",
        size: "L"
      },
      {
        name: "expiryDate",
        label: "Expiry Date",
        type: "text",
        value: "", // from payment.expiryDate
        placeholder: "MM/YY",
        required: true,
        disabled: false,
        title: "Expiry Date",
        size: "L"
      },
      {
        name: "cvv",
        label: "CVV",
        type: "text",
        value: "", // from payment.cvv
        placeholder: "CVV",
        required: true,
        disabled: false,
        title: "CVV",
        size: "L"
      },
      {
        name: "billingAddress",
        label: "Billing Address",
        type: "text",
        value: "", // from payment.billingAddress
        placeholder: "Billing Address",
        required: true,
        disabled: false,
        title: "Billing Address",
        size: "L"
      }
    ]
  },
  {
    id: 4,
    name: "Review",
    fields: [
      {
        name: "password",
        label: "Password",
        type: "password",
        value: "", // from Review.password
        placeholder: "Enter password",
        required: true,
        disabled: false,
        title: "Password",
        size: "L"
      },
      {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        value: "", // from Review.confirmPassword
        placeholder: "Confirm password",
        required: true,
        disabled: false,
        title: "Confirm Password",
        size: "L"
      },
      {
        name: "checkbox",
        label: "I agree to terms",
        type: "checkbox",
        value: true, // from Review.checkbox
        required: true,
        disabled: false,
        title: "Agreement"
      }
    ]
  }
];

export const formJson = {
  multilingualFields: ["name", "description"],
  form: multiStepFormData
}
