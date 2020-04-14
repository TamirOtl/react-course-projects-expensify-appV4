import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter,{history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { LogIn,LogOut } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

let hasRender=false;
const hasRendered=()=>{
  if(!hasRender)
  {ReactDOM.render(jsx, document.getElementById('app'));
    hasRender=true;
  }
}
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(LogIn(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      hasRendered();
      if(history.location.pathname==='/')
      history.push('/dashboard')
      {user.displayName}
    });
  
  } else {
    store.dispatch(LogOut());
    hasRendered();
    history.push("/")
    alert("log out");
  }
});

