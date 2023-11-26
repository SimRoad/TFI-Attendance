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
        "fileExist",
        "Missing Image",
        value => value && value[0]
    )
    .test(
        "fileSize",
        "File too large",
        value => value && value[0] && value[0].size <= 2000000
    )
    .test(
        "fileType",
        "Unsupported Format",
        value => value && value[0] && value[0].type.includes("image/")
    )

const employeeSchema = yup.object().shape({
    firstName: yup.string('temp').required('temp'),
    middleName: yup.string('temp').notRequired(),
    lastName: yup.string('temp').required('temp'),
    birthDate: yup.date('temp').required('temp'),
    jobPosition: yup.string('temp').required('AGHHHHHHHHHHH'),
    civilStatus: yup.string('temp').required('temp'),
    contactNumber: yup.number('temp').required('temp'),
    email: yup.string('temp').notRequired()
})

const addressSchema = yup.object().shape({
    street: yup.string('temp').required('temp'),
    barangay: yup.string('temp').required('temp'),
    province: yup.string('temp').required('temp'),
    postalCode: yup.number('temp').notRequired(),
    city_municipality: yup.string('temp').required('temp'),
})

export const employeeRegisterSchema = yup.object().shape({
    profileImage: imageUploadSchema,
    employee: employeeSchema,
    address: addressSchema,
})

export const userSchema = yup.object().shape({
    email: yup.string().email().required("Email required"),
    password: yup.string().min(4).max(15).required(),
    repeatpassword: yup.string().oneOf([yup.ref("password"), null]),
})