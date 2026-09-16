"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CloudSun, Leaf, Menu, Search, Sprout, TrendingUp, X } from "lucide-react";

const crops = [
  { name: "Rice", icon: "🌾", season: "Kharif", water: "High", tip: "Keep fields well irrigated during active growth." },
  { name: "Wheat", icon: "🌾", season: "Rabi", water: "Medium", tip: "Timely irrigation supports healthy grain filling." },
  { name: "Cotton", icon: "🪴", season: "Kharif", water: "Medium", tip: "Monitor pests regularly and maintain soil moisture." },
  { name: "Tomato", icon: "🍅", season: "Year-round", water: "Medium", tip: "Use drip irrigation and provide good drainage." },
  { name: "Maize", icon: "🌽", season: "Kharif/Rabi", water: "Medium", tip: "Protect the crop from water stress around flowering." },
  { name: "Sugarcane", icon: "🎋", season: "Year-round", water: "High", tip: "Mulching helps conserve moisture and suppress weeds." },
];

const prices = [
  ["Rice", "₹3,250", "+2.4%"],
  ["Wheat", "₹2,480", "+1.1%"],
  ["Cotton", "₹7,420", "-0.8%"],
  ["Maize", "₹2,150", "+3.2%"],
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredCrops = useMemo(
    () => crops.filter((crop) => crop.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <main>
      <nav className="sticky top-0 z-50 border-b border-green-100 bg-white/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-bold text-green-800">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-green-100"><Sprout size={20} /></span>
            <span>AgriConnect</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#home" className="hover:text-green-700">Home</a>
            <a href="#crops" className="hover:text-green-700">Crops</a>
            <a href="#weather" className="hover:text-green-700">Weather</a>
            <a href="#market" className="hover:text-green-700">Market</a>
          </div>
          <button aria-label="Toggle menu" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="border-t border-green-100 bg-white px-5 py-4 md:hidden"><div className="container flex flex-col gap-4 text-sm font-medium"><a href="#home" onClick={() => setMenuOpen(false)}>Home</a><a href="#crops" onClick={() => setMenuOpen(false)}>Crops</a><a href="#weather" onClick={() => setMenuOpen(false)}>Weather</a><a href="#market" onClick={() => setMenuOpen(false)}>Market</a></div></div>}
      </nav>

      <section id="home" className="hero-grid overflow-hidden bg-green-800 text-white">
        <div className="container grid min-h-[540px] items-center gap-10 py-16 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm"><Leaf size={16} /> Smart tools for modern farming</div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Grow smarter. Farm better. <span className="text-lime-200">Prosper together.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-green-50">A simple agriculture portal that brings crop guidance, weather insights and market information together in one place.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#crops" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-green-800 shadow-lg">Explore crops <ArrowRight size={18} /></a><a href="#market" className="rounded-xl border border-white/30 px-5 py-3 font-semibold">View market</a></div>
          </div>
          <div className="glass rounded-3xl p-6 text-slate-900 shadow-2xl">
            <div className="flex items-center justify-between"><div><p className="text-sm text-slate-500">Today&apos;s farm snapshot</p><h2 className="mt-1 text-2xl font-bold">Healthy growing conditions</h2></div><div className="text-4xl">🌱</div></div>
            <div className="mt-6 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-green-50 p-4"><p className="text-xs text-slate-500">Temperature</p><p className="mt-1 text-2xl font-bold">28°C</p></div><div className="rounded-2xl bg-blue-50 p-4"><p className="text-xs text-slate-500">Humidity</p><p className="mt-1 text-2xl font-bold">72%</p></div><div className="rounded-2xl bg-amber-50 p-4"><p className="text-xs text-slate-500">Soil moisture</p><p className="mt-1 text-2xl font-bold">Good</p></div><div className="rounded-2xl bg-purple-50 p-4"><p className="text-xs text-slate-500">Rain chance</p><p className="mt-1 text-2xl font-bold">30%</p></div></div>
            <p className="mt-5 text-xs text-slate-500">Demo data for the project interface. Connect a weather API for live values.</p>
          </div>
        </div>
      </section>

      <section id="crops" className="container py-20">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="font-bold text-green-700">CROP GUIDE</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Choose a crop and learn</h2><p className="mt-3 max-w-xl text-slate-600">Quick reference cards for common crops, seasons and basic care tips.</p></div><div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2"><Search size={18} className="text-slate-400" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search crops" className="w-36 bg-transparent text-sm outline-none" /></div></div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filteredCrops.map((crop) => <article key={crop.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="flex items-center justify-between"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-green-50 text-3xl">{crop.icon}</span><span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">{crop.season}</span></div><h3 className="mt-5 text-xl font-bold">{crop.name}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{crop.tip}</p><div className="mt-5 border-t pt-4 text-xs text-slate-500">Water need: <b className="text-slate-700">{crop.water}</b></div></article>)}</div>
      </section>

      <section id="weather" className="bg-white py-20"><div className="container grid gap-8 lg:grid-cols-2"><div><p className="font-bold text-green-700">WEATHER</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Plan farm work around the weather</h2><p className="mt-4 max-w-xl leading-7 text-slate-600">Use temperature, rainfall and humidity information to plan irrigation, spraying and field operations. These values are sample data for the portal prototype.</p><div className="mt-7 flex items-center gap-4 rounded-2xl bg-green-50 p-5"><CloudSun size={42} className="text-green-700" /><div><p className="text-sm text-slate-500">Sample forecast</p><p className="text-2xl font-black">Partly cloudy · 28°C</p></div></div></div><div className="rounded-3xl bg-slate-950 p-7 text-white"><p className="text-sm text-slate-400">5-day planning view</p><div className="mt-5 grid grid-cols-5 gap-2 text-center">{[["Mon","28°","☀️"],["Tue","29°","⛅"],["Wed","27°","🌦️"],["Thu","26°","🌧️"],["Fri","29°","☀️"]].map(([day,temp,icon]) => <div key={day} className="rounded-2xl bg-white/10 p-3"><p className="text-xs text-slate-400">{day}</p><p className="my-3 text-2xl">{icon}</p><p className="font-bold">{temp}</p></div>)}</div></div></div></section>

      <section id="market" className="container py-20"><div className="flex items-end justify-between gap-4"><div><p className="font-bold text-green-700">MARKET WATCH</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Indicative crop prices</h2><p className="mt-3 text-slate-600">Sample prices shown in ₹ per quintal for the project demo.</p></div><TrendingUp className="hidden text-green-700 sm:block" size={36} /></div><div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-slate-500"><tr><th className="px-5 py-4">Crop</th><th className="px-5 py-4">Indicative price</th><th className="px-5 py-4">Change</th></tr></thead><tbody>{prices.map(([crop,price,change]) => <tr key={crop} className="border-t"><td className="px-5 py-4 font-bold">{crop}</td><td className="px-5 py-4">{price}</td><td className={`px-5 py-4 font-bold ${change.startsWith("-") ? "text-red-600" : "text-green-700"}`}>{change}</td></tr>)}</tbody></table></div></section>

      <footer className="border-t bg-slate-950 py-10 text-white"><div className="container flex flex-col justify-between gap-4 sm:flex-row"><div><div className="flex items-center gap-2 font-bold"><Sprout size={19} /> AgriConnect</div><p className="mt-2 text-sm text-slate-400">Smart agriculture portal project.</p></div><p className="text-sm text-slate-500">© 2026 AgriConnect · Built for farmers and learners</p></div></footer>
    </main>
  );
}
