import './form-input.styles.scss';

const FormInput = ({ label, labelFor, ...otherProps }) => {
    // const { type, id, autoComplete, required, name, value, onChange } = inputOptions;
    return (
        <div className="group">
            <input className='form-input' {...otherProps} />
            {label && (
                <label
                    className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
                    htmlFor={labelFor}
                >
                    {label}
                </label>
            )}

        </div>
    );
}

export default FormInput;