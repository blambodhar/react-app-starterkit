/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

ReactDOM.render(<div>Hello</div>, document.getElementById('app'));
