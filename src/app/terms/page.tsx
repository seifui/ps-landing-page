'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export default function Terms() {
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
      title: '1. Acceptance of Terms',
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By accessing or using Prezso Labs services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not access or use our services.',
        },
        {
          subtitle: 'Eligibility',
          text: 'You must be at least 18 years old and have the legal capacity to enter into a binding agreement to use our services. By using our services, you represent and warrant that you meet these requirements.',
        },
      ],
    },
    {
      title: '2. Description of Services',
      content: [
        {
          subtitle: 'Platform Overview',
          text: 'Prezso Labs provides AI-powered productivity tools, digital product development services, and related software solutions designed to help teams and individuals work more efficiently. Our services include but are not limited to AI-assisted workflows, product design, and development tools.',
        },
        {
          subtitle: 'Service Modifications',
          text: 'We reserve the right to modify, suspend, or discontinue any part of our services at any time, with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of our services.',
        },
      ],
    },
    {
      title: '3. User Accounts',
      content: [
        {
          subtitle: 'Account Creation',
          text: 'To access certain features of our services, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.',
        },
        {
          subtitle: 'Account Security',
          text: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account or any other breach of security.',
        },
        {
          subtitle: 'Account Termination',
          text: 'We reserve the right to suspend or terminate your account at any time, with or without cause or notice, if we believe you have violated these Terms of Service or if your use of our services poses a security risk or violates applicable laws.',
        },
      ],
    },
    {
      title: '4. Acceptable Use',
      content: [
        {
          subtitle: 'Permitted Use',
          text: 'You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services in any way that could damage, disable, overburden, or impair our servers or networks.',
        },
        {
          subtitle: 'Prohibited Activities',
          text: 'You agree not to: (a) use our services for any illegal purpose or in violation of any laws; (b) attempt to gain unauthorized access to our systems or networks; (c) interfere with or disrupt the integrity or performance of our services; (d) transmit any viruses, malware, or other malicious code; (e) collect or harvest any personally identifiable information from our services; (f) use our services to send spam or unsolicited messages; (g) impersonate any person or entity or misrepresent your affiliation with any person or entity.',
        },
      ],
    },
    {
      title: '5. Intellectual Property Rights',
      content: [
        {
          subtitle: 'Our Intellectual Property',
          text: 'All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, data compilations, software, and the design, selection, and arrangement thereof, are the exclusive property of Prezso Labs or our licensors and are protected by copyright, trademark, and other intellectual property laws.',
        },
        {
          subtitle: 'Your Content',
          text: 'You retain ownership of any content you submit, post, or display through our services ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in connection with providing and improving our services.',
        },
        {
          subtitle: 'AI-Generated Content',
          text: 'Content generated by our AI tools may be subject to certain limitations on ownership and use. While you may use AI-generated content for your own purposes, we do not guarantee that such content is unique or free from third-party intellectual property claims.',
        },
        {
          subtitle: 'Restrictions',
          text: 'You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our content except as expressly permitted by these Terms or with our prior written consent.',
        },
      ],
    },
    {
      title: '6. Payment and Billing',
      content: [
        {
          subtitle: 'Fees',
          text: 'Certain features of our services may require payment of fees. You agree to pay all applicable fees as described in our pricing page or as otherwise agreed upon. All fees are non-refundable unless otherwise specified.',
        },
        {
          subtitle: 'Subscription Plans',
          text: 'If you purchase a subscription plan, you will be billed automatically on a recurring basis according to your selected billing cycle (monthly or annually). You can cancel your subscription at any time, but no refunds will be provided for the current billing period.',
        },
        {
          subtitle: 'Payment Method',
          text: 'You must provide a valid payment method to purchase our services. You authorize us to charge your payment method for all fees incurred under your account. You are responsible for keeping your payment information up to date.',
        },
        {
          subtitle: 'Price Changes',
          text: 'We reserve the right to change our pricing at any time. If we change the price of a subscription plan, we will notify you at least 30 days in advance. Price changes will take effect at the start of the next billing cycle after the notice period.',
        },
      ],
    },
    {
      title: '7. Privacy and Data Protection',
      content: [
        {
          subtitle: 'Privacy Policy',
          text: 'Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our data collection and use practices.',
        },
        {
          subtitle: 'Data Processing',
          text: 'By using our services, you consent to our collection, use, and disclosure of your information as described in our Privacy Policy. We will handle your data in accordance with applicable data protection laws.',
        },
      ],
    },
    {
      title: '8. AI Services and Limitations',
      content: [
        {
          subtitle: 'AI Accuracy',
          text: 'Our AI-powered features are designed to assist and enhance your productivity, but they are not perfect. AI-generated content, recommendations, and outputs may contain errors, inaccuracies, or biases. You are solely responsible for reviewing and verifying all AI-generated content before using it.',
        },
        {
          subtitle: 'No Professional Advice',
          text: 'Our AI services do not constitute professional advice (legal, financial, medical, or otherwise). You should not rely solely on AI-generated content for important decisions and should consult with qualified professionals when appropriate.',
        },
        {
          subtitle: 'Continuous Improvement',
          text: 'We continuously improve our AI models using anonymized and aggregated data. Your use of our AI services may contribute to these improvements, as described in our Privacy Policy.',
        },
      ],
    },
    {
      title: '9. Third-Party Services and Links',
      content: [
        {
          subtitle: 'Third-Party Integrations',
          text: 'Our services may integrate with or contain links to third-party websites, applications, or services that are not owned or controlled by us. We are not responsible for the content, privacy policies, or practices of any third-party services.',
        },
        {
          subtitle: 'Your Responsibility',
          text: 'Your use of third-party services is at your own risk and subject to the terms and conditions and privacy policies of those services. We encourage you to review the terms and policies of any third-party services you access.',
        },
      ],
    },
    {
      title: '10. Disclaimer of Warranties',
      content: [
        {
          subtitle: 'As-Is Basis',
          text: 'OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
        },
        {
          subtitle: 'No Guarantee',
          text: 'We do not warrant that our services will be uninterrupted, error-free, secure, or free from viruses or other harmful components. We do not guarantee the accuracy, completeness, or usefulness of any information provided through our services.',
        },
      ],
    },
    {
      title: '11. Limitation of Liability',
      content: [
        {
          subtitle: 'Liability Cap',
          text: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, PREZSO LABS AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.',
        },
        {
          subtitle: 'Maximum Liability',
          text: 'IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION EXCEED THE AMOUNT YOU HAVE PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.',
        },
      ],
    },
    {
      title: '12. Indemnification',
      content: [
        {
          subtitle: 'Your Indemnity',
          text: 'You agree to indemnify, defend, and hold harmless Prezso Labs and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys\' fees) arising from: (a) your use of our services; (b) your violation of these Terms; (c) your violation of any rights of another party; or (d) your User Content.',
        },
      ],
    },
    {
      title: '13. Termination',
      content: [
        {
          subtitle: 'Termination Rights',
          text: 'We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including but not limited to a breach of these Terms. Upon termination, your right to use our services will immediately cease.',
        },
        {
          subtitle: 'Effect of Termination',
          text: 'All provisions of these Terms that by their nature should survive termination shall survive, including but not limited to ownership provisions, warranty disclaimers, indemnity, and limitations of liability.',
        },
      ],
    },
    {
      title: '14. Dispute Resolution',
      content: [
        {
          subtitle: 'Governing Law',
          text: 'These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Prezso Labs is incorporated, without regard to its conflict of law provisions.',
        },
        {
          subtitle: 'Arbitration',
          text: 'Any dispute arising out of or relating to these Terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, rather than in court, except that you may assert claims in small claims court if your claims qualify.',
        },
        {
          subtitle: 'Class Action Waiver',
          text: 'You agree that any arbitration or proceeding shall be limited to the dispute between you and us individually. To the full extent permitted by law, no arbitration or proceeding shall be joined with another or proceed on a class, representative, or collective basis.',
        },
      ],
    },
    {
      title: '15. General Provisions',
      content: [
        {
          subtitle: 'Entire Agreement',
          text: 'These Terms, together with our Privacy Policy and any other legal notices published by us, constitute the entire agreement between you and Prezso Labs regarding our services.',
        },
        {
          subtitle: 'Severability',
          text: 'If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions shall remain in full force and effect.',
        },
        {
          subtitle: 'Waiver',
          text: 'No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term, and our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.',
        },
        {
          subtitle: 'Assignment',
          text: 'You may not assign or transfer these Terms or your rights and obligations hereunder without our prior written consent. We may assign these Terms without restriction.',
        },
      ],
    },
    {
      title: '16. Changes to Terms',
      content: [
        {
          subtitle: 'Modifications',
          text: 'We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the effective date of the changes. Your continued use of our services after the effective date of any changes constitutes your acceptance of the modified Terms.',
        },
      ],
    },
    {
      title: '17. Contact Information',
      content: [
        {
          subtitle: 'Questions',
          text: 'If you have any questions about these Terms of Service, please contact us at legal@prezsolabs.com or through our website contact form. We will respond to your inquiry as soon as possible.',
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
              Terms of Service
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              Last Updated: January 19, 2026
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Welcome to Prezso Labs. These Terms of Service govern your access to and use of our services, 
              including our website, applications, and any related services (collectively, the "Services"). 
              By using our Services, you agree to be bound by these Terms.
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
              Questions About Our Terms?
            </h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              If you have any questions or concerns about these Terms of Service, our legal team is 
              here to help clarify anything you need.
            </p>
            <a 
              href="mailto:legal@prezsolabs.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-full transition-all duration-300"
            >
              Contact Legal Team
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
