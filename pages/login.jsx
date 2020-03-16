import LoginForm from "../components/LoginForm";
import { connect } from "react-redux";
import { login } from "../store/actions/login";

function mapDispatch(dispatch) {
  return {
    async onSubmit(formData) {
      return await dispatch(login(formData.loginId, formData.loginPwd));
    }
  };
}

export default connect(null, mapDispatch)(LoginForm);
