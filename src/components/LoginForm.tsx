'use client';

import { useLoginMutation } from '@/features/services/apiSlices/authApiSlice';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';

type Props = {
  role: string;
};

type Inputs = {
  email: string;
  password: string;
  remember: 'on' | 'off';
};

const urlBuilder = (role: string) => {
  switch (role) {
    case 'ADMIN':
      return '/dashboard';
    case 'STUDENT':
      return '/students/dashboard';
    case 'TEACHER':
      return '/teachers/dashboard';
    case 'GUEST':
      return '/guests/dashboard';
    default:
      return '/';
  }
};

const LoginForm = ({ role }: Props) => {
  const router = useRouter();
  const [loginUser, result] = useLoginMutation();
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    loginUser({
      email: data.email,
      password: data.password,
      role,
    })
      .unwrap()
      .then((res) => {
        toast.success(res.message);
        console.log(urlBuilder(role));

        router.push(urlBuilder(role));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col space-y-6 border p-10 rounded-md mx-6 md:mx-auto md:max-w-md'
    >
      <div className='flex flex-col space-y-4'>
        <label htmlFor='email'>Email</label>
        <Input
          placeholder='example@sms.com'
          type='text'
          {...register('email')}
        />
        {errors.email && (
          <p className='text-sm text-destructive text-justify'>
            {errors.email?.message}
          </p>
        )}
      </div>

      <div className='flex flex-col space-y-4'>
        <div className='flex items-center justify-between'>
          <label htmlFor='password'>Password</label>
          {seePassword ? (
            <EyeOpenIcon
              className='h-4 w-4 cursor-pointer'
              onClick={() => setSeePassword(false)}
            />
          ) : (
            <EyeClosedIcon
              className='h-4 w-4 cursor-pointer'
              onClick={() => setSeePassword(true)}
            />
          )}
        </div>
        <Input
          placeholder='Password'
          type={seePassword ? 'text' : 'password'}
          {...register('password')}
        />
        {errors.password && (
          <p className='text-sm text-destructive text-justify'>
            {errors.password?.message}
          </p>
        )}
      </div>
      <div className='flex items-center space-x-2'>
        <Checkbox
          {...register('remember')}
          onClick={() => register('remember')}
        />
        <label
          htmlFor='terms'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          Remember me
        </label>
      </div>
      <Button type='submit'>{result.isLoading ? 'Loging...' : 'Login'}</Button>

      <div className='pt-4'>
        <p className='text-sm text-center'>
          In case of any query or technical query, contact{' '}
          <Link href='#' className='text-primary'>
            techsupport@sms.com
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
