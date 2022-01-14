import { useUser } from '../../user';
import { getCustomClassName } from '../../helpers';

import { Title } from '../../common';

export function Feed(props) {
  const { user } = useUser();

  return (
    <div className={getCustomClassName(props)}>
      <Title text='My Feed' />
      <h1>{`Welcome ${user.username}`}</h1>
    </div>
  );
}
