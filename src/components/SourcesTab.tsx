import { sources } from "@/data/childcareData";

export default function SourcesTab() {
  return (
    <div>
      <h2 className="text-base font-bold text-gray-800 mb-2">🔗 공식 출처 및 참고 웹사이트</h2>
      <p className="text-xs text-gray-500 mb-5">
        이 앱의 모든 정보는 아래 공식 정부 기관 및 공인 단체 자료를 기반으로 합니다. 업데이트 확인은 각 웹사이트를 직접 방문하세요.
      </p>

      <div className="space-y-3">
        {sources.map((s, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl p-4 flex gap-3 items-start hover:shadow-sm transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-xl flex-shrink-0">
              {s.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-gray-800 mb-0.5">{s.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-1.5">{s.desc}</p>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-sky-500 hover:text-sky-700 hover:underline break-all transition-colors"
              >
                {s.url}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-violet-50 border border-violet-200 rounded-2xl p-4">
        <h4 className="text-sm font-bold text-violet-700 mb-2">⚡ 업데이트 알림 받는 방법</h4>
        <div className="space-y-2 text-xs text-gray-600">
          {[
            { icon: "📧", text: "ACECQA 뉴스레터 구독 → acecqa.gov.au에서 신청" },
            { icon: "📱", text: "Aussie Childcare Network 뉴스레터 구독 또는 Facebook 그룹 가입" },
            { icon: "🔔", text: "NSW Early Learning Commission 이메일 업데이트 신청" },
            { icon: "📋", text: "ACA NSW 회원 또는 뉴스레터 구독으로 시급표 자동 수신" },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 items-start">
              <span className="flex-shrink-0">{item.icon}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-xl p-3">
        <p className="text-xs text-yellow-800">
          <strong>중요:</strong> 법규는 자주 바뀝니다! 특히 NSW는 2025~2026년에 대규모 개혁이 진행 중입니다. 중요한 결정 전에는 항상 공식 사이트에서 최신 정보를 확인하세요.
        </p>
      </div>
    </div>
  );
}
