import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from "@testing-library/react";

const FunctionComponents = () =>
    React.createElement('h1', null, 'Заголовки');

const Element = React.createElement('p', null, 'Paragraph');

class ClassComponents extends Component{
    render() {
        return React.createElement('div', {className: 'main'}, React.createElement(FunctionComponents), Element)
    }
}

ReactDOM.render(
  <React.StrictMode>
    <ClassComponents />
  </React.StrictMode>,
  document.getElementById('root')
);
