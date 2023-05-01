import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Base from "../components/Base";
import { signUp } from "../services/user-service";

const Signup = () => {
  // set user data
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  // handle change
  const handleChange = (event, property) => {
    //dymanic settng the values
    setData({ ...data, [property]: event.target.value });
  };

  // resting data
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  // handle errors
  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  // submit the form
  const submitForm = (event) => {
    event.preventDefault();

    // if(error.isError){
    //     toast.error("Form data is invalid, correct all details then submit the form!!");
    //     return;
    // }

    console.log(data);

    // data validate

    //call server api for sending data
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("Success log");
        toast.success("User Registered Successfully!!");
        setData({
          name: "",
          email: "",
          password: "",
          about: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");

        //handle errors proper way
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h2>Fill Information to Register!!</h2>
              </CardHeader>
              <CardBody>
                {/* creating form */}
                <Form onSubmit={submitForm}>
                  {/* name field */}
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                      invalid={
                        error.errors?.response?.data?.name ? true : false
                      }
                      required
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.name}
                    </FormFeedback>
                  </FormGroup>

                  {/* email field */}
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter here"
                      id="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                      invalid={
                        error.errors?.response?.data?.email ? true : false
                      }
                      required
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.email}
                    </FormFeedback>
                  </FormGroup>
                  {/* password field */}
                  <FormGroup>
                    <Label for="password">Enter Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter here"
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      invalid={
                        error.errors?.response?.data?.password ? true : false
                      }
                      password
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.password}
                    </FormFeedback>
                  </FormGroup>

                  {/* about field */}
                  <FormGroup>
                    <Label for="about">Enter About You</Label>
                    <Input
                      type="textarea"
                      placeholder="Enter here"
                      id="about"
                      onChange={(e) => handleChange(e, "about")}
                      style={{ height: "250px" }}
                      value={data.about}
                      invalid={
                        error.errors?.response?.data?.about ? true : false
                      }
                      required
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.about}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Container>
                      <Button color="danger" outline>
                        Resgister
                      </Button>
                      <Button
                        onClick={resetData}
                        color="warning"
                        outline
                        type="reset"
                        className="ms-2"
                      >
                        Reset
                      </Button>
                    </Container>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Signup;
