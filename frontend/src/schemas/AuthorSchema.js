import * as yup from 'yup'

export const authorSchema = yup.object().shape({
    firstName: yup.string().required('Your first name is required'),
    lastName: yup.string().required('Your last name is required'),
    famousQuote: yup.string().required('Give us a quote here'),
    age: yup.number().positive().integer().min(18).max(99).required(),
});

// const {register, handleSubmit, formState: {errors}} = useForm({
//     resolver: yupResolver(authorSchema),
// });