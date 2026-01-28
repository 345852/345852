import { useState } from 'react';
import { Film } from 'lucide-react';

interface LoginProps {
  onLoginSuccess: () => void;
  onForgotPassword: () => void;
  onRegister: () => void;
  onThirdPartyLogin: (type: 'wechat' | 'qq' | 'apple') => void;
}

export function Login({ onLoginSuccess, onForgotPassword, onRegister, onThirdPartyLogin }: LoginProps) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // 只允许数字
    if (value.length <= 11) {
      setPhone(value);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 20) {
      setPassword(value);
    }
  };

  const handleLogin = () => {
    if (!phone || !password) {
      alert('请输入手机号和密码');
      return;
    }

    if (phone.length !== 11) {
      alert('请输入正确的11位手机号');
      return;
    }

    setIsLoading(true);
    // 模拟登录请求
    setTimeout(() => {
      setIsLoading(false);
      
      // 验证账号密码
      if (phone === '18694076322' && password === '12345') {
        onLoginSuccess();
      } else {
        if (phone !== '18694076322') {
          alert('该手机号未注册，请先注册账号');
        } else if (password !== '12345') {
          alert('密码错误，请重新输入');
        }
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <div className="mb-12 text-center">
        <div className="w-20 h-20 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Film className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-3xl mb-2">影视社区</h1>
        <p className="text-gray-600">发现好电影，分享好时光</p>
      </div>

      {/* Login Form */}
      <div className="w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">手机号</label>
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="请输入手机号"
            maxLength={11}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm text-gray-700 mb-2">密码</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="请输入密码"
            maxLength={20}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={isLoading}
          className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed mb-4"
        >
          {isLoading ? '登录中...' : '登录'}
        </button>

        <div className="flex justify-between text-sm">
          <button onClick={onForgotPassword} className="text-red-500">忘记密码？</button>
          <button onClick={onRegister} className="text-red-500">注册账号</button>
        </div>

        {/* Quick Login */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 mb-4">快捷登录</p>
          <div className="flex justify-center gap-6">
            <button 
              onClick={() => onThirdPartyLogin('wechat')}
              className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600"
            >
              微
            </button>
            <button 
              onClick={() => onThirdPartyLogin('qq')}
              className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600"
            >
              Q
            </button>
            <button 
              onClick={() => onThirdPartyLogin('apple')}
              className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800"
            >
              苹
            </button>
          </div>
        </div>

        {/* Demo Hint */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-xs text-yellow-800 text-center mb-2">
            演示提示：
          </p>
          <p className="text-xs text-yellow-800 text-center">
            手机号：18694076322<br />
            密码：12345
          </p>
        </div>
      </div>
    </div>
  );
}