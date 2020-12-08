export default function Copyright() {
  return (
    <>
      <Container>
  
  <Row>
    <Col><Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home">Active</Nav.Link>
  <Nav.Link eventKey="link-1">Link</Nav.Link>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav></Col>
    <Col><Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home">Active</Nav.Link>
  <Nav.Link eventKey="link-1">Link</Nav.Link>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav></Col>
    <Col><Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home">Active</Nav.Link>
  <Nav.Link eventKey="link-1">Link</Nav.Link>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav></Col>
  </Row>
</Container>
      <p>&copy; 2020</p>
      <style jsx>
        {`
          p {
            font-size: 0.75rem;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
