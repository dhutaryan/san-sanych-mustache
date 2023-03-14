import { GoogleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { useAuth } from '@entities/auth';

export const GoogleLoginButton = () => {
  const { signInWithGoogle, isPending } = useAuth();

  return (
    <Button
      type="primary"
      icon={<GoogleOutlined />}
      loading={isPending}
      onClick={signInWithGoogle}
    >
      Войти
    </Button>
  );
};
