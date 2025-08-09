import React from 'react';
import { SERVICES, COMPANY_INFO } from '../../data/constants';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-gray-300 text-sm">
              Transforming spaces with innovative design and expert craftsmanship.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {SERVICES.map((service) => (
                <li key={service.id}>{service.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Email: {COMPANY_INFO.contact.email}</p>
              <p>Phone: {COMPANY_INFO.contact.phone}</p>
              <p>Address: {COMPANY_INFO.contact.address}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. | 
            <button className="hover:text-white ml-1 underline">Privacy Policy</button> | 
            <button className="hover:text-white ml-1 underline">Terms of Service</button>
          </p>
        </div>
      </div>
    </footer>
  );
}
