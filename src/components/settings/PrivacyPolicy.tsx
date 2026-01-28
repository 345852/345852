import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="pb-4">
      <div className="px-4 pt-4 pb-3 border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">隐私政策</h1>
      </div>

      <div className="px-4 py-6 space-y-6 text-sm text-gray-700 leading-relaxed">
        <div>
          <p className="text-xs text-gray-500 mb-4">更新日期：2024年1月15日</p>
          <p className="text-xs text-gray-500 mb-6">生效日期：2024年1月15日</p>
        </div>

        <section>
          <h3 className="text-base mb-3">引言</h3>
          <p>
            影视社区（以下简称"我们"）非常重视用户的隐私保护。本隐私政策旨在向您说明我们如何收集、使用、存储和保护您的个人信息。请您仔细阅读本政策。
          </p>
        </section>

        <section>
          <h3 className="text-base mb-3">一、我们收集的信息</h3>
          <p className="mb-2">1. <strong>账号信息：</strong>手机号、邮箱、用户名等注册信息。</p>
          <p className="mb-2">2. <strong>使用信息：</strong>观影记录、收藏、评分、评论等应用使用数据。</p>
          <p className="mb-2">3. <strong>设备信息：</strong>设备型号、操作系统版本、唯一设备标识符等。</p>
          <p>4. <strong>日志信息：</strong>IP地址、访问时间、访问页面等。</p>
        </section>

        <section>
          <h3 className="text-base mb-3">二、信息的使用目的</h3>
          <p className="mb-2">我们收集和使用您的个人信息用于以下目的：</p>
          <p className="mb-2">1. 提供、维护和改进我们的服务；</p>
          <p className="mb-2">2. 为您提供个性化的内容推荐；</p>
          <p className="mb-2">3. 处理您的账号注册和登录；</p>
          <p className="mb-2">4. 向您发送通知和更新；</p>
          <p>5. 保护用户和平台的安全。</p>
        </section>

        <section>
          <h3 className="text-base mb-3">三、信息的共享与披露</h3>
          <p className="mb-2">我们承诺不会出售您的个人信息。在以下情况下，我们可能会共享您的信息：</p>
          <p className="mb-2">1. 获得您的明确同意；</p>
          <p className="mb-2">2. 根据法律法规的要求；</p>
          <p className="mb-2">3. 与我们的服务提供商共享（仅限于提供服务所需）；</p>
          <p>4. 保护用户或公众的合法权益。</p>
        </section>

        <section>
          <h3 className="text-base mb-3">四、信息的存储与安全</h3>
          <p className="mb-2">
            1. 我们采用行业标准的安全措施保护您的个人信息。
          </p>
          <p className="mb-2">
            2. 您的信息将存储在中国境内的服务器上。
          </p>
          <p>
            3. 我们会保留您的信息至账号注销或服务终止后的合理期限。
          </p>
        </section>

        <section>
          <h3 className="text-base mb-3">五、您的权利</h3>
          <p className="mb-2">您对自己的个人信息享有以下权利：</p>
          <p className="mb-2">1. <strong>访问权：</strong>您可以随时查看您的个人信息。</p>
          <p className="mb-2">2. <strong>更正权：</strong>您可以修改不准确的信息。</p>
          <p className="mb-2">3. <strong>删除权：</strong>您可以要求删除您的个人信息。</p>
          <p>4. <strong>注销权：</strong>您可以随时注销账号。</p>
        </section>

        <section>
          <h3 className="text-base mb-3">六、Cookie和类似技术</h3>
          <p>
            我们使用Cookie和类似技术来改善用户体验、分析使用情况。您可以在浏览器设置中管理Cookie偏好。
          </p>
        </section>

        <section>
          <h3 className="text-base mb-3">七、未成年人保护</h3>
          <p>
            我们重视未成年人的隐私保护。如果您是未成年人，请在监护人的陪同下使用我们的服务。
          </p>
        </section>

        <section>
          <h3 className="text-base mb-3">八、政策更新</h3>
          <p>
            我们可能会不时更新本隐私政策。重大变更时，我们会通过应用内通知或其他方式告知您。
          </p>
        </section>

        <section>
          <h3 className="text-base mb-3">九、联系我们</h3>
          <p>
            如对本隐私政策有任何疑问、意见或投诉，请通过以下方式联系我们：<br />
            隐私保护专员邮箱：privacy@movieclub.com<br />
            客服热线：400-888-8888<br />
            通讯地址：北京市朝阳区XX路XX号XX大厦
          </p>
        </section>
      </div>
    </div>
  );
}
