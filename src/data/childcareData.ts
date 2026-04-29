// ============================================================
// 호주 차일드케어 레퍼런스 — 데이터 파일
// 마지막 업데이트: 2026년 4월
// 시급: Children's Services Award MA000120 (2026년 3월 1일 신규 체계)
// ============================================================

export const stateData: Record<string, {
  name: string;
  highlight: boolean;
  info: string;
  ratios: string;
  authority: string;
  phone: string;
  website: string;
  updates: { date: string; text: string }[];
}> = {
  NSW: {
    name: "New South Wales (NSW) — 시드니 ★",
    highlight: true,
    info: "현재 거주 지역. 호주에서 가장 강화된 아동 안전 규제 적용 중. NSW Early Learning Commission이 독립 규제 기관으로 운영됩니다.",
    ratios: "0~2세: 1:4 | 3~5세: 1:11 | OSHC: 1:15",
    authority: "NSW Early Learning Commission",
    phone: "1800 619 113",
    website: "https://education.nsw.gov.au/early-childhood-education",
    updates: [
      { date: "2026년 4월 24일", text: "채용 정책(Reg.168), 사고 기록(Reg.87), Educational Leader 수락 기록(Reg.118), 교육자 배치 기록(Reg.151) 강화 적용" },
      { date: "2026년 2월 27일", text: "개인 기기 금지 (Part 6A), WWCC 사전 보유 의무화, 전국 교육자 등록제 시행, 벌금 3배 인상" },
      { date: "2026년 1월 1일", text: "베이핑 물질 및 기기 전면 금지, NQS QA 2·7 강화 적용" },
      { date: "2025년 10월", text: "Section 3A — 아동 이익 최우선 원칙 법률 적용 시작" },
      { date: "2025년 9월 1일", text: "24시간 보고 의무 (기존 7일→24시간), 디지털 기기 정책 수립 의무, NQS Element 2.2.3 강화" },
    ],
  },
  VIC: {
    name: "Victoria (VIC)",
    highlight: false,
    info: "Victorian Early Years Learning and Development Framework (VEYLDF)가 별도로 유지됩니다. NQF 전국 기준 적용. Victoria가 National Law 호스트 주입니다.",
    ratios: "0~2세: 1:4 | 3~5세: 1:11",
    authority: "Department of Education Victoria",
    phone: "1300 307 415",
    website: "https://www.vic.gov.au/childcare",
    updates: [
      { date: "2026년 2월", text: "전국 NQF 아동 안전 강화 개혁 적용" },
      { date: "2025년 9월 1일", text: "24시간 보고 의무, 디지털 기기 정책 의무화" },
    ],
  },
  QLD: {
    name: "Queensland (QLD)",
    highlight: false,
    info: "NQF 전국 기준 적용. Regulation 242 (교육자 비율 대체 조항) 적용 대상에서 제외됩니다.",
    ratios: "0~2세: 1:4 | 3~5세: 1:11",
    authority: "Department of Education QLD",
    phone: "1800 088 369",
    website: "https://earlychildhood.qld.gov.au",
    updates: [
      { date: "2026년 초", text: "전국 NQF 아동 안전 강화 개혁 적용" },
      { date: "2025년 9월 1일", text: "24시간 보고 의무, 디지털 기기 정책 의무화" },
    ],
  },
  WA: {
    name: "Western Australia (WA)",
    highlight: false,
    info: "Education and Care Services National Law (WA) Act 2012로 별도 채택. WA 자체 규제 기관 운영. 2012년부터 국가 시스템 참여.",
    ratios: "0~2세: 1:4 | 3~5세: 1:11",
    authority: "Department of Communities WA",
    phone: "1800 199 090",
    website: "https://www.wa.gov.au",
    updates: [
      { date: "2025~2026년", text: "전국 NQF 아동 안전 개혁 단계별 적용" },
    ],
  },
  SA: {
    name: "South Australia (SA)",
    highlight: false,
    info: "NQF 전국 기준 적용. 원격/농촌 지역 인력 유연 조항 (Reg. 239A) 적용 대상.",
    ratios: "0~2세: 1:4 | 3~5세: 1:11",
    authority: "Department for Education SA",
    phone: "1800 882 413",
    website: "https://www.sa.gov.au",
    updates: [
      { date: "2025~2026년", text: "전국 NQF 아동 안전 개혁 단계적 적용" },
    ],
  },
  NT: {
    name: "Northern Territory (NT)",
    highlight: false,
    info: "원격 지역 인력 유연 조항 (Reg. 239A) 적용. 원격/매우 원격 지역 ECT 배치 특별 조항 적용.",
    ratios: "0~2세: 1:4 | 3~5세: 1:11",
    authority: "NT Department of Education",
    phone: "1800 450 648",
    website: "https://education.nt.gov.au",
    updates: [
      { date: "2024년 12월 31일", text: "Reg. 239A 원격 지역 ECT 유연 조항 연장 만료" },
    ],
  },
  TAS: {
    name: "Tasmania (TAS)",
    highlight: false,
    info: "NQF 전국 기준 적용. Regulation 239A 원격 지역 조항 적용 대상.",
    ratios: "0~2세: 1:4 | 3~5세: 1:11",
    authority: "Department for Education, Children and Young People TAS",
    phone: "1800 816 057",
    website: "https://www.education.tas.gov.au",
    updates: [
      { date: "2025년 9월 1일", text: "전국 NQF 아동 안전 개혁 적용" },
    ],
  },
  ACT: {
    name: "Australian Capital Territory (ACT)",
    highlight: false,
    info: "Regulation 264 ACT 특화 ECT 자격 조항. NQF는 Education and Care Services National Law (ACT) Act 2011로 채택.",
    ratios: "0~2세: 1:4 | 3~5세: 1:11",
    authority: "ACT Education Directorate",
    phone: "13 34 28",
    website: "https://www.education.act.gov.au",
    updates: [
      { date: "2025~2026년", text: "전국 NQF 아동 안전 개혁 단계적 적용" },
    ],
  },
};

// ============================================================
// 시급표 — 2026년 3월 1일 신규 CSE Level 1~8 체계
// Children's Services Award 2010 (MA000120)
// Gender-Based Undervaluation Priority Review 결정 반영
// ============================================================
export const payRates = [
  { level: "Level 1", title: "Introductory Educator", criteria: "경력 12개월 미만", permanent: "$26.19", casual: "$32.74", badge: "입문" },
  { level: "Level 2", title: "Educator", criteria: "경력 12개월 이상", permanent: "$27.00", casual: "$33.75", badge: "일반" },
  { level: "Level 3", title: "Qualified Educator", criteria: "Certificate III 소지", permanent: "$29.52", casual: "$36.90", badge: "Cert III" },
  { level: "Level 4", title: "Experienced Educator", criteria: "Cert III + 4년 이상 경력", permanent: "$31.50", casual: "$39.38", badge: "Cert III+" },
  { level: "Level 5", title: "Advanced Educator", criteria: "Diploma 소지", permanent: "$33.24", casual: "$41.55", badge: "Diploma" },
  { level: "Level 6", title: "Room Leader", criteria: "지정 룸 리더 / OSHC 어시스턴트", permanent: "$34.78", casual: "$43.48", badge: "Room Lead" },
  { level: "Level 7", title: "Assistant Director", criteria: "코디네이터 / AQF 5~6", permanent: "$36.37", casual: "$45.46", badge: "Asst Dir" },
  { level: "Level 8", title: "Director", criteria: "서비스 리더십 / 학위 이상", permanent: "$41.93", casual: "$52.41", badge: "Director" },
];

export const supportWorkerRates = [
  { level: "SW 1.1", title: "Support Worker — 시작", weekly: "$948.00", hourly: "$24.95", casualHourly: "$31.19" },
  { level: "SW 2.1", title: "Support Worker — 시작", weekly: "$977.00", hourly: "$25.71", casualHourly: "$32.14" },
  { level: "SW 2.2", title: "Support Worker — 1년 후", weekly: "$1,009.10", hourly: "$26.56", casualHourly: "$33.20" },
  { level: "SW 3.1", title: "Support Worker — 시작", weekly: "$1,068.40", hourly: "$28.12", casualHourly: "$35.15" },
];

export const contacts = [
  { name: "Fair Work Ombudsman", desc: "임금 문의, 미지급 신고, 고용 조건", phone: "13 13 94", url: "https://www.fairwork.gov.au" },
  { name: "ACECQA (전국 품질 당국)", desc: "NQF, EYLF, 자격 인정, 서비스 등급 문의", phone: "1300 422 327", url: "https://www.acecqa.gov.au" },
  { name: "NSW Early Learning Commission", desc: "NSW 규제, 컴플라이언스, 아동 안전 문의", phone: "1800 619 113", url: "https://education.nsw.gov.au/early-childhood-education" },
  { name: "Service NSW (WWCC 신청)", desc: "Working With Children Check 신청·갱신", phone: "13 77 88", url: "https://www.service.nsw.gov.au/transaction/apply-working-children-check" },
  { name: "ACA NSW (호주 차일드케어 연합)", desc: "고용주 지원, 최신 시급표, Award 조건", phone: "02 9899 0000", url: "https://nsw.childcarealliance.org.au" },
  { name: "Fair Work Commission", desc: "Children's Services Award, 임금 심사", phone: "1300 799 675", url: "https://www.fwc.gov.au" },
  { name: "Dept of Home Affairs — Migration", desc: "비자 신청, SkillSelect, 직종 리스트", phone: "131 881", url: "https://immi.homeaffairs.gov.au" },
];

export const sources = [
  { icon: "🏛", title: "ACECQA", desc: "NQF, NQS, EYLF/MTOP 공식 가이드, 자격 인정, 서비스 평가 등급 검색", url: "https://www.acecqa.gov.au" },
  { icon: "🏫", title: "NSW Early Learning Commission", desc: "NSW 규제, 컴플라이언스, 아동 안전 개혁", url: "https://education.nsw.gov.au/early-childhood-education" },
  { icon: "🇦🇺", title: "Australian Government — Dept of Education", desc: "NQF 국가 정책, Worker Retention Payment 시급표", url: "https://www.education.gov.au/early-childhood" },
  { icon: "⚖️", title: "Fair Work — MA000120 Pay Guide (2026년 3월)", desc: "2026년 3월 1일 신규 시급표 공식 PDF", url: "https://calculate.fairwork.gov.au/Download/AwardSummary?awardCode=ma000120&fileType=pdf" },
  { icon: "💰", title: "WRP 최신 시급표 — Dept of Education", desc: "Worker Retention Payment 포함 시급표 (2025.12~2026.11)", url: "https://www.education.gov.au/early-childhood/providers/workforce/wages/minimum-rates" },
  { icon: "📚", title: "EYLF V2.0 공식 문서 (ACECQA)", desc: "Belonging, Being & Becoming — 국가 승인 학습 프레임워크 V2.0 (2022)", url: "https://www.acecqa.gov.au/nqf/national-law-regulations/approved-learning-frameworks" },
  { icon: "💼", title: "ACA NSW — Australian Childcare Alliance NSW", desc: "NSW 시급표, 직원 분류, Award 조건, 고용주 지원 자료", url: "https://nsw.childcarealliance.org.au/2024-2025-wage-rates" },
  { icon: "🌐", title: "Aussie Childcare Network", desc: "법규 업데이트 요약, 교육자 실용 정보, 관찰 템플릿, 커뮤니티", url: "https://aussiechildcarenetwork.com.au" },
  { icon: "🔍", title: "NSW Legislation Database", desc: "Education and Care Services National Regulations 원문 검색", url: "https://legislation.nsw.gov.au" },
  { icon: "🆔", title: "Service NSW — WWCC 신청", desc: "Working With Children Check 신청 및 갱신", url: "https://www.service.nsw.gov.au/transaction/apply-working-children-check" },
  { icon: "✈", title: "Dept of Home Affairs — Skilled Migration", desc: "비자 신청, 포인트 테스트, SkillSelect, 직종 리스트", url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect" },
  { icon: "🎓", title: "ACECQA — 스킬 어세스먼트 (PR 비자용)", desc: "차일드케어 직종 PR 비자용 공식 스킬 어세스먼트 신청", url: "https://www.acecqa.gov.au/qualifications/skills-assessment" },
  { icon: "📋", title: "NSW Legislation — Children Amendment Act 2025", desc: "NSW 아동 안전 개혁 법령 원문", url: "https://legislation.nsw.gov.au/view/html/inforce/current/act-2023-071" },
  { icon: "🧮", title: "Fair Work PACT Pay Calculator", desc: "정확한 시급 계산기 — 개인 상황에 맞는 시급 확인", url: "https://calculate.fairwork.gov.au" },
];

export const visaOccupations = [
  { anzsco: "241111", title: "Early Childhood (Pre-Primary School) Teacher", listType: "MLTSSL + CSOL", visas: "189, 190, 491, 482, 186", assessBody: "ACECQA" },
  { anzsco: "421111", title: "Child Care Worker", listType: "CSOL (Essential Skills)", visas: "190, 491, 482, 186, 494", assessBody: "ACECQA" },
  { anzsco: "134111", title: "Child Care Centre Manager", listType: "CSOL", visas: "190, 491, 482, 186", assessBody: "ACECQA 또는 AIM" },
];
