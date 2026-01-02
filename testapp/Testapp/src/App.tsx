import { useEffect } from "react";
import { useForm } from "pratyushform";
import "./App.css";

function App() {
  const { register, updateValue, values, errors, handleSubmit } = useForm();
  useEffect(() => {
    register("email", {
      required: true,
      minLength: 5
    });
  }, [register]);

  return (
    <div id="root">
      <div className="form-card">
        <h2>Form Validator Demo</h2>
        <p>
          Testing npm package: <b>pratyushform</b>
        </p>

        <div className="form-group">
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={values.email || ""}
            onChange={(e) => updateValue("email", e.target.value)}
          />

          {errors.email && (
            <span className="error-text">{errors.email}</span>
          )}
        </div>

        <button
          className="submit-btn"
          onClick={() =>
            handleSubmit((data: Record<string, string>) => {
              console.log("Submitted data:", data);
              alert("Form submitted successfully!");
            })
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
