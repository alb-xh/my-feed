export const getCustomClassName = (props = {}, defaultClassName = '') => {
  const { className } = props;

  return [ className, defaultClassName ]
    .filter(Boolean)
    .join(' ');
};