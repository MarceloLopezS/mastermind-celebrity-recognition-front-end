import { PATHNAMES } from "@/shared/utils/constants"
import WithLocalAuthRedirection from "@/widgets/WithLocalAuthRedirection"
import { submitRegisterForm } from "./model/reactRouterActions"
import RegisterForm from "@/widgets/RegisterForm"
import styles from "./ui/styles.module.css"

const Register = () => {
  return (
    <section className={`${styles["register"]} form-section container`}>
      <RegisterForm />
    </section>
  )
}

const WithLocalAuthRedirectionRegister = () => {
  return (
    <WithLocalAuthRedirection
      resolveRedirectPath={isUserAuthenticated =>
        isUserAuthenticated ? `/${PATHNAMES.FACE_DETECTION}` : null
      }
    >
      <Register />
    </WithLocalAuthRedirection>
  )
}

const RegisterRoute = {
  path: PATHNAMES.REGISTER,
  element: <WithLocalAuthRedirectionRegister />,
  action: submitRegisterForm
}

export default RegisterRoute
