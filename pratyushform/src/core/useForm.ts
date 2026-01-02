import { useState, useCallback } from "react";
import { validateValue, FieldRules } from "./validators";
import { throttle } from "../utils/throttle";

type FormValues = Record<string, string>;

export function useForm() {
  const [values, setValues] = useState<FormValues>({});
  const [errors, setErrors] = useState<FormValues>({});
  const [rules, setRules] = useState<Record<string, FieldRules>>({});

  const register = useCallback(
    (name: string, fieldRules: FieldRules) => {
      setRules((prev) => {
        // prevent unnecessary updates
        if (prev[name]) return prev;
        return { ...prev, [name]: fieldRules };
      });

      return { name };
    },
    []
  );

  const updateValue = useCallback(
    (name: string, value: string) => {
      setValues((prev) => ({ ...prev, [name]: value }));

      const result = validateValue(value, rules[name]);
      setErrors((prev) => ({ ...prev, [name]: result.message }));
    },
    [rules]
  );

  const handleSubmit = throttle(
    (callback: (values: FormValues) => void) => {
      for (let name in rules) {
        const result = validateValue(values[name], rules[name]);
        if (!result.valid) {
          alert("Form contains errors!");
          return;
        }
      }
      callback(values);
    },
    700
  );

  return { register, updateValue, values, errors, handleSubmit };
}
