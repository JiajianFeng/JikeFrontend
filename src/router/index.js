import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import NotFound from '../pages/notFound';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Home from '../pages/home';
// import CourseDetail from '../pages/courseDetail';
// import configureStore from '../lib/redux';
// const { store, persistor } = configureStore();

const AppRouter = () => (
      <BrowserRouter>
        <div>
          <Switch>
            {/* 
            <Route path="/courses/:id" component={CourseDetail} exact />
            
             */}
            <Route path="/" component={Home} exact />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
);

export default AppRouter;
