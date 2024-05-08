import { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

interface Link {
  icon?: ReactNode
  label: string;
  url: string;
}

interface Props {
  links: Link[]
}

const ComponentDocLinks = (props: Props) => {
  return <div className="w-full mb-5 flex gap-3 items-center">
    {
      props.links.map(link => 
        <Link
          className={
            clsx([
              'flex items-center gap-2 text-sm px-3 py-1 border border-solid border-[var(--pui-soft-border)] rounded-lg text-[#737373]',
              'hover:no-underline hover:text-[var(--ifm-color-primary-darkest)] hover:border-[var(--ifm-color-primary)]'
            ])
          }
          target='_blank'
          key={link.label}
          href={link.url}
        >
          <div className='h-[1rem] min-w-[1rem]'>{link.icon}</div>
          <div>{link.label}</div>
        </Link>
      )
    }
  </div>
}

export default ComponentDocLinks