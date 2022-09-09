import SignupForm from '../../components/sign-up/sign-up-form.component';
import SignIn from '../../components/sign-in/sign-in.component';
import './authentication.styles.scss';

const Authentication = () => {
    return (
        <div className='authentication-container'>
            <SignIn />
            <SignupForm />
        </div>
    );
}

export default Authentication;