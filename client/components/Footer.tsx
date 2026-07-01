import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-serif text-2xl font-semibold mb-4">BURAQ</p>
            <p className="font-sans text-xs text-cream/40 leading-relaxed max-w-xs">
              Handcrafted menswear rooted in Eastern tradition, shaped for the modern man.
            </p>
          </div>

          {/* Shop */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
              Shop
            </p>
            <ul className="space-y-2">
              {["New Arrivals", "Best Sellers", "Eastern Wear", "Western Wear", "Sale"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="font-sans text-sm text-cream/50 hover:text-cream transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
              Help
            </p>
            <ul className="space-y-2">
              {["Shipping Policy", "Refund Policy", "Track Order", "Size Guide", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="font-sans text-sm text-cream/50 hover:text-cream transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
              Stay in the loop
            </p>
            <p className="font-sans text-xs text-cream/40 mb-4 leading-relaxed">
              New drops, exclusive offers, and style notes — straight to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-cream/10 border border-cream/20 px-3 py-2 font-sans text-xs text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold"
              />
              <button className="bg-gold text-espresso font-sans text-xs tracking-widest uppercase px-4 py-2 hover:bg-brown hover:text-cream transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[11px] text-cream/30">
            © 2026 Buraq. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-sans text-[11px] text-cream/30 hover:text-cream/60 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}