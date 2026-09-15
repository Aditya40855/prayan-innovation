import content from "@/data/content.json";

export default function TurnkeyLabs() {
  const processes = [
    {
      step: "01",
      title: "Spatial Consultation & Planning",
      desc: "We analyze your available floor space, ventilation requirements, and utility lines to optimize the layout for safety, workflow, and equipment integration.",
    },
    {
      step: "02",
      title: "3D CAD Lab Previsualization",
      desc: "Before any fabrication begins, our engineers provide full 3D renders of the laboratory, ensuring perfect placement of fume hoods, glove boxes, and anti-vibration tables.",
    },
    {
      step: "03",
      title: "In-House Fabrication",
      desc: "All specialized casework, modular furniture, and custom scientific instruments are manufactured directly in our Rajasthan facility to guarantee quality control.",
    },
    {
      step: "04",
      title: "Installation & Commissioning",
      desc: "Our technical team handles on-site assembly, high-vacuum leak testing, and operational training for your research staff or university faculty.",
    }
  ];

  return (
    <div className="bg-[#FCFBF8] min-h-screen pt-24">
      
      {/* --- PAGE HERO --- */}
      <section className="relative bg-slate-950 py-24 lg:py-32 overflow-hidden border-b border-blue-900/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold tracking-wide mb-6 backdrop-blur-sm">
            End-to-End Infrastructure Design
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter leading-[1.1] max-w-3xl">
            Turnkey Laboratory <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              & STEM Solutions.
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
            From empty rooms to fully commissioned research facilities. We design, fabricate, and install IAPT-aligned STEM hubs and advanced industrial cleanrooms.
          </p>
        </div>
      </section>

      {/* --- SECTOR EXPERTISE (BENTO GRID) --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Purpose-Built Environments</h2>
          <p className="text-slate-500 mt-2">Tailored architecture for distinct scientific disciplines.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Academic/STEM */}
          <div className="bg-white rounded-[2rem] p-10 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl group-hover:bg-blue-100 transition-colors" />
            <div className="relative z-10">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wide border border-blue-100 mb-6 inline-block">Universities & Schools</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">IAPT-Aligned STEM Hubs</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                We bridge theoretical physics with hands-on learning. Our team designs complete university laboratories featuring interactive kinematic models, modular anti-vibration workstations, and safe chemical storage.
              </p>
              <ul className="space-y-3">
                {['Curriculum-mapped equipment', 'Ergonomic modular furniture', 'Complete safety compliance'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Industrial/Research */}
          <div className="bg-white rounded-[2rem] p-10 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl group-hover:bg-indigo-100 transition-colors" />
            <div className="relative z-10">
              <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-wide border border-indigo-100 mb-6 inline-block">Pharma & Industrial R&D</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Advanced Containment Labs</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Designed for extreme precision. We engineer layouts optimized for our custom atmospheric glove boxes, desiccator chambers, and heavy-duty PTFE autoclaves, ensuring seamless utility integration.
              </p>
              <ul className="space-y-3">
                {['Custom gas-line integration', 'High-vacuum testing zones', 'Cleanroom-compatible setups'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE TURNKEY PROCESS --- */}
      <section className="py-24 bg-slate-900 relative border-t border-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">The Execution Pipeline</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">A systematic, engineering-first approach to laboratory commissioning.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processes.map((proc, idx) => (
              <div key={idx} className="relative">
                <span className="text-6xl font-black text-slate-800 font-mono absolute -top-8 -left-4 z-0 pointer-events-none">{proc.step}</span>
                <div className="relative z-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl h-full hover:bg-slate-800 transition-colors">
                  <h4 className="text-white font-bold text-lg mb-3">{proc.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ACTION CTA --- */}
      <section className="py-24 bg-[#FCFBF8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Have a floor plan ready?</h2>
          <p className="text-slate-600 mb-10">Share your laboratory dimensions or architectural blueprints with our technical team via WhatsApp for a preliminary layout consultation.</p>
          <a
             href={`https://wa.me/919008009944?text=Hello%20Prayan%20Innovation.%20I%20would%20like%20to%20consult%20regarding%20a%20turnkey%20laboratory%20setup.`}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-[0_0_30px_rgb(37,99,235,0.3)] transition-all"
          >
             Upload Floor Plan via WhatsApp &rarr;
          </a>
        </div>
      </section>

    </div>
  );
}