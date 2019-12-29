import React, { useState } from "react";
import "./assets/sass/index.scss";
import fakeApi from "./fakeApi";

import Header from "./components/Header";
import Post from "./components/Post";

const App = () => {
  const [posts] = useState(fakeApi);

  return (
    <>
      <Header />
      <Post posts={posts} />
    </>
  );
};

export default App;
