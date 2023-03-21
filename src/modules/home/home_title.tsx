interface IProps {
  number: string;
  title: string;
}

export function HomeTitle({ number, title }: IProps) {
  return (
    <div className="flex items-center gap-x-6 p-2.5 ">
      <h1 className="text-xl font-black uppercase tracking-[0.2em] text-primary dark:text-primary-dark">
        {number}. {title}
      </h1>
      <span className="h-[2px] w-[120px] bg-primary dark:bg-primary-dark" />
    </div>
  );
}
