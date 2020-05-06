import React from 'react';
import Header from './components/Header/Header'
import Container from './views/Container/Container'
import 'antd/dist/antd.css'; 

function App() {
  return (
    <div className="App">
      <Header/>
      <Container/>
    </div>
  );
}

export default App;
