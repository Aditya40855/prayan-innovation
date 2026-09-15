import { notFound } from "next/navigation";
import content from "@/data/content.json";

// This tells Cloudflare Pages to build a static HTML page for every product in your database
export function generateStaticParams() {
  return content.categories.map((category) => ({
    id: category.id,
  }));
}

// 1. ADDED 'async' HERE and changed the type to Promise
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  
  // 2. ADDED 'await' HERE to unwrap the params for Next.js 15
  const resolvedParams = await params;
  
  // 3. Use the resolved params to find the product
  const productInfo = content.categories.find((c) => c.id === resolvedParams.id);

  if (!productInfo) {
    notFound(); // Shows a 404 page if the product ID doesn't exist
  }

  // Technical specifications template
  const technicalSpecs = [
    { label: "Primary Material", value: "Optical Grade PMMA Acrylic / SS304" },
    { label: "Wall Thickness", value: "10mm - 20mm (Customizable)" },
    { label: "Operating Pressure", value: "Standard Atmospheric to High Vacuum" },
    { label: "Sealing Mechanism", value: "Hermetic Silicone / Neoprene Gaskets" },
    { label: "Valves & Ports", value: "Brass / PTFE Gas Purge Valves" },
    { label: "Manufacturing Standard", value: "ISO & IAPT Compliant Guidelines" },
  ];

  return (
    <div className="bg-[#FCFBF8] min-h-screen pb-24 pt-24">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
          <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href="/#solutions" className="hover:text-blue-600 transition-colors">Equipment</a>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{productInfo.title}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT SIDE: Image and CAD Resources */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Product Image */}
            <div className="bg-white rounded-[2rem] border border-slate-200/80 overflow-hidden shadow-sm aspect-[4/3] relative group p-2">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-slate-100 relative">
                <img 
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80" 
                  alt={productInfo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                  Representative Model
                </div>
              </div>
            </div>

            {/* Engineering Download Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="#" className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Download</p>
                  <p className="font-bold text-slate-900 text-sm">2D Schematic PDF</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </div>
              </a>
              <a href="#" className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-sm hover:border-slate-600 hover:shadow-md transition-all group flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Request</p>
                  <p className="font-bold text-white text-sm">3D STEP/IGES File</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white group-hover:bg-slate-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Text, Specs, and Checklist */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest w-fit mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Industrial Grade Hardware
            </div>

            {/* Dynamic Title and Description */}
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              {productInfo.title}
            </h1>
            <p className="mt-6 text-slate-600 text-base leading-relaxed">
              {productInfo.description} Designed and fabricated in-house at our Rajasthan facility to ensure complete control over dimensional accuracy and structural integrity.
            </p>

            {/* Custom Configuration Checklist */}
            <div className="mt-10 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                Pre-Consultation Checklist
              </h3>
              <p className="text-xs text-slate-500 mb-4">Prepare these parameters for a rapid technical quote:</p>
              <ul className="space-y-3">
                {['Required Internal Dimensions (L x W x H)', 'Number & placement of glove ports', 'Gas purge valve preferences (Brass/PTFE)', 'Vacuum pass-through requirements'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <div className="w-5 h-5 rounded bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Standard Technical Specifications */}
            <div className="mt-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-200/60 pb-2">
                Standard Technical Specifications
              </h3>
              <dl className="space-y-3">
                {technicalSpecs.map((spec, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-4 py-2 border-b border-slate-100 last:border-0">
                    <dt className="text-xs font-bold text-slate-500 col-span-1">{spec.label}</dt>
                    <dd className="text-sm font-medium text-slate-800 col-span-2">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Dynamic WhatsApp Button */}
            <div className="mt-12 flex flex-col gap-4">
              <a
                href={`https://wa.me/919008009944?text=Hello%20Prayan%20Innovation.%20I%20am%20looking%20to%20configure%20and%20price%20the%20${encodeURIComponent(productInfo.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-[0_0_30px_rgb(5,150,105,0.3)] transition-all"
              >
                <span>Submit Configuration via WhatsApp</span>
              </a>
              <p className="text-[10px] font-bold text-slate-400 text-center uppercase tracking-widest">
                Direct Line to Engineering Team
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}