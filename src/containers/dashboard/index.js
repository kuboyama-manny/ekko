import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Dashboard from '../../components/dashboard';

import {changeScrollFocus, subscribeWaitlist} from '../../actions/auth';

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  currentScrollFocus: state.auth.currentScrollFocus,
});

const mapDispatchToProps = (dispatch) => ({
  changeScrollFocus: (value) => {
    dispatch(changeScrollFocus(value));
  },
  subscribeWaitlist: (data) => {
    return dispatch(subscribeWaitlist(data));
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);