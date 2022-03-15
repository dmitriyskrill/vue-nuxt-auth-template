import validator from 'validator'

export function isEmail (value, { message = '' } = {}) {
  const defaultMessage = 'Не корректный email'
  return validator.isEmail(value) || message || defaultMessage
}

export function isNotEmpty (value, { message = '' } = {}) {
  if (typeof value === 'number') {
    value = value.toString()
  } else if (value === undefined || value === null) {
    value = ''
  }
  const defaultMessage = 'Поле не должно быть пустым'
  return !validator.isEmpty(value) || message || defaultMessage
}


