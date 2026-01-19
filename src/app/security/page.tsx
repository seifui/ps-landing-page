'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export default function Security() {
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

  const securityFeatures = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-indigo-400">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3l-8 3v7c0 6 8 10 8 10"></path>
        </svg>
      ),
      title: 'End-to-End Encryption',
      description: 'All data transmitted between your device and our servers is encrypted using industry-standard TLS 1.3 protocol.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-purple-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M7 10V7a5 5 0 0 1 9.33-2.5M12 17v-4"></path>
            <rect width="18" height="11" x="3" y="11" rx="2"></rect>
          </g>
        </svg>
      ),
      title: 'Data Encryption at Rest',
      description: 'Your data is encrypted at rest using AES-256 encryption, ensuring maximum protection even when stored.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-blue-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
          </g>
        </svg>
      ),
      title: 'Access Controls',
      description: 'Granular role-based access controls (RBAC) ensure that users only have access to the data and features they need.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-emerald-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M9 11V7a3 3 0 0 1 6 0v4"></path>
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
            <path d="M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></path>
          </g>
        </svg>
      ),
      title: 'Multi-Factor Authentication',
      description: 'Optional MFA adds an extra layer of security to protect your account from unauthorized access.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-orange-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4m0-4h.01"></path>
          </g>
        </svg>
      ),
      title: 'Security Monitoring',
      description: '24/7 security monitoring and automated threat detection systems protect against suspicious activities.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-pink-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M3 3v18h18M7 16l4-4l4 4l6-6"></path>
          </g>
        </svg>
      ),
      title: 'Regular Security Audits',
      description: 'We conduct regular third-party security audits and penetration testing to identify and fix vulnerabilities.',
    },
  ];

  const sections = [
    {
      title: 'Our Security Framework',
      content: [
        {
          subtitle: 'Security by Design',
          text: 'Security is not an afterthought at Prezso Labs—it\'s built into every layer of our product development process. From the initial design phase to deployment and maintenance, we follow industry best practices and security standards to ensure your data is protected at all times.',
        },
        {
          subtitle: 'Compliance Standards',
          text: 'We adhere to major security and privacy frameworks including SOC 2 Type II, GDPR, CCPA, and ISO 27001 standards. Our compliance program is continuously updated to meet evolving regulatory requirements and industry standards.',
        },
      ],
    },
    {
      title: 'Infrastructure Security',
      content: [
        {
          subtitle: 'Cloud Infrastructure',
          text: 'Our services are hosted on leading cloud infrastructure providers (AWS, Google Cloud) that maintain best-in-class security certifications and practices. We leverage their robust security features including network isolation, DDoS protection, and automated security monitoring.',
        },
        {
          subtitle: 'Data Centers',
          text: 'All data is stored in SOC 2 certified data centers with physical security measures including 24/7 surveillance, biometric access controls, and redundant power and cooling systems.',
        },
        {
          subtitle: 'Network Security',
          text: 'We implement multiple layers of network security including firewalls, intrusion detection/prevention systems (IDS/IPS), and virtual private clouds (VPC) to isolate and protect our infrastructure.',
        },
        {
          subtitle: 'Backup and Disaster Recovery',
          text: 'Automated daily backups are performed and stored in geographically distributed locations. Our disaster recovery plan ensures business continuity with minimal data loss in the event of an incident.',
        },
      ],
    },
    {
      title: 'Application Security',
      content: [
        {
          subtitle: 'Secure Development Lifecycle',
          text: 'Our engineering team follows secure coding practices and conducts code reviews for every change. We use automated security scanning tools to identify vulnerabilities before code reaches production.',
        },
        {
          subtitle: 'Dependency Management',
          text: 'All third-party libraries and dependencies are regularly updated and scanned for known vulnerabilities. We maintain an inventory of all software components and monitor security advisories.',
        },
        {
          subtitle: 'API Security',
          text: 'Our APIs are protected using OAuth 2.0, rate limiting, and input validation to prevent common attacks such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).',
        },
        {
          subtitle: 'Session Management',
          text: 'User sessions are managed securely with automatic timeout, secure cookie flags, and session invalidation on logout. We use cryptographically secure tokens for authentication.',
        },
      ],
    },
    {
      title: 'AI and ML Security',
      content: [
        {
          subtitle: 'Model Security',
          text: 'Our AI models are trained on carefully curated datasets with privacy-preserving techniques. We implement safeguards to prevent model poisoning, adversarial attacks, and unauthorized model extraction.',
        },
        {
          subtitle: 'Data Privacy in AI',
          text: 'Personal and sensitive data used for AI training is anonymized and aggregated. We never use customer-specific data to train models without explicit consent and appropriate data protection measures.',
        },
        {
          subtitle: 'Prompt Injection Protection',
          text: 'We implement multiple layers of protection against prompt injection attacks, including input sanitization, output filtering, and context isolation to ensure AI interactions remain secure.',
        },
      ],
    },
    {
      title: 'Data Protection',
      content: [
        {
          subtitle: 'Data Segregation',
          text: 'Customer data is logically segregated and isolated to prevent unauthorized access between accounts. We use industry-standard database security practices including parameterized queries and principle of least privilege.',
        },
        {
          subtitle: 'Data Retention',
          text: 'We retain customer data only for as long as necessary to provide our services and comply with legal obligations. Data deletion requests are processed within 30 days, with secure data wiping procedures.',
        },
        {
          subtitle: 'Data Portability',
          text: 'You can export your data at any time in common, machine-readable formats. We provide self-service tools for data export and deletion in accordance with privacy regulations.',
        },
        {
          subtitle: 'Third-Party Data Sharing',
          text: 'We do not sell your data to third parties. Data is only shared with service providers who are contractually obligated to protect your information and use it only for specific purposes.',
        },
      ],
    },
    {
      title: 'Employee Security',
      content: [
        {
          subtitle: 'Background Checks',
          text: 'All employees undergo background checks before being granted access to customer data and production systems. Access is provided on a need-to-know basis.',
        },
        {
          subtitle: 'Security Training',
          text: 'Our team receives regular security awareness training covering topics such as phishing prevention, password security, and data handling best practices.',
        },
        {
          subtitle: 'Access Management',
          text: 'Employee access to systems and data is controlled through centralized identity management with MFA enforcement. Access is reviewed quarterly and revoked immediately upon termination.',
        },
      ],
    },
    {
      title: 'Incident Response',
      content: [
        {
          subtitle: 'Incident Response Plan',
          text: 'We maintain a comprehensive incident response plan that defines roles, responsibilities, and procedures for detecting, responding to, and recovering from security incidents.',
        },
        {
          subtitle: 'Breach Notification',
          text: 'In the unlikely event of a data breach affecting your personal information, we will notify you promptly in accordance with applicable laws and regulations, typically within 72 hours of discovery.',
        },
        {
          subtitle: 'Security Operations Center',
          text: 'Our 24/7 Security Operations Center (SOC) monitors for security threats and anomalies, with dedicated personnel ready to respond to incidents at any time.',
        },
        {
          subtitle: 'Post-Incident Review',
          text: 'After any security incident, we conduct a thorough post-mortem analysis to identify root causes and implement preventive measures to avoid recurrence.',
        },
      ],
    },
    {
      title: 'Vulnerability Management',
      content: [
        {
          subtitle: 'Vulnerability Scanning',
          text: 'We perform automated vulnerability scans on a continuous basis and manual penetration testing at least quarterly. All identified vulnerabilities are prioritized and remediated based on severity.',
        },
        {
          subtitle: 'Bug Bounty Program',
          text: 'We operate a responsible disclosure program that encourages security researchers to report vulnerabilities. Eligible findings are rewarded through our bug bounty program.',
        },
        {
          subtitle: 'Patch Management',
          text: 'Critical security patches are applied within 24 hours of release. All systems are kept up to date with the latest security updates through our automated patch management process.',
        },
      ],
    },
    {
      title: 'Third-Party Security',
      content: [
        {
          subtitle: 'Vendor Risk Management',
          text: 'All third-party vendors and service providers undergo security assessments before integration. We review their security practices, certifications, and compliance status to ensure they meet our standards.',
        },
        {
          subtitle: 'Continuous Monitoring',
          text: 'We continuously monitor third-party services for security incidents and vulnerabilities. Vendor security postures are reviewed annually or whenever significant changes occur.',
        },
      ],
    },
    {
      title: 'User Security Best Practices',
      content: [
        {
          subtitle: 'Strong Passwords',
          text: 'We enforce strong password policies including minimum length, complexity requirements, and password history. We recommend using a password manager to generate and store unique passwords.',
        },
        {
          subtitle: 'Enable Multi-Factor Authentication',
          text: 'We strongly encourage all users to enable MFA for an additional layer of security. MFA significantly reduces the risk of account compromise even if your password is exposed.',
        },
        {
          subtitle: 'Be Wary of Phishing',
          text: 'Always verify the authenticity of emails and messages claiming to be from Prezso Labs. We will never ask you to provide your password or sensitive information via email.',
        },
        {
          subtitle: 'Keep Software Updated',
          text: 'Ensure your browser, operating system, and other software are up to date with the latest security patches. Outdated software can be exploited by attackers.',
        },
        {
          subtitle: 'Report Suspicious Activity',
          text: 'If you notice any suspicious activity on your account or suspect a security issue, please report it immediately to our security team at security@prezsolabs.com.',
        },
      ],
    },
    {
      title: 'Security Certifications',
      content: [
        {
          subtitle: 'Current Certifications',
          text: 'Prezso Labs maintains active certifications including SOC 2 Type II, ISO 27001, and undergoes regular audits to verify compliance with security and privacy standards.',
        },
        {
          subtitle: 'Continuous Compliance',
          text: 'Our compliance program is continuously monitored and updated to meet new regulatory requirements and industry best practices. Audit reports are available to enterprise customers upon request.',
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
              Security at Prezso Labs
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Security and privacy are fundamental to everything we build. We employ industry-leading 
              security practices to protect your data and ensure the integrity of our services. This page 
              outlines our comprehensive approach to security, from infrastructure to application security, 
              and how we continuously work to keep your information safe.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="pb-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center max-w-2xl md:mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              Core Security Features
            </h2>
            <p className="text-slate-400 text-lg">
              Multiple layers of protection to keep your data safe and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden reveal delay-${(index % 3 + 1) * 100}`}
              >
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Sections */}
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

          {/* Security Contact CTA */}
          <div className="mt-16 glass-panel rounded-2xl p-8 md:p-10 text-center reveal">
            <h3 className="text-2xl font-medium text-white mb-4">
              Security Questions or Concerns?
            </h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Our security team is here to address any questions or concerns you may have. 
              If you've discovered a potential security vulnerability, please report it to us immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:security@prezsolabs.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-full transition-all duration-300"
              >
                Contact Security Team
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="ml-2">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"></path>
                </svg>
              </a>
              <a 
                href="mailto:security@prezsolabs.com?subject=Security%20Vulnerability%20Report" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300"
              >
                Report Vulnerability
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
