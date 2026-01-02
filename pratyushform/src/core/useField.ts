import { useState } from "react";
import { debounce } from "../utils/debounce";
import { validateValue, FieldRules } from "./validators";

export function useField(name: string, rules: FieldRules, updateValue: any) {
  const [error, setError] = useState("");

  const validate = debounce((value: string) => {
    const result = validateValue(value, rules);
    setError(result.message);
  }, 300);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    updateValue(name, value);
    validate(value);
  }

  return { error, onChange };
}
