import Link from "@docusaurus/Link";
import clsx from "clsx";

interface TabMenu {
  label: string;
  url: string;
  isActive?: boolean
}

interface Props {
  tabMenuList: TabMenu[]
}

const ComponentDocTabs = (props: Props) => {
  return <div className="w-full my-5 flex gap-2 items-center border-0 border-b border-solid border-[#eaeaef]">
    {
      props.tabMenuList.map(tabMenu => 
        <Link
          className={clsx([
            'px-3 py-1 hover:no-underline font-semibold hover:text-[var(--ifm-color-primary-darkest)]',
            tabMenu.isActive ? 'border-0 border-b border-solid border-[var(--ifm-color-primary-darkest)] text-[var(--ifm-color-primary-darkest)]' : 'text-inherit' 
          ])}
          key={tabMenu.label}
          href={tabMenu.url}
        >
          {tabMenu.label}
        </Link>
      
      )
    }
  </div>
}

export default ComponentDocTabs