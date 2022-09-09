// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

// import {
//     auth,
//     logInWithGooglePopup,
//     logInWithGoogleRedirect,
//     createUserDocumentFromAuth
// } from '../../utils/firebase/firebase.utils';

// import SignupForm from '../../components/sign-up/sign-up-form.component';
// import SignIn from '../../components/sign-in/sign-in.component';
// import './authentication.styles.scss';

// const Authentication = () => {
//     useEffect(() => {
//         // signin with redirect
//         async function getUserAuth() {
//             // RESPONSE user object
//             const {user} = await getRedirectResult(auth);
//             if (user) {
//                 await createUserDocumentFromAuth(user);
//             }
//         }
//         getUserAuth();
//     }, [])

//     sign in with popup
//     const logGoogleUser = async () => {
//         // RESPONSE user object
//         const { user } = await logInWithGooglePopup();
//         console.log(user);
//         await createUserDocumentFromAuth(user);
//     }
//     return (
//         <div className='authentication-container'>
//             <SignIn />
//             <SignupForm />
//         </div>
//     );
// }

// export default Authentication;