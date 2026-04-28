"use client";
import { payRates, contacts } from "@/data/childcareData";

const badgeColors: Record<string, string> = {
  기본: "bg-gray-100 text-gray-600",
  보조: "bg-gray-100 text-gray-600",
  "Cert III": "bg-emerald-100 text-emerald-700",
  Diploma: "bg-sky-100 text-sky-700",
  ECT: "bg-violet-100 text-violet-700",
  관리직: "bg-pink-100 text-pink-700",
};

const roles = [
  { badge: "Educator", color: "bg-pink-100 text-pink-700", border: "border-pink-200 bg-pink-50", title: "교육자 (Educator)", desc: "Cert III 이상. 아동 직접 교육·보육. 관찰 및 포트폴리오 작성. 입문 역할." },
  { badge: "Room Leader", color: "bg-emerald-100 text-emerald-700", border: "border-emerald-200 bg-emerald-50", title: "룸 리더 (Room Leader)", desc: "Diploma 이상 보유. 방 프로그램 계획·평가 주도. Level 4.2~4.3." },
  { badge: "ECT", color: "bg-sky-100 text-sky-700", border: "border-sky-200 bg-sky-50", title: "Early Childhood Teacher", desc: "4년제 또는 Graduate Diploma. 교사 비율 충족. 교육 프로그램 리더. Level 5." },
  { badge: "Ed. Leader", color: "bg-violet-100 text-violet-700", border: "border-violet-200 bg-violet-50", title: "Educational Leader", desc: "Reg. 118에 따라 공식 지정. 서비스 전체 교육 과정 개발 주도. 별도 지정 필요." },
  { badge: "Nom. Supervisor", color: "bg-orange-100 text-orange-700", border: "border-orange-200 bg-orange-50", title: "Nominated Supervisor", desc: "서비스 일상 운영 책임. Approved Provider가 지정. 법적 책임 보유." },
  { badge: "Director", color: "bg-pink-100 text-pink-700", border: "border-pink-200 bg-pink-50", title: "Director / Centre Manager", desc: "전체 서비스 관리. NQS 준수 총괄. 예산, 인력, 가족 관계 관리. Level 7+." },
];

export default function PayTab() {
  return (
    <div>
      {/* Pay notice */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-5 flex gap-2 items-start">
        <span>💰</span>
        <div>
          <p className="text-xs text-yellow-800">
            <strong>Children's Services Award (MA000120)</strong> — 2025년 7월 1일 기준 시급. 2025년 12월 1일 추가 인상(WRP 포함). 성별 임금 불평등 시정으로 <strong>2026년 3월 1일 추가 인상 예정</strong> (Cert III 기준 ~23% 인상 전망).
          </p>
        </div>
      </div>

      <h2 className="text-base font-bold text-gray-800 mb-3">직급별 시급표 (2025년 7월 기준)</h2>
      <p className="text-xs text-gray-500 mb-3">캐주얼은 25% 추가. Worker Retention Payment(WRP) 포함 시 Column 4 금액 적용.</p>

      <div className="overflow-x-auto rounded-2xl border border-gray-100 mb-6">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-pink-50">
              <th className="text-left px-3 py-2.5 font-bold text-pink-700 whitespace-nowrap">레벨</th>
              <th className="text-left px-3 py-2.5 font-bold text-pink-700 whitespace-nowrap">자격 / 역할</th>
              <th className="text-right px-3 py-2.5 font-bold text-pink-700 whitespace-nowrap">정규직/hr</th>
              <th className="text-right px-3 py-2.5 font-bold text-pink-700 whitespace-nowrap">캐주얼/hr</th>
            </tr>
          </thead>
          <tbody>
            {payRates.map((row, i) => (
              <tr key={i} className={`border-t border-gray-50 hover:bg-gray-50 transition-colors ${i === payRates.length - 1 ? "" : ""}`}>
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeColors[row.badge] || "bg-gray-100 text-gray-600"}`}>
                      {row.level}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2.5 text-gray-600">{row.role}</td>
                <td className="px-3 py-2.5 text-right font-semibold text-gray-800">{row.permanent}</td>
                <td className="px-3 py-2.5 text-right text-gray-600">{row.casual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pay increase notice */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 mb-6">
        <h4 className="text-xs font-bold text-emerald-700 mb-1">🎉 2026년 3월 임금 인상 예정</h4>
        <p className="text-xs text-gray-600 leading-relaxed">
          Fair Work Commission 성별 임금 불평등(Gender Undervaluation) 결정으로 Cert III 기준 약 23% 인상 전망. Diploma, ECT도 상향 예정. 정확한 금액은 FWC 발표 후 확정됩니다. 정기적으로 fairwork.gov.au 확인 권장.
        </p>
      </div>

      <h2 className="text-base font-bold text-gray-800 mb-3">직책별 역할</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {roles.map((r, i) => (
          <div key={i} className={`rounded-2xl p-4 border ${r.border}`}>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${r.color} mb-2 inline-block`}>{r.badge}</span>
            <h4 className="text-sm font-bold text-gray-800 mb-1">{r.title}</h4>
            <p className="text-xs text-gray-600 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-base font-bold text-gray-800 mb-3">중요 연락처 및 웹사이트</h2>
      <div className="space-y-2">
        {contacts.map((c, i) => (
          <div key={i} className="bg-emerald-50 border border-emerald-100 rounded-2xl p-3 flex justify-between items-center flex-wrap gap-2">
            <div>
              <h4 className="text-xs font-bold text-emerald-800">{c.name}</h4>
              <p className="text-xs text-gray-500">{c.desc}</p>
              <a href={`https://${c.url}`} target="_blank" rel="noopener noreferrer" className="text-xs text-sky-500 hover:underline">{c.url}</a>
            </div>
            <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="text-base font-bold text-emerald-600 hover:text-emerald-800 transition-colors whitespace-nowrap">
              📞 {c.phone}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl p-3">
        <p className="text-xs text-gray-500">
          <strong>참고:</strong> 이 시급표는 Children's Services Award 2010 (MA000120) 기준 최소 시급입니다. 서비스에 따라 award 이상 지급 가능합니다. 정확한 현재 시급은 fairwork.gov.au의 Pay Calculator를 이용하거나 Fair Work Ombudsman (13 13 94)에 문의하세요.
        </p>
      </div>
    </div>
  );
}
