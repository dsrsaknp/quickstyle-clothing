import {
    BaseButton,
    DefaultButton,
    GoogleSignInButton,
    InvertedButton
} from './button.styles';

// import './button.styles.scss';

// default
// inverted
// google sign in


// export const BUTTON_TYPE_CLASSES = {
//     base: 'base',
//     google: 'google-sign-in',
//     inverted: 'inverted',
//     default: 'default'
// }

const BUTTON_TYPE_CLASSES = {
    base: BaseButton,
    google: GoogleSignInButton,
    inverted: InvertedButton,
    default: DefaultButton
};

// Created this method only to set base value when no buttonType is received
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
    return BUTTON_TYPE_CLASSES[buttonType];
}

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherProps}>{children}</CustomButton>
    )
}

export default Button;