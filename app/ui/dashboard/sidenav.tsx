import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import { ModeToggle } from '@/components/mode-toogle';

export default function SideNav() {
  return (
      //py-4
    <div className="flex h-full flex-col px-3  md:px-2">
      <Link
        className="hidden mb-2 md:flex h-20 items-end justify-start rounded-md bg-primary p-4 md:h-40"
        href="/dashboard"
      >
        <div className="w-32 md:w-40">
          <AcmeLogo 
            classNames='text-primary-foreground'
          />
        </div>
      </Link>
      <div
        // className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2"
        className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2"
      >
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-background md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
          className='flex gap-1 items-center justify-between'
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-background p-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
          <ModeToggle />
        </form>
      </div>
    </div>
  );
}
