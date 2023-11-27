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
    firstName: yup.string().required("Required"),
    middleName: yup.string().notRequired(),
    lastName: yup.string().required("Required"),
    birthDate: yup.date().required("Required"),
    jobPosition: yup.string().required("Required"),
    gender: yup.string().required("Required").oneOf(["male","female"], "Required"),
    civilStatus: yup.string().required("Required").oneOf(["single","married", "widowed", "legally separated"],"Required"),
    contactNumber: yup.string().required("Required").matches(/((^(\+)(\d){12}$)|(^\d{11}$))/, "Not a valid contact number"),
    email: yup.string().notRequired()
})

const addressSchema = yup.object().shape({
    street: yup.string().required('Required'),
    barangay: yup.string().required('Required'),
    province: yup.string().required('Required'),
    postalCode: yup.number().notRequired(),
    city_municipality: yup.string().required('Required'),
})

export const employeeRegisterSchema = yup.object().shape({
    profileImage: imageUploadSchema,
    employee: employeeSchema,
    address: addressSchema,
})

export const userSchema = yup.object().shape({
    email: yup.string().email("Not a valid email").required("Required"),
    password: yup.string()
        .required("Required")
        .min(4, "Password must be atleast 4 characters long")
        .max(15, "Password must not exceed 15 characters"),
    repeatpassword: yup.string().required("Required").oneOf([yup.ref("password"), null], "Password must match"),
    position: yup.string().required("Required").oneOf(["admin", "management", "suspended"], "Required"),
    // employeeId: ,
})