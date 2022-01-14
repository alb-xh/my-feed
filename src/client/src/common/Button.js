import { getCustomClassName } from '../helpers';

export function Button(props) {
  const {
    text,
    onClick,
  } = props;

  return (
    <button
      type='button'
      className={getCustomClassName(props, 'block')}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
