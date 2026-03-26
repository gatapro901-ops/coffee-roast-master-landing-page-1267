
      // Import necessary libraries
      import { motion } from 'framer-motion';

      // Define constants for colors and fonts
      const COLOR_PALETTE = {
         background: '#F5F5DC', // cream/beige
         text: '#452B1F', // deep coffee-brown
         accent: '#FFC080' // soft amber
      };

      const FONT_FAMILIES = {
         primary: 'Playfair Display',
         secondary: 'Lato'
      };

      // Define the navigation component
      function Navigation() {
         return (
            <nav className='flex justify-between items-center py-4'>
               <h1 className='text-3xl font-bold font-primary'>Aroma Master</h1>
               <ul className='flex items-center space-x-8'>
                  <li><a href='#' className='text-lg font-secondary hover:text-accent'>Home</a></li>
                  <li><a href='#' className='text-lg font-secondary hover:text-accent'>Our Roasts</a></li>
                  <li><a href='#' className='text-lg font-secondary hover:text-accent'>Contact</a></li>
               </ul>
            </nav>
         );
      }

      // Define the hero component
      function Hero() {
         return (
            <section className='flex flex-col items-center justify-center h-screen' id='hero'>
               <h1 className='text-5xl font-bold font-primary mb-4'>Master the Art of Coffee</h1>
               <p className='text-lg font-secondary text-center mb-8'>Experience the perfect blend of flavors with our expertly crafted coffee roasts.</p>
               <motion.button
                  whileHover={{ scale: 1.1 }}
                  className='bg-accent text-lg font-secondary py-2 px-4 rounded-md hover:shadow-md'
               >
                  Explore Roasts
               </motion.button>
            </section>
         );
      }

      // Define the features component
      function Features() {
         return (
            <section className='flex flex-col items-center justify-center py-12' id='features'>
               <h2 className='text-3xl font-bold font-primary mb-8'>Our Roast Types</h2>
               <div className='flex flex-wrap justify-center space-x-8 space-y-8'>
                  <FeatureCard
                     icon='light-roast'
                     title='Light Roast'
                     description='A light and refreshing roast with notes of citrus and floral hints.'
                  />
                  <FeatureCard
                     icon='medium-roast'
                     title='Medium Roast'
                     description='A balanced and smooth roast with hints of chocolate and caramel.'
                  />
                  <FeatureCard
                     icon='dark-roast'
                     title='Dark Roast'
                     description='A rich and bold roast with notes of dark chocolate and a smoky finish.'
                  />
               </div>
            </section>
         );
      }

      // Define the feature card component
      function FeatureCard({ icon, title, description }) {
         return (
            <motion.div
               whileHover={{ scale: 1.05 }}
               className='bg-white shadow-md py-4 px-6 rounded-md w-64'
            >
               <h3 className='text-lg font-bold font-primary mb-2'>{title}</h3>
               <p className='text-sm font-secondary'>{description}</p>
            </motion.div>
         );
      }

      // Define the footer component
      function Footer() {
         return (
            <footer className='py-4 text-center'>
               <p className='text-sm font-secondary'> 2024 Aroma Master. All rights reserved.</p>
            </footer>
         );
      }

      // Render the components to the DOM
      const root = document.getElementById('root');
      root.appendChild(<Navigation />);
      root.appendChild(<Hero />);
      root.appendChild(<Features />);
      root.appendChild(<Footer />);
   