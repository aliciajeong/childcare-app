"use client";
import { useState } from "react";

const subTabs = ["관찰 유형", "포트폴리오", "EYLF 연결 방법", "필수 용어"];

export default function ObsTab() {
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
                ? "bg-violet-100 border-violet-300 text-violet-700"
                : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Observation Types */}
      {subTab === 0 && (
        <div className="space-y-3">
          {[
            {
              title: "Learning Story (러닝 스토리)",
              color: "bg-pink-50 border-pink-200",
              titleColor: "text-pink-700",
              items: [
                "아동의 학습 순간을 이야기 형식으로 서술 (1인칭 또는 3인칭)",
                "구조: What I noticed → What it means → Opportunities & possibilities",
                "EYLF Learning Outcomes, 원칙, 실제와 연결 필수",
                "사진 또는 아동 작품 첨부 권장",
                "포트폴리오의 핵심 — 가족과 공유",
              ],
            },
            {
              title: "Anecdotal Record (일화적 기록)",
              color: "bg-emerald-50 border-emerald-200",
              titleColor: "text-emerald-700",
              items: [
                "짧고 구체적인 사건/행동을 객관적으로 기술",
                "포함 요소: 날짜, 시간, 장소, 상황, 관찰된 행동",
                "What happened만 기록 — 평가나 해석 제외",
                "나중에 분석/해석 및 EYLF 연결 추가",
                "일상적으로 가장 자주 사용되는 관찰 방법",
              ],
            },
            {
              title: "Jottings (짧은 메모)",
              color: "bg-sky-50 border-sky-200",
              titleColor: "text-sky-700",
              items: [
                "즉시 기록하는 짧은 메모, 키워드, 직접 인용구",
                "나중에 러닝 스토리 또는 일화 기록으로 확장 가능",
                "⚠️ 디지털 플랫폼(Storypark 등) 사용 시 서비스 전용 기기 사용 — 2026년 2월부터 개인 기기 금지",
                "포스트잇, 메모장, 서비스 전용 기기 활용",
              ],
            },
            {
              title: "Work Samples (작품 샘플)",
              color: "bg-violet-50 border-violet-200",
              titleColor: "text-violet-700",
              items: [
                "아동이 만든 그림, 공작물, 글쓰기 등 수집",
                "날짜, 컨텍스트, 아동의 직접 설명 기록",
                "발달 진행 상황 파악에 매우 유용",
                "정기적 수집으로 성장 비교 가능",
              ],
            },
            {
              title: "Sociogram (사회도)",
              color: "bg-orange-50 border-orange-200",
              titleColor: "text-orange-700",
              items: [
                "아동 간 사회적 관계 및 상호작용 시각화",
                "누가 누구와 놀고, 누가 혼자인지 파악",
                "LO 1 (정체성), LO 2 (커뮤니티 연결)과 직접 연결",
                "교육 과정 계획 및 개입 전략 수립에 활용",
              ],
            },
            {
              title: "Running Record (연속 기록)",
              color: "bg-teal-50 border-teal-200",
              titleColor: "text-teal-700",
              items: [
                "일정 시간 동안 아동의 행동을 연속적으로 기록",
                "특정 행동 패턴 파악 또는 발달 평가에 활용",
                "시간 간격(time sampling) 또는 사건 발생(event sampling) 방식 선택",
                "특별한 지원이 필요한 아동 평가에 유용",
              ],
            },
          ].map((card, i) => (
            <div key={i} className={`rounded-2xl p-4 border ${card.color}`}>
              <h4 className={`text-sm font-bold mb-2 ${card.titleColor}`}>{card.title}</h4>
              <ul className="space-y-1">
                {card.items.map((item, j) => (
                  <li key={j} className="text-xs text-gray-600 flex gap-2 items-start">
                    <span className="text-gray-400 mt-0.5 flex-shrink-0">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Portfolio */}
      {subTab === 1 && (
        <div className="space-y-3">
          <div className="bg-violet-50 border border-violet-200 rounded-2xl p-4">
            <h4 className="text-sm font-bold text-violet-700 mb-3">포트폴리오 구성 요소</h4>
            <div className="space-y-2">
              {[
                { label: "아동 프로필", desc: "관심사, 강점, 학습 스타일, 언어 배경, 가족 정보, 문화적 배경" },
                { label: "관찰 기록", desc: "러닝 스토리, 일화 기록, 사진 (서비스 전용 기기 촬영)" },
                { label: "작품 샘플", desc: "날짜별 정리된 그림, 공작물, 글쓰기 등" },
                { label: "가족 기여", desc: "가정에서의 학습 이야기, 특별한 사건, 문화적 경험" },
                { label: "아동 목소리", desc: "아동의 계획, 성찰, 직접 인용구 포함" },
                { label: "개인 학습 계획 (ILP)", desc: "현재 발달 수준, 다음 단계 목표, 지원 전략" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-violet-200 text-violet-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">{item.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-pink-50 border border-pink-200 rounded-2xl p-4">
            <h4 className="text-sm font-bold text-pink-700 mb-3">디지털 플랫폼 안내</h4>
            <div className="space-y-2 mb-3">
              {[
                { name: "Storypark", desc: "가장 널리 사용. 가족 공유 기능 우수." },
                { name: "Kindyhub", desc: "호주 특화 플랫폼. 보고서 기능 강력." },
                { name: "Xplor", desc: "운영 관리 + 학습 기록 통합." },
                { name: "SeeSaw", desc: "주로 학교 환경 사용." },
              ].map((p, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <span className="text-xs font-bold text-pink-600 w-20 flex-shrink-0">{p.name}</span>
                  <span className="text-xs text-gray-500">{p.desc}</span>
                </div>
              ))}
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-2">
              <p className="text-xs text-red-700 font-semibold">⚠️ 2026년 2월 27일부터 NSW: 개인 기기로 아동 사진 촬영 금지. 반드시 서비스 전용 기기 사용!</p>
            </div>
          </div>
        </div>
      )}

      {/* EYLF Linking */}
      {subTab === 2 && (
        <div className="space-y-3">
          <div className="bg-violet-50 border border-violet-200 rounded-2xl p-4">
            <h4 className="text-sm font-bold text-violet-700 mb-3">관찰-EYLF 연결 구조 예시</h4>
            <div className="space-y-2 text-xs">
              {[
                { label: "관찰 (What I noticed)", value: "Mia (3세)가 블록으로 탑을 쌓으며 '이거 병원이야!'라고 말함. 5분 동안 집중하며 탑이 무너질 때마다 다시 시도함.", color: "bg-gray-50 border-gray-200" },
                { label: "EYLF 원칙 연결", value: "Secure, respectful & reciprocal relationships — 교육자와 신뢰 관계에서 탐구 활동 가능", color: "bg-pink-50 border-pink-200" },
                { label: "EYLF 실제 연결", value: "Learning through play + Intentional teaching — 놀이 중 풍부한 언어 제공 기회", color: "bg-emerald-50 border-emerald-200" },
                { label: "Learning Outcome 1", value: "LO 4.1 — 학습에 대한 성향, 호기심, 협력, 자신감, 창의성, 지속성 발휘", color: "bg-sky-50 border-sky-200" },
                { label: "Learning Outcome 2", value: "LO 5.1 — 언어와 소통으로 의미 표현. '병원'이라는 어휘로 상징적 놀이 표현", color: "bg-violet-50 border-violet-200" },
                { label: "분석 (What it means)", value: "공간 추론, 창의적 놀이, 언어 발달, 인내심 발달 증거. 실패를 통한 학습(resilience) 관찰됨.", color: "bg-orange-50 border-orange-200" },
                { label: "다음 단계 (Opportunities)", value: "병원 역할극 소품 추가 제공. 의료 관련 그림책 읽어주기. 친구들과 협력 놀이 확장 기회 제공.", color: "bg-teal-50 border-teal-200" },
              ].map((item, i) => (
                <div key={i} className={`rounded-xl p-3 border ${item.color}`}>
                  <p className="font-bold text-gray-700 mb-1">{item.label}</p>
                  <p className="text-gray-600 leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
            <h4 className="text-sm font-bold text-emerald-700 mb-2">NQS 연결 — 포트폴리오 증거로 활용</h4>
            <div className="space-y-1.5">
              {[
                { qa: "QA 1", desc: "교육 프로그램: 학습 계획, 프로그램 평가, 러닝 스토리" },
                { qa: "QA 5", desc: "아동과의 관계: 교육자-아동 상호작용 관찰 기록" },
                { qa: "QA 6", desc: "가족 참여: 가족 기여 기록, 소통 증거" },
              ].map((item, i) => (
                <div key={i} className="flex gap-2 items-start text-xs">
                  <span className="font-bold text-emerald-600 w-10 flex-shrink-0">{item.qa}</span>
                  <span className="text-gray-600">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Jargon */}
      {subTab === 3 && (
        <div>
          <p className="text-xs text-gray-500 mb-3">차일드케어 현장 및 Graduate Diploma 공부에 꼭 필요한 용어들입니다.</p>
          <div className="space-y-2">
            {[
              { term: "Approved Provider", def: "ACECQA 승인을 받은 서비스 운영 주체 (회사, 개인, 조직)" },
              { term: "Nominated Supervisor", def: "서비스 일상 운영 책임자. Approved Provider가 지정하며 법적 책임 보유" },
              { term: "Educational Leader", def: "교육 프로그램 개발·실행을 주도하는 지정 교육자 (Reg. 118). 공식 수락 기록 필요 (2026.4~)" },
              { term: "ECT (Early Childhood Teacher)", def: "4년제 학사 또는 Graduate Diploma 자격 보유 교사. Children's Services Award Level 5+" },
              { term: "Educator-to-child ratio", def: "NSW 기준: 0~2세 1:4, 3~5세 1:11, OSHC 1:15" },
              { term: "Qualified educator", def: "NQF 요건을 충족하는 자격(Cert III 이상) 보유 교육자" },
              { term: "Critical reflection", def: "교육 실제에 대한 지속적 성찰 및 개선. EYLF 원칙이자 Graduate Diploma 핵심 역량" },
              { term: "Intentional teaching", def: "목적의식적이고 계획된 교수 전략. 아동의 관심을 반응하면서 학습 확장" },
              { term: "Sustained shared thinking", def: "교육자와 아동이 함께 생각을 발전시키는 과정. EPPE 연구에서 강조" },
              { term: "Child-centred approach", def: "아동의 관심, 필요, 강점을 중심으로 한 교육 접근" },
              { term: "Documenting learning", def: "아동의 학습을 기록하여 의미를 찾고 가족과 공유하는 행위" },
              { term: "Assessment for learning", def: "학습을 평가(판단)하는 것이 아니라 학습을 위해 정보를 수집하는 과정" },
              { term: "EYLF V2.0", def: "2022년 최신 버전 국가 학습 프레임워크 (0~5세 대상)" },
              { term: "MTOP V2.0", def: "2022년 최신 버전 방과후 돌봄 프레임워크 (5~12세 대상)" },
              { term: "NQS (National Quality Standard)", def: "서비스 품질 평가 기준. 7대 품질 영역, 18개 기준, 58개 요소로 구성" },
              { term: "QIP (Quality Improvement Plan)", def: "서비스의 자체 평가 및 개선 계획. 지속적 개선 문화의 핵심 도구" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-3 hover:shadow-sm transition-shadow">
                <p className="text-xs font-bold text-violet-700">{item.term}</p>
                <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{item.def}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
