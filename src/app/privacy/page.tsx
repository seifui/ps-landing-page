'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export default function Privacy() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        {
          subtitle: 'Information You Provide',
          text: 'We collect information you provide directly to us, including your name, email address, company name, and any other information you choose to provide when you sign up for our services, contact us, or use our platform.',
        },
        {
          subtitle: 'Automatically Collected Information',
          text: 'When you use our services, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device. We also collect information about your usage patterns and interactions with our platform.',
        },
        {
          subtitle: 'AI and Product Usage Data',
          text: 'To improve our AI-powered features and product recommendations, we may collect data about how you interact with our tools, including prompts, generated content, and feature usage patterns. This data is anonymized and used solely to enhance our services.',
        },
      ],
    },
    {
      title: '2. How We Use Your Information',
      content: [
        {
          subtitle: 'Service Delivery',
          text: 'We use the information we collect to provide, maintain, and improve our services, including processing your requests, providing customer support, and delivering the features you expect from our platform.',
        },
        {
          subtitle: 'Communication',
          text: 'We may use your contact information to send you technical notices, updates, security alerts, and administrative messages. With your consent, we may also send you marketing communications about new features, products, and events.',
        },
        {
          subtitle: 'AI Model Training and Improvement',
          text: 'Your usage data may be used to train and improve our AI models, always in an anonymized and aggregated format. We never use your specific content or proprietary information without explicit consent.',
        },
        {
          subtitle: 'Analytics and Optimization',
          text: 'We analyze user behavior and preferences to understand how our services are used, identify trends, and optimize the user experience. This helps us make data-driven decisions about product development and improvements.',
        },
      ],
    },
    {
      title: '3. Information Sharing and Disclosure',
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We may share your information with third-party service providers who perform services on our behalf, such as hosting, analytics, customer support, and payment processing. These providers are contractually obligated to protect your information.',
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency), or to protect the rights, property, and safety of our company, our users, or others.',
        },
        {
          subtitle: 'Business Transfers',
          text: 'If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our website of any change in ownership or uses of your personal information.',
        },
        {
          subtitle: 'With Your Consent',
          text: 'We may share your information with third parties when we have your explicit consent to do so.',
        },
      ],
    },
    {
      title: '4. Data Security',
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. This includes encryption, secure servers, and regular security audits.',
        },
        {
          subtitle: 'Data Breach Notification',
          text: 'In the event of a data breach that affects your personal information, we will notify you as soon as possible and take immediate action to minimize any potential harm.',
        },
      ],
    },
    {
      title: '5. Your Rights and Choices',
      content: [
        {
          subtitle: 'Access and Correction',
          text: 'You have the right to access, update, or correct your personal information at any time. You can do this through your account settings or by contacting our support team.',
        },
        {
          subtitle: 'Data Deletion',
          text: 'You may request deletion of your personal information at any time. We will comply with your request, subject to any legal obligations we may have to retain certain information.',
        },
        {
          subtitle: 'Opt-Out Rights',
          text: 'You can opt out of receiving marketing communications from us at any time by following the unsubscribe link in our emails or by contacting us directly. Note that you cannot opt out of receiving essential service-related communications.',
        },
        {
          subtitle: 'Data Portability',
          text: 'You have the right to request a copy of your personal information in a structured, commonly used, and machine-readable format.',
        },
      ],
    },
    {
      title: '6. Cookies and Tracking Technologies',
      content: [
        {
          subtitle: 'What We Use',
          text: 'We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. This helps us understand how you use our services and improve your experience.',
        },
        {
          subtitle: 'Your Control',
          text: 'Most web browsers are set to accept cookies by default. You can choose to set your browser to remove or reject cookies. Please note that if you disable cookies, some features of our services may not function properly.',
        },
      ],
    },
    {
      title: '7. International Data Transfers',
      content: [
        {
          subtitle: 'Global Operations',
          text: 'Your information may be transferred to and maintained on servers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ from those in your jurisdiction.',
        },
        {
          subtitle: 'Data Protection Standards',
          text: 'When we transfer your information internationally, we ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws.',
        },
      ],
    },
    {
      title: '8. Children\'s Privacy',
      content: [
        {
          subtitle: 'Age Restrictions',
          text: 'Our services are not intended for children under the age of 13 (or 16 in the European Economic Area). We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.',
        },
      ],
    },
    {
      title: '9. Changes to This Policy',
      content: [
        {
          subtitle: 'Updates',
          text: 'We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
        },
        {
          subtitle: 'Your Continued Use',
          text: 'Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of such changes.',
        },
      ],
    },
    {
      title: '10. Contact Us',
      content: [
        {
          subtitle: 'Questions and Concerns',
          text: 'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at privacy@prezsolabs.com or through our website contact form. We are committed to addressing your concerns promptly and transparently.',
        },
      ],
    },
  ];

  return (
    <main>
      <BackgroundAnimation />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 reveal">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight title-gradient">
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              Last Updated: January 19, 2026
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              At Prezso Labs, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our services. Please read this 
              policy carefully to understand our practices regarding your personal data.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="glass-panel rounded-2xl p-8 md:p-10 reveal">
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 tracking-tight">
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {item.subtitle && (
                        <h3 className="text-lg font-medium text-white mb-3">
                          {item.subtitle}
                        </h3>
                      )}
                      <p className="text-slate-400 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 glass-panel rounded-2xl p-8 md:p-10 text-center reveal">
            <h3 className="text-2xl font-medium text-white mb-4">
              Have Questions About Your Privacy?
            </h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              We're here to help. If you have any questions or concerns about how we handle your data, 
              don't hesitate to reach out to our privacy team.
            </p>
            <a 
              href="mailto:privacy@prezsolabs.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-full transition-all duration-300"
            >
              Contact Privacy Team
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="ml-2">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
