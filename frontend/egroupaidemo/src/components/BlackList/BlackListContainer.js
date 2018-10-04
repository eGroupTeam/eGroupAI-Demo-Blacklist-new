import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getBlackState } from 'redux/modules/BlackList/selectors';

import actionCreators from 'redux/modules/actionCreators';

import BlackList from './BlackList';

const mapStateToProps = state => ({
  blackState: getBlackState(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...actionCreators.blackList
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlackList);