import React from 'react';
import AuthForm from '../../assets/components/AuthForm/AuthForm';
import './Auth.scss';
interface Props {}

const Auth: React.FC<Props> = () => {
  return (
    <div className="Auth">
      <AuthForm />
    </div>
  );
};

export default Auth;
