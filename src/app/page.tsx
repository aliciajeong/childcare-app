"use client";
import { useState } from "react";
import MapTab from "@/components/MapTab";
import LawsTab from "@/components/LawsTab";
import EylfTab from "@/components/EylfTab";
import ObsTab from "@/components/ObsTab";
import PayTab from "@/components/PayTab";
import SourcesTab from "@/components/SourcesTab";

const tabs = [
  { id: "map", label: "🗺 지역 선택" },
  { id: "laws", label: "📋 법규 & NQF" },
  { id: "eylf", label: "🌱 EYLF / MTOP" },
  { id: "obs", label: "📝 관찰 & 포트폴리오" },
  { id: "pay", label: "💰 시급 & 직급" },
  { id: "sources", label: "🔗 출처" },
];

export default function Home() {
  const [active, setActive] = useState("map");

  return (
    <main className="min-h-screen bg-[#fdf8ff]">
      <div className="bg-white border-b border-pink-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🌏</span>
            <div>
              <h1 className="text-xl font-bold text-gray-800 leading-tight">
                호주 차일드케어 레퍼런스
              </h1>
              <p className="text-xs text-gray-500">
                NQF · EYLF V2.0 · NSW 법규 · 시급표 · 포트폴리오 가이드
              </p>
            </div>
            <div className="ml-auto">
              <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full font-medium">
                최신: 2026년 4월
              </span>
            </div>
          </div>
          <nav className="flex gap-2 overflow-x-auto pb-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                  active === tab.id
                    ? "bg-pink-100 border-pink-300 text-pink-700"
                    : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {active === "map" && <MapTab />}
        {active === "laws" && <LawsTab />}
        {active === "eylf" && <EylfTab />}
        {active === "obs" && <ObsTab />}
        {active === "pay" && <PayTab />}
        {active === "sources" && <SourcesTab />}
      </div>
    </main>
  );
}
