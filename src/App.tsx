import * as React from 'react';
import { Helmet } from 'react-helmet';
import { hot } from 'react-hot-loader';
import { Container, Row, Col } from 'reactstrap';
import { ProfileLayout } from '@layouts';

const App: React.FC = () => (
  <Container fluid className="d-flex p-0" style={{ minHeight: '100vh' }}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{"JeongHun Kong's BlahBlah"}</title>
    </Helmet>
    <Row noGutters className="flex-fill">
      <Col xl="3" className="d-flex p-1">
        {/* 프로필 영역 */}
        <ProfileLayout />
      </Col>
      <Col xl="9" className="d-flex p-1">
        <div className="bg-secondary flex-fill"></div>
      </Col>
    </Row>
  </Container>
);

export default hot(module)(App);
