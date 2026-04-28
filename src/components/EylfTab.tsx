"use client";
import { useState } from "react";

const subTabs = ["개요", "원칙 (Principles)", "실제 (Practices)", "학습 결과", "MTOP"];

const principles = [
  { title: "Secure, respectful & reciprocal relationships", ko: "안정적·존중하는 상호적 관계" },
  { title: "Partnerships", ko: "가족 및 지역사회와의 파트너십" },
  { title: "High expectations & equity", ko: "높은 기대와 공평성" },
  { title: "Respect for diversity", ko: "다양성 존중" },
  { title: "Aboriginal and Torres Strait Islander perspectives", ko: "원주민 관점 통합" },
  { title: "Sustainability", ko: "지속가능성 (V2.0 강화)" },
  { title: "Critical reflection & ongoing professional learning", ko: "비판적 성찰 및 지속적 전문 학습" },
  { title: "Collaborative leadership & teamwork", ko: "협력적 리더십과 팀워크 (V2.0 신규)" },
];

const practices = [
  { title: "Holistic, integrated & interconnected approaches", ko: "전인적·통합적·상호연결 접근" },
  { title: "Responsiveness to children", ko: "아동에 대한 반응성" },
  { title: "Collaborative leadership & teamwork", ko: "협력적 리더십과 팀워크" },
  { title: "Learning through play", ko: "놀이를 통한 학습" },
  { title: "Intentional teaching", ko: "의도적 교수" },
  { title: "Learning environments", ko: "학습 환경 조성" },
  { title: "Cultural responsiveness", ko: "문화적 반응성" },
  { title: "Continuity of learning & transitions", ko: "학습의 연속성과 전환" },
  { title: "Assessment & evaluation for learning, development and wellbeing", ko: "학습·발달·웰빙을 위한 평가" },
];

const outcomes = [
  { lo: "LO 1", title: "정체성 (Identity)", en: "Children have a strong sense of identity", desc: "자신에 대한 강한 긍정적 감각, 소속감, 자율성, 웰빙. 자신의 감정을 이해하고 표현.", color: "border-pink-400 bg-pink-50", badge: "bg-pink-100 text-pink-700" },
  { lo: "LO 2", title: "커뮤니티 (Community)", en: "Children are connected with and contribute to their world", desc: "관계, 커뮤니티, 자연환경 연결. 사회적 책임감, 배려, 환경 존중.", color: "border-emerald-400 bg-emerald-50", badge: "bg-emerald-100 text-emerald-700" },
  { lo: "LO 3", title: "웰빙 (Wellbeing)", en: "Children have a strong sense of wellbeing", desc: "신체적·정신적 건강, 자기 조절, 활력, 안전감. 건강한 생활 습관 형성.", color: "border-sky-400 bg-sky-50", badge: "bg-sky-100 text-sky-700" },
  { lo: "LO 4", title: "학습 (Learning)", en: "Children are confident & involved learners", desc: "학습에 대한 성향, 호기심, 비판적 사고. 창의성, 문제 해결, 지속적 참여.", color: "border-violet-400 bg-violet-50", badge: "bg-violet-100 text-violet-700" },
  { lo: "LO 5", title: "소통 (Communication)", en: "Children are effective communicators", desc: "언어, 리터러시, 뉴머러시, 테크놀로지. 다양한 방식으로 의미 표현 및 이해.", color: "border-orange-400 bg-orange-50", badge: "bg-orange-100 text-orange-700" },
];

export default function EylfTab() {
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

      {/* Overview */}
      {subTab === 0 && (
        <div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 flex gap-2 items-start mb-4">
            <span>📅</span>
            <p className="text-xs text-yellow-800">EYLF V2.0 — 2022년 업데이트 적용 중. 출생~5세 대상 국가 승인 학습 프레임워크. Macquarie University 컨소시엄 주도로 업데이트.</p>
          </div>
          <div className="bg-gradient-to-r from-pink-50 to-violet-50 border-l-4 border-pink-400 rounded-2xl p-4 mb-4">
            <h3 className="text-sm font-bold text-gray-800 mb-2">핵심 철학: Belonging, Being and Becoming</h3>
            <div className="space-y-2 text-xs text-gray-600 leading-relaxed">
              <p><strong className="text-pink-600">Belonging (소속감)</strong> — 아이들은 가족, 문화, 지역사회와의 연결에서 정체성이 형성됩니다. 모든 아이는 어딘가에 속할 권리가 있습니다.</p>
              <p><strong className="text-violet-600">Being (존재)</strong> — 아이들의 현재 삶과 경험을 존중합니다. 아이는 단순히 미래를 위해 준비되는 존재가 아닙니다.</p>
              <p><strong className="text-emerald-600">Becoming (성장)</strong> — 변화하고 발전하는 아이들의 능력. 정체성, 지식, 이해가 끊임없이 형성됩니다.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { badge: "V2.0 (2022)", color: "bg-pink-100 text-pink-700", title: "현재 버전", desc: "V2.0이 현행 버전. V1.0(2009)에서 업데이트. 지속가능성, 문화 반응성, 비판적 성찰 강화." },
              { badge: "8가지 원칙", color: "bg-emerald-100 text-emerald-700", title: "Principles", desc: "교육자의 실제를 이끄는 근본적인 지침. V2.0에서 Collaborative leadership 신규 추가." },
              { badge: "9가지 실제", color: "bg-sky-100 text-sky-700", title: "Practices", desc: "교육자가 원칙을 적용하는 방법. 놀이 기반 학습, 의도적 교수 등 포함." },
              { badge: "5가지 결과", color: "bg-violet-100 text-violet-700", title: "Learning Outcomes", desc: "아이들이 학습 여정에서 달성하는 광범위한 결과. 포트폴리오와 직접 연결." },
            ].map((c, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-3 hover:shadow-sm transition-shadow">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.color} mb-2 inline-block`}>{c.badge}</span>
                <h4 className="text-xs font-bold text-gray-800 mb-1">{c.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Principles */}
      {subTab === 1 && (
        <div>
          <p className="text-xs text-gray-500 mb-3">EYLF V2.0 기준 8대 원칙. 교육자의 모든 실제를 이끄는 근본적인 지침입니다.</p>
          <div className="space-y-2">
            {principles.map((p, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-3 flex gap-3 items-start hover:shadow-sm transition-shadow">
                <span className="w-6 h-6 bg-violet-100 text-violet-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                <div>
                  <p className="text-xs font-semibold text-gray-800">{p.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{p.ko}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Practices */}
      {subTab === 2 && (
        <div>
          <p className="text-xs text-gray-500 mb-3">EYLF V2.0 기준 9가지 실제. 원칙을 교육 현장에서 적용하는 방법입니다.</p>
          <div className="space-y-2">
            {practices.map((p, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-3 flex gap-3 items-start hover:shadow-sm transition-shadow">
                <span className="w-6 h-6 bg-pink-100 text-pink-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                <div>
                  <p className="text-xs font-semibold text-gray-800">{p.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{p.ko}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Outcomes */}
      {subTab === 3 && (
        <div>
          <p className="text-xs text-gray-500 mb-3">5가지 학습 결과. 모든 관찰·포트폴리오를 이 결과와 연결해야 합니다.</p>
          <div className="space-y-3">
            {outcomes.map((o, i) => (
              <div key={i} className={`rounded-2xl p-4 border-l-4 border border-gray-100 ${o.color}`}>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${o.badge} mb-2 inline-block`}>{o.lo}</span>
                <h4 className="text-sm font-bold text-gray-800 mb-1">{o.title}</h4>
                <p className="text-xs text-gray-500 italic mb-1">{o.en}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MTOP */}
      {subTab === 4 && (
        <div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 flex gap-2 items-start mb-4">
            <span>📅</span>
            <p className="text-xs text-yellow-800">My Time, Our Place (MTOP) V2.0 — 2022년 업데이트. 방과후 돌봄(OSHC) 5~12세 대상.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-4">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 mb-2 inline-block">MTOP V2.0</span>
            <h4 className="text-sm font-bold text-gray-800 mb-2">My Time, Our Place: Framework for School Age Care</h4>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">만 5~12세 방과후 돌봄(OSHC, Before & After School Care, Vacation Care) 대상 프레임워크. EYLF와 동일한 구조(원칙·실제·결과)이나 학령기 아동에 맞게 조정됩니다.</p>
            <p className="text-xs text-emerald-500 font-semibold">적용 대상: School Age Care (OSHC, BASC, Vacation Care)</p>
          </div>
          <div className="bg-sky-50 border border-sky-100 rounded-2xl p-4">
            <h4 className="text-xs font-bold text-sky-700 mb-3">MTOP 5가지 학습 결과 (EYLF와 동일 구조)</h4>
            <div className="space-y-2">
              {outcomes.map((o, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <span className="text-xs font-bold text-sky-600 w-10 flex-shrink-0">{o.lo}</span>
                  <p className="text-xs text-gray-600">{o.en}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 bg-violet-50 border border-violet-100 rounded-xl p-3">
            <p className="text-xs text-gray-600"><strong>EYLF vs MTOP 차이:</strong> 핵심 철학은 동일하지만 MTOP는 학령기 아동의 자율성, 또래 관계, 여가·레크리에이션을 더 강조합니다. OSHC에서 근무한다면 MTOP를 주로 참고하세요.</p>
          </div>
        </div>
      )}
    </div>
  );
}
