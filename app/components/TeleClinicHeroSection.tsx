// app/tele/page.tsx
"use client"; // Ensure this runs on the client-side

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const TeleClinicHeroSection = () => {
  const router = useRouter();

  const handleBooking = () => {
    router.push('/book-appointment');
  };

  return (
    <section className="relative w-full h-[65vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-green-100">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full px-4 md:px-8">
        <Image
          src="/tele.webp" // Ensure this image is in your public folder
          alt="ABCare Tele Clinics Hero Image"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-80 rounded-lg shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 md:px-10 py-8 md:py-12 bg-white/70 backdrop-blur-lg rounded-lg shadow-xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
          Welcome to ABCare Tele Clinics
        </h1>
        <p className="mt-4 text-base md:text-xl text-gray-700 leading-relaxed">
          Connecting you with certified doctors for seamless telemedicine services. Your health, our priority.
        </p>
        <button 
          className="mt-6 px-8 py-3 bg-yellow-500 text-gray-600 text-base md:text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-600 focus:ring-4 focus:ring-blue-300 transition duration-300"
          onClick={handleBooking}
        >
          Book an Appointment
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default TeleClinicHeroSection;

