import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Clock, Phone, MapPin, ExternalLink, Cake, Cookie, Croissant, Bird as Birthday, Coffee } from 'lucide-react';
import { CursorTrail } from './components/CursorTrail';
import { FloatingIcons } from './components/FloatingIcons';

const menuItems = [
  {
    name: 'Χειροποίητες Τούρτες',
    description: 'Φτιαγμένες με αγάπη',
    price: 'από €25',
    icon: Cake
  },
  {
    name: 'Φρέσκα Μπισκότα',
    description: 'Ψήνονται καθημερινά',
    price: 'από €2',
    icon: Cookie
  },
  {
    name: 'Βουτυρένια Κρουασάν',
    description: 'Γαλλική κλασική συνταγή',
    price: 'από €3',
    icon: Croissant
  },
  {
    name: 'Εξατομικευμένες Τούρτες',
    description: 'Κατόπιν παραγγελίας',
    price: 'από €45',
    icon: Birthday
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

function App() {
  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      <CursorTrail />
      <FloatingIcons />

      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Coffee className="text-[#D4A373]" size={32} />
              <span className="text-2xl font-serif text-[#2C1810]">Merci</span>
            </motion.div>
            <nav className="ml-auto">
              <ul className="flex space-x-8 md:text-base text-sm justify-end">
                <motion.li whileHover={{ scale: 1.1 }} className="text-[#2C1810] hover:text-[#D4A373] transition-colors cursor-pointer font-medium">ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ</motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="text-[#2C1810] hover:text-[#D4A373] transition-colors cursor-pointer font-medium">ΤΟΥΡΤΕΣ</motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="text-[#2C1810] hover:text-[#D4A373] transition-colors cursor-pointer font-medium">ΓΛΥΚΑ</motion.li>
              </ul>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <div 
        className="relative h-screen md:h-[80vh] bg-cover bg-center" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=2000")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto px-6 h-full flex items-center">
            <motion.div className="text-white max-w-2xl">
              <motion.h1 className="text-5xl md:text-6xl font-serif mb-4">
                Καλώς ήρθατε στο Merci
              </motion.h1>
              <motion.p className="text-2xl md:text-3xl font-light mb-8">
                Γλυκές Απολαύσεις Κάθε Μέρα!
              </motion.p>
              <motion.p className="text-xl mb-8">
                Βρισκόμαστε στη Βάρδα και φτιάχνουμε φρέσκα, χειροποίητα γλυκά, τούρτες και επιδόρπια καθημερινά.
              </motion.p>
              <motion.a 
                href="https://maps.app.goo.gl/WSDAXG2DmBYvDhjSA" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#D4A373] text-white rounded-full hover:bg-[#BC8C5F] transition-colors"
              >
                <MapPin className="mr-2" size={20} />
                Επισκεφθείτε μας
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Instagram Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 className="text-4xl font-serif text-center mb-16">
            Τελευταίες Δημιουργίες
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=500",
              "https://cdn.pixabay.com/photo/2019/08/12/13/45/ice-cream-4401300_1280.jpg",
              "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=500",
              "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=500"
            ].map((url, index) => (
              <motion.div key={index} className="aspect-square overflow-hidden rounded-lg">
                <motion.img 
                  src={url} 
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          <motion.div className="text-center mt-8">
            <motion.a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#D4A373] hover:text-[#BC8C5F]"
            >
              <Instagram className="mr-2" />
              Ακολουθήστε μας στο Instagram
              <ExternalLink size={16} className="ml-1" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C1810] text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Merci. Όλα τα δικαιώματα κατοχυρωμένα.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
