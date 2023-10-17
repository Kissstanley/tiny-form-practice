import Joi from "joi";

export const schema = Joi.object({
        amount: Joi.string()
            .min(0)
            .pattern(/^[$]\d+(\.\d{1,2})?$/).message('incorrect data or $ expected at start')
            .required()
            .label('amount'),

        fromAccount: Joi.string()
            .required()
            .label('fromAccount'),

        payment: Joi.string()
            .required()
            .label('payment'),

        note: Joi.number()
            .min(1)
            .max(31)
            .required()
            .label('note')
    },

)
