export default (rules, customState) => {
  const keys = Object.keys(rules);
  const validationState = {};

  for (const key of keys) {
    validationState[key] = {
      value: '',
      isFileList: false,
      switch: false,
      isFakeInvalid: false,
      isInvalid: !rules[key].optional,
      message: '',
      ...customState,
    };
  }

  return validationState;
};
