import { getCustomClassName } from '../helpers';

export function TextInput(props) {
  const {
    label,
    value,
    type = 'text',
    onChange = null,
  } = props;

  return (
    <div className={getCustomClassName(props, 'table-caption')}>
      <span>{label}</span>
      <input
        className='border-slate-600 border-2'
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
