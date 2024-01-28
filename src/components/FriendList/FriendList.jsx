import {
  FriendsList,
  FriendsListItem,
  FriendImage,
  SpanItem,
  SpanItemPunto,
} from './FriendList.style';

const FriendIsOnline = isOnline => {
  if (isOnline) {
    return '#31E804';
  }
  return '#E82C04';
};

const FriendList = ({ friend }) => {
  return (
    <FriendsList className="friend-list">
      {friend.map(datos => (
        <FriendsListItem key={datos.id}>
          <SpanItemPunto
            style={{ backgroundColor: FriendIsOnline(datos.isOnline) }}
          >
            .
          </SpanItemPunto>
          <FriendImage src={datos.avatar} />
          <SpanItem>{datos.name}</SpanItem>
        </FriendsListItem>
      ))}
    </FriendsList>
  );
};

export default FriendList;
