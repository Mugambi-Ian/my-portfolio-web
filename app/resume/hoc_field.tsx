import type { FC, ReactNode } from 'react';
import { Fragment } from 'react';

interface IResumeField {
  title: string;
  icon: string;
  children: ReactNode;
  showMargin?: boolean;
}

export const ResumeField: FC<IResumeField> = ({
  icon,
  title,
  children,
  showMargin,
}) => (
  <Fragment>
    <span
      className="my-4 h-px w-full max-w-7xl self-center bg-gray-300"
      id={title.replace(' ', '_').toLowerCase()}
    />
    <section className="flex w-full max-w-7xl flex-col gap-y-3 self-center px-2 lg:flex-row lg:gap-x-6 lg:gap-y-0">
      <div className="flex basis-1/5">
        <img className="h-5 w-5" src={icon} alt={title} />
        <h5 className="ml-4 flex-1  whitespace-nowrap text-sm font-semibold text-gray-600 ">
          {title}
        </h5>
        {showMargin && (
          <span className="relative hidden h-full w-4 flex-col items-center self-center lg:flex">
            <span className="absolute h-3 w-3 rounded-2xl bg-[#6C55E0]" />
            <span className="h-full w-[2px] bg-gray-300" />
          </span>
        )}
      </div>
      <div className="flex basis-4/5 flex-col">{children}</div>
    </section>
  </Fragment>
);
