'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname
import { Link as Link1 } from 'react-scroll';
import { FiUser } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar({
  navLight,
  playBtn,
  bgLight,
  navCenter,
}: {
  navLight: boolean;
  playBtn: boolean;
  bgLight: boolean;
  navCenter: boolean;
}) {
  const [menu, setMenu] = useState<Boolean>(false);
  const [scroll, setScroll] = useState<Boolean>(false);

  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handlerScroll);
    return () => {
      window.removeEventListener('scroll', handlerScroll);
    };
  });

  return (
    <nav
      className={`navbar md:pt-6 ${
        bgLight ? 'bg-white dark:bg-slate-900 shadow dark:shadow-gray-800' : ''
      } ${scroll ? 'is-sticky' : ''}`}
      id="navbar"
    >
      <div className="container relative flex flex-wrap items-center justify-between">
        {!navLight && (
          <Link className="navbar-brand md:me-8 flex items-center" href="/">
            <Image
              src="/images/my-jamii-horizontal-dark.svg"
              width={180}
              height={40}
              className="dark:hidden object-contain"
              alt="My Jamii Logo"
            />
            <Image
              src="/images/my-jamii-horizontal-light.svg"
              width={180}
              height={40}
              className="hidden dark:inline-block object-contain"
              alt="My Jamii Logo"
            />
          </Link>
        )}
        {navLight && (
          <Link className="navbar-brand flex items-center" href="/">
            <span className="inline-block dark:hidden">
              <Image
                src="/images/my-jamii-horizontal-dark.svg"
                width={180}
                height={40}
                className="object-contain"
                alt="My Jamii Logo"
              />
            </span>
            <Image
              src="/images/my-jamii-horizontal-light.svg"
              width={180}
              height={40}
              className="hidden dark:inline-block object-contain"
              alt="My Jamii Logo"
            />
          </Link>
        )}

        {/* Navigation Icons and Buttons */}
        <div className="nav-icons flex items-center lg_992:order-2 md:ms-6">
          {!playBtn && (
            <ul className="list-none menu-social mb-0">
              <li className="inline">
                <Link
                  href=""
                  className="size-8 inline-flex items-center justify-center rounded-full align-middle myjamiiGreen/10 hover:bg-myjamiiGreen text-myjamiiGreen hover:text-white"
                >
                  <FiUser className="size-4" />
                </Link>
              </li>
              <li className="inline">
                <Link
                  href=""
                  className="h-8 px-4 text-[12px] tracking-wider inline-flex items-center justify-center font-medium rounded-full myjamiiGreen text-white uppercase"
                >
                  Signup
                </Link>
              </li>
            </ul>
          )}
          {playBtn && (
            <ul className="list-none menu-social mb-0">
              <li className="inline">
                <Link
                  href=""
                  className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center"
                >
                  <Image
                    src="/images/appstore.svg"
                    width={32}
                    height={32}
                    alt="App Store"
                  />
                </Link>
              </li>

              <li className="inline ms-1">
                <Link
                  href=""
                  className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center"
                >
                  <Image
                    src="/images/google-play.svg"
                    width={32}
                    height={32}
                    alt="Google Play"
                  />
                </Link>
              </li>
            </ul>
          )}
          <button
            type="button"
            className="collapse-btn inline-flex items-center ms-2 text-slate-900 dark:text-white lg_992:hidden"
            onClick={() => setMenu(!menu)}
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu text-[24px]"></i>
          </button>
        </div>

        {/* Navigation Links */}
        {pathname === '/' && ( // Render navigation links only if the pathname is "/"
          <div
            className={`navigation lg_992:order-1 lg_992:flex ${
              navCenter ? '' : 'ms-auto'
            } ${menu ? '' : 'hidden'}`}
            id="menu-collapse"
          >
            <ul
              className={`navbar-nav ${navLight ? 'nav-light' : ''}`}
              id="navbar-navlist"
            >
              <li className="nav-item ms-0">
                <Link1
                  href="/"
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="home"
                >
                  Home
                </Link1>
              </li>
              <li className="nav-item ms-0">
                <Link1
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="features"
                >
                  About
                </Link1>
              </li>
              <li className="nav-item ms-0">
                <Link1
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="customizable"
                >
                  Services
                </Link1>
              </li>
              <li className="nav-item ms-0">
                <Link1
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="faqs"
                >
                  Community guidelines
                </Link1>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
