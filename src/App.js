import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Layout } from './Components/Layout';
import { Home } from "./Pages/HomePage";

function App() {
  return (
    <React.Fragment>
        <Header/>
        <Layout>
          <Home/>
        </Layout>
    </React.Fragment>
  );
}

export default App;
