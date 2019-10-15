import React from 'react';
import ReactDOM from 'react-dom';
import "./App.sass";
import Header from "./components/header";
import Footer from "./components/footer";
import Contents from "./components/content";

const App = () => {
    return(
        <div>
          <Header/>
          <Contents/>
          <Footer/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

