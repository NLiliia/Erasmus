import React from 'react';
import Marquee from 'react-fast-marquee';

const partners = [
    { name: 'Hair Redivivus', logo: '/partners/hair_redivivus.png' },
    { name: 'Del Tul', logo: '/partners/del_tul.png' },
    { name: 'Stella', logo: '/partners/stella.png' },
    { name: 'Rural', logo: '/partners/rural.png' },
    { name: 'Piebalgas', logo: '/partners/piebalgas.png' },
    { name: 'Society Biliki', logo: '/partners/society_biliki.png' },
    { name: 'Evropska Unija', logo: '/partners/evropska_unija.png' },
    { name: 'Drustvo Connect', logo: '/partners/drustvo_connect.png' },
];

const PartnersSection = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Partners</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We collaborate with renowned institutions across Europe
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-4">
                    <Marquee
                        gradient={false}
                        speed={100}
                        pauseOnHover={true}
                        className="py-4"
                    >
                        <div className="flex space-x-16 items-center">
                            {partners.map((partner, index) => (
                                <div key={index} className="flex-shrink-0">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 px-5"
                                    />
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
