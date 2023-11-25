import * as yup from 'yup'
import validator from 'validator'

export const loginSchema = yup.object().shape({
    email: yup.string().test('is-email', 'Please input a valid emailaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAA aaaaaaaaaaAAAAAAAAAAAAAAAAAAAA aaaaaaaaaaAAAAAAAAAAAAAAAAAAAA',input=>validator.isEmail(input)).required(`Please input a valid email`),
    password : yup.string().required(`Please input a password`)
})

//.matches(
//  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//  "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character)"