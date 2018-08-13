import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Principal from './PrimerComponente';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Principal />, document.getElementById('root'));
registerServiceWorker();
