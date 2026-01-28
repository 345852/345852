import { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface RegisterProps {
  onBack: () => void;
  onRegisterSuccess: () => void;
}

export function Register({ onBack, onRegisterSuccess }: RegisterProps) {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // 只允许数字
    if (value.length <= 11) {
      setPhone(value);
    }
  };

  const handleSendCode = () => {
    if (phone.length !== 11) {
      alert('请输入正确的11位手机号');
      return;
    }
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    alert('验证码已发送至您的手机');
  };

  const handleRegister = () => {
    if (phone.length !== 11) {
      alert('请输入正确的11位手机号');
      return;
    }
    if (!code) {
      alert('请输入验证码');
      return;
    }
    if (password.length < 6 || password.length > 20) {
      alert('密码长度应为6-20位');
      return;
    }
    if (password !== confirmPassword) {
      alert('两次输入的密码不一致');
      return;
    }
    if (!agreedToTerms) {
      alert('请阅读并同意用户协议和隐私政策');
      return;
    }
    
    alert('注册成功！');
    onRegisterSuccess();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 pt-4 pb-3 border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">注册账号</h1>
      </div>

      <div className="px-6 py-8 space-y-6">
        <div>
          <label className="block text-sm text-gray-700 mb-2">手机号</label>
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="请输入手机号"
            maxLength={11}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">验证码</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="请输入验证码"
              maxLength={6}
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              onClick={handleSendCode}
              disabled={countdown > 0 || phone.length !== 11}
              className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {countdown > 0 ? `${countdown}秒` : '发送验证码'}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">密码</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => {
                if (e.target.value.length <= 20) {
                  setPassword(e.target.value);
                }
              }}
              placeholder="请输入密码（6-20位）"
              maxLength={20}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">确认密码</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => {
                if (e.target.value.length <= 20) {
                  setConfirmPassword(e.target.value);
                }
              }}
              placeholder="请再次输入密码"
              maxLength={20}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="terms"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="mt-1"
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            我已阅读并同意
            <button className="text-red-500 mx-1">《用户协议》</button>
            和
            <button className="text-red-500 mx-1">《隐私政策》</button>
          </label>
        </div>

        <button
          onClick={handleRegister}
          className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          注册
        </button>
      </div>
    </div>
  );
}
