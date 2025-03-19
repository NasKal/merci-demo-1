import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Clock, Phone, MapPin, ExternalLink, Cake, Cookie, Croissant, Bird as Birthday, Coffee } from 'lucide-react';
import { CursorTrail } from './components/CursorTrail';
import { FloatingIcons } from './components/FloatingIcons';

const menuItems = [
  {
    name: 'Artisan Cakes',
    description: 'Handcrafted with love',
    price: 'from €25',
    icon: Cake
  },
  {
    name: 'Fresh Cookies',
    description: 'Baked daily',
    price: 'from €2',
    icon: Cookie
  },
  {
    name: 'Buttery Croissants',
    description: 'French classic',
    price: 'from €3',
    icon: Croissant
  },
  {
    name: 'Custom Cakes',
    description: 'Made to order',
    price: 'from €45',
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
                <motion.li whileHover={{ scale: 1.1 }} className="text-[#2C1810] hover:text-[#D4A373] transition-colors cursor-pointer font-medium">ABOUT US</motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="text-[#2C1810] hover:text-[#D4A373] transition-colors cursor-pointer font-medium">CAKES</motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="text-[#2C1810] hover:text-[#D4A373] transition-colors cursor-pointer font-medium">SWEETS</motion.li>
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
                Welcome to Merci
              </motion.h1>
              <motion.p 
                className="text-2xl md:text-3xl font-light mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Sweet Delights Every Day!
              </motion.p>
              <motion.p 
                className="text-xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Located in Varda, we craft fresh, handmade pastries, cakes, and desserts daily.
              </motion.p>
              <motion.a 
                href="https://maps.app.goo.gl/WSDAXG2DmBYvDhjSA" 
                target="https://maps.app.goo.gl/WSDAXG2DmBYvDhjSA" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#D4A373] text-white rounded-full hover:bg-[#BC8C5F] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin className="mr-2" size={20} />
                Visit Us
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
            Our Specialties
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

      {/* Location & Contact Section */}
      <section className="py-20 bg-[#FDF8F5]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="h-[400px] rounded-lg overflow-hidden"
              {...fadeInUp}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2222.1682632221314!2d21.365916929990334!3d38.03262595885914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135e1c318581cec3%3A0xbf0bd7b160f73732!2zzpbOsc-HzrHPgc6_z4DOu86xz4PPhM61zrnOvyBNZXJjaQ!5e0!3m2!1sen!2sgr!4v1742382238611!5m2!1sen!2sgr"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
            <motion.div 
              className="flex flex-col justify-center"
              {...fadeInUp}
            >
              <h2 className="text-4xl font-serif mb-8">Visit Our Shop</h2>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                >
                  <Phone className="text-[#D4A373] mr-4" />
                  <p className="text-lg">26230 73528</p>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                >
                  <Clock className="text-[#D4A373] mr-4" />
                  <p className="text-lg">Open daily: 10 AM - 10 PM</p>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                >
                  <MapPin className="text-[#D4A373] mr-4" />
                  <p className="text-lg">Varda, Greece</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-serif text-center mb-16"
            {...fadeInUp}
          >
            Latest Creations
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=500",
              "https://cdn.pixabay.com/photo/2019/08/12/13/45/ice-cream-4401300_1280.jpg",
              "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=500",
              "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=500"
            ].map((url, index) => (
              <motion.div 
                key={index} 
                className="aspect-square overflow-hidden rounded-lg"
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <motion.img 
                  src={url} 
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="text-center mt-8"
            {...fadeInUp}
          >
            <motion.a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#D4A373] hover:text-[#BC8C5F]"
              whileHover={{ scale: 1.05 }}
            >
              <Instagram className="mr-2" />
              Follow us on Instagram
              <ExternalLink size={16} className="ml-1" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C1810] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp}>
              <h3 className="text-2xl font-serif mb-4">Merci</h3>
              <p className="text-gray-300">Sweet Delights Every Day!</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h4 className="font-semibold mb-4">Opening Hours</h4>
              <p className="text-gray-300">Monday - Sunday</p>
              <p className="text-gray-300">10:00 AM - 10:00 PM</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#D4A373]"
                  whileHover={{ scale: 1.2 }}
                >
                  <Instagram />
                </motion.a>
                <motion.a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#D4A373]"
                  whileHover={{ scale: 1.2 }}
                >
                  <Facebook />
                </motion.a>
              </div>
            </motion.div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Merci. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;