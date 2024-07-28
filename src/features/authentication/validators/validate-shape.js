import Joi from "joi";

const shapeSchema = Joi.object({
  aroundBust: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "aroundBust is required." }),
});

const validateShape = (input) => {
  const { error } = shapeSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    console.log(result);
    return result;
  }
};

export default validateShape;
