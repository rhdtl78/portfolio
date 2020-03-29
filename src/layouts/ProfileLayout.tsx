import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';

const ProfileLayout: React.FC = () => (
  <div className="bg-secondary flex-fill d-flex align-items-center">
    <Container fluid className="p-0">
      <Row noGutters>
        <Col className="d-flex p-1 justify-content-center">
          <div className="bg-success" style={{ width: 100, height: 100 }}>
            Profile 사진
          </div>
        </Col>
      </Row>
      <Row noGutters>
        <Col className="d-flex p-1 justify-content-center">
          <div className="bg-success flex-fill" style={{ height: 100 }}>
            자기 소개
          </div>
        </Col>
      </Row>
      <Row noGutters>
        <Col className="d-flex p-1 justify-content-center">
          <div className="bg-success flex-fill" style={{ height: 100 }}>
            링크들
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ProfileLayout;
