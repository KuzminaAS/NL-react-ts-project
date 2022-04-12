/**
 * Validate Email address
 */
export const isValidEmail = (value:any) => {
  return !(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,64}$/i.test(value))
}
