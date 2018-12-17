import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put as dispatch, call } from 'redux-saga/effects';
// Import Axios
import axios from 'axios';

// postForm POST saga function
function* postForm(action) {
	try{
		// test trigger
		console.log('postForm triggered');
		// make axios call to database to POST form
		yield call(axios.post, '/project', action.payload);
		// dispatch to fetch_projects to display updated DOM
		yield dispatch({
			type: 'FETCH_PROJECTS'
		})
	} catch(error) {
		console.log('sentForm error:', error);
	}
}
// fetchProjects GET saga function
function* fetchProjects() {
	try{
		// test trigger
		console.log('fetchProjects triggered');
		// make axios call to database to GET projects
		const projectRes = yield call(axios.get, '/project');
		// dispatch to SET_PROJECTS
		yield dispatch({
			type: 'SET_PROJECTS',
			payload: projectRes.data
		})
	} catch(error) {
		console.log('fetchProjects error:', error);
	}
}
// deleteProjects DELETE saga function
function* deleteProjects(action) {
	try{
		// test trigger
		console.log('deleteProjects triggered');
		// make axios call to DB to DELETE project
		yield call(axios.delete, `/project/${action.payload}`);
		// dispatch to FETCH_PROJECTS
		yield dispatch({
			type: 'FETCH_PROJECTS'
		})
	} catch(error) {
		console.log('deleteProjects error:', error);
	}
}

// SAGA WATCHER
function* rootSaga() {
	// watching for POST_FORM and sedning to postForm saga
	yield takeEvery('POST_FORM',
		postForm);
	// watching for FETCH_PROJECTS and sending to fetchProjects saga
	yield takeEvery('FETCH_PROJECTS',
		fetchProjects);
	// watching for DELETE_PROJECT and sending to deleteProject saga
	yield takeEvery('DELETE_PROJECTS', 
		deleteProjects);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// REDUCERS
// Used to store projects returned from the server
const projects = (state = [], action) => {
	switch (action.type) {
		case 'SET_PROJECTS':
			return action.payload;
		default:
			return state;
	}
}
// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
// const tags = (state = [], action) => {
// 	switch (action.type) {
// 		case 'SET_TAGS':
// 			return action.payload;
// 		default:
// 			return state;
// 	}
// }

// Create one store that all components can use
const storeInstance = createStore(
	combineReducers({
		projects,
		// tags,
	}),
	// Add sagaMiddleware to our store
	applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
	document.getElementById('root'));
registerServiceWorker();
