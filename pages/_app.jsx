import Header from "../components/Header";
import "./global.css";

export default ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <div
        style={{
          padding: 40
        }}
      >
        <Component {...pageProps} />
      </div>
    </div>
  );
};
