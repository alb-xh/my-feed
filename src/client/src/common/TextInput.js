import { getCustomClassName } from '../helpers';

export function TextInput(props) {
  const { label } = props;

  return (
    <div className={getCustomClassName(props, 'table-caption')}>
      <span>{label}</span>
      <input
        className='border-slate-600 border-2'
        type='text'
      />
    </div>
  );
}
