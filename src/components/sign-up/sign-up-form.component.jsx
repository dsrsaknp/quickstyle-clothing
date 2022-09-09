import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up-form.styles.scss';

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignupForm = () => {
    const [formField, setFormField] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formField;

    // SIGN UP WITH EMAIL AND PASSWORD
    const handleSubmit = async (event) => {
        event.preventDefault();
        // check password match
        if (password !== confirmPassword) return;

        try {
            // RESPONSE user object
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            console.log(`[Successful] sign-up: ${user}`);

            await createUserDocumentFromAuth(user, { displayName });

        } catch (error) {
            alert(`Error: ${error.message}`)
            console.log(error.message);
        }
        setFormField(defaultFormField);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value });
    };

    return (
        <div className='sign-up-container'>
            <h1>Don't have an account?</h1>
            <p>Sign up using your email and password</p>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    labelFor='fld-display-name'
                    type='text'
                    id='fld-display-name'
                    autoComplete='displayName'
                    required
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                />

                <FormInput
                    label='Email'
                    labelFor='fld-email'
                    type='email'
                    id='fld-email'
                    autoComplete='email'
                    required
                    name='email'
                    value={email}
                    onChange={handleChange}
                />

                <FormInput
                    label='Password'
                    labelFor='fld-pwd'
                    type='password'
                    id='fld-pwd'
                    autoComplete='password'
                    required name='password'
                    value={password}
                    onChange={handleChange}
                />

                <FormInput
                    label='Confirm Password'
                    labelFor='fld-confirm-pwd'
                    type='password'
                    id='fld-confirm-pwd'
                    autoComplete='confirmPassword'
                    required
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                />
                <Button type='submit' buttonType='google'>Sign up</Button>
            </form>
        </div>
    )
}

export default SignupForm;