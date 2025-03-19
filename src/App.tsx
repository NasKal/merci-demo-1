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
            <motion.div 
              className="text-white max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                bounce: 0.4
              }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-serif mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Καλώς ήρθατε στο Merci
              </motion.h1>
              <motion.p 
                className="text-2xl md:text-3xl font-light mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Γλυκές Απολαύσεις Κάθε Μέρα!
              </motion.p>
              <motion.p 
                className="text-xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Βρισκόμαστε στη Βάρδα και φτιάχνουμε φρέσκα, χειροποίητα γλυκά, τούρτες και επιδόρπια καθημερινά.
              </motion.p>
              <motion.a 
                href="https://maps.app.goo.gl/WSDAXG2DmBYvDhjSA" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#D4A373] text-white rounded-full hover:bg-[#BC8C5F] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin className="mr-2" size={20} />
                Επισκεφθείτε μας
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-serif text-center mb-16"
            {...fadeInUp}
          >
            Οι Σπεσιαλιτέ μας
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item, index) => (
              <motion.div 
                key={item.name}
                className="bg-[#FDF8F5] p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <item.icon className="mx-auto mb-4 text-[#D4A373]" size={40} />
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-[#D4A373] font-semibold">{item.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
