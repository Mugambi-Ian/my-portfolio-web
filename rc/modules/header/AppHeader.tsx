import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

const paths = [
  {
    path: '/resume',
    title: 'Resume',
    icon: '/assets/images/profile.png',
  },
  {
    path: '/projects',
    title: 'Projects',
    icon: '/assets/images/project.png',
  },
  {
    path: '#',
    title: 'Github',
    icon: '/assets/images/github.png',
  },
  {
    path: '#',
    title: 'Figma',
    icon: '/assets/images/figma.png',
  },
];

export const AppHeader = () => {
  const { pathname } = useRouter();
  return (
    <header className="fixed inset-x-0 top-0 mx-auto flex w-full max-w-7xl rounded-b-2xl px-4">
      <span className="flex-1" />
      <div className="flex items-end">
        {paths.map((p, i) => {
          const isPath = pathname.includes(p.path);
          return (
            <Link
              href={p.path}
              key={i}
              className={clsx(
                'my-4 mx-2 flex cursor-pointer items-center gap-x-3  p-4',
                isPath && 'bg-[#e2dfff]',
                isPath && 'border-b-2 border-b-[#6C55E0] '
              )}
            >
              <img
                src={p.icon}
                alt={p.title}
                className={clsx('h-6 w-6', !isPath && 'invert')}
              />
              <label
                className={clsx(
                  'cursor-pointer px-px font-semibold',
                  isPath && ' text-[#6C55E0]',
                  !isPath && 'text-gray-800'
                )}
                htmlFor={p.path}
              >
                {p.title}
              </label>
            </Link>
          );
        })}
      </div>
    </header>
  );
};
