import useForm from "../hook/use-form";

const BasicForm = (props) => {

  const isnotEmpty = value => value.trim() !== ''
  const isEmail = value => value.includes('@')

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameError,
    onBlurHandler: enteredNameOnBlur,
    onValueChangeHandler: enteredNameChange,
    reset: resetEnteredName
  } = useForm(isnotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: enteredLastNameError,
    onBlurHandler: enteredLastNameOnBlur,
    onValueChangeHandler: enteredLastNameChange,
    reset: resetEnteredLastName
  } = useForm(isnotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailError,
    onBlurHandler: enteredEmailOnBlur,
    onValueChangeHandler: enteredEmailChange,
    reset: resetEnteredEmail
  } = useForm(isEmail);

  let formIsValid = false;

  if (enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(enteredName, enteredLastName, enteredEmail)
    resetEnteredName()
    resetEnteredLastName()
    resetEnteredEmail()
  }

  const firstNameClasses = enteredNameError ? 'form-control invalid' : 'form-control'
  const lastNameClasses = enteredLastNameError ? 'form-control invalid' : 'form-control'
  const emailClasses = enteredEmailError ? 'form-control invalid' : 'form-control'


  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'
            value={enteredName}
            onBlur={enteredNameOnBlur}
            onChange={enteredNameChange}

          />
          {enteredNameError && <p>Error something went wrong!</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'
            value={enteredLastName}
            onBlur={enteredLastNameOnBlur}
            onChange={enteredLastNameChange}
          />
          {enteredLastNameError && <p>Error something went wrong!</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name'
          value={enteredEmail}
          onBlur={enteredEmailOnBlur}
          onChange={enteredEmailChange}
        />
        {enteredEmailError && <p>Error something went wrong!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>


    </form>
  );
};

export default BasicForm;
