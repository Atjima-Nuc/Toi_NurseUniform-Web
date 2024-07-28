import Joi from "joi";

const editProfileSchema = Joi.object({
  firstName: Joi.string().messages({
    "string.empty": "First name is required.",
  }),
  lastName: Joi.string().messages({ "string.empty": "Last name is required" }),
  username: Joi.string().messages({ "string.empty": "Username is required" }),
  phoneNo: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .messages({ "string.empty": "Mobile number is required." }),
  email: Joi.string().email({ tlds: false }),
  sex: Joi.string().strip(),
});

const validateEditProfile = (input) => {
  const { error } = editProfileSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    console.log(result);
    return result;
  }
};

export default validateEditProfile;
