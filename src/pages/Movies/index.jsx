import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../store/actions/movies";

//类组件：componentWillMount 服务端运行
//类组件：componentDidMount  服务端不运行

function Page({ movies = [], loadMovies }) {
  useEffect(() => {
    // 如果服务器处理了数据，则什么也不做
    // 如果服务器没有处理数据，则需要加载数据
    if(window.requestPath === "/movies"){
      //不需要加载数据
      console.log("不需要加载数据")
      return;
    }
    else{
      console.log("加载数据")
      loadMovies && loadMovies();
    }
  }, []);
  return (
    <div>
      <h1>电影列表</h1>
      <ul>
        {movies.map(m => (
          <li key={m._id}>{m.name}</li>
        ))}
      </ul>
    </div>
  );
}

// 在组件服务端渲染之前需要运行的函数
Page.loadData = async function(store) {
  await store.dispatch(fetchMovies());
};

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMovies() {
      dispatch(fetchMovies());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
