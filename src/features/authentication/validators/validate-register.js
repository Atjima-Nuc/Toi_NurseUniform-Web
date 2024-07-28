import Joi from "joi";

const registerSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "First name is required." }),
  lastName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "Last name is required" }),
  username: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "Username is required" }),
  phoneNo: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({ "string.empty": "Mobile number is required." }),
  password: Joi.string()
    .required()
    .pattern(/^[0-9a-zA-Z]{6,}$/)
    .messages({
      "string.empty": "password is required",
      "string.pattern.base":
        "password must be at least 6 characters and contain only alphabet and number.",
    }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "string.empty": "password is required.",
    "any.only": "password and confirm password did not match.",
  }),
  email: Joi.string().email({ tlds: false }),
  sex: Joi.string().valid("Male", "Female"),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    console.log(result);
    return result;
  }
};

export default validateRegister;
