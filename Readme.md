# 📦 pratyushform

`pratyushform` is a lightweight, reusable **React form validation library** built using **TypeScript**.  
It provides a custom `useForm` hook that allows developers to manage form state, validation, errors, and submission logic in a clean and scalable way.

This package is designed for learning purposes, demos, and small-to-medium React projects where full control over form logic is required.

---

## ✨ Features

- ✅ Custom `useForm` hook
- ✅ Field-based registration system
- ✅ Real-time validation and error handling
- ✅ Throttled form submission
- ✅ Fully written in TypeScript (no `any`)
- ✅ Easy to integrate with any React app
- ✅ Works with Vite, CRA, or Next.js
- ✅ Published and versioned on npm

---

## 📥 Installation

Install the package from npm:

```bash
npm install pratyushform
```
 
## 🚀 Quick Start Example

This is the minimum working example to start using pratyushform.
```bash 
import { useEffect } from "react";
import { useForm } from "pratyushform";

function App() {
  const { register, updateValue, values, errors, handleSubmit } = useForm();

  useEffect(() => {
    register("email", {
      required: true,
      minLength: 5
    });
  }, [register]);

  return (
    <div>
      <input
        placeholder="Enter email"
        value={values.email || ""}
        onChange={(e) => updateValue("email", e.target.value)}
      />

      {errors.email && <p>{errors.email}</p>}

      <button
        onClick={() =>
          handleSubmit((data) => {
            console.log("Submitted data:", data);
          })
        }
      >
        Submit
      </button>
    </div>
  );
}

export default App;

```


## 🧠 Core Hook: useForm()
The useForm() hook manages the entire form lifecycle including values, validation rules, errors, and submission logic.

```bash 
const {
  register,
  updateValue,
  values,
  errors,
  handleSubmit
} = useForm();

```