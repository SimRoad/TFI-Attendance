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

const imageUploadSchema = yup.mixed()
    .test(
        "fileSize",
        "File too large",
        value => value && value[0] && value[0].size <= 2000000 // 2MB
    )
    .test(
        "fileType",
        "Unsupported Format",
        value => value && value[0] && value[0].type.includes("image/")
    ).required()

const employeeSchema = yup.object().shape({
    firstName: yup.string().required(),
    middleName: yup.string().notRequired(),
    lastName: yup.string().required(),
    birthDate: yup.date().required(),
    jobPosition: yup.string().required(),
    civilStatus: yup.string().required(),
    contactNumber: yup.string().required(),
    email: yup.string(),
    profileImage: imageUploadSchema
})

const addressSchema = yup.object().shape({
    street: yup.string().required(),
    barangay: yup.string().required(),
    postalCode: yup.string(),
    city_municipality: yup.string().required(),
    province: yup.string().required()
})

export const employeeRegisterSchema = yup.object().shape({
    employee: employeeSchema,
    address: addressSchema,
})

export const userSchema = yup.object().shape({
    
})