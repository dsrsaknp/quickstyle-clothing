import { useEffect, useState } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
    auth,
    logInAuthUserWithEmailAndPassword,
    logInWithGooglePopup,
    logInWithGoogleRedirect
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in.styles.scss';

const SignIn = () => {
    const defaultFormField = {
        email: '',
        password: '',
    }
    const [formField, setFormField] = useState(defaultFormField);
    const { email, password } = formField;

    // SIGN IN WITH REDIRECT  -> includes sign up, hence user doc needs to be created in firestore
    useEffect(() => {
        async function getUserAuth() {
            // RESPONSE user object
            const response = await getRedirectResult(auth);

            if (response) {
                console.log(`[Successful] sign-in using redirect: ${response}`);
            }
        }
        getUserAuth();
    }, []);


    // SIGN IN WITH EMAIL AND PASSWORD
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // RESPONSE user object
            const { user } = await logInAuthUserWithEmailAndPassword(email, password);
            console.log(`[Successful] sign-in with email & password: ${user}`);

            resetFormFields();

        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect paasword for email');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this mail');
                    break;
                default:
                    console.log(error);
            }
        }
    };


    // SIGN IN WITH POPUP  -> includes sign up, hence user doc needs to be created in firestore
    const logInGoogleUser = async () => {
        // RESPONSE user object
        const { user } = await logInWithGooglePopup();
        console.log(`[Successful] sign-in using Pop-up: ${user}`);
    }

    // Handler functions
    const handleChange = (event) => {
        console.log(event);
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value });
    };

    const resetFormFields = () => {
        setFormField(defaultFormField);
    };

    return (
        <div className='sign-in-container'>
            <h1>Already have an account?</h1>
            <p>Sign in using your email and password</p>
            <form onSubmit={handleSubmit}>
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
                <div>
                    <Button type='submit' buttonType='default'>Sign in with Email</Button>
                    <Button type='button' buttonType='google' onClick={logInGoogleUser}>Sign in using Google</Button>
                    <Button type='button' buttonType='inverted' onClick={logInWithGoogleRedirect}>Sign in with Redirect</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;