import { useCallback } from "react"
import { useFetcher, Link } from "react-router-dom"
import { PATHNAMES } from "@/shared/utils/constants"
import {
  isValidEmail,
  getInvalidEmailError,
  isValidInputString
} from "@/shared/utils/functions"
import Form, {
  useInputValidationHandler,
  handleFormValidation,
  handleInputServerErrors
} from "@/shared/ui/Form"
import Input from "@/shared/ui/Input"
import DoubleSquareLoader from "@/shared/ui/DoubleSquareLoader"
import styles from "./ui/styles.module.css"

const LoginForm = () => {
  const fetcher = useFetcher()
  const actionResponse = fetcher.data
  const emailHandler = useInputValidationHandler(
    isValidEmail,
    getInvalidEmailError
  )
  const passwordHandler = useInputValidationHandler(isValidInputString)
  const formInputHandlers = [emailHandler, passwordHandler]

  if (actionResponse?.status === "user-errors") {
    const userErrors = Object.entries(actionResponse.errors)
    handleInputServerErrors({ errors: userErrors, formInputHandlers })
  }

  const submitDataToFetcher = useCallback(event => {
    event.preventDefault()
    const isFormValid = handleFormValidation(...formInputHandlers)

    if (!isFormValid) return

    const loginData = {
      email: emailHandler.inputRef.current.value,
      password: passwordHandler.inputRef.current.value
    }
    const options = {
      method: "post",
      action: `/${PATHNAMES.LOGIN}`
    }
    fetcher.submit(loginData, options)
  }, [])

  return (
    <Form
      className={`${styles["log-in__form"]} | form-section__form`}
      onSubmit={submitDataToFetcher}
    >
      <h2 className="justify-self-center">
        Enter your account credentials to access celebrity face detection
      </h2>
      <div className="form-group">
        <label htmlFor="user-email">Email:</label>
        <Input
          ref={emailHandler.inputRef}
          onChange={() => !emailHandler.isValid && emailHandler.validate()}
          isValid={emailHandler.isValid}
          type="text"
          id="user-email"
          name="user-email"
          maxLength="100"
          placeholder={emailHandler.errorMessage || "Please enter your email"}
        />
      </div>
      <div className="form-group">
        <label htmlFor="user-password">Password:</label>
        <Input
          ref={passwordHandler.inputRef}
          onChange={() =>
            !passwordHandler.isValid && passwordHandler.validate()
          }
          isValid={passwordHandler.isValid}
          type="password"
          id="user-password"
          name="user-password"
          placeholder={
            passwordHandler.errorMessage || "Please enter your password"
          }
        />
      </div>
      <div className="login__action">
        <button
          className="justify-self-center"
          type="submit"
          disabled={fetcher.state === "submitting"}
        >
          Log In
        </button>
        <div className="response">
          <DoubleSquareLoader isShown={fetcher.state === "submitting"} />
          <div
            className="server-response secondary-text"
            data-danger={
              actionResponse && fetcher.state !== "submitting" ? true : null
            }
          >
            {fetcher.state !== "submitting"
              ? actionResponse?.fail?.message ||
                actionResponse?.clientError?.message
              : null}
          </div>
        </div>
      </div>
      <Link
        className="form-switch | secondary-text justify-self-center text-underline"
        to="/forgot-password"
      >
        Forgot your password?
      </Link>
      <span className="secondary-text justify-self-center">
        Don't have an account yet?
      </span>
      <Link
        className="form-switch | secondary-text justify-self-center text-underline"
        to="/register"
      >
        Register
      </Link>
    </Form>
  )
}

export default LoginForm
