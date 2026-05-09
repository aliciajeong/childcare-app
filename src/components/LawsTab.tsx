"use client";
import { useState } from "react";

const subTabs = ["🇦🇺 전국", "NSW", "NQF 7대 영역", "필수 코스"];

type LawCard = {
  badge: string;
  badgeColor: string;
  title: string;
  content: string;
  updated: string;
};

const nationalLaws: LawCard[] = [
  {
    badge: "National Law",
    badgeColor: "bg-pink-100 text-pink-700",
    title: "Education and Care Services National Law",
    content: "호주 전국 ECEC 서비스 운영 기준을 규정하는 핵심 법률. 서비스 승인, 교사 자격, 교사-아동 비율, 안전 기준을 포함. Victoria 주가 National Law 호스트 주이며 NSW가 National Regulations를 호스팅합니다.",
    updated: "최신 주요 개정: 2025년 12월 (Royal Assent)",
  },
  {
    badge: "National Regulations",
    badgeColor: "bg-emerald-100 text-emerald-700",
    title: "Education and Care Services National Regulations 2011",
    content: "National Law를 지원하는 세부 운영 요건. 교사 자격, 비율, 시설 기준, 기록 보관 의무 등 규정. Reg. 239A·240 인력 전환 조항은 2024년 12월 31일까지 연장 적용됐습니다.",
    updated: "개정 적용: 2025년 9월 1일, 2026년 1월 1일, 2026년 2월 27일",
  },
  {
    badge: "Child Safety 2025",
    badgeColor: "bg-blue-100 text-blue-700",
    title: "Early Childhood Legislation (Child Safety) Amendment Bill 2025",
    content: "NQF 역사상 가장 중요한 아동 안전 강화 개정: ① 아동의 안전·권리·이익이 최우선 원칙 ② 전국 교육자 등록제 도입 ③ 서비스 전용 기기만 허용 (개인 기기 금지) ④ 모든 최대 벌금 3배 인상 ⑤ WWCC 사전 보유 의무화 ⑥ FDC 주거 인근 지역 검사 확대",
    updated: "시행: 2026년 2월 27일 (대부분), 2026년 1월 1일 (벌금)",
  },
  {
    badge: "보고 의무 강화",
    badgeColor: "bg-orange-100 text-orange-700",
    title: "신체적·성적 학대 보고: 7일 → 24시간으로 단축",
    content: "서비스는 신체적·성적 학대 혐의 또는 사건을 인지한 시점으로부터 24시간 이내에 규제 당국에 통보해야 합니다. 기존 7일 기간에서 대폭 단축된 조치입니다.",
    updated: "시행: 2025년 9월 1일",
  },
  {
    badge: "디지털 안전",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "디지털 기기 및 이미지 촬영 정책 의무화",
    content: "ACECQA 국가 모델 코드 도입. 아동 이미지·영상 촬영·공유·저장에 관한 명확한 정책 및 절차 수립 필수. 서비스 전용 기기만 사용 허용. NSW는 2025년 11월 Ministerial Direction으로 추가 강화.",
    updated: "의무 적용: 2025년 9월 1일~, NSW 추가 조치: 2026년 2월 27일~",
  },
  {
    badge: "금지 사항",
    badgeColor: "bg-yellow-100 text-yellow-700",
    title: "베이핑(Vaping) 물질 및 기기 전면 금지",
    content: "기존 담배, 알코올, 불법 약물 금지에 더해 베이핑 물질 및 기기도 모든 ECEC 환경에서 전면 금지됩니다. 위반 시 최대 벌금 3배 인상된 기준 적용.",
    updated: "시행: 2026년 1월 1일",
  },
];

const nswLaws: LawCard[] = [
  {
    badge: "NSW 특화",
    badgeColor: "bg-pink-100 text-pink-700",
    title: "Section 3A — 아동 이익 최우선 원칙",
    content: "아동의 권리와 이익은 다른 모든 의무나 이익보다 우선합니다. 제공자의 재정적 이익, Corporations Act 2001에 따른 법인 의무도 포함. 서비스 운영에 관여하는 모든 사람에게 적용됩니다.",
    updated: "적용 시작: 2025년 10월",
  },
  {
    badge: "NSW 특화",
    badgeColor: "bg-emerald-100 text-emerald-700",
    title: "Regulation 168 — 아동 안전 채용·고용 정책",
    content: "인력 정책에 명확한 아동 안전 채용 및 고용 관행을 포함해야 합니다. Child safe recruitment, induction and training toolkit 활용 권장. 채용 절차, 배경 조회, 귀납 교육 기준 포함.",
    updated: "적용: 2026년 4월 24일",
  },
  {
    badge: "NSW 특화",
    badgeColor: "bg-blue-100 text-blue-700",
    title: "Regulation 87 — 사고·부상·외상 기록 강화",
    content: "사건 기록에 통보를 한 사람의 이름과 서명을 반드시 포함해야 합니다. 책임성 강화 및 명확한 기록 관리가 목적. 모든 incident, injury, trauma, illness 기록에 적용.",
    updated: "적용: 2026년 4월 24일",
  },
  {
    badge: "NSW 특화",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "Regulation 118 — Educational Leader 역할 공식화",
    content: "Educational Leader는 책임을 공식적으로 수락한 기록을 유지해야 합니다. 교육 프로그램 개발 및 실행을 주도하는 역할에 대한 명확성 확보. 기록 보관 의무 신규 추가.",
    updated: "적용: 2026년 4월 24일",
  },
  {
    badge: "NSW 특화",
    badgeColor: "bg-yellow-100 text-yellow-700",
    title: "Regulation 151 — 교육자 배치 기록 의무",
    content: "각 교육자가 배치된 방(room)과 시간을 기록해야 합니다. 교사-아동 비율 준수 증빙, 책임성 강화 목적.",
    updated: "적용: 2026년 4월 24일",
  },
  {
    badge: "NSW 규제 당국",
    badgeColor: "bg-orange-100 text-orange-700",
    title: "NSW Early Learning Commission",
    content: "NSW의 독립 ECEC 규제 당국. NSW Dept of Education에서 독립. 교육 서비스 평가·등급 부여·규정 준수 모니터링 담당. 위반 시 조사 및 제재 권한 보유. 📞 1800 619 113",
    updated: "웹사이트: education.nsw.gov.au/early-childhood-education",
  },
];

const nqsAreas = [
  { qa: "QA 1", title: "교육 프로그램 및 실제", desc: "아동의 학습·발달·웰빙을 위한 교육 과정 및 프로그램 품질. EYLF/MTOP 기반 교육 과정 구현.", color: "border-pink-400 bg-pink-50", badge: "bg-pink-100 text-pink-700" },
  { qa: "QA 2", title: "아동 건강 및 안전", desc: "건강·안전·웰빙 보호. 2025년 9월부터 Element 2.2.3이 '아동 안전 및 보호'로 강화. 아동 학대 식별·대응 강조.", color: "border-emerald-400 bg-emerald-50", badge: "bg-emerald-100 text-emerald-700" },
  { qa: "QA 3", title: "물리적 환경", desc: "안전하고 적합하며 자극적인 환경 제공. 실내외 공간 기준, 장난감·자료의 적절성.", color: "border-sky-400 bg-sky-50", badge: "bg-sky-100 text-sky-700" },
  { qa: "QA 4", title: "인력 배치 및 역량", desc: "자격을 갖춘 적절한 인력 배치. 교사-아동 비율, 자격 요건, 전문성 개발.", color: "border-violet-400 bg-violet-50", badge: "bg-violet-100 text-violet-700" },
  { qa: "QA 5", title: "아동과의 관계", desc: "교육자와 아동 간 존중하고 양육적인 관계 형성. 감정적 안전, 소속감 지원.", color: "border-orange-400 bg-orange-50", badge: "bg-orange-100 text-orange-700" },
  { qa: "QA 6", title: "가족 및 커뮤니티 협력", desc: "가족과 지역사회와의 협력적 파트너십 구축. 정보 공유, 참여 기회 제공.", color: "border-yellow-400 bg-yellow-50", badge: "bg-yellow-100 text-yellow-700" },
  { qa: "QA 7", title: "리더십 및 서비스 관리", desc: "효과적인 리더십, 관리 실제 및 지속적 개선. 2025년 9월 일부 강화. 철학 공유, 명확한 방향 제시.", color: "border-teal-400 bg-teal-50", badge: "bg-teal-100 text-teal-700" },
];

const courses: LawCard[] = [
  { badge: "필수 기본 자격", badgeColor: "bg-pink-100 text-pink-700", title: "CHC30121 — Certificate III in Early Childhood Education and Care", content: "ECEC 교육자의 기본 자격. 모든 교육자는 최소 Cert III 보유 또는 학습 중이어야 합니다. Level 3 시급 적용. 아동 보육, 교육 프로그램 지원, 안전·건강 유지 등을 포함합니다.", updated: "Children's Services Award Level 3 적용" },
  { badge: "중급 자격", badgeColor: "bg-emerald-100 text-emerald-700", title: "CHC50121 — Diploma of Early Childhood Education and Care", content: "교사 비율에서 '자격을 갖춘 교육자'로 인정. Room Leader 역할. Level 5 시급 적용 (2026년 3월 신규 체계). Graduate Diploma 진학 시 유리. 교육 프로그램 설계·평가, 팀 리더십 포함.", updated: "Children's Services Award Level 5 적용" },
  { badge: "ECT 자격", badgeColor: "bg-blue-100 text-blue-700", title: "Bachelor of Education (Early Childhood) / ECT 자격", content: "Early Childhood Teacher (ECT) 자격. Level 6 이상 시급 (2026년 3월 신규 체계). 각 서비스에 최소 1명의 ECT 배치 의무 (중심 기반 서비스 기준). 교사 비율 충족, 교육 프로그램 주도.", updated: "Children's Services Award Level 6+ 적용" },
  { badge: "Graduate Diploma", badgeColor: "bg-purple-100 text-purple-700", title: "Graduate Diploma of Early Childhood Education", content: "타 전공 졸업생이 ECT 자격을 취득하는 경로. ACECQA 인정. 공부 중 NQF·EYLF·아동 발달·법규 지식이 핵심입니다. 이 앱이 공부에 직접 도움이 됩니다!", updated: "ACECQA 승인 교육 기관 수강 필요" },
  { badge: "필수 체크", badgeColor: "bg-orange-100 text-orange-700", title: "Working With Children Check (WWCC)", content: "NSW에서 필수. 2026년 2월 27일부터 근무 시작 전 사전 보유 의무화 (기존에는 근무 후 가능). 5년 갱신. 신청: Service NSW (13 77 88 또는 service.nsw.gov.au). 타 주에서 발급된 WWCC는 NSW에서 자동 인정되지 않습니다.", updated: "사전 보유 의무화: 2026년 2월 27일~" },
  { badge: "응급 자격 필수", badgeColor: "bg-yellow-100 text-yellow-700", title: "First Aid, CPR, Asthma & Anaphylaxis 자격", content: "모든 교육자 필수. First Aid: 3년마다 갱신. CPR: 매년 갱신. Asthma 관리 (ACAR): 3년마다. Anaphylaxis (EpiPen) 관리: 3년마다. 총 4가지 갱신 일정 관리 필요.", updated: "매년 CPR 갱신 필수, 기타 3년 주기" },
  { badge: "필수 교육", badgeColor: "bg-teal-100 text-teal-700", title: "Child Protection Training (아동 보호 교육)", content: "아동 학대 및 방임 인식, 신고 의무, 안전 환경 조성 교육. NSW는 NSW Mandatory Reporter Guide 활용. 정기적 갱신 권장. 2025년 NQF 개혁으로 더욱 중요성 강화.", updated: "정기 갱신 권장 (서비스 정책에 따라)" },
];

export default function LawsTab() {
  const [subTab, setSubTab] = useState(0);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5">
        {subTabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setSubTab(i)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              subTab === i
                ? "bg-emerald-100 border-emerald-300 text-emerald-700"
                : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* National */}
      {subTab === 0 && (
        <div className="space-y-3">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 flex gap-2 items-start mb-4">
            <span>📅</span>
            <p className="text-xs text-yellow-800">Early Childhood Legislation (Child Safety) Amendment Bill 2025 통과 — 2026년 2월 27일부터 대부분 시행</p>
          </div>
          {nationalLaws.map((law, i) => (
            <LawCard key={i} {...law} />
          ))}
        </div>
      )}

      {/* NSW */}
      {subTab === 1 && (
        <div className="space-y-3">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 flex gap-2 items-start mb-4">
            <span>📅</span>
            <p className="text-xs text-yellow-800">Children (Education and Care Services National Law Application) Amendment Act 2025 — NSW 특화 30개 이상 개혁 조치, 단계별 시행 중</p>
          </div>
          {nswLaws.map((law, i) => (
            <LawCard key={i} {...law} />
          ))}
        </div>
      )}

      {/* NQF 7 areas */}
      {subTab === 2 && (
        <div>
          <p className="text-xs text-gray-500 mb-4">NQS(National Quality Standard) 7대 품질 영역 — 모든 ECEC 서비스 평가 기준</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {nqsAreas.map((a, i) => (
              <div key={i} className={`rounded-2xl p-4 border-t-4 border border-gray-100 ${a.color}`}>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${a.badge} mb-2 inline-block`}>{a.qa}</span>
                <h4 className="text-sm font-bold text-gray-800 mb-1">{a.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-gray-50 rounded-xl p-3 text-xs text-gray-500">
            <strong>평가 등급 (낮→높):</strong> Significant Improvement Required → Working Towards NQS → Meeting NQS → Exceeding NQS → Excellent
          </div>
        </div>
      )}

      {/* Courses */}
      {subTab === 3 && (
        <div className="space-y-3">
          {courses.map((c, i) => (
            <LawCard key={i} {...c} />
          ))}
        </div>
      )}
    </div>
  );
}

function LawCard({ badge, badgeColor, title, content, updated }: LawCard) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-sm transition-shadow">
      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeColor} mb-2 inline-block`}>
        {badge}
      </span>
      <h4 className="text-sm font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-xs text-gray-600 leading-relaxed">{content}</p>
      <p className="text-xs text-gray-400 mt-2">
        <span className="text-emerald-500 font-semibold">업데이트: </span>{updated}
      </p>
    </div>
  );
}
