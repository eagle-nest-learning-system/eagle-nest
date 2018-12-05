export default (rules, customState) => {
  const keys = Object.keys(rules),
    validationState = {};

  for (const key of keys) {
    validationState[key] = {
      value: rules[key].fileList ? [] : '',
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
