export const getCustomClassName = (props = {}, defaultClassName = '') => {
  const { className } = props;

  return [className, defaultClassName]
    .filter(Boolean)
    .join(' ');
};

export const onInputChange = (cb) => (e) => {
  const { value } = e.target;
  cb(value);
};
