import { useState } from 'react';

import cx from '@/utils';

import { login } from '../../api/login';
import { useAuth } from '../../model/authState';
import { LoginStyled } from './styled';

// 상태 관리

interface Props {}

const Login = ({}: Props) => {
  const { setUser } = useAuth(); // 전역 상태 업데이트
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const user = await login(email, password); // API 호출
      setUser(user); // 로그인 성공 시 상태 업데이트
    } catch (err) {
      setError('로그인 실패. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginStyled className={cx('')}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg">
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="p-2 border rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" disabled={loading} className="p-2 bg-blue-500 text-white rounded">
          {loading ? '로그인 중...' : '로그인'}
        </button>
      </form>
    </LoginStyled>
  );
};

export default Login;
