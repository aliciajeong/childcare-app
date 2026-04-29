"use client";
import { useState } from "react";
import { payRates, supportWorkerRates, contacts } from "@/data/childcareData";

const badgeColors: Record<string, string> = {
  "입문": "bg-gray-100 text-gray-600",
  "일반": "bg-gray-100 text-gray-600",
  "Cert III": "bg-emerald-100 text-emerald-700",
  "Cert III+": "bg-emerald-100 text-emerald-700",
  "Diploma": "bg-sky-100 text-sky-700",
  "Room Lead": "bg-violet-100 text-violet-700",
  "Asst Dir": "bg-orange-100 text-orange-700",
  "Director": "bg-pink-100 text-pink-700",
};

const roles = [
  { badge: "Introductory/Educator", color: "bg-gray-100 text-gray-700", border: "border-gray-200 bg-gray-50", title: "교육자 (Educator)", desc: "Level 1~2. 보육 및 아동 교육 지원. 관찰 및 포트폴리오 기여. 입문 역할." },
  { badge: "Qualified Educator", color: "bg-emerald-100 text-emerald-700", border: "border-emerald-200 bg-emerald-50", title: "자격 교육자 (Level 3~4)", desc: "Cert III 소지. 교사-아동 비율 충족. 4년 경력 후 Level 4로 진급." },
  { badge: "Advanced Educator", color: "bg-sky-100 text-sky-700", border: "border-sky-200 bg-sky-50", title: "고급 교육자 (Level 5)", desc: "Diploma 소지. 교육 프로그램 지원 및 주도. 교사 비율 충족." },
  { badge: "Room Leader", color: "bg-violet-100 text-violet-700", border: "border-violet-200 bg-violet-50", title: "룸 리더 (Level 6)", desc: "공식 지정 Room Leader 또는 OSHC Assistant. 방 프로그램 계획·평가 주도." },
  { badge: "Educational Leader", color: "bg-orange-100 text-orange-700", border: "border-orange-200 bg-orange-50", title: "교육 리더 (지정 역할)", desc: "Reg. 118에 따라 공식 지정. 서비스 전체 교육 과정 개발 주도. 서면 수락 기록 필수 (2026.4~)." },
  { badge: "Director", color: "bg-pink-100 text-pink-700", border: "border-pink-200 bg-pink-50", title: "디렉터 (Level 8)", desc: "전체 서비스 관리. NQS 준수 총괄. 예산, 인력, 가족 관계 관리." },
];

const oldToNewMapping = [
  { old: "Level 3.1/3.2/3.3", new: "Level 3 (Qualified Educator)", note: "Cert III 소지자" },
  { old: "Level 3.3 (4년+)", new: "Level 4 (Experienced Educator)", note: "Cert III + 4년 경력" },
  { old: "Level 4.1~4.3", new: "Level 5 (Advanced Educator)", note: "Diploma 소지자" },
  { old: "Level 4A.1~4A.5", new: "Level 6 (Room Leader)", note: "지정 룸 리더" },
  { old: "Level 5A", new: "Level 7 (Assistant Director)", note: "코디네이터 역할" },
  { old: "Level 6.x (Director)", new: "Level 8 (Director)", note: "서비스 디렉터" },
];

export default function PayTab() {
  const [showMapping, setShowMapping] = useState(false);

  return (
    <div>
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 mb-4 flex gap-2 items-start">
        <span>✅</span>
        <div className="text-xs text-emerald-800">
          <strong>2026년 3월 1일 — 신규 시급 체계 시행 (Gender Undervaluation 결정)</strong><br />
          기존 Level 1~6 → 완전히 새로운 CSE Level 1~8 체계로 교체됨.{" "}
          <a href="https://calculate.fairwork.gov.au/Download/AwardSummary?awardCode=ma000120&fileType=pdf" target="_blank" rel="noopener noreferrer" className="underline">FairWork 공식 Pay Guide PDF →</a>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-5 flex gap-2 items-start">
        <span>💡</span>
        <div className="text-xs text-blue-800">
          <strong>Worker Retention Payment(WRP) 포함 시 추가 5% 인상</strong> (2025.12.1~2026.11.30).
          실제 시급은 award + WRP 합산. 예: Level 3 ~$31.00/hr.{" "}
          <a href="https://www.education.gov.au/early-childhood/providers/workforce/wages/minimum-rates" target="_blank" rel="noopener noreferrer" className="underline">WRP 최신 시급표 →</a>
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-bold text-gray-800">CSE Level 1~8 신규 시급표 (2026년 3월 1일~)</h2>
        <button
          onClick={() => setShowMapping(!showMapping)}
          className="text-xs text-violet-600 border border-violet-200 bg-violet-50 px-3 py-1 rounded-full hover:bg-violet-100 transition-colors"
        >
          {showMapping ? "▲ 구체계 변환표 숨기기" : "▼ 구체계→신체계 변환표"}
        </button>
      </div>

      {showMapping && (
        <div className="mb-4 bg-violet-50 border border-violet-200 rounded-2xl p-4">
          <p className="text-xs font-bold text-violet-700 mb-3">기존 분류 → 신규 분류 변환표 (2026년 3월 1일 기준)</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-violet-100">
                  <th className="text-left px-3 py-2 text-violet-700">기존 (2026년 2월 이전)</th>
                  <th className="text-left px-3 py-2 text-violet-700">신규 (2026년 3월~)</th>
                  <th className="text-left px-3 py-2 text-violet-700">비고</th>
                </tr>
              </thead>
              <tbody>
                {oldToNewMapping.map((row, i) => (
                  <tr key={i} className="border-t border-violet-100">
                    <td className="px-3 py-2 text-gray-500 line-through">{row.old}</td>
                    <td className="px-3 py-2 font-medium text-violet-700">{row.new}</td>
                    <td className="px-3 py-2 text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="overflow-x-auto rounded-2xl border border-gray-100 mb-4">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-pink-50">
              <th className="text-left px-3 py-2.5 font-bold text-pink-700">레벨</th>
              <th className="text-left px-3 py-2.5 font-bold text-pink-700">직책</th>
              <th className="text-left px-3 py-2.5 font-bold text-pink-700 hidden sm:table-cell">자격 기준</th>
              <th className="text-right px-3 py-2.5 font-bold text-pink-700">정규직/hr</th>
              <th className="text-right px-3 py-2.5 font-bold text-pink-700">캐주얼/hr</th>
            </tr>
          </thead>
          <tbody>
            {payRates.map((row, i) => (
              <tr key={i} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-3 py-2.5">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${badgeColors[row.badge] || "bg-gray-100 text-gray-600"}`}>
                    {row.level}
                  </span>
                </td>
                <td className="px-3 py-2.5 font-medium text-gray-800">{row.title}</td>
                <td className="px-3 py-2.5 text-gray-500 hidden sm:table-cell">{row.criteria}</td>
                <td className="px-3 py-2.5 text-right font-bold text-gray-800">{row.permanent}</td>
                <td className="px-3 py-2.5 text-right text-gray-500">{row.casual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 mb-5 text-xs text-gray-500">
        <strong>지원 직원 (Support Workers) 2026년 3월~:</strong>
        <div className="mt-1 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {supportWorkerRates.map((r, i) => (
            <div key={i} className="bg-white rounded-lg p-2">
              <p className="font-medium text-gray-700">{r.level}</p>
              <p className="text-gray-500 text-xs">{r.hourly}/hr</p>
              <p className="text-gray-400 text-xs">캐주얼: {r.casualHourly}/hr</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 mb-6 text-xs text-emerald-800">
        <strong>슈퍼어뉴에이션(Superannuation):</strong> 2025~2026년 기준 12%. 시급 외 고용주 추가 납부 의무.{" "}
        <a href="https://calculate.fairwork.gov.au" target="_blank" rel="noopener noreferrer" className="underline">정확한 개인 시급 계산 →</a>
      </div>

      <h2 className="text-base font-bold text-gray-800 mb-3">직책별 역할</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {roles.map((r, i) => (
          <div key={i} className={`rounded-2xl p-4 border ${r.border}`}>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${r.color} mb-2 inline-block`}>{r.badge}</span>
            <h4 className="text-sm font-bold text-gray-800 mb-1">{r.title}</h4>
            <p className="text-xs text-gray-600 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-base font-bold text-gray-800 mb-3">중요 연락처</h2>
      <div className="space-y-2 mb-4">
        {contacts.map((c, i) => (
          <div key={i} className="bg-emerald-50 border border-emerald-100 rounded-2xl p-3 flex justify-between items-center flex-wrap gap-2">
            <div>
              <h4 className="text-xs font-bold text-emerald-800">{c.name}</h4>
              <p className="text-xs text-gray-500">{c.desc}</p>
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-xs text-sky-500 hover:underline">{c.url.replace("https://", "")}</a>
            </div>
            <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="text-sm font-bold text-emerald-600 hover:text-emerald-800 transition-colors whitespace-nowrap">
              📞 {c.phone}
            </a>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-500">
        ※ 이 시급표는 Children&apos;s Services Award 2010 (MA000120) 기준 최소 시급입니다. 서비스에 따라 award 이상 지급 가능. 정확한 현재 시급은{" "}
        <a href="https://calculate.fairwork.gov.au" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">Fair Work PACT Calculator</a>
        {" "}또는 Fair Work Ombudsman (13 13 94)에 문의하세요.
      </div>
    </div>
  );
}
