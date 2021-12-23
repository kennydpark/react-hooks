import React from 'react';
import ReactDOM from 'react-dom';
// import App from './app';
// import Form from './form';
// import Button from './count-button';
import Accordion from './accordion';

const data = [
  {
    titleId: 1,
    bodyId: 4,
    title: 'Hypertext Markup Language',
    body: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.'
  },
  {
    titleId: 2,
    bodyId: 5,
    title: 'Cascading Style Sheets',
    body: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
  },
  {
    titleId: 3,
    bodyId: 6,
    title: 'JavaScript',
    body: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
  }
];

ReactDOM.render(
  <Accordion data={data} />,
  document.querySelector('#root')
);
