import React from 'react';

export default function Footer() {
  return (
    <div className='bg-gray-900 text-white py-10'>
      <footer className='max-w-7xl mx-auto px-6'>
        
        {/* Navigation Links */}
        <nav className='flex justify-center space-x-12 mb-8'>
          <a className='hover:text-cyan-400 text-gray-300 transition-colors duration-300' href='#'>Home</a>
          <a className='hover:text-cyan-400 text-gray-300 transition-colors duration-300' href='#'>About</a>
          <a className='hover:text-cyan-400 text-gray-300 transition-colors duration-300' href='#'>Menu</a>
          <a className='hover:text-cyan-400 text-gray-300 transition-colors duration-300' href='#'>Delivery</a>
          <a className='hover:text-cyan-400 text-gray-300 transition-colors duration-300' href='#'>Contact</a>
        </nav>

        {/* Quick Links and Customer Service */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-center'>
          <div>
            <h3 className='font-semibold text-lg mb-2'>Quick Links</h3>
            <ul>
              <li><a className='block hover:text-cyan-400 text-gray-400 transition-colors duration-300' href='#'>Privacy Policy</a></li>
              <li><a className='block hover:text-cyan-400 text-gray-400 transition-colors duration-300' href='#'>Terms of Service</a></li>
              <li><a className='block hover:text-cyan-400 text-gray-400 transition-colors duration-300' href='#'>FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold text-lg mb-2'>Customer Service</h3>
            <ul>
              <li><a className='block hover:text-cyan-400 text-gray-400 transition-colors duration-300' href='#'>Returns</a></li>
              <li><a className='block hover:text-cyan-400 text-gray-400 transition-colors duration-300' href='#'>Shipping Info</a></li>
              <li><a className='block hover:text-cyan-400 text-gray-400 transition-colors duration-300' href='#'>Contact Support</a></li>
            </ul>
          </div>
        </div>

        {/* Google Maps and QR Code */}
        <div className='text-center mb-8'>
          <h3 className='font-semibold text-lg mb-2'>Find Us</h3>
          <p>Gulistan-e-johar blk-14, Karachi,Pakistan</p>
          <a href="https://www.google.com/maps/place/123+Burger+St,+Food+City,+FC+12345" target='_blank' rel='nofollow noopener' className='text-cyan-500 hover:underline'>
            View on Google Maps
          </a>
          <div className='mt-4'>
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?data=https://www.google.com/maps/place/123+Burger+St,+Food+City,+FC+12345&size=150x150" 
              alt="QR Code for location" 
              className='mx-auto mt-2'
            />
            <p className='text-gray-400 text-sm'>Scan to find us!</p>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className='text-center mb-8'>
          <h3 className='font-semibold text-lg mb-2'>Subscribe to Our Newsletter</h3>
          <form className='flex justify-center'>
            <input 
              type="email" 
              placeholder="Your email address" 
              className='p-3 rounded-l-md text-black focus:outline-none focus:ring-2 focus:ring-cyan-400'
            />
            <button className='bg-cyan-500 p-3 rounded-r-md hover:bg-cyan-600 transition duration-300'>Subscribe</button>
          </form>
          <p className='text-gray-400 text-sm mt-2'>Stay updated with the latest offers and news.</p>
        </div>

        {/* App Installation Links */}
        <div className='text-center mb-8'>
          <h3 className='font-semibold text-lg mb-2'>Download Our App</h3>
          <div className='flex justify-center space-x-4'>
            <a href="https://play.google.com/store/apps/details?id=com.burgercompany" target='_blank' rel='nofollow noopener'>
              <img 
                src="https://static1.xdaimages.com/wordpress/wp-content/uploads/2019/05/play-store-1.jpg" 
                alt="Download on Play Store" 
                className='w-36 h-auto transition-transform duration-300 hover:scale-105'
              />
            </a>
            <a href="https://apps.apple.com/app/id123456789" target='_blank' rel='nofollow noopener'>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRp26bH1m3X-rMWGqkoEZ2raskgpPyVORNeQ&s" 
                alt="Download on the App Store" 
                className='w-36 h-auto transition-transform duration-300 hover:scale-105'
              />
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className='flex justify-center space-x-6 mb-8'>
          <a href="https://facebook.com" target='_blank' rel='nofollow noopener'>
            <img className='w-10 h-10 transition-transform duration-300 hover:scale-110' src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="Facebook logo" />
          </a>
          <a href="https://instagram.com" target='_blank' rel='nofollow noopener'>
            <img className='w-10 h-10 transition-transform duration-300 hover:scale-110' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram logo" />
          </a>
          <a href="https://linkedin.com" target='_blank' rel='nofollow noopener'>
            <img className='w-10 h-10 transition-transform duration-300 hover:scale-110' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyZr_TcrM65k9vQkbPQy_aK9Fg_bvya1ydMg&s" alt="LinkedIn logo" />
          </a>
          <a href="https://twitter.com" target='_blank' rel='nofollow noopener'>
            <img className='w-10 h-10 transition-transform duration-300 hover:scale-110' src="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg" alt="Twitter logo" />
          </a>
          <a href="https://youtube.com" target='_blank' rel='nofollow noopener'>
            <img className='w-10 h-10 transition-transform duration-300 hover:scale-110' src="https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg" alt="YouTube logo" />
          </a>
        </div>

        {/* Contact Information */}
        <div className='text-center text-gray-400 mb-6'>
          <h3 className='font-semibold text-lg mb-2'>Contact Us</h3>
          <p>Gulistan-e-johar blk-14, Karachi,Pakistan</p>
          <p>+1 (555) 123-4567</p>
          <p>Email: <a href="mailto:info@burgercompany.com" className='text-cyan-500 hover:underline'>info@foodheavens56@gmail.com</a></p>
          <p><a href="https://www.google.com/maps/place/123+Burger+St,+Food+City,+FC+12345" className='text-cyan-500 hover:underline'>View on Map</a></p>
        </div>

        {/* Additional Info Section */}
        <div className='text-center text-gray-400 mb-6'>
          <h3 className='font-semibold text-lg mb-2'>Our Working Hours</h3>
          <p>Monday - Friday: 10 AM - 10 PM</p>
          <p>Saturday - Sunday: 11 AM - 11 PM</p>
          <p>Holidays: Closed</p>
        </div>

        {/* Copyright Section */}
        <div className='text-center text-gray-500'>
          <p>&copy; {new Date().getFullYear()} Food Heavens@.All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
