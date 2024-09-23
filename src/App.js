import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection  from './components/AboutSection';
import Projects from './components/Projects';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

// Main App component combining all other components
function App() {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <AboutSection/>
            <Projects />
            <Services />
            <Team />
            <Testimonials />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default App;
