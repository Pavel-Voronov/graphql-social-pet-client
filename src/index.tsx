import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import 'antd/dist/antd.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const Root = () => <App />;

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();

// add postgreSQL
// add prisma.io
// local state management apollo graphql
// docker
// styledComponents
// graphql tests
