/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShoppingBag, Truck, ShieldCheck, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const PRODUCTS = [
  {
    id: 1,
    name: "Premium Multi-Lace Sneakers",
    description: "Iconic oversized laces with vibrant patterns. Premium leather and mesh construction.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
    price: "3440",
  },
  {
    id: 2,
    name: "Distressed Designer Denim",
    description: "Slim-fit black denim with signature embroidery and pleated details.",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    price: "3440",
  },
  {
    id: 3,
    name: "Spider Web Graphic Hoodie",
    description: "Heavyweight cotton hoodie with high-density puff print spider web design.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    price: "3440",
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tighter uppercase italic">koolaaa</h1>
          <div className="flex items-center gap-6">
            <button className="relative p-2 hover:bg-gray-50 rounded-full transition-colors">
              <ShoppingBag size={22} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-black text-white text-[10px] flex items-center justify-center rounded-full font-bold">0</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest mb-4">New Drop</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
              The Three <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-black">Collections</span>
            </h2>
            <p className="max-w-xl mx-auto text-gray-500 text-lg mb-8">
              Premium streetwear essentials curated for the bold. Limited quantities available.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-50 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {product.price} DA
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gray-600 transition-colors">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">{product.description}</p>
                <button className="w-full bg-[#1a1a1a] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors group/btn">
                  Add to Cart
                  <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Delivery & Info */}
        <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Truck size={28} />
            </div>
            <h4 className="text-lg font-bold mb-2">Flat Rate Delivery</h4>
            <p className="text-gray-500 text-sm">Express delivery to all provinces for only <span className="font-bold text-black">300 DA</span>.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck size={28} />
            </div>
            <h4 className="text-lg font-bold mb-2">Secure Payment</h4>
            <p className="text-gray-500 text-sm">Payment on delivery available. Inspect your items before paying.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag size={28} />
            </div>
            <h4 className="text-lg font-bold mb-2">Quality Guaranteed</h4>
            <p className="text-gray-500 text-sm">Every item is checked for quality before shipping to ensure perfection.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-black tracking-tighter uppercase italic mb-2">koolaaa</h1>
            <p className="text-gray-400 text-xs uppercase tracking-widest">© 2026 Koolaaa Streetwear. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
