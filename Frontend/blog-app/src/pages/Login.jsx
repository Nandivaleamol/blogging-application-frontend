import { Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Label, Row, Form, Button } from "reactstrap";
import Base from "../components/Base";

const Login = () => {
  return (
    <Base>
      <Container>
        <Row className="mt-3">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h2>Login Here</h2>
              </CardHeader>
              <CardBody>
                {/* login form */}
                <Form>
                    {/* email field */}
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            placeholder="Enter here"
                            id="email"
                        />
                    </FormGroup>

                    {/* password field */}
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input 
                            type="password"
                            placeholder="Enter here"
                            id="password"
                        />
                    </FormGroup>

                    <Container className="text-center">
                         {/* Login button */}
                        <FormGroup>
                            <Button color="danger" outline>Login</Button>
                            <Button className="ms-2" color="warning" outline type="reset">Reset</Button>
                        </FormGroup>
                    </Container>
                </Form>
                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Login;
