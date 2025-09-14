import { useState } from "react";

const ZenlitLogo = ({ isFooter = false }) => (
  <svg
    className={isFooter ? "w-10 h-10" : "w-8 h-8"}
    viewBox={isFooter ? "0 0 40 40" : "0 0 32 32"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {isFooter ? (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.8476 3.56479C25.3643 5.1156 24.2403 7.81007 20.8237 8.93392C17.4071 10.0578 14.887 8.56197 14.3703 7.01116C13.8535 5.46035 14.9775 2.76587 18.3941 1.64202C21.8107 0.518176 24.3308 2.01398 24.8476 3.56479Z"
          fill="#0F0E16"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.5545 20.9566C27.2106 22.0786 26.1386 23.1561 24.1511 23.7607C22.1803 24.3603 19.5619 24.3878 16.811 23.5554C14.0601 22.723 11.9015 21.2501 10.6016 19.6609C9.29066 18.0582 9.00499 16.5699 9.34889 15.4479C9.69278 14.3259 10.7648 13.2485 12.7523 12.6438C14.7231 12.0442 17.3416 12.0167 20.0925 12.8491C22.8434 13.6815 25.0019 15.1544 26.3018 16.7437C27.6128 18.3464 27.8984 19.8346 27.5545 20.9566Z"
          fill="#0F0E16"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.32 26.5585C23.8064 26.5585 25.4989 26.2482 27.118 25.934L27.6007 25.8399C29.0971 25.5479 30.5464 25.2649 31.9003 25.1527C33.4086 25.0276 34.6208 25.1341 35.5173 25.5588C36.3387 25.948 37.0286 26.6673 37.3953 28.1247C37.8914 30.0967 36.6294 32.6879 33.5103 34.9452C30.4712 37.1445 25.9846 38.75 20.9674 38.75C15.7827 38.75 10.2787 37.9789 6.59819 36.3439C4.75152 35.5235 3.51892 34.5539 2.92645 33.5067C2.3803 32.5414 2.27943 31.3355 3.09703 29.7109C4.13408 27.6502 6.6943 26.7209 10.4757 26.4426C12.3093 26.3077 14.3056 26.3338 16.3402 26.3968C16.8906 26.4138 17.4458 26.4336 18.0007 26.4534C19.4736 26.506 20.9449 26.5585 22.32 26.5585Z"
          fill="#0F0E16"
        />
      </>
    ) : (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.878 2.85183C20.2914 4.09248 19.3923 6.24806 16.659 7.14714C13.9257 8.04621 11.9096 6.84957 11.4962 5.60892C11.0828 4.36828 11.982 2.2127 14.7153 1.31362C17.4485 0.414541 19.4647 1.61118 19.878 2.85183Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.0436 16.7653C21.7685 17.6629 20.9109 18.5248 19.3209 19.0086C17.7442 19.4882 15.6495 19.5102 13.4488 18.8443C11.248 18.1784 9.52121 17.0001 8.48127 15.7287C7.43253 14.4465 7.20399 13.2559 7.47911 12.3583C7.75423 11.4607 8.61188 10.5988 10.2019 10.1151C11.7785 9.63539 13.8733 9.61339 16.074 10.2793C18.2747 10.9452 20.0015 12.1235 21.0415 13.3949C22.0902 14.6771 22.3188 15.8677 22.0436 16.7653Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.856 21.2468C19.0451 21.2468 20.3991 20.9985 21.6944 20.7472L22.0806 20.672C23.2777 20.4383 24.4372 20.212 25.5202 20.1221C26.7269 20.0221 27.6966 20.1073 28.4138 20.4471C29.071 20.7584 29.6229 21.3338 29.9162 22.4998C30.3131 24.0773 29.3036 26.1503 26.8082 27.9562C24.377 29.7156 20.7877 31 16.7739 31C12.6262 31 8.22298 30.3831 5.27855 29.0751C3.80122 28.4188 2.81513 27.6431 2.34116 26.8054C1.90424 26.0331 1.82355 25.0684 2.47763 23.7687C3.30726 22.1202 5.35544 21.3767 8.38055 21.1541C9.84745 21.0461 11.4444 21.0671 13.0722 21.1174C13.5125 21.131 13.9566 21.1469 14.4006 21.1627C15.5789 21.2048 16.756 21.2468 17.856 21.2468Z"
          fill="white"
        />
      </>
    )}
  </svg>
);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "/#features" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "mailto:support@zenlit.co" },
  ];

  return (
    <div className="relative">
      {/* Desktop Navigation - Exact Figma Design */}
      <div className="hidden md:block">
        <div 
          className="inline-flex items-center gap-6 px-6 py-2 pr-2 rounded-full backdrop-blur-[40px] w-[447px] h-[64px] relative"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.32)',
            border: '1px solid rgba(255, 255, 255, 0.16)'
          }}
        >
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <ZenlitLogo />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 flex-1">
            <a
              href="/#features"
              className="text-white font-inter text-base font-medium hover:text-white/80 transition-colors"
            >
              Features
            </a>
            <a
              href="/#faq"
              className="text-white font-inter text-base font-medium hover:text-white/80 transition-colors"
            >
              FAQ
            </a>
            <a
              href="mailto:support@zenlit.co"
              className="text-white font-inter text-base font-medium hover:text-white/80 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Get Zenlit Button */}
          <a 
            href="/#contact"
            className="flex items-center justify-center px-6 py-3 bg-zenlit-900 text-white rounded-full font-inter text-lg font-medium hover:bg-zenlit-900/90 transition-colors"
          >
            Get Zenlit
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="block md:hidden">
        <nav className="flex items-center px-6 py-2 rounded-full border border-white/16 bg-black/32 backdrop-blur-[40px]">
          {/* Logo */}
          <div className="flex items-center gap-3 mr-6">
            <a href="/">
              <ZenlitLogo />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-auto text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-black/80 backdrop-blur-lg rounded-2xl border border-white/16">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-white font-inter text-base font-medium hover:text-white/80 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a 
                  href="/#contact"
                  className="flex items-center justify-center px-6 py-3 bg-zenlit-900 text-white rounded-full font-inter text-lg font-medium hover:bg-zenlit-900/90 transition-colors"
                >
                  Get Zenlit
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="w-full px-6 md:px-8 py-6 flex justify-center">
        <Navigation />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-purple-dark font-inter text-4xl md:text-5xl font-semibold mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-text font-inter text-lg">
              Last updated: August 2025
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <div className="space-y-4">
            <h2 className="text-purple-dark font-inter text-2xl md:text-3xl font-semibold">
              1. Information We Collect
            </h2>
            <div className="text-gray-text font-inter text-sm md:text-base leading-relaxed space-y-4">
              <p>
                At Zenlit, we are committed to protecting your privacy and mental wellness data. 
                We collect only the information necessary to provide you with personalized AI-powered 
                mental health support and wellness resources.
              </p>
              <p>
                <strong>Personal Information:</strong> We may collect your name, email address, and 
                basic profile information when you create an account. This helps us personalize 
                your experience and provide relevant mental health resources.
              </p>
              <p>
                <strong>Conversation Data:</strong> Your conversations with our AI companion are 
                processed to provide empathetic responses and emotional support. This includes 
                text messages, voice recordings, and mood tracking data you choose to share.
              </p>
              <p>
                <strong>Usage Analytics:</strong> We collect anonymous usage data to improve our 
                services, including app features used, session duration, and general interaction 
                patterns. This data is aggregated and cannot be linked to your personal identity.
              </p>
            </div>
          </div>

          {/* Section 2: How We Use Your Information */}
          <div className="space-y-4">
            <h2 className="text-purple-dark font-inter text-2xl md:text-3xl font-semibold">
              2. How We Use Your Information
            </h2>
            <div className="text-gray-text font-inter text-sm md:text-base leading-relaxed space-y-4">
              <p>
                Your information is used exclusively to enhance your mental wellness journey and 
                provide you with the best possible AI companion experience.
              </p>
              <p>
                <strong>AI Companion Services:</strong> Your conversation data is processed by our 
                AI to understand your emotional state, provide empathetic responses, and offer 
                appropriate mental health support and resources.
              </p>
              <p>
                <strong>Personalization:</strong> We use your information to customize your 
                experience, including recommending relevant meditation content, books, and 
                wellness activities based on your preferences and needs.
              </p>
              <p>
                <strong>Service Improvement:</strong> Anonymous usage data helps us improve our 
                AI algorithms, add new features, and enhance the overall quality of our mental 
                wellness platform.
              </p>
              <p>
                <strong>Safety and Support:</strong> In rare cases where we detect signs of 
                self-harm or crisis, we may use your information to provide appropriate 
                emergency resources or connect you with professional help.
              </p>
            </div>
          </div>

          {/* Section 3: Data Security and Privacy */}
          <div className="space-y-4">
            <h2 className="text-purple-dark font-inter text-2xl md:text-3xl font-semibold">
              3. Data Security and Privacy
            </h2>
            <div className="text-gray-text font-inter text-sm md:text-base leading-relaxed space-y-4">
              <p>
                Your mental health data is among the most sensitive information you can share. 
                We have implemented industry-leading security measures to protect your privacy 
                and ensure your conversations remain confidential.
              </p>
              <p>
                <strong>End-to-End Encryption:</strong> All your conversations, voice messages, 
                and personal data are encrypted using military-grade encryption both in transit 
                and at rest. Only you and our AI can access your conversation content.
              </p>
              <p>
                <strong>Minimal Data Retention:</strong> We retain your conversation data only 
                as long as necessary to provide our services. You can request deletion of your 
                data at any time, and we will permanently remove it from our systems.
              </p>
              <p>
                <strong>No Third-Party Sharing:</strong> We never sell, rent, or share your 
                personal information or conversation data with third parties for marketing or 
                commercial purposes. Your mental health journey remains private.
              </p>
              <p>
                <strong>Secure Infrastructure:</strong> Our platform is built on secure, 
                compliant infrastructure with regular security audits and monitoring to protect 
                against unauthorized access or data breaches.
              </p>
            </div>
          </div>

          {/* Section 4: Your Rights and Controls */}
          <div className="space-y-4">
            <h2 className="text-purple-dark font-inter text-2xl md:text-3xl font-semibold">
              4. Your Rights and Controls
            </h2>
            <div className="text-gray-text font-inter text-sm md:text-base leading-relaxed space-y-4">
              <p>
                You have complete control over your data and how it's used. We believe in 
                transparency and giving you the power to manage your privacy.
              </p>
              <p>
                <strong>Data Access:</strong> You can request a copy of all data we have 
                collected about you at any time. We will provide this information in a 
                readable format within 30 days of your request.
              </p>
              <p>
                <strong>Data Deletion:</strong> You can request complete deletion of your 
                account and all associated data. This includes all conversations, voice 
                recordings, and personal information. Deletion is permanent and irreversible.
              </p>
              <p>
                <strong>Data Portability:</strong> You can export your conversation history 
                and wellness data to take with you if you choose to use other services.
              </p>
              <p>
                <strong>Consent Withdrawal:</strong> You can withdraw consent for data 
                processing at any time, though this may limit some app functionality.
              </p>
              <p>
                <strong>Privacy Settings:</strong> Our app includes granular privacy controls 
                that allow you to customize what data is collected and how it's used.
              </p>
            </div>
          </div>

          {/* Section 5: Mental Health Disclaimer */}
          <div className="space-y-4">
            <h2 className="text-purple-dark font-inter text-2xl md:text-3xl font-semibold">
              5. Mental Health Disclaimer
            </h2>
            <div className="text-gray-text font-inter text-sm md:text-base leading-relaxed space-y-4">
              <p>
                <strong>Important:</strong> Zenlit is an AI-powered wellness companion designed 
                to provide emotional support and mindfulness tools. It is not a replacement for 
                professional mental health care, therapy, or medical treatment.
              </p>
              <p>
                If you are experiencing a mental health crisis or having thoughts of self-harm, 
                please contact emergency services immediately or reach out to a qualified 
                mental health professional. Zenlit is designed to complement, not replace, 
                professional mental health care.
              </p>
              <p>
                Our AI companion provides general wellness support and should not be used as 
                the sole source of mental health guidance. Always consult with healthcare 
                professionals for serious mental health concerns.
              </p>
            </div>
          </div>

          {/* Section 6: Contact Information */}
          <div className="space-y-4">
            <h2 className="text-purple-dark font-inter text-2xl md:text-3xl font-semibold">
              6. Contact Information
            </h2>
            <div className="text-gray-text font-inter text-sm md:text-base leading-relaxed space-y-4">
              <p>
                If you have any questions about this Privacy Policy, your data, or our privacy 
                practices, please don't hesitate to contact us:
              </p>
              <p>
                <strong>Email:</strong> info@zenlit.co<br />
              </p>
              <p>
                We are committed to addressing your privacy concerns promptly and transparently. 
                Your mental wellness and privacy are our top priorities.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-12 border-t border-gray-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <ZenlitLogo isFooter={true} />
                <span className="text-gray-copyright font-inter text-base font-medium">
                  © Zenlit 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
