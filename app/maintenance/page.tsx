import content from "@/data/content.json";

export default function MaintenancePage() {
  const services = [
    {
      title: "High-Vacuum Leak Testing",
      desc: "Using advanced helium leak detectors and pressure-drop analysis to ensure 100% hermetic integrity of glove boxes and desiccators.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      title: "Sensor & Hygrometer Calibration",
      desc: "Routine calibration of digital hygrometers, pressure gauges, and gas sensors to maintain ISO-compliant research conditions.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Acrylic Polishing & Gasket Replacement",
      desc: "Restoring optical clarity to PMMA panels through professional buffing and replacing aging neoprene or silicone gaskets.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    },
    {
      title: "SPM Automation Servicing",
      desc: "Preventive maintenance for Special Purpose Machines, including PLC logic checks, CNC part lubrication, and actuator testing.",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    }
  ];

  return (
    <div className="bg-[#FCFBF8] min-h-screen pt-24">
      
      {/* --- PAGE HERO --- */}
      <section className="relative bg-slate-950 py-24 lg:py-32 overflow-hidden border-b border-blue-900/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs font-semibold tracking-wide mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Lifecycle Support
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter leading-[1.1] max-w-3xl">
            Annual Maintenance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              & Calibration Services.
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
            Protect your research investments. We offer comprehensive AMC plans and on-demand calibration to ensure your containment systems and SPMs operate at peak specifications.
          </p>
        </div>
      </section>

      {/* --- CORE SERVICES GRID --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Technical Servicing</h2>
          <p className="text-slate-500 mt-2">Specialized maintenance executed by the engineers who built the equipment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-200/80 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all duration-300 flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={svc.icon} /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{svc.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- AMC PLANS --- */}
      <section className="py-24 bg-slate-50 relative border-t border-slate-200/60">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Standard AMC Tier</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Available for all Prayan Innovation hardware, as well as select third-party acrylic containment systems.</p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-[2rem] border border-emerald-500 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">Most Requested</div>
            <div className="p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Comprehensive Coverage Plan</h3>
              <p className="text-slate-500 mb-8 pb-8 border-b border-slate-100">Annual preventive care for laboratories.</p>
              <ul className="space-y-4">
                {[
                  '2 Scheduled Preventive Maintenance Visits / Year',
                  'Free replacement of minor consumables (O-rings, standard valves)',
                  'Priority remote troubleshooting & diagnostics',
                  'Annual Digital Hygrometer Calibration Certificate',
                  'Complete exterior & interior acrylic repolishing'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-6 border-t border-slate-100 text-center">
              <a href={`https://wa.me/919008009944?text=Hello%20Prayan%20Innovation.%20I%20want%20to%20inquire%20about%20an%20AMC%20plan%20for%20our%20lab%20equipment.`} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors shadow-md">
                Request AMC Pricing &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}