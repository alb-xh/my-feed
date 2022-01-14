import { getCustomClassName } from '../helpers';

export function Title(props) {
  const { text } = props;

  return (
    <h1 className={getCustomClassName(props, 'font-bold text-xl')}>
      {text}
    </h1>
  );
}
