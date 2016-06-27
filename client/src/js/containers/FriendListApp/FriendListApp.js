import './TriviaTracksApp.scss';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as FriendsActions from '../../actions/FriendsActions';
import { AddFriendInput, TopBar, SongList } from '../../components';

class FriendListApp extends Component {

  static propTypes = {
    friendList: PropTypes.object.isRequired,
    songList: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {
    const { friendList: { friendsById }, songList: {songsById}, actions } = this.props;

    return (
      <div className="triviaTracksApp">
        <TopBar />
        <SongList songs={songsById} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friendList: state.friendList,
    songList: state.songList
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
)(FriendListApp);
