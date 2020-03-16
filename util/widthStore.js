import makeStore from "../store";
import { getServerInstance } from "../services/request";

export default function(func) {
  return async function(props) {
    const store = makeStore();
    props.store = store;
    const axios = getServerInstance(props.req);
    props.axios = axios;
    let result = await func(props);
    result = result || {};
    return {
      props: {
        _initialState: store.getState(),
        ...result
      }
    };
  };
}
