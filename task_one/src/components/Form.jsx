import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormContainer() {
  return (
    <Container
      style={{
        marginTop: "100px",
        alignItems: "center",
        justifyContent: "center",
        width: 400,
        backgroundColor: "#212121",
        borderRadius: "15px",
        display: "flex",
        border: "2px solid #ffffff",
      }}
    >
      <Form>
        <fieldset enabled>
          <Form.Group className="mb-3" style={{ margin: "20px" }}>
            {["radio"].map((type) => (
              <div className="mb-3">
                <Form.Label
                  htmlFor="disabled_text_input"
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Purpose:
                </Form.Label>
                <br />
                <Form.Check
                  inline
                  style={{ color: "white" }}
                  label="Client"
                  name="client"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  style={{ color: "white" }}
                  label="Group"
                  name="group"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  style={{ color: "white" }}
                  label="Agent"
                  name="agent"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
          </Form.Group>
          <Form.Group className="mb-3" style={{ margin: "20px" }}>
            <Form.Label
              htmlFor="disabled_text_input"
              style={{
                fontFamily: "sans-serif",
                fontWeight: "bold",
                color: "white",
              }}
              name="title_label"
            >
              Label:
            </Form.Label>
            <Form.Control id="disabled_text_input" />
            <Form
              name="label_caption_label"
              className="text"
              style={{
                marginTop: "10px",
                fontFamily: "sans-serif",
                color: "#757575",
              }}
            >
              Please write label to here.
            </Form>
          </Form.Group>
          <Form.Group className="mb-3" style={{ margin: "20px" }}>
            <Form.Label
              htmlFor="disabled_text_input"
              name="title_key"
              style={{
                fontFamily: "sans-serif",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Key:
            </Form.Label>
            <Form.Control id="disabled_text_input" />
            <Form
              name="label_caption_key"
              className="text"
              style={{
                marginTop: "10px",
                fontFamily: "sans-serif",
                color: "#757575",
              }}
            >
              Please write label to here.
            </Form>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{ margin: "20px", fontFamily: "sans-serif" }}
          >
            {["radio"].map((type) => (
              <div className="mb-3">
                <Form.Label
                  name="status"
                  htmlFor="disabled_text_input"
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Status:
                </Form.Label>
                <br />
                <Form.Check
                  inline
                  style={{ color: "white" }}
                  label="Active"
                  name="active"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  style={{ color: "white" }}
                  label="Passive"
                  name="passive"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form.Group>

          <Button
            name="save_button"
            type="submit"
            style={{
              width: "350px",
              height: "50px",
              margin: "20px",
              backgroundColor: "green",
              fontFamily: "sans-serif",
              border: "1px solid #008000",
            }}
          >
            Save
          </Button>
        </fieldset>
      </Form>
    </Container>
  );
}

export default FormContainer;
