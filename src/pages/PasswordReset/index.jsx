import { PATHNAMES } from "@/shared/utils/constants"
import ResetPasswordForm from "@/widgets/ResetPasswordForm"
import WithLocalAuthRedirection from "@/widgets/WithLocalAuthRedirection"
import { submitPasswordResetForm } from "./model/ReactRouterActions"
import PasswordResetSuccessRoute from "./PasswordResetSuccess"
import styles from "./ui/styles.module.css"

const PasswordReset = () => {
  return (
    <section className={`${styles["password-reset"]} | form-section container`}>
      <ResetPasswordForm />
    </section>
  )
}

const WithLocalAuthRedirectionPasswordReset = () => {
  return (
    <WithLocalAuthRedirection
      resolveRedirectPath={isUserAuthenticated =>
        isUserAuthenticated ? `/${PATHNAMES.FACE_DETECTION}` : null
      }
    >
      <PasswordReset />
    </WithLocalAuthRedirection>
  )
}

const PasswordResetRoute = {
  path: PATHNAMES.PASSWORD_RESET,
  children: [
    {
      path: ":resetToken",
      element: <WithLocalAuthRedirectionPasswordReset />,
      action: submitPasswordResetForm
    },
    PasswordResetSuccessRoute
  ]
}

export default PasswordResetRoute
