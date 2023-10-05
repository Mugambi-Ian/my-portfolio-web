import clsx from 'clsx';

interface IProps {
  number: string;
  title: string;
  white?: boolean;
}

export function AppTitle({ number, title, white }: IProps) {
  return (
    <div className="flex items-center gap-x-6 p-2.5 max-lg:p-1.5 max-md:gap-x-1">
      <h1
        className={clsx(
          'whitespace-nowrap text-xl font-black uppercase tracking-[0.2em] max-md:text-lg max-md:font-bold max-md:tracking-[0.125em]',
          !white && 'text-primary dark:text-primary-dark ',
          white && 'text-white'
        )}
      >
        {number}. {title}
      </h1>
      <span
        className={clsx(
          'h-[2px] w-[120px] max-lg:w-24 max-md:hidden',
          !white && 'bg-primary dark:bg-primary-dark',
          white && 'bg-white'
        )}
      />
    </div>
  );
}
