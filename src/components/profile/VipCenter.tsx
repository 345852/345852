import { ArrowLeft, Crown, Check } from 'lucide-react';

interface VipCenterProps {
  onBack: () => void;
}

export function VipCenter({ onBack }: VipCenterProps) {
  const benefits = [
    '无广告观影体验',
    '1080P高清画质',
    '提前看新片',
    '专属会员标识',
    '专属客服服务',
    '会员专享活动'
  ];

  const plans = [
    {
      duration: '月度会员',
      price: '15',
      originalPrice: '30',
      popular: false
    },
    {
      duration: '季度会员',
      price: '38',
      originalPrice: '90',
      popular: true
    },
    {
      duration: '年度会员',
      price: '128',
      originalPrice: '360',
      popular: false
    }
  ];

  return (
    <div className="pb-4 bg-gradient-to-b from-yellow-50 to-white min-h-screen">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-white/50 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">会员中心</h1>
      </div>

      {/* VIP Banner */}
      <div className="px-4 py-6">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-2 mb-3">
            <Crown className="w-8 h-8" />
            <h2 className="text-2xl">VIP会员</h2>
          </div>
          <p className="text-white/90 mb-4">尊享专属特权，畅享观影体验</p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <p className="text-sm">当前会员有效期至：2024-12-31</p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="px-4 py-4">
        <h3 className="mb-4">会员特权</h3>
        <div className="grid grid-cols-2 gap-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-100"
            >
              <Check className="w-5 h-5 text-yellow-600 flex-shrink-0" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Plans */}
      <div className="px-4 py-4">
        <h3 className="mb-4">选择套餐</h3>
        <div className="space-y-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-4 rounded-xl border-2 ${
                plan.popular
                  ? 'border-yellow-500 bg-yellow-50'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-2 right-4 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full">
                  最划算
                </div>
              )}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="mb-1">{plan.duration}</h4>
                  <p className="text-xs text-gray-500">
                    原价 ¥{plan.originalPrice}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-gray-600">¥</span>
                    <span className="text-3xl text-red-500">{plan.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Purchase Button */}
      <div className="px-4 py-4">
        <button className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-full text-lg hover:from-yellow-500 hover:to-yellow-700">
          立即开通
        </button>
      </div>
    </div>
  );
}
