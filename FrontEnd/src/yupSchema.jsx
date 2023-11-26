import * as yup from 'yup'
import validator from 'validator'

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .test('is-email', 'Please input a valid email',input=>validator.isEmail(input))
        .required(`Please input a valid email`),
    password : yup
        .string()
        .required(`Please input a password`)
})

const employeeSchema = yup.object().shape({
    firstName: yup.string().required(),
    middleName: yup.string().notRequired(),
    lastName: yup.string().required(),
    birthDate: yup.date(),
    jobPosition: yup.string(),
    currentStatus: yup.string(),
    contactNumber: yup.string(),
    email: yup.string(),
})

const addressSchema = yup.object().shape({
    street: yup.string(),
    barangay: yup.string(),
    postalCode: yup.string(),
    city_municipality: yup.string(),
    province: yup.string()
})

export const employeeRegisterSchema = yup.object().shape({
    employee: employeeSchema,
    address: addressSchema
})

export const userSchema = yup.object().shape({
    
})