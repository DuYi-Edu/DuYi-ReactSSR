import Header from "../components/Header";
import "./global.css";
import { Provider } from "react-redux";
import makeStore from "../store";

export default ({ Component, pageProps }) => {
  const { _initialState, ...rest } = pageProps;
  return (
    <Provider store={makeStore(_initialState)}>
      <div>
        <Header />
        <div
          style={{
            padding: 40
          }}
        >
          <Component {...rest} />
        </div>
      </div>
    </Provider>
  );
};
