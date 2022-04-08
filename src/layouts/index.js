import React, {Suspense} from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {changeLoginState} from '../actions/auth';

/**
 * header component
 */
import Header from './header';

/**
 * footer component
 */
import Footer from './footer';

/**
 * main routes
 */
import Dashboard from '../containers/dashboard';
import ConfirmWaitlist from '../containers/confirmWaitlist';
import WaitlistErrorHandling from '../containers/waitlistError';
import Error404 from '../components/error404';

const Routes = ({location, history}) => {
  return (
    <Suspense fallback={<div />}>
      <div className="route-container">
        {location.pathname !== '/' && <Header history={history} />}
        <Switch>
          <Route path="/waitlist" component={WaitlistErrorHandling} />
          <Route path="/confirm/waitlist" component={ConfirmWaitlist} />
          <Route path="/error-404" component={Error404} />
          <Route exact path="/" component={Dashboard} />
          <Redirect from="*" to="/error-404" />
        </Switch>
        <Footer history={history} location={location} />
      </div>
    </Suspense>
  )
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeLoginState: (isLoggedIn) => {
      dispatch(changeLoginState(isLoggedIn))
    }
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Routes)
);
