import Header from "../components/Header";

export default ({ Component, ...props }) => {
  console.log(props)
  return (
    <div>
      <Header />
      <Component {...props} />
    </div>
  );
};
