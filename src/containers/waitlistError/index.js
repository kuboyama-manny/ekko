import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import WaitlistErrorHandling from '../../components/waitlistError';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WaitlistErrorHandling)
);