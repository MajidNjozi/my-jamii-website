import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { FiFacebook, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="py-8 bg-myjamiiBlack dark:bg-gray-900">
      <div className="container flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:justify-between">
        {/* Logo Section */}
        <div className="flex items-center justify-center md:justify-start">
          <Link href="#" className="logo-footer">
            <Image
              src="/images/my-jamii-horizontal-light.svg"
              width={121}
              height={20}
              alt="My Jamii Logo"
            />
          </Link>
        </div>

        {/* Navigation Links Section */}
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6">
          <Link href="/home" className="text-gray-400 hover:text-myjamiiGreen">
            Cookie policy
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-myjamiiGreen">
            Data privacy
          </Link>
          <Link
            href="/services"
            className="text-gray-400 hover:text-myjamiiGreen"
          >
            Terms & conditions
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-myjamiiGreen"
          >
            Contact
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center space-x-4">
          <Link
            href="https://www.facebook.com/shreethemes"
            target="_blank"
            className="flex items-center justify-center w-8 h-8 border border-gray-700 hover:border-myjamiiGreen rounded-md text-slate-300 hover:text-white hover:bg-myjamiiGreen"
          >
            <FiFacebook className="h-4 w-4" />
          </Link>
          <Link
            href="https://www.instagram.com/shreethemes/"
            target="_blank"
            className="flex items-center justify-center w-8 h-8 border border-gray-700 hover:border-myjamiiGreen rounded-md text-slate-300 hover:text-white hover:bg-myjamiiGreen"
          >
            <FiInstagram className="h-4 w-4" />
          </Link>
          <Link
            href="https://twitter.com/shreethemes"
            target="_blank"
            className="flex items-center justify-center w-8 h-8 border border-gray-700 hover:border-myjamiiGreen rounded-md text-slate-300 hover:text-white hover:bg-myjamiiGreen"
          >
            <FiTwitter className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:support@shreethemes.in"
            className="flex items-center justify-center w-8 h-8 border border-gray-700 hover:border-myjamiiGreen rounded-md text-slate-300 hover:text-white hover:bg-myjamiiGreen"
          >
            <FiMail className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Made with{' '}
          <i className="mdi mdi-heart text-myjamiiGreen"></i> from{' '}
          <Link
            href="https://earth.google.com/web/@-6.37282545,34.9899,1148.50310971a,2957230.42276679d,35y,0h,0t,0r/data=CkIaPBI2CiUweDE4NWM0YmFlMTY5YmQ2ZjE6MHg5NDBmNmIyNmEwODZhMWRkKg1EYXIgZXMgU2FsYWFtGAIgAUICCAE6AwoBMEICCABKDQj___________8BEAA"
            target="_blank"
            className="text-myjamiiGreen"
          >
            Tanzania
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
