import { sources } from "@/data/childcareData";

export default function SourcesTab() {
  return (
    <div>
      <h2 className="text-base font-bold text-gray-800 mb-1">공식 출처 및 참고 웹사이트</h2>
      <p className="text-xs text-gray-500 mb-5">
        클릭하면 공식 웹사이트로 바로 이동합니다. 법규·시급·비자는 자주 바뀌니 중요한 결정 전에는 항상 직접 확인하세요.
      </p>

      <div className="space-y-3">
        {sources.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-white border border-gray-100 rounded-2xl p-4 flex gap-3 items-start hover:shadow-sm hover:border-gray-200 transition-all">
              <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-xl flex-shrink-0">
                {s.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-800 mb-0.5">{s.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-1">{s.desc}</p>
                <span className="text-xs text-sky-500 break-all">{s.url.replace("https://", "")}</span>
              </div>
              <span className="text-gray-300 text-sm flex-shrink-0">→</span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 bg-violet-50 border border-violet-200 rounded-2xl p-4">
        <h4 className="text-sm font-bold text-violet-700 mb-3">⚡ 업데이트 알림 받는 방법</h4>
        <div className="space-y-2 text-xs text-gray-600">
          {[
            { icon: "📧", text: "ACECQA 뉴스레터 구독 → acecqa.gov.au 에서 신청", url: "https://www.acecqa.gov.au" },
            { icon: "📱", text: "Aussie Childcare Network 뉴스레터 또는 Facebook 그룹 가입", url: "https://aussiechildcarenetwork.com.au" },
            { icon: "🔔", text: "NSW Early Learning Commission 이메일 업데이트 신청", url: "https://education.nsw.gov.au/early-childhood-education" },
            { icon: "💰", text: "Fair Work 시급 업데이트: fairwork.gov.au 뉴스레터 구독", url: "https://www.fairwork.gov.au" },
            { icon: "✈", text: "이민 업데이트: Dept of Home Affairs 이메일 알림 신청", url: "https://immi.homeaffairs.gov.au" },
          ].map((item, i) => (
            <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-start hover:text-sky-600 transition-colors">
              <span className="flex-shrink-0">{item.icon}</span>
              <p>{item.text}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-xl p-3">
        <p className="text-xs text-yellow-800">
          <strong>⚠️ 중요:</strong> 법규, 시급, 비자 요건은 자주 바뀝니다. 특히 NSW는 2025~2026년에 대규모 개혁이 진행 중이며, 시급은 2026년 3월 신규 체계로 변경됐습니다. 중요한 결정 전에는 항상 공식 사이트를 직접 확인하세요.
        </p>
      </div>
    </div>
  );
}
