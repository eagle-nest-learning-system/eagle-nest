export default rules => {
  const keys = Object.keys(rules),
  validationState = {};

  for (let key of keys) {
    validationState[key] = {
      value: '',
      switcher: false,
      isFakeInvalid: false,
      isInvalid: !rules[key].optional,
      message: '',
    };
  }

  return validationState;
}