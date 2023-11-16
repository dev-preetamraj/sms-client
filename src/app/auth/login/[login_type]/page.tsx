import LoginForm from '@/components/LoginForm';

type Props = {
  params: {
    login_type: string;
  };
};
const StudentsLoginPage = ({ params: { login_type } }: Props) => {
  const role = login_type.toUpperCase();

  return (
    <div className='my-28'>
      <LoginForm role={role} />
    </div>
  );
};

export default StudentsLoginPage;
