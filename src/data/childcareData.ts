export const stateData: Record<string, {
  name: string;
  highlight: boolean;
  info: string;
  ratios: string;
  authority: string;
  phone: string;
  updates: { date: string; text: string }[];
}> = {
  NSW: {
    name: "New South Wales (NSW) — 시드니 ★",
    highlight: true,
    info: "현재 거주 지역. 호주에서 가장 강화된 아동 안전 규제 적용 중. NSW Early Learning Commission이 독립 규제 기관으로 운영됩니다.",
    ratios: "0~2세: 1:4 | 3~5세: 1:11 | OSHC: 1:15",
    authority: "NSW Early Learning Commission",
    phone: "1800 619 113",
    updates: [
      { date: "2026년 4월 24일", text: "Children (Education and Care) Amendment Act 2025 추가 시행 — 아동 안전 채용 정책 (Reg. 168), 사고 기록 개정 (Reg. 87), Educational Leader 공식 수락 기록 (Reg. 118), 교육자 배치 기록 (Reg. 151)" },
      { date: "2026년 2월 27일", text: "개인 기기 금지 (Part 6A), WWCC 사전 보유 의무화, 전국 교육자 등록제 시행, 벌금 3배 인상" },
      { date: "2026년 1월 1일", text: "베이핑 물질 및 기기 전면 금지, NQS QA 2·7 강화 적용" },
      { date: "2025년 10월", text: "Section 3A 아동 이익 최우선 원칙 법률 적용 시작 — 재정적 이익보다 아동 권리 우선" },
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
    updates: [
      { date: "2026년 1월 1일", text: "전국 NQF 아동 안전 강화 개혁 적용" },
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
    updates: [
      { date: "2026년 1월 1일", text: "전국 NQF 아동 안전 강화 개혁 적용" },
      { date: "2025년 9월 1일", text: "24시간 보고 의무, 디지털 기기 정책 의무화" },
    ],
  },
  WA: {
    name: "Western Australia (WA)",
    highlight: false,
    info: "국가 NQF를 별도 채택. WA 자체 규제 기관 운영. 2012년부터 국가 시스템 참여.",
    ratios: "0~2세: 1:4 | 3~5세: 1:11",
    authority: "Department of Communities WA",
    phone: "1800 199 090",
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
    updates: [
      { date: "2025~2026년", text: "전국 NQF 아동 안전 개혁 단계별 적용" },
    ],
  },
  NT: {
    name: "Northern Territory (NT)",
    highlight: false,
    info: "원격 지역 인력 유연 조항 (Reg. 239A) 적용. 원격/매우 원격 지역 ECT 배치 특별 조항 적용.",
    ratios: "0~2세: 1:4 | 3~5세: 1:11",
    authority: "NT Department of Education",
    phone: "1800 450 648",
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
    updates: [
      { date: "2025년 9월 1일", text: "전국 NQF 아동 안전 개혁 적용" },
    ],
  },
  ACT: {
    name: "Australian Capital Territory (ACT)",
    highlight: false,
    info: "Regulation 264 ACT 특화 ECT 자격 조항 적용. NQF는 Education and Care Services National Law (ACT) Act 2011로 채택.",
    ratios: "0~2세: 1:4 | 3~5세: 1:11",
    authority: "ACT Education Directorate",
    phone: "13 34 28",
    updates: [
      { date: "2025~2026년", text: "전국 NQF 아동 안전 개혁 단계별 적용" },
    ],
  },
};

export const payRates = [
  { level: "Level 1", role: "보조 직원 (무자격)", permanent: "$23.65", casual: "$29.56", badge: "기본" },
  { level: "Level 2", role: "조리·청소·행정 보조", permanent: "$25.20", casual: "$31.50", badge: "보조" },
  { level: "Level 3.1", role: "Cert III 교육자 (1년 미만)", permanent: "$26.18", casual: "$32.73", badge: "Cert III" },
  { level: "Level 3.2", role: "Cert III 교육자 (1~2년)", permanent: "$26.63", casual: "$33.29", badge: "Cert III" },
  { level: "Level 3.3", role: "Cert III 교육자 (3년+)", permanent: "$27.08", casual: "$33.85", badge: "Cert III" },
  { level: "Level 4.1", role: "Diploma 교육자 (신입)", permanent: "$28.92", casual: "$36.15", badge: "Diploma" },
  { level: "Level 4.2", role: "Diploma 교육자 / Room Leader", permanent: "$29.42", casual: "$36.78", badge: "Diploma" },
  { level: "Level 4.3", role: "Diploma Room Leader (경험)", permanent: "$29.92", casual: "$37.40", badge: "Diploma" },
  { level: "Level 5.1", role: "ECT 신입 (Bachelor/Grad Dip)", permanent: "$30.42", casual: "$38.03", badge: "ECT" },
  { level: "Level 5.2", role: "ECT (1~2년)", permanent: "$31.75", casual: "$39.69", badge: "ECT" },
  { level: "Level 5.3", role: "ECT (3년+) / 교육 리더", permanent: "$33.10", casual: "$41.38", badge: "ECT" },
  { level: "Level 6", role: "Assistant Director", permanent: "$35.50", casual: "$44.38", badge: "관리직" },
  { level: "Level 7", role: "Director / Centre Manager", permanent: "$38.00+", casual: "협의", badge: "관리직" },
];

export const contacts = [
  { name: "Fair Work Ombudsman", desc: "임금 문의, 미지급 신고, 고용 조건", phone: "13 13 94", url: "www.fairwork.gov.au" },
  { name: "ACECQA (전국 품질 당국)", desc: "NQF, EYLF, 자격 인정, 서비스 등급 문의", phone: "1300 422 327", url: "www.acecqa.gov.au" },
  { name: "NSW Early Learning Commission", desc: "NSW 규제, 컴플라이언스, 아동 안전 문의", phone: "1800 619 113", url: "education.nsw.gov.au/early-childhood-education" },
  { name: "Service NSW (WWCC 신청)", desc: "Working With Children Check 신청·갱신", phone: "13 77 88", url: "www.service.nsw.gov.au" },
  { name: "ACA NSW (호주 차일드케어 연합)", desc: "고용주 지원, 최신 시급표, Award 조건", phone: "02 9899 0000", url: "nsw.childcarealliance.org.au" },
  { name: "Fair Work Commission", desc: "Children's Services Award, 임금 심사", phone: "1300 799 675", url: "www.fwc.gov.au" },
];

export const sources = [
  { icon: "🏛", title: "ACECQA", desc: "NQF, NQS, EYLF/MTOP 공식 가이드, 자격 인정, 서비스 평가 등급 검색", url: "https://www.acecqa.gov.au" },
  { icon: "🏫", title: "NSW Early Learning Commission / NSW Dept of Education", desc: "NSW 규제, 컴플라이언스, 아동 안전 개혁, 교육자 정보", url: "https://education.nsw.gov.au/early-childhood-education" },
  { icon: "🇦🇺", title: "Australian Government — Dept of Education", desc: "NQF 국가 정책, CCS 보조금, Worker Retention Payment 시급표", url: "https://www.education.gov.au/early-childhood" },
  { icon: "⚖️", title: "Fair Work Ombudsman & Commission", desc: "Children's Services Award (MA000120), 시급표, 고용 조건, PACT 계산기", url: "https://www.fairwork.gov.au" },
  { icon: "📚", title: "EYLF V2.0 공식 문서 (ACECQA)", desc: "Belonging, Being & Becoming: The Early Years Learning Framework V2.0 (2022)", url: "https://www.acecqa.gov.au/nqf/national-law-regulations/approved-learning-frameworks" },
  { icon: "💼", title: "ACA NSW — Australian Childcare Alliance NSW", desc: "NSW 시급표, 직원 분류, Award 조건, 고용주 지원 자료", url: "https://nsw.childcarealliance.org.au/2024-2025-wage-rates" },
  { icon: "🌐", title: "Aussie Childcare Network", desc: "법규 업데이트 요약, 교육자 실용 정보, 관찰 템플릿, 커뮤니티", url: "https://aussiechildcarenetwork.com.au" },
  { icon: "🔍", title: "NSW Legislation Database", desc: "Education and Care Services National Regulations 원문 검색", url: "https://legislation.nsw.gov.au" },
  { icon: "🆔", title: "Service NSW — WWCC 신청", desc: "Working With Children Check 신청 및 갱신. 전화: 13 77 88", url: "https://www.service.nsw.gov.au/transaction/apply-working-children-check" },
  { icon: "🏥", title: "Worker Retention Payment — Dept of Education", desc: "정부 시급 보조 프로그램 최신 시급표 (2025~2026)", url: "https://www.education.gov.au/early-childhood/providers/workforce/wages/minimum-rates" },
];
