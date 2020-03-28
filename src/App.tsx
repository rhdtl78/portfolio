import React from 'react';
import { Helmet } from 'react-helmet';
import { hot } from 'react-hot-loader';

const App: React.FC = () => (
  <div className="App">
    <Helmet>
      <meta charSet="utf-8" />
      <title>{"JeongHun Kong's BlahBlah"}</title>
    </Helmet>
  </div>
);

export default hot(module)(App);
