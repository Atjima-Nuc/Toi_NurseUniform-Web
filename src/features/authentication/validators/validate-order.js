import Joi from "joi";

const orderItemSchema = Joi.object({
  quantity: Joi.number().integer().min(1).max(100).required().message({
    "number.min": "Quantity must be at least 1",
    "number.max": "Quantity can not exceed 100",
  }),
});

const validateQuantity = (input) => {
  const { error } = orderItemSchema.validate(input, { abortEarly: false });
};

export default validateQuantity;
