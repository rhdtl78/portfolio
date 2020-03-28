import React from 'react';
import { Container, Row } from 'reactstrap';

interface ProfileProps {
  image: string;
  name: string;
  email: string;
  instagram: string;
  github: string;
}

const Profile: React.FC<ProfileProps> = (props) => {
  const profile = props;
  return (
    <Container>
      <Row></Row>
    </Container>
  );
};

export default Profile;
