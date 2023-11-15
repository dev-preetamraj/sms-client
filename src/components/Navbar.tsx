import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='px-6 md:px-10 lg:px-20 py-4 backdrop-blur-md sticky top-0 border-b'>
      <Link href='/' className='text-4xl text-foreground italic'>
        SMS
      </Link>
      <ul>
        <li>
          <Link href='#'></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
