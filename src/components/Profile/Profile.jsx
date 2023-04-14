import PropTypes from 'prop-types';
import {
  Avatar,
  Container,
  Description,
  Details,
  Label,
  Name,
  ProfileCard,
  Quantity,
  StatItem,
  Stats,
} from './Profile.styled';

export const Profile = ({ item }) => {
  const {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = item;

  return (
    <Container>
      <ProfileCard>
        <Description>
          <Avatar src={avatar} alt="User avatar" width="150" />
          <Name>{username}</Name>
          <Details>@{tag}</Details>
          <Details>{location}</Details>
        </Description>

        <Stats>
          <StatItem>
            <Label>Followers</Label>
            <Quantity>{followers}</Quantity>
          </StatItem>
          <StatItem>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
          </StatItem>
          <StatItem>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
          </StatItem>
        </Stats>
      </ProfileCard>
    </Container>
  );
};

Profile.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
