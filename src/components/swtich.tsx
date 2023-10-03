import clsx from 'clsx';

interface IProps {
  id: string;
  value: boolean;
  disabled?: boolean;
  onChange: (x: boolean) => void;
}

export function Switch({ id, value, onChange, disabled }: IProps) {
  return (
    <>
      <span title={id} />
      <button
        disabled={disabled}
        className={clsx('switch', value && 'active')}
        onClick={() => {
          onChange(!value);
        }}
      />
    </>
  );
}
