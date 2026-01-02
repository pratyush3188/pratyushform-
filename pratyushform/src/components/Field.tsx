import React from "react";
import { useField } from "../core/useField";
import { FieldRules } from "../core/validators";

interface Props {
  label: string;
  name: string;
  rules: FieldRules;
  updateValue: (name: string, value: string) => void;
}

export function Field({ label, name, rules, updateValue }: Props) {
  const { error, onChange } = useField(name, rules, updateValue);

  return (
    <div className="field-container">
      <label>{label}</label>

      <input
        name={name}
        onChange={onChange}
        className={error ? "error-shake" : ""}
      />

      {error && <p className="fade-in" style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
