import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/counter";
import makeStore from "../store";

function Page({ number, increase, decrease, asyncIncrease, asyncDecrease }) {
  return (
    <div>
      <h1>{number}</h1>
      <p>
        <button onClick={asyncDecrease}>异步减</button>
        <button onClick={decrease}>减</button>
        <button onClick={increase}>加</button>
        <button onClick={asyncIncrease}>异步加</button>
      </p>
    </div>
  );
}

function mapState(state) {
  return {
    number: state.counter
  };
}
function mapDispatch(dispatch) {
  return {
    increase() {
      dispatch(actions.increase());
    },
    decrease() {
      dispatch(actions.decrease());
    },
    asyncIncrease() {
      dispatch(actions.asyncIncrease());
    },
    asyncDecrease() {
      dispatch(actions.asyncDecrease());
    }
  };
}

const Wrapper = connect(mapState, mapDispatch)(Page);

export default Wrapper;

export async function getServerSideProps() {
  const store = makeStore();
  await store.dispatch(actions.asyncIncrease());
  // 仓库有数据了
  return {
    props: {
      _initialState: store.getState()
    }
  };
}
