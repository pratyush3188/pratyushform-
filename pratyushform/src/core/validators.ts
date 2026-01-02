export interface FieldRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validate?: (value: string) => boolean | string;
}

export function validateValue(value: string, rules: FieldRules) {
  if (rules.required && !value.trim()) {
    return { valid: false, message: "This field isssss required." };
  }

  if (rules.minLength && value.length < rules.minLength) {
    return { valid: false, message: `Minimum length is ${rules.minLength}.` };
  }

  if (rules.maxLength && value.length > rules.maxLength) {
    return { valid: false, message: `Maximum length is ${rules.maxLength}.` };
  }

  if (rules.pattern && !rules.pattern.test(value)) {
    return { valid: false, message: "Invalid format." };
  }

  if (rules.validate) {
    const res = rules.validate(value);
    if (res !== true) return { valid: false, message: String(res) };
  }

  return { valid: true, message: "" };
}
