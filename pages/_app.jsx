import Header from "../components/Header";
import "./global.css"

export default ({ Component, ...props }) => {
  return (
    <div>
      <Header />
      <Component {...props} />
    </div>
  );
};
