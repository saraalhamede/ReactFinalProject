import * as yup from "yup";
export const basicSchema = yup.object().shape({
    firstName: yup.string().required("Enter Your Fisrt Name").min(2),
    middleName: yup.string().required("Enter Your middle Name").min(2),
    lastName: yup.string().required("Enter Your Last Name").min(2),
    phone: yup.number().positive().required().max(10),
    email: yup.string().email("user mail must be a vaild mail").required(),
    password: yup
        .string()
        .required("Please enter your password")
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[*_0&^%$#@!])(?=.*.{4,}).{8,}$/,
            "user password must be ar least nine characters long and cotain an uppercases letter, a lowercase letter, a number and one of the following characters !@#$%^&*-"
        )
        .min(8),
    imageUrl: yup.string().required().min(2),
    imageAtl: yup.string().required().min(2),
    state: yup.string().required().min(2),
    country: yup.string().required().min(2),
    city: yup.string().required().min(2),
    street: yup.string().required().min(2),
    houseNumber: yup.number().positive().required().min(1),
    zip: yup.number().positive().required().min(1)
});