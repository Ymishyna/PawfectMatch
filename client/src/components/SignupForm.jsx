import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { createUser } from "../utils/API";
import Auth from "../utils/auth";

const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
    isVendor: false, // Set an initial value based on your requirements
  });

  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setShowAlert(true); // Show alert for form validation errors
      return;
    }

    setLoading(true);

    try {
      const response = await createUser(userFormData);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      setShowAlert(false);

      const { token, user } = await response.json();
      Auth.login(token);
    } catch (err) {
      console.error(err);
      const errorMessage =
        err.message || "Something went wrong with your signup!";
      setShowAlert(errorMessage);
    } finally {
      setLoading(false);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
      isVendor: false,
    });
  };

  return (
    <>
      <Form className="was-validated" onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          {showAlert}
        </Alert>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="username"></Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Are you a pet Vendor?</Form.Label>
          <Form.Control
            as="select"
            name="isVendor"
            value={userFormData.isVendor}
            onChange={handleInputChange}
            required
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          disabled={
            loading ||
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password
            )
          }
          type="submit"
          variant="success"
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;
