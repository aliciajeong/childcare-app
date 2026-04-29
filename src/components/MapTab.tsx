"use client";
import { useState } from "react";
import { stateData } from "@/data/childcareData";

const STATE_COLORS: Record<string, { fill: string; stroke: string }> = {
  NSW: { fill: "#FBEAF0", stroke: "#D4537E" },
  VIC: { fill: "#EEEDFE", stroke: "#7F77DD" },
  QLD: { fill: "#E6F1FB", stroke: "#378ADD" },
  WA:  { fill: "#FAEEDA", stroke: "#BA7517" },
  SA:  { fill: "#EAF3DE", stroke: "#639922" },
  NT:  { fill: "#E1F5EE", stroke: "#1D9E75" },
  TAS: { fill: "#E0F2FE", stroke: "#0EA5E9" },
  ACT: { fill: "#FAEEDA", stroke: "#EF9F27" },
};

export default function MapTab() {
  const [selected, setSelected] = useState("NSW");
  const state = stateData[selected];

  return (
    <div>
      {/* NSW highlight banner */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200 rounded-2xl p-4 mb-4">
        <h2 className="text-base font-bold text-pink-600 mb-1">📍 NSW 시드니 — 현재 거주 지역</h2>
        <p className="text-xs text-gray-500">지도에서 다른 주를 선택하거나, NSW 정보를 바로 확인하세요</p>
      </div>

      {/* Update alert */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-5 flex gap-2 items-start">
        <span className="text-base">⚠️</span>
        <p className="text-xs text-yellow-800">
          <strong>NSW 최신:</strong> Children Amendment Act 2025 — 2026년 4월 24일 추가 시행 중.
          채용 정책·사고 기록·Educational Leader 역할 강화.{" "}
          <a href="https://legislation.nsw.gov.au" target="_blank" rel="noopener noreferrer" className="underline text-amber-700">NSW 법령 원문 →</a>
        </p>
      </div>

      {/* Australia SVG Map */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-5">
        <p className="text-xs text-gray-400 mb-3 text-center">주(State)를 클릭하여 정보를 확인하세요</p>
        <svg viewBox="0 0 520 420" className="w-full" style={{ maxHeight: 280 }}>
          {/* WA */}
          <polygon
            points="20,60 170,60 170,320 20,320"
            fill={selected === "WA" ? STATE_COLORS.WA.stroke + "40" : STATE_COLORS.WA.fill}
            stroke={STATE_COLORS.WA.stroke} strokeWidth={selected === "WA" ? 3 : 1.5}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setSelected("WA")}
          />
          <text x="95" y="195" textAnchor="middle" fontSize="13" fontWeight="600" fill={STATE_COLORS.WA.stroke} className="pointer-events-none select-none">WA</text>
          {/* NT */}
          <polygon
            points="170,60 280,60 280,220 170,220"
            fill={selected === "NT" ? STATE_COLORS.NT.stroke + "40" : STATE_COLORS.NT.fill}
            stroke={STATE_COLORS.NT.stroke} strokeWidth={selected === "NT" ? 3 : 1.5}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setSelected("NT")}
          />
          <text x="225" y="145" textAnchor="middle" fontSize="13" fontWeight="600" fill={STATE_COLORS.NT.stroke} className="pointer-events-none select-none">NT</text>
          {/* QLD */}
          <polygon
            points="280,60 420,60 420,240 280,240"
            fill={selected === "QLD" ? STATE_COLORS.QLD.stroke + "40" : STATE_COLORS.QLD.fill}
            stroke={STATE_COLORS.QLD.stroke} strokeWidth={selected === "QLD" ? 3 : 1.5}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setSelected("QLD")}
          />
          <text x="350" y="155" textAnchor="middle" fontSize="13" fontWeight="600" fill={STATE_COLORS.QLD.stroke} className="pointer-events-none select-none">QLD</text>
          {/* SA */}
          <polygon
            points="170,220 280,220 280,330 170,330"
            fill={selected === "SA" ? STATE_COLORS.SA.stroke + "40" : STATE_COLORS.SA.fill}
            stroke={STATE_COLORS.SA.stroke} strokeWidth={selected === "SA" ? 3 : 1.5}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setSelected("SA")}
          />
          <text x="225" y="280" textAnchor="middle" fontSize="13" fontWeight="600" fill={STATE_COLORS.SA.stroke} className="pointer-events-none select-none">SA</text>
          {/* NSW — highlighted */}
          <polygon
            points="280,240 420,240 420,360 280,360"
            fill={selected === "NSW" ? STATE_COLORS.NSW.stroke + "40" : STATE_COLORS.NSW.fill}
            stroke={STATE_COLORS.NSW.stroke} strokeWidth={selected === "NSW" ? 4 : 2}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setSelected("NSW")}
          />
          <text x="350" y="295" textAnchor="middle" fontSize="14" fontWeight="700" fill={STATE_COLORS.NSW.stroke} className="pointer-events-none select-none">NSW</text>
          <text x="350" y="312" textAnchor="middle" fontSize="11" fill={STATE_COLORS.NSW.stroke} className="pointer-events-none select-none">★ 시드니</text>
          {/* VIC */}
          <polygon
            points="280,360 390,360 390,398 280,398"
            fill={selected === "VIC" ? STATE_COLORS.VIC.stroke + "40" : STATE_COLORS.VIC.fill}
            stroke={STATE_COLORS.VIC.stroke} strokeWidth={selected === "VIC" ? 3 : 1.5}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setSelected("VIC")}
          />
          <text x="335" y="383" textAnchor="middle" fontSize="12" fontWeight="600" fill={STATE_COLORS.VIC.stroke} className="pointer-events-none select-none">VIC</text>
          {/* TAS */}
          <rect x="300" y="406" width="75" height="14" rx="2"
            fill={selected === "TAS" ? STATE_COLORS.TAS.stroke + "40" : STATE_COLORS.TAS.fill}
            stroke={STATE_COLORS.TAS.stroke} strokeWidth={selected === "TAS" ? 2.5 : 1.5}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setSelected("TAS")}
          />
          <text x="337" y="417" textAnchor="middle" fontSize="10" fontWeight="600" fill={STATE_COLORS.TAS.stroke} className="pointer-events-none select-none">TAS</text>
          {/* ACT */}
          <rect x="392" y="345" width="52" height="26" rx="4"
            fill={selected === "ACT" ? STATE_COLORS.ACT.stroke + "40" : STATE_COLORS.ACT.fill}
            stroke={STATE_COLORS.ACT.stroke} strokeWidth={selected === "ACT" ? 2.5 : 1.5}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setSelected("ACT")}
          />
          <text x="418" y="362" textAnchor="middle" fontSize="11" fontWeight="600" fill={STATE_COLORS.ACT.stroke} className="pointer-events-none select-none">ACT</text>
          {/* Sydney dot */}
          <circle cx="400" cy="285" r="5" fill="#ec4899" />
          <circle cx="400" cy="285" r="9" fill="none" stroke="#ec4899" strokeWidth="1.5" opacity="0.5" />
        </svg>
      </div>

      {/* State detail card */}
      {state && (
        <div
          className="rounded-2xl p-5 border-2 transition-all"
          style={{ background: STATE_COLORS[selected].fill, borderColor: STATE_COLORS[selected].stroke }}
        >
          <h3 className="text-base font-bold text-gray-800 mb-1">{state.name}</h3>
          <p className="text-xs text-gray-600 mb-4">{state.info}</p>

          <div className="mb-4">
            <p className="text-xs font-bold text-gray-700 mb-2">📋 주요 업데이트</p>
            <div className="space-y-2">
              {state.updates.map((u, i) => (
                <div key={i} className="bg-white bg-opacity-70 rounded-xl p-3">
                  <span className="text-xs font-bold text-emerald-600">{u.date}</span>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{u.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="bg-white bg-opacity-80 border border-gray-200 rounded-xl px-3 py-1.5 text-xs text-gray-700">
              👶 {state.ratios}
            </span>
            <span className="bg-white bg-opacity-80 border border-gray-200 rounded-xl px-3 py-1.5 text-xs text-gray-700">
              🏛 {state.authority}
            </span>
            <a href={`tel:${state.phone.replace(/\s/g, "")}`} className="bg-white bg-opacity-80 border border-gray-200 rounded-xl px-3 py-1.5 text-xs text-gray-700 hover:bg-white transition-colors no-underline">
              📞 {state.phone}
            </a>
            <a href={state.website} target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-80 border border-gray-200 rounded-xl px-3 py-1.5 text-xs text-sky-600 hover:bg-white transition-colors">
              🌐 공식 사이트 →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
