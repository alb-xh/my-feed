import { getCustomClassName } from '../../helpers';

export function Feed (props) {
  return (
    <div className={getCustomClassName(props)}>
      <h1>MY FEED</h1>
    </div>
  );
};
