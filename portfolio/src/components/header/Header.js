import React, { useState } from 'react'
import './header.css'

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  return (
    <header>
        <a href="#" class="logo-holder">
            <div class="logo">DW</div>
            <div class="logo-text">Portfolio Website</div>
        </a>

        <nav>
            <ul id="menu" className={isMobileMenuOpen ? 'active' : ''}>
                <li><a href="#">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="mailto:blaque.develop@gmail.com" class="button">Contact me</a></li>
            </ul>

            <a href="#" class="mobile-toggle" onClick={toggleMobileMenu}>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
                </svg>
            </a>
        </nav>

    </header>
  )
}

export default Header