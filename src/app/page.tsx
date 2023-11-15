import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='px-6 md:px-10 lg:px-20 py-4 flex flex-col space-y-2'>
      <h1 className='text-foreground text-center text-3xl'>
        Welcome to Students Management System
      </h1>

      <div className='pt-20 md:pt-36 grid grid-cols-1 md:grid-cols-2 gap-10'>
        <Link
          href='/auth/login/student'
          className='p-10 border rounded-lg cursor-pointer hover:scale-105 ease-out duration-300'
        >
          Login to Student&apos;s Portal
        </Link>
        <Link
          href='/auth/login/teacher'
          className='p-10 border rounded-lg cursor-pointer hover:scale-105 ease-out duration-300'
        >
          Login to Teacher&apos;s Portal
        </Link>
        <Link
          href='/auth/login/admin'
          className='p-10 border rounded-lg cursor-pointer hover:scale-105 ease-out duration-300'
        >
          Login to Admin&apos;s Portal
        </Link>
        <Link
          href='/auth/login/guest'
          className='p-10 border rounded-lg cursor-pointer hover:scale-105 ease-out duration-300'
        >
          Login as Guest
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
