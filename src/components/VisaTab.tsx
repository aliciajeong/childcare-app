"use client";
import { useState } from "react";

const subTabs = ["비자 개요", "포인트 계산기", "지역별 유리함", "스킬 어세스먼트", "자주 묻는 질문"];

const visaTypes = [
  {
    code: "189",
    title: "Skilled Independent",
    color: "border-pink-400 bg-pink-50",
    badge: "bg-pink-100 text-pink-700",
    who: "ECT (241111)만 해당. 스폰서 불필요.",
    points: "최소 65점, 실제 80~90점 이상 필요",
    pr: "즉시 PR",
    notes: "가장 독립적 경로. 경쟁 치열. ACECQA 스킬 어세스먼트 필수.",
    url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189",
  },
  {
    code: "190",
    title: "State Nominated",
    color: "border-violet-400 bg-violet-50",
    badge: "bg-violet-100 text-violet-700",
    who: "ECT + Childcare Worker 모두 가능",
    points: "+5점 추가 (노미네이션). 실제 70~80점 이상",
    pr: "즉시 PR",
    notes: "주정부 노미네이션 필요. NSW보다 SA, TAS, NT가 쉬움.",
    url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-nominated-190",
  },
  {
    code: "491",
    title: "Regional (Provisional)",
    color: "border-teal-400 bg-teal-50",
    badge: "bg-teal-100 text-teal-700",
    who: "ECT + Childcare Worker 모두 가능",
    points: "+15점 추가 (지역 노미네이션). 65~75점으로 가능",
    pr: "3년 지역 거주 후 191로 PR",
    notes: "지역 생활 의향 있다면 가장 빠른 경로. NT, TAS, SA 지역 수요 많음.",
    url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-work-regional-provisional-491",
  },
  {
    code: "482",
    title: "Skills in Demand",
    color: "border-sky-400 bg-sky-50",
    badge: "bg-sky-100 text-sky-700",
    who: "ECT + Childcare Worker 모두 가능 (전국)",
    points: "포인트 불필요 — 고용주 스폰서",
    pr: "2~3년 후 186으로 PR",
    notes: "TSMIT $73,150+. 최대 4년. 스킬 어세스먼트 불필요 (PR 목적 제외).",
    url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-skill-shortage-482",
  },
  {
    code: "186",
    title: "Employer Nomination (PR)",
    color: "border-amber-400 bg-amber-50",
    badge: "bg-amber-100 text-amber-700",
    who: "ECT + Childcare Worker 모두 가능",
    points: "포인트 불필요 — 고용주 스폰서",
    pr: "즉시 PR",
    notes: "Direct Entry: 3년 경력 + 스킬 어세스먼트 + 45세 미만. TRT: 482 후 2~3년 같은 고용주.",
    url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186",
  },
  {
    code: "494",
    title: "Regional Employer Sponsored",
    color: "border-emerald-400 bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
    who: "Childcare Worker / Group Leader — 지역",
    points: "포인트 불필요 — 지역 고용주 스폰서",
    pr: "5년 후 191로 PR",
    notes: "지역 Group Leader에게 적합. NT, SA, TAS 등 수요 많음.",
    url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-employer-sponsored-regional-494",
  },
];

const stateAdvantage = [
  { state: "NT (노던 테리토리)", level: "hot", desc: "ECT·Childcare Worker 극심한 부족. 491/494 빠른 노미네이션. 지역 거주 후 191 PR.", visas: "491, 494, 482" },
  { state: "TAS (태즈매니아)", level: "hot", desc: "인력 부족 심각. 190/491 노미네이션 비교적 쉬움. 소도시 직장 구하기 용이. 낮은 생활비.", visas: "190, 491" },
  { state: "SA (남호주)", level: "hot", desc: "Adelaide 인근도 190 가능. 지역은 491/494. 비교적 낮은 생활비. IELTS 8.0 요건 주의.", visas: "190, 491, 494" },
  { state: "QLD (퀸즐랜드)", level: "warm", desc: "브리즈번 외 지역은 491 유리. 주정부 190 노미네이션 주기적 오픈. 관광지역 서비스 많음.", visas: "190, 491" },
  { state: "WA (서호주)", level: "warm", desc: "퍼스 외 지역 수요 많음. DAMA(지역 협약) 활용 가능. 190 할당량 연간 1,000~3,000개.", visas: "190, 494, 482" },
  { state: "VIC (빅토리아)", level: "ok", desc: "멜버른은 경쟁 치열. 지역(Regional)으로 가면 491 유리. ECT는 190 가능하나 높은 포인트 필요.", visas: "190 (지역), 491" },
  { state: "NSW (시드니)", level: "ok", desc: "시드니는 190 컷오프 높음. 지역(Central West 등)으로 가면 491 유리. 482/186은 전국 어디서나.", visas: "482, 186, 491 (지역)" },
  { state: "ACT (캔버라)", level: "ok", desc: "Canberra Matrix 통한 190 신청 가능. ACT 고용주 스폰서 필요.", visas: "190 (Matrix), 482" },
];

const faqItems = [
  {
    q: "Graduate Diploma로 PR 받을 수 있나요?",
    a: "네! Graduate Diploma of Early Childhood Education으로 ACECQA 스킬 어세스먼트를 받아 189/190/491/186 비자 신청 가능합니다. 반드시 ACECQA 승인 + CRICOS 등록 기관에서 이수해야 합니다.",
    url: "https://www.acecqa.gov.au/qualifications/approved-qualifications",
  },
  {
    q: "482 비자 신청에 스킬 어세스먼트가 필요한가요?",
    a: "482 비자 자체에는 불필요합니다. 하지만 나중에 PR(189/190/186 Direct Entry)을 목표로 한다면 ACECQA 스킬 어세스먼트가 필수입니다. 미리 받아두는 것을 권장합니다.",
    url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-skill-shortage-482",
  },
  {
    q: "Childcare Worker(421111)로 189 비자 가능한가요?",
    a: "아니요. 189 비자는 MLTSSL에 있는 ECT(241111)만 해당됩니다. Childcare Worker(421111)는 190, 491, 482, 186, 494를 통해 PR을 목표로 할 수 있습니다.",
    url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list",
  },
  {
    q: "시드니에서 스킬 비자 받기 어려운가요?",
    a: "190 비자로 시드니를 선택하려면 컷오프가 높아 어렵습니다. 대신 지역(Regional)으로 491 신청 시 +15점을 받아 더 유리합니다. 또는 시드니 고용주를 통한 482/186 경로가 현실적입니다.",
    url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect",
  },
  {
    q: "영어 점수 얼마가 필요한가요?",
    a: "482 비자: IELTS 5.0 이상. PR 비자: 최소 IELTS 6.0 (능숙, +10점), IELTS 7.0+ (우수, +10점 더), IELTS 8.0+ (최고, +20점). PTE, TOEFL iBT, OET, CELPIP도 인정됩니다. SA는 IELTS 7.5 요건 주의.",
    url: "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language",
  },
  {
    q: "ACECQA 스킬 어세스먼트 얼마나 걸리나요?",
    a: "평균 6~16주 소요. 비용 약 AUD $800~1,000. 자격증, 성적증명서, 경력 증빙 서류 필요. 서류 준비를 미리 철저히 해두면 기간이 단축됩니다.",
    url: "https://www.acecqa.gov.au/qualifications/skills-assessment",
  },
];

// Points calculator
const ageOptions = [
  { label: "18~24세", value: 25 },
  { label: "25~32세 (최대 30점)", value: 30 },
  { label: "33~39세", value: 25 },
  { label: "40~44세", value: 15 },
  { label: "45세 이상 (0점)", value: 0 },
];
const engOptions = [
  { label: "기본 — IELTS 6.0 이상 (0점)", value: 0 },
  { label: "능숙 — IELTS 7.0 이상 (+10점)", value: 10 },
  { label: "우수 — IELTS 8.0 이상 (+20점)", value: 20 },
];
const expOsOptions = [
  { label: "없음 / 3년 미만 (0점)", value: 0 },
  { label: "3~4년 (+3점)", value: 3 },
  { label: "5~7년 (+5점)", value: 5 },
  { label: "8년 이상 (+15점)", value: 15 },
];
const expAuOptions = [
  { label: "없음 (0점)", value: 0 },
  { label: "1~2년 (+5점)", value: 5 },
  { label: "3~4년 (+10점)", value: 10 },
  { label: "5~7년 (+15점)", value: 15 },
  { label: "8년 이상 (+20점)", value: 20 },
];
const eduOptions = [
  { label: "Diploma / 무관 학사 (+10점)", value: 10 },
  { label: "관련 학사 (+15점)", value: 15 },
  { label: "관련 석사/박사 (+20점)", value: 20 },
];
const auStudyOptions = [
  { label: "없음 (0점)", value: 0 },
  { label: "호주 2년+ 학업 (+5점)", value: 5 },
];
const partnerOptions = [
  { label: "없음 / 해당없음 (0점)", value: 0 },
  { label: "파트너 스킬 보유 (+10점)", value: 10 },
  { label: "파트너 기본 영어만 (+5점)", value: 5 },
];
const proYearOptions = [
  { label: "없음 (0점)", value: 0 },
  { label: "전문직 연도 완료 (+5점)", value: 5 },
];

export default function VisaTab() {
  const [subTab, setSubTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [age, setAge] = useState(30);
  const [eng, setEng] = useState(20);
  const [expOs, setExpOs] = useState(5);
  const [expAu, setExpAu] = useState(5);
  const [edu, setEdu] = useState(15);
  const [auStudy, setAuStudy] = useState(0);
  const [partner, setPartner] = useState(0);
  const [proYear, setProYear] = useState(0);

  const total = age + eng + expOs + expAu + edu + auStudy + partner + proYear;
  const scoreColor = total >= 80 ? "text-emerald-600" : total >= 65 ? "text-amber-600" : "text-red-500";

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5 scrollbar-hide">
        {subTabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setSubTab(i)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              subTab === i
                ? "bg-violet-100 border-violet-300 text-violet-700"
                : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Overview */}
      {subTab === 0 && (
        <div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 mb-4 flex gap-2 text-xs text-emerald-800">
            <span>✅</span>
            <div>Childcare Worker가 482(Skills in Demand) + 186(Employer Nomination) 리스트에 추가됨 (2024~2025). 전국 어디서든 스폰서 가능!</div>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 mb-4 text-xs text-gray-600">
            <strong>직종 ANZSCO 코드:</strong>
            <div className="mt-1 space-y-1">
              <div>• <strong>ECT</strong> — 241111 (MLTSSL + CSOL) — 189/190/491/482/186</div>
              <div>• <strong>Childcare Worker</strong> — 421111 (CSOL Essential Skills) — 190/491/482/186/494</div>
              <div>• <strong>Centre Manager</strong> — 134111 (CSOL) — 190/491/482/186</div>
              <div className="mt-1.5 text-gray-500">스킬 어세스먼트 주관: <strong>ACECQA</strong> (모든 직종)</div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {visaTypes.map((v, i) => (
              <div key={i} className={`rounded-2xl p-4 border-t-4 border border-gray-100 ${v.color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${v.badge}`}>{v.code}</span>
                  <h4 className="text-sm font-bold text-gray-800">{v.title}</h4>
                </div>
                <div className="space-y-1 text-xs text-gray-600">
                  <p><strong>대상:</strong> {v.who}</p>
                  <p><strong>포인트:</strong> {v.points}</p>
                  <p><strong>PR:</strong> {v.pr}</p>
                  <p className="text-gray-500">{v.notes}</p>
                </div>
                <a href={v.url} target="_blank" rel="noopener noreferrer" className="text-xs text-sky-500 hover:underline mt-2 block">
                  공식 안내 →
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Points Calculator */}
      {subTab === 1 && (
        <div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-4 text-xs text-blue-800 flex gap-2">
            <span>💡</span>
            <div>최소 65점 필요. 실제로는 189: 80~90점+, 190: 70~80점+, 491: 65~75점+.{" "}
              <a href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect/points-test" target="_blank" rel="noopener noreferrer" className="underline">공식 포인트 테스트 →</a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              { label: "나이", value: age, options: ageOptions, setter: setAge },
              { label: "영어 수준 (IELTS 기준)", value: eng, options: engOptions, setter: setEng },
              { label: "해외 경력 (지명 직종)", value: expOs, options: expOsOptions, setter: setExpOs },
              { label: "호주 경력 (지명 직종)", value: expAu, options: expAuOptions, setter: setExpAu },
              { label: "학력", value: edu, options: eduOptions, setter: setEdu },
              { label: "호주 학력 (2년 이상)", value: auStudy, options: auStudyOptions, setter: setAuStudy },
              { label: "파트너 스킬", value: partner, options: partnerOptions, setter: setPartner },
              { label: "전문직 연도 프로그램", value: proYear, options: proYearOptions, setter: setProYear },
            ].map((field, i) => (
              <div key={i}>
                <label className="text-xs font-medium text-gray-600">{field.label}</label>
                <select
                  value={field.value}
                  onChange={(e) => field.setter(Number(e.target.value))}
                  className="mt-1 w-full text-xs border border-gray-200 rounded-lg p-2 bg-white focus:outline-none focus:border-violet-300"
                >
                  {field.options.map((opt, j) => (
                    <option key={j} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="bg-white border-2 border-violet-200 rounded-2xl p-5 mb-4 text-center">
            <p className="text-xs text-gray-500 mb-1">예상 포인트 합계</p>
            <p className={`text-4xl font-bold ${scoreColor}`}>{total}점</p>
            <p className="text-xs text-gray-400 mt-1">최소 필요: 65점</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-3 mb-4 text-xs">
            <p className="font-medium text-gray-700 mb-2">점수 구성</p>
            <div className="space-y-1">
              {[
                ["나이", age], ["영어", eng], ["해외 경력", expOs], ["호주 경력", expAu],
                ["학력", edu], ["호주 학력", auStudy], ["파트너", partner], ["전문직 연도", proYear],
              ].map(([label, pts], i) => (
                <div key={i} className="flex justify-between items-center py-0.5 border-b border-gray-100">
                  <span className="text-gray-600">{label}</span>
                  <span className="font-medium text-violet-600">+{pts}점</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-3 text-xs border">
            {total >= 80 ? (
              <div className="bg-emerald-50 border-emerald-200 rounded-xl p-3 text-emerald-800">
                ✅ <strong>189 Skilled Independent</strong> 검토 가능! ECT(241111)로 EOI 제출 권장. 190(+5점), 491(+15점)도 함께 고려하세요.
              </div>
            ) : total >= 70 ? (
              <div className="bg-blue-50 border-blue-200 rounded-xl p-3 text-blue-800">
                🔵 <strong>190 State Nominated</strong> 유력 (+5점 포함 {total + 5}점). 비교적 쉬운 주(SA, TAS, NT)에 노미네이션 신청 권장.
              </div>
            ) : total >= 60 ? (
              <div className="bg-amber-50 border-amber-200 rounded-xl p-3 text-amber-800">
                ⚡ <strong>491 Regional</strong> 추천 (+15점 포함 {total + 15}점). 지역 거주 후 191로 PR. 또는 482/186 고용주 스폰서 고려.
              </div>
            ) : (
              <div className="bg-red-50 border-red-200 rounded-xl p-3 text-red-800">
                ⚠️ 65점 미만. 영어 향상(IELTS 8→+10점 추가), 경력 누적, 호주 학력 취득을 목표로. 482 비자로 경력 쌓으면서 포인트 전략 수립 권장.
              </div>
            )}
          </div>

          <p className="text-xs text-gray-400 mt-3 text-center">
            ※ 참고용 계산기. 공식 결과는{" "}
            <a href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">SkillSelect</a>
            에서 확인. 이민 에이전트 상담 권장.
          </p>
        </div>
      )}

      {/* Regional Map */}
      {subTab === 2 && (
        <div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 mb-4 text-xs text-emerald-800 flex gap-2">
            <span>✅</span>
            <div>지역(Regional)으로 갈수록 비자 신청이 유리합니다. 491 비자 +15점, 일부 주는 190 노미네이션이 쉽습니다.</div>
          </div>
          <div className="space-y-3 mb-4">
            {stateAdvantage.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h4 className="text-sm font-bold text-gray-800">{s.state}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    s.level === "hot" ? "bg-pink-100 text-pink-700" :
                    s.level === "warm" ? "bg-amber-100 text-amber-700" :
                    "bg-gray-100 text-gray-600"
                  }`}>
                    {s.level === "hot" ? "🔥 매우 유리" : s.level === "warm" ? "⚡ 유리" : "📋 표준"}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">{s.desc}</p>
                <p className="text-xs text-sky-600 font-medium">추천 비자: {s.visas}</p>
              </div>
            ))}
          </div>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-3 text-xs text-violet-800">
            <strong>💡 팁:</strong> 지역 정보는 주정부별로 자주 업데이트됩니다. 지원 전 각 주정부 이민 사이트에서 최신 노미네이션 요건 확인 필수!
          </div>
        </div>
      )}

      {/* Skills Assessment */}
      {subTab === 3 && (
        <div>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-3 mb-4 text-xs text-violet-800 flex gap-2">
            <span>🔍</span>
            <div>스킬 어세스먼트는 PR 비자 신청 전 필수. 차일드케어 전 직종 ACECQA가 주관합니다.</div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-violet-100 text-violet-700">ACECQA</span>
              <h4 className="text-sm font-bold text-gray-800">Australian Children&apos;s Education & Care Quality Authority</h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3 text-xs">
              <div className="bg-violet-50 rounded-lg p-2 text-center">
                <p className="font-bold text-violet-700">주관기관</p>
                <p className="text-gray-600 mt-0.5">ACECQA</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-2 text-center">
                <p className="font-bold text-pink-700">소요 비용</p>
                <p className="text-gray-600 mt-0.5">~AUD $800~1,000</p>
              </div>
              <div className="bg-sky-50 rounded-lg p-2 text-center">
                <p className="font-bold text-sky-700">소요 기간</p>
                <p className="text-gray-600 mt-0.5">6~16주</p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-2 text-center">
                <p className="font-bold text-emerald-700">유효 기간</p>
                <p className="text-gray-600 mt-0.5">3년</p>
              </div>
            </div>
            <a href="https://www.acecqa.gov.au/qualifications/skills-assessment" target="_blank" rel="noopener noreferrer" className="text-xs text-sky-500 hover:underline block">
              ACECQA 스킬 어세스먼트 신청 →
            </a>
          </div>

          {[
            {
              anzsco: "241111", title: "Early Childhood Teacher (ECT)", badge: "bg-pink-100 text-pink-700",
              requirements: ["4년제 학사 또는 Graduate Diploma", "ACECQA 승인 교육 기관 이수", "관련 임상 실습 시간 포함"],
              visas: "189, 190, 491, 482, 186",
              url: "https://www.acecqa.gov.au/qualifications/skills-assessment",
            },
            {
              anzsco: "421111", title: "Child Care Worker", badge: "bg-emerald-100 text-emerald-700",
              requirements: ["Certificate III 이상", "1년 이상 전일제 경력", "ACECQA 승인 자격"],
              visas: "190, 491, 482, 186, 494",
              url: "https://www.acecqa.gov.au/qualifications/skills-assessment",
            },
            {
              anzsco: "134111", title: "Child Care Centre Manager", badge: "bg-sky-100 text-sky-700",
              requirements: ["Diploma 이상 (관련 분야)", "관리 경력 필수", "ACECQA 또는 AIM 주관"],
              visas: "190, 491, 482, 186",
              url: "https://www.acecqa.gov.au/qualifications/skills-assessment",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-4 mb-3 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.badge}`}>{item.anzsco}</span>
                <h4 className="text-sm font-bold text-gray-800">{item.title}</h4>
              </div>
              <ul className="mb-2 space-y-1">
                {item.requirements.map((r, j) => (
                  <li key={j} className="text-xs text-gray-600 flex gap-2">
                    <span className="text-gray-400">•</span> {r}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-sky-600 font-medium">가능 비자: {item.visas}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xs text-sky-500 hover:underline mt-1 block">
                어세스먼트 신청 →
              </a>
            </div>
          ))}
        </div>
      )}

      {/* FAQ */}
      {subTab === 4 && (
        <div className="space-y-2">
          {faqItems.map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-sm transition-shadow">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left px-4 py-3 flex justify-between items-start gap-2"
              >
                <p className="text-sm font-medium text-gray-800">{item.q}</p>
                <span className="text-gray-400 text-xs flex-shrink-0 mt-0.5">{openFaq === i ? "▲" : "▼"}</span>
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4 border-t border-gray-50">
                  <p className="text-xs text-gray-600 leading-relaxed mt-3 mb-2">{item.a}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xs text-sky-500 hover:underline">
                    공식 안내 확인 →
                  </a>
                </div>
              )}
            </div>
          ))}
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-3 mt-4 text-xs text-violet-800">
            <strong>⚠️ 중요:</strong> 이민법은 자주 바뀝니다. 중요한 결정 전에는 반드시 공식 사이트 확인 또는{" "}
            <a href="https://www.mara.gov.au" target="_blank" rel="noopener noreferrer" className="underline">MARA 등록 이민 에이전트</a>와 상담하세요.
          </div>
        </div>
      )}
    </div>
  );
}
