import React from 'react';
import ReactDOM from 'react-dom/client';
import MinhasRotas from './minhasRotas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MinhasRotas />
  </React.StrictMode>
);

function index() {
  return (
    <MinhasRotas />

  );
}

export default index;


