export const multiStepFormData = [
  {
    id: 1,
    name: "Personal Info",
    fields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        value: "",
        placeholder: "Name",
        required: true,
        disabled: false,
        title: "name",
        size: "L",
        validation: ["empty", "name"],
        defaultValue: "",
        tooltipText: "Enter your full name",
        icon: "user",
        mask: null,
        conditionalVisibility: null,
        autocomplete: "name",
        options: [],
      },
      {
        name: "email",
        label: "Email",
        type: "text",
        value: "",
        placeholder: "Email",
        required: true,
        disabled: false,
        title: "Email",
        size: "L",
        validation: ["empty", "email"],
        defaultValue: "",
        tooltipText: "Enter your email address",
        icon: "mail",
        mask: null,
        conditionalVisibility: null,
        autocomplete: "email",
        options: [],
      },
      {
        name: "phonenumber",
        label: "Phone Number",
        type: "text",
        value: "",
        placeholder: "Phone Number",
        required: true,
        disabled: false,
        title: "Phone Number",
        size: "L",
        validation: ["empty", "phonenumber"],
        defaultValue: "",
        tooltipText: "Enter your phone number",
        icon: "phone",
        mask: "+99-9999999999",
        conditionalVisibility: null,
        autocomplete: "tel",
        options: [],
      },
    ],
  },
  {
    id: 2,
    name: "Address",
    fields: [
      {
        name: "street",
        label: "Street",
        type: "text",
        value: "",
        placeholder: "Street",
        required: true,
        disabled: false,
        title: "Street",
        size: "L",
        validation: ["empty"],
        defaultValue: "",
        tooltipText: "Enter your street address",
        icon: "map",
        mask: null,
        conditionalVisibility: null,
        autocomplete: "street-address",
        options: [],
      },
      {
        name: "city",
        label: "City",
        type: "text",
        value: "",
        placeholder: "City",
        required: true,
        disabled: false,
        title: "City",
        size: "L",
        validation: ["empty"],
        defaultValue: "",
        tooltipText: "Enter your city",
        icon: "building",
        mask: null,
        conditionalVisibility: null,
        autocomplete: "address-level2",
        options: [],
      },
      {
        name: "state",
        label: "State",
        type: "text",
        value: "",
        placeholder: "State",
        required: true,
        disabled: false,
        title: "State",
        size: "L",
        validation: ["empty"],
        defaultValue: "",
        tooltipText: "Enter your state",
        icon: "flag",
        mask: null,
        conditionalVisibility: null,
        autocomplete: "address-level1",
        options: [],
      },
      {
        name: "zip",
        label: "Zip",
        type: "text",
        value: "",
        placeholder: "Zip",
        required: true,
        disabled: false,
        title: "Zip",
        size: "L",
        validation: ["empty", "zip"],
        defaultValue: "",
        tooltipText: "Enter your zip code",
        icon: "hash",
        mask: "99999",
        conditionalVisibility: null,
        autocomplete: "postal-code",
        options: [],
      },
      {
        name: "country",
        label: "Country",
        type: "text",
        value: "",
        placeholder: "Country",
        required: true,
        disabled: false,
        title: "Country",
        size: "L",
        validation: ["empty"],
        defaultValue: "",
        tooltipText: "Enter your country",
        icon: "globe",
        mask: null,
        conditionalVisibility: null,
        autocomplete: "country-name",
        options: [],
      },
    ],
  },
  {
    id: 3,
    name: "Confirm",
    fields: [
      {
        name: "password",
        label: "Password",
        type: "password",
        value: "",
        placeholder: "Enter password",
        required: true,
        disabled: false,
        title: "Password",
        size: "L",
        validation: ["empty", "password"],
        defaultValue: "",
        tooltipText: "Enter a secure password",
        icon: "lock",
        mask: null,
        conditionalVisibility: null,
        autocomplete: "new-password",
        options: [],
      },
      {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        value: "",
        placeholder: "Confirm password",
        required: true,
        disabled: false,
        title: "Confirm Password",
        size: "L",
        validation: ["empty", "confirmPassword"],
        defaultValue: "",
        tooltipText: "Re-enter your password",
        icon: "lock-check",
        mask: null,
        conditionalVisibility: null,
        autocomplete: "new-password",
        options: [],
      },
      {
        name: "consent",
        label: "I agree to the Terms and Conditions",
        type: "checkbox",
        value: false,
        placeholder: "",
        required: true,
        disabled: false,
        title: "Consent",
        size: "L",
        validation: ["checked"],
        defaultValue: false,
        tooltipText: "You must agree before submitting",
        icon: "check-square",
        mask: null,
        conditionalVisibility: null,
        autocomplete: null,
        options: [],
      },
    ],
  },
];

export const formJson = {
  multilingualFields: ["name"],
  form: multiStepFormData,
};
