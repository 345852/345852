import { ArrowLeft } from 'lucide-react';

interface UserAgreementProps {
  onBack: () => void;
}

export function UserAgreement({ onBack }: UserAgreementProps) {
  return (
    <div className="pb-4">
      <div className="px-4 pt-4 pb-3 border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">用户协议</h1>
      </div>

      <div className="px-4 py-6 space-y-6 text-sm text-gray-700 leading-relaxed">
        <div>
          <p className="text-xs text-gray-500 mb-4">更新日期：2024年1月15日</p>
          <p className="text-xs text-gray-500 mb-6">生效日期：2024年1月15日</p>
        </div>

        <section>
          <h3 className="text-base mb-3">一、协议的接受</h3>
          <p>
            欢迎使用影视社区！在使用本应用之前，请您仔细阅读本用户协议（以下简称"本协议"）。一旦您开始使用本应用，即表示您已充分阅读、理解并同意接受本协议的全部内容。
          </p>
        </section>

        <section>
          <h3 className="text-base mb-3">二、账号注册与管理</h3>
          <p className="mb-2">1. 您需要注册一个账号才能使用本应用的完整功能。</p>
          <p className="mb-2">2. 注册时，您应当提供真实、准确、完整和最新的信息。</p>
          <p className="mb-2">3. 您应当妥善保管账号和密码，并对账号下的所有活动负责。</p>
          <p>4. 如发现账号被盗用，请立即通知我们。</p>
        </section>

        <section>
          <h3 className="text-base mb-3">三、用户行为规范</h3>
          <p className="mb-2">您在使用本应用时，不得：</p>
          <p className="mb-2">1. 发布违反国家法律法规的内容；</p>
          <p className="mb-2">2. 发布侵犯他人知识产权或其他合法权益的内容；</p>
          <p className="mb-2">3. 发布虚假、误导性信息；</p>
          <p className="mb-2">4. 发布垃圾信息、广告或骚扰他人；</p>
          <p>5. 干扰或破坏本应用的正常运行。</p>
        </section>

        <section>
          <h3 className="text-base mb-3">四、内容版权</h3>
          <p className="mb-2">
            1. 本应用提供的影视信息、海报、剧照等内容的版权归原权利人所有。
          </p>
          <p className="mb-2">
            2. 用户发布的评论、评分等内容，版权归用户所有，但用户授予我们在全球范围内免费、永久使用该内容的权利。
          </p>
        </section>

        <section>
          <h3 className="text-base mb-3">五、免责声明</h3>
          <p className="mb-2">
            1. 本应用仅提供信息展示和交流平台，不提供影视内容的播放服务。
          </p>
          <p className="mb-2">
            2. 我们不对第三方网站或服务的内容负责。
          </p>
          <p>
            3. 因不可抗力导致的服务中断，我们不承担责任。
          </p>
        </section>

        <section>
          <h3 className="text-base mb-3">六、协议变更</h3>
          <p>
            我们有权随时修改本协议。修改后的协议将在应用内公布，继续使用本应用即表示您接受修改后的协议。
          </p>
        </section>

        <section>
          <h3 className="text-base mb-3">七、法律适用与争议解决</h3>
          <p>
            本协议的订立、执行和解释及争议的解决均应适用中国法律。如发生争议，双方应友好协商解决；协商不成的，任何一方可向本公司所在地人民法院提起诉讼。
          </p>
        </section>

        <section>
          <h3 className="text-base mb-3">八、联系方式</h3>
          <p>
            如对本协议有任何疑问，请通过以下方式联系我们：<br />
            客服邮箱：support@movieclub.com<br />
            客服热线：400-888-8888
          </p>
        </section>
      </div>
    </div>
  );
}
