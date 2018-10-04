import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getIsStarted, getResult } from 'redux/modules/Recognition/selectors';
import { getEngineSettingsState } from 'redux/modules/EngineSettings/selectors';

import actionCreators from 'redux/modules/actionCreators';

import Recognition from './Recognition';

const mapStateToProps = state => ({
  isStarted: getIsStarted(state),
  result: getResult(state),
  ...getEngineSettingsState(state).toJS()
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...actionCreators.recognition
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recognition);