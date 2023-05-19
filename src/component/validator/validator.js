export const validate = (name, value, validators) => {

  const valid = { invalid: false, invalidText: undefined };

  if (!validators) {
    return valid;
  }

  for (const validator of validators) {

    if (validator.name === 'required') {
      if (!value || (typeof value === 'string' && !value.trim())) {
        return {
          invalid: true,
          invalidText: `${name} is required`
        };
      }
      if (!value || (value instanceof Array && value.length === 0)) {
        return {
          invalid: true,
          invalidText: `${name} is required`
        };
      }
    }

    if (validator.name === 'max') {
      if (value.length > validator.length) {
        return {
          invalid: true,
          invalidText: `${name} exceeds max length(${validator.length})`
        };
      }
    }

    if (validator.name === 'eq') {
      if (value.length !== validator.length) {
        return {
          invalid: true,
          invalidText: `${name} length is not equals(${validator.length})`
        };
      }
    }

    if (validator.name === 'email') {
      const regexp = new RegExp('^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$');
      if (!regexp.test(value)) {
        return {
          invalid: true,
          invalidText: `${name} + ' is not a valid email address.'}`
        };
      }
    }

    if (validator.name === 'digit') {
      const regexp = new RegExp('^[0-9]*$');
      if (validator.min && value < validator.min) {
        return {
          invalid: true,
          invalidText: `${name} less min(${validator.min})`,
          invalidType: 'digitErr'
        };
      }
      if (!regexp.test(value)) {
        return {
          invalid: true,
          invalidText: `${name} is not digit`,
          invalidType: 'digitErr'
        };
      }
    }
  }

  return valid;
}

export const validateMany = (object, validation) => {
  let valid = true, error = undefined;

  Object.values(validation).forEach(item => {
    if (item.validators) {
      const result = validate(item.name, object[item.id], item.validators);
      valid = valid && !result.invalid;
      if (result.invalid) {
        error = {
          ...error, [item.id]: {
            ...item, invalid: result.invalid, invalidText: result.invalidText
          }
        }
      }
    }
  })

  return { valid: valid, error: error }
}