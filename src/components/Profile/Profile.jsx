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
        <Description class="description">
          <Avatar src={avatar} alt="User avatar" width="150" />
          <Name>{username}</Name>
          <Details>@{tag}</Details>
          <Details>{location}</Details>
        </Description>

        <Stats>
          <StatItem>
            <Label class="label">Followers</Label>
            <Quantity class="quantity">{followers}</Quantity>
          </StatItem>
          <StatItem>
            <Label class="label">Views</Label>
            <Quantity class="quantity">{views}</Quantity>
          </StatItem>
          <StatItem>
            <Label class="label">Likes</Label>
            <Quantity class="quantity">{likes}</Quantity>
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
