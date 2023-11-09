import AcmeLogo from '@/app/ui/acme-logo';
import { lusitana } from '@/app/ui/fonts'
import { ModeToggle } from '@/components/mode-toogle';
// import styles from '@/app/ui/home.module.css'
import LoginForm from './ui/login-form';
import HeroImages from './ui/hero-images';

export default function Page() {
  return (
    <main className='min-h-screen'>
      <div className='w-full flex justify-between p-5 absolute'>
        <div className=''><AcmeLogo /></div>
        <ModeToggle />
      </div>
      <div
        // className="grid grid-cols-1 lg:grid-cols-13 h-screen"
        className="grid grid-cols-1 lg:grid-cols-2 h-screen"
      >
        <div
          // className="col-span-8 flex-col justify-center gap-6 bg-secondary hidden lg:flex p-11"
          className="col-span-1 flex-col justify-end gap-6 bg-secondary hidden lg:flex p-11"
        >
          {/* <HeroImages/> */}
          <p className={`${lusitana.className} text-xl text-secondary-foreground md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-primary">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
        </div>
        <div
          // className="col-span-5 flex flex-col items-center justify-center"
          className="col-span-1 flex flex-col items-center justify-center"
        >
          <LoginForm />
          {/* <div className='block lg:hidden'>
            <HeroImages/>
          </div> */}
        </div>
      </div>
    </main>
  );
}