import React from 'react';
import { Container, Row } from 'reactstrap';

interface ProfileLayoutProps {
  image: string;
  name: string;
  email: string;
  instagram: string;
  github: string;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = (props) => {
  const profile = props;
  return (
    <Container>
      <Row></Row>
    </Container>
  );
};

export default ProfileLayout;
