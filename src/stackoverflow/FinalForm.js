import { Field, Form } from "react-final-form";

export default function App() {
  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className="App">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="firstName"
              validate={(value) =>
                ["react", "javascript"].includes(value)
                  ? "Enter some other value"
                  : undefined
              }
              format={(value) => value && value.trim()}
              formatOnBlur
            >
              {({ input, meta }) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",

                    alignItems: "center",
                  }}
                >
                  <label>First Name</label>
                  <input
                    {...input}
                    type="text"
                    placeholder="First Name"
                    style={{ margin: "8px" }}
                  />
                  {meta.error && meta.touched && (
                    <span style={{ color: "red" }}>{meta.error}</span>
                  )}
                </div>
              )}
            </Field>

            <div className="buttons" style={{ marginTop: "4px" }}>
              <button type="submit" disabled={submitting}>
                Submit
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
}
