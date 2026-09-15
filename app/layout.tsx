import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link"; // <-- Added this import
import "./globals.css";
import content from "@/data/content.json";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Prayan Innovation | Premium Scientific Equipment",
  description: "Advanced custom scientific equipment and STEM solutions engineered in Rajasthan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#FCFBF8] text-slate-900 antialiased flex flex-col min-h-screen`}>
        
        {/* --- FLOATING GLASS NAVIGATION --- */}
        <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-6 pointer-events-none">
          <header className="max-w-7xl mx-auto bg-[#FCFBF8]/85 backdrop-blur-xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full px-6 py-3 flex items-center justify-between pointer-events-auto transition-all duration-300">
            
            {/* Replaced <a> with <Link> */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                 <span className="text-white font-bold text-xs">PI</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-slate-900 leading-none">Prayan</span>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mt-0.5">Innovation</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-600">
              {/* Replaced <a> with <Link> */}
              <Link href="/turnkey-labs" className="text-blue-600 font-bold hover:text-blue-700 transition-colors">Turnkey Labs</Link>
              <Link href="/maintenance" className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors">Maintenance (AMC)</Link>
              <Link href="/#solutions" className="hover:text-blue-600 transition-colors">Products</Link>
              <Link href="/#expertise" className="hover:text-blue-600 transition-colors">Expertise</Link>
              <Link href="/#gallery" className="hover:text-blue-600 transition-colors">Facility</Link>
              <Link href="/#reviews" className="hover:text-blue-600 transition-colors">Clients</Link>
              <Link href="/#faq" className="hover:text-blue-600 transition-colors">FAQ</Link>
            </nav>

            <Link href="/#contact" className="hidden md:inline-flex px-6 py-2.5 text-sm font-bold text-white bg-slate-900 rounded-full hover:bg-blue-600 shadow-md transition-all">
              Request Quote
            </Link>
          </header>
        </div>

        {/* --- DYNAMIC PAGE CONTENT --- */}
        <main className="flex-grow">
          {children}
        </main>

        {/* --- PROFESSIONAL PREMIUM FOOTER --- */}
        <footer id="contact" className="bg-slate-950 text-slate-300 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-[10px]">PI</span>
                  </div>
                  <span className="text-xl font-bold text-white tracking-tight">Prayan Innovation</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  {content.company.tagline}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono mt-4">
                  TM No: {content.company.tradeMark}
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6">Equipment</h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><Link href="/#solutions" className="hover:text-blue-400 transition-colors">Acrylic Glove Boxes</Link></li>
                  <li><Link href="/#solutions" className="hover:text-blue-400 transition-colors">STEM Innovation Hubs</Link></li>
                  <li><Link href="/#solutions" className="hover:text-blue-400 transition-colors">Special Purpose Machines</Link></li>
                  <li><Link href="/#solutions" className="hover:text-blue-400 transition-colors">Desiccator Chambers</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6">Company</h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><Link href="/#expertise" className="hover:text-blue-400 transition-colors">Manufacturing Facility</Link></li>
                  <li><Link href="/#reviews" className="hover:text-blue-400 transition-colors">Client Testimonials</Link></li>
                  <li><Link href="/#faq" className="hover:text-blue-400 transition-colors">Technical FAQ</Link></li>
                  <li><Link href="#" className="hover:text-blue-400 transition-colors">ISO Compliance</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6">Contact & Facility</h4>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-0.5">📍</span>
                    <span className="leading-relaxed">{content.company.contact.address}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-500">📞</span>
                    <a href={`tel:${content.company.contact.phone}`} className="hover:text-white transition-colors">{content.company.contact.phone}</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-500">✉️</span>
                    <a href={`mailto:${content.company.contact.email}`} className="hover:text-white transition-colors">{content.company.contact.email}</a>
                  </li>
                </ul>
              </div>

            </div>

            <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
              <p>&copy; {new Date().getFullYear()} Prayan Innovation. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}