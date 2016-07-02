import './TriviaTracksApp.scss';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as FriendsActions from '../../actions/FriendsActions';
import { AddFriendInput, SongList, RequestList, Header } from '../../components';

class TriviaTracksApp extends Component {

  static propTypes = {
    friendList: PropTypes.object.isRequired,
    songList: PropTypes.object.isRequired,
    requestList: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {
    const { friendList: { friendsById }, songList: {songs}, requestList: {requests}, actions } = this.props;

    return (
      <div className="triviaTracksApp fixed-header menu-pin menu-behind">
        <div className="page-content-wrapper">
          <div className="content">
            <SongList songs={songs} />
            <RequestList requests={requests} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friendList: state.friendList,
    songList: state.songList,
    requestList: state.requestList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FriendsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TriviaTracksApp);
