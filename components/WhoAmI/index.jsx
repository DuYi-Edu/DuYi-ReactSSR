import { useEffect } from "react";
import * as actions from "../../store/actions/login";
import { connect } from "react-redux";
const Comp = ({whoAmI}) => {
  useEffect(() => {
    whoAmI && whoAmI();
  }, []);
  return <></>;
};

function mapDispatch(dispatch) {
  return {
    whoAmI() {
      dispatch(actions.whoAmi());
    }
  };
}

export default connect(null, mapDispatch)(Comp);
