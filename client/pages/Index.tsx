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
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex items-center px-6 md:px-8 py-2 rounded-full border border-white/16 bg-black/32 backdrop-blur-[40px]">
      {/* Logo */}
      <div className="flex items-center gap-3 mr-6">
        <ZenlitLogo />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 mr-6">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-white font-inter text-base font-medium hover:text-white/80 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Get Zenlit Button */}
      <button className="hidden md:flex items-center justify-center px-6 py-3 bg-zenlit-900 text-white rounded-full font-inter text-lg font-medium hover:bg-zenlit-900/90 transition-colors">
        Get Zenlit
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden ml-auto text-white"
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
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-black/80 backdrop-blur-lg rounded-2xl border border-white/16 md:hidden">
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
            <button className="flex items-center justify-center px-6 py-3 bg-zenlit-900 text-white rounded-full font-inter text-lg font-medium hover:bg-zenlit-900/90 transition-colors">
              Get Zenlit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Responsive */}
      <div className="w-full">
        {/* Desktop Hero */}
        <div className="hidden lg:block">
          <div className="w-full max-w-[1440px] h-[760px] p-5 mx-auto flex justify-center items-center">
            <div className="relative w-[1400px] h-[720px] bg-purple-light rounded-[40px] overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b2f6470dea3d9d1ea8d7ce36c0c897d8796d36ae?width=2824"
                  alt="Peaceful person in dreamy landscape"
                  className="absolute w-[1412px] h-[981px] object-cover"
                  style={{
                    left: "-6px",
                    top: "-180px",
                  }}
                />
              </div>

              {/* Navigation - Positioned exactly as in Figma */}
              <div className="absolute z-10" style={{ left: "477px", top: "24px" }}>
                <div className="inline-flex items-center gap-6 px-6 py-2 pr-2 rounded-full border border-white/16 bg-black/32 backdrop-blur-[40px] w-[447px] h-[64px]">
                  {/* Logo */}
                  <div className="flex items-center">
                    <ZenlitLogo />
                  </div>

                  {/* Navigation Links */}
                  <div className="flex items-center gap-6 flex-1">
                    <a
                      href="#features"
                      className="text-white font-inter text-base font-medium hover:text-white/80 transition-colors"
                    >
                      Features
                    </a>
                    <a
                      href="#faq"
                      className="text-white font-inter text-base font-medium hover:text-white/80 transition-colors"
                    >
                      FAQ
                    </a>
                    <a
                      href="#contact"
                      className="text-white font-inter text-base font-medium hover:text-white/80 transition-colors"
                    >
                      Contact
                    </a>
                  </div>

                  {/* Get Zenlit Button */}
                  <button className="flex items-center justify-center px-6 py-3 bg-zenlit-900 text-white rounded-full font-inter text-lg font-medium hover:bg-zenlit-900/90 transition-colors">
                    Get Zenlit
                  </button>
                </div>
              </div>

              {/* Main Content - Positioned exactly as in Figma */}
              <div
                className="absolute z-10 flex flex-col items-center gap-4 w-[844px]"
                style={{ left: "278px", top: "136px" }}
              >
                {/* Main Heading */}
                <h1 className="text-white font-inter text-[56px] leading-[76px] font-medium text-center w-full">
                  Start your wellness journey
                </h1>

                {/* Subtitle */}
                <p className="text-white font-inter text-xl leading-7 font-normal text-center w-full">
                  Zenlit is your AI companion for calm, clarity and support through
                  mindful conversation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hero */}
        <div className="block lg:hidden relative min-h-screen bg-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4b029af8101609844d7c60a2f74ab6425d5a28d4?width=2300"
              alt="Peaceful person in dreamy landscape"
              className="w-full h-auto object-cover min-h-[799px]"
            />
          </div>

          {/* Mobile Navigation */}
          <div className="absolute top-4 left-4 right-4 z-10">
            <nav className="flex items-center justify-between px-6 py-2 rounded-[32px] border border-white/16 bg-black/32 backdrop-blur-[40px] h-16">
              {/* Logo */}
              <div className="flex items-center">
                <ZenlitLogo />
              </div>

              {/* Get Zenlit Button */}
              <div className="flex items-center gap-2">
                <button className="flex items-center justify-center px-6 py-3 bg-zenlit-900 text-white rounded-full font-inter text-lg font-medium hover:bg-zenlit-900/90 transition-colors">
                  Get Zenlit
                </button>
                {/* Menu Button */}
                <button className="flex items-center justify-center p-3 bg-zenlit-900 rounded-full">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M19.75 14.5C20.4404 14.5 21 15.0596 21 15.75C21 16.4404 20.4404 17 19.75 17H11.25C10.5596 17 10 16.4404 10 15.75C10 15.0596 10.5596 14.5 11.25 14.5H19.75ZM19.75 7C20.4404 7 21 7.55964 21 8.25C21 8.94036 20.4404 9.5 19.75 9.5H4.25C3.55964 9.5 3 8.94036 3 8.25C3 7.55964 3.55964 7 4.25 7H19.75Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </nav>
          </div>

          {/* Mobile Hero Content */}
          <div className="absolute top-[136px] left-5 right-5 z-10 flex flex-col items-center gap-4">
            <h1 className="text-white text-center font-inter text-[32px] leading-[40px] font-medium">
              Start your wellness journey
            </h1>
            <p className="text-white text-center font-inter text-base leading-6 font-normal">
              Zenlit is your AI companion for calm, clarity and support through mindful conversation.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full px-4 lg:px-20 py-8 lg:py-15">
        <div className="flex flex-col lg:flex-row lg:justify-center gap-5 lg:gap-7 mt-8 lg:mt-15 max-w-none lg:max-w-[1280px] mx-auto">
          {/* Feature 1: Chat with empathy */}
          <div className="flex flex-col gap-5 lg:gap-6 lg:w-[408px]">
            <div className="relative w-full h-[261px] lg:w-[408px] lg:h-[360px] rounded-[28px] lg:rounded-[40px] bg-purple-card overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/853a2556ddb87cbb589737adb159ce4a7878a0c1?width=592"
                alt="Chat interface showing empathetic AI conversation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1.5 lg:space-y-2">
              <h3 className="text-purple-dark font-inter text-xl lg:text-2xl lg:md:text-[28px] lg:md:leading-9 font-medium">
                Chat with empathy
              </h3>
              <p className="text-gray-text font-inter text-sm lg:text-base leading-5 lg:leading-6 font-normal">
                Have meaningful conversations with an AI that listens,
                understands and responds with care.
              </p>
            </div>
          </div>

          {/* Feature 2: Speak your mind */}
          <div className="flex flex-col gap-5 lg:gap-6 lg:w-[408px]">
            <div className="relative w-full h-[261px] lg:w-[408px] lg:h-[360px] rounded-[28px] lg:rounded-[40px] bg-purple-card overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/93f2788985a60af8877b250d34a26222f3c53ade?width=592"
                alt="Voice message interface with audio controls"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1.5 lg:space-y-2">
              <h3 className="text-purple-dark font-inter text-xl lg:text-2xl lg:md:text-[28px] lg:md:leading-9 font-medium">
                Speak your mind
              </h3>
              <p className="text-gray-text font-inter text-sm lg:text-base leading-5 lg:leading-6 font-normal">
                Send voice messages and let your emotions flow naturally without
                needing to type.
              </p>
            </div>
          </div>

          {/* Feature 3: Your space is safe */}
          <div className="flex flex-col gap-5 lg:gap-6 lg:w-[408px]">
            <div className="relative w-full h-[261px] lg:w-[408px] lg:h-[360px] rounded-[28px] lg:rounded-[40px] bg-purple-card overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/947ba0b5de967e66f67deee46ec7a5fe4de49942?width=592"
                alt="Security interface showing privacy protection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1.5 lg:space-y-2">
              <h3 className="text-purple-dark font-inter text-xl lg:text-2xl lg:md:text-[28px] lg:md:leading-9 font-medium">
                Your space is safe
              </h3>
              <p className="text-gray-text font-inter text-sm lg:text-base leading-5 lg:leading-6 font-normal">
                Everything you share stays private. Zenlit is built with end to
                end privacy in mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Start the conversation Section */}
      <div className="w-full px-4 lg:px-20 py-8 lg:py-15">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-20 mt-8 lg:mt-[60px] max-w-none lg:max-w-[1280px] mx-auto">
          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-3">
            <h2 className="text-purple-dark font-inter text-[28px] lg:text-[48px] leading-[36px] lg:leading-[64px] font-medium">
              Start the conversation
            </h2>
            <p className="text-gray-text font-inter text-base lg:text-xl leading-6 lg:leading-7 font-normal">
              Connect with your AI companion to share thoughts, ask questions
              and get gentle support whenever you need it.
            </p>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5f5c9cce3143b4dbec01ef457fe96f91b1263ea9?width=686"
              alt="Zenlit app interface on mobile phone"
              className="w-full max-w-[343px] lg:w-[626px] h-auto lg:h-[576px] rounded-[28px] lg:rounded-[40px]"
            />
          </div>
        </div>
      </div>

      {/* Support your mind Section */}
      <div className="w-full px-4 lg:px-20 py-8 lg:py-15">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-20 mt-8 lg:mt-[60px] max-w-none lg:max-w-[1280px] mx-auto">
          {/* Phone Mockup */}
          <div className="flex justify-center items-center lg:order-first">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e779252e92a90bcdc4514cc1b17675b5a8f3bd05?width=686"
              alt="Zenlit Discover screen showing books, meditation and mood tracking"
              className="w-full max-w-[343px] lg:w-[626px] h-auto lg:h-[576px] rounded-[28px] lg:rounded-[40px]"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-[574px] flex flex-col gap-3">
            <h2 className="text-purple-dark font-inter text-[28px] lg:text-[48px] leading-[36px] lg:leading-[64px] font-medium">
              Support your mind
            </h2>
            <p className="text-gray-text font-inter text-base lg:text-xl leading-6 lg:leading-7 font-normal">
              Discover calming resources like books, meditation and mood
              tracking to support your daily wellbeing.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full px-4 lg:px-20 py-8 lg:py-15">
        <div className="flex flex-col items-center gap-5 lg:gap-7 mt-8 lg:mt-[60px] max-w-none lg:max-w-[1280px] mx-auto">
          {/* FAQ Title */}
          <h2 className="text-purple-dark font-inter text-[28px] lg:text-[48px] leading-[36px] lg:leading-[64px] font-medium text-center w-full">
            Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div className="flex flex-col w-full">
            {/* FAQ 1 - Expanded by default */}
            <div className="flex flex-col py-5 lg:py-6 border-b border-gray-border">
              <div className="flex justify-between items-center w-full mb-4">
                <h3 className="flex-1 text-purple-dark font-inter text-xl lg:text-[28px] leading-7 lg:leading-9 font-medium pr-4">
                  What is Zenlit?
                </h3>
                <svg
                  className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M24.0001 17.3307H8.00008C7.64646 17.3307 7.30732 17.1903 7.05727 16.9402C6.80722 16.6902 6.66675 16.351 6.66675 15.9974C6.66675 15.6438 6.80722 15.3046 7.05727 15.0546C7.30732 14.8045 7.64646 14.6641 8.00008 14.6641H24.0001C24.3537 14.6641 24.6928 14.8045 24.9429 15.0546C25.1929 15.3046 25.3334 15.6438 25.3334 15.9974C25.3334 16.351 25.1929 16.6902 24.9429 16.9402C24.6928 17.1903 24.3537 17.3307 24.0001 17.3307Z"
                    fill="#0A051A"
                  />
                </svg>
              </div>
              <p className="text-gray-text font-inter text-base lg:text-xl leading-6 lg:leading-7 font-normal">
                Zenlit is an AI-powered companion designed to support your
                mental wellbeing through calming conversations, guided voice
                interactions, and self-care tools.
              </p>
            </div>

            {/* FAQ 2 - Collapsed */}
            <div className="flex justify-between items-center py-5 lg:py-6 border-b border-gray-border">
              <h3 className="flex-1 text-purple-dark font-inter text-xl lg:text-[28px] leading-7 lg:leading-9 font-medium pr-4">
                Is my data private?
              </h3>
              <svg
                className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M24.0001 17.3307H17.3334V23.9974C17.3334 24.351 17.1929 24.6902 16.9429 24.9402C16.6928 25.1903 16.3537 25.3307 16.0001 25.3307C15.6465 25.3307 15.3073 25.1903 15.0573 24.9402C14.8072 24.6902 14.6667 24.351 14.6667 23.9974V17.3307H8.00008C7.64646 17.3307 7.30732 17.1903 7.05727 16.9402C6.80722 16.6902 6.66675 16.351 6.66675 15.9974C6.66675 15.6438 6.80722 15.3046 7.05727 15.0546C7.30732 14.8045 7.64646 14.6641 8.00008 14.6641H14.6667V7.9974C14.6667 7.64377 14.8072 7.30463 15.0573 7.05459C15.3073 6.80454 15.6465 6.66406 16.0001 6.66406C16.3537 6.66406 16.6928 6.80454 16.9429 7.05459C17.1929 7.30463 17.3334 7.64377 17.3334 7.9974V14.6641H24.0001C24.3537 14.6641 24.6928 14.8045 24.9429 15.0546C25.1929 15.3046 25.3334 15.6438 25.3334 15.9974C25.3334 16.351 25.1929 16.6902 24.9429 16.9402C24.6928 17.1903 24.3537 17.3307 24.0001 17.3307Z"
                  fill="#0A051A"
                />
              </svg>
            </div>

            {/* FAQ 3 - Collapsed */}
            <div className="flex justify-between items-center py-5 lg:py-6 border-b border-gray-border">
              <h3 className="flex-1 text-purple-dark font-inter text-xl lg:text-[28px] leading-7 lg:leading-9 font-medium pr-4">
                Can I use Zenlit without talking?
              </h3>
              <svg
                className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M24.0001 17.3307H17.3334V23.9974C17.3334 24.351 17.1929 24.6902 16.9429 24.9402C16.6928 25.1903 16.3537 25.3307 16.0001 25.3307C15.6465 25.3307 15.3073 25.1903 15.0573 24.9402C14.8072 24.6902 14.6667 24.351 14.6667 23.9974V17.3307H8.00008C7.64646 17.3307 7.30732 17.1903 7.05727 16.9402C6.80722 16.6902 6.66675 16.351 6.66675 15.9974C6.66675 15.6438 6.80722 15.3046 7.05727 15.0546C7.30732 14.8045 7.64646 14.6641 8.00008 14.6641H14.6667V7.9974C14.6667 7.64377 14.8072 7.30463 15.0573 7.05459C15.3073 6.80454 15.6465 6.66406 16.0001 6.66406C16.3537 6.66406 16.6928 6.80454 16.9429 7.05459C17.1929 7.30463 17.3334 7.64377 17.3334 7.9974V14.6641H24.0001C24.3537 14.6641 24.6928 14.8045 24.9429 15.0546C25.1929 15.3046 25.3334 15.6438 25.3334 15.9974C25.3334 16.351 25.1929 16.6902 24.9429 16.9402C24.6928 17.1903 24.3537 17.3307 24.0001 17.3307Z"
                  fill="#0A051A"
                />
              </svg>
            </div>

            {/* FAQ 4 - Collapsed */}
            <div className="flex justify-between items-center py-5 lg:py-6 border-b border-gray-border">
              <h3 className="flex-1 text-purple-dark font-inter text-xl lg:text-[28px] leading-7 lg:leading-9 font-medium pr-4">
                Is Zenlit a replacement for therapy?
              </h3>
              <svg
                className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M24.0001 17.3307H17.3334V23.9974C17.3334 24.351 17.1929 24.6902 16.9429 24.9402C16.6928 25.1903 16.3537 25.3307 16.0001 25.3307C15.6465 25.3307 15.3073 25.1903 15.0573 24.9402C14.8072 24.6902 14.6667 24.351 14.6667 23.9974V17.3307H8.00008C7.64646 17.3307 7.30732 17.1903 7.05727 16.9402C6.80722 16.6902 6.66675 16.351 6.66675 15.9974C6.66675 15.6438 6.80722 15.3046 7.05727 15.0546C7.30732 14.8045 7.64646 14.6641 8.00008 14.6641H14.6667V7.9974C14.6667 7.64377 14.8072 7.30463 15.0573 7.05459C15.3073 6.80454 15.6465 6.66406 16.0001 6.66406C16.3537 6.66406 16.6928 6.80454 16.9429 7.05459C17.1929 7.30463 17.3334 7.64377 17.3334 7.9974V14.6641H24.0001C24.3537 14.6641 24.6928 14.8045 24.9429 15.0546C25.1929 15.3046 25.3334 15.6438 25.3334 15.9974C25.3334 16.351 25.1929 16.6902 24.9429 16.9402C24.6928 17.1903 24.3537 17.3307 24.0001 17.3307Z"
                  fill="#0A051A"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Get the Zenlit App Section - Hidden on mobile */}
      <div className="hidden lg:block w-full px-20 py-10">
        <div className="mt-[60px]">
          <div className="flex items-center gap-10 p-6 bg-gray-dark rounded-[40px]">
            {/* QR Code */}
            <div className="relative w-[292px] h-[292px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/25805b85ee9b7ab1a9bb9121e0ef8891b372b99b?width=584"
                alt="QR code to download Zenlit app"
                className="w-[292px] h-[292px] object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="w-[800px] flex flex-col gap-3">
              <h2 className="text-white font-inter text-[48px] leading-[64px] font-medium">
                Get the Zenlit App
              </h2>
              <p className="text-white font-inter text-2xl leading-8 font-normal opacity-80">
                Scan the code to start your journey toward calm, clarity and
                everyday support for your mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full px-4 lg:px-20 pt-8 lg:pt-20 pb-10">
        <div className="flex flex-col max-w-none lg:max-w-[1280px] mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 lg:mb-15">
            {/* Logo and Social Icons - Mobile Layout */}
            <div className="flex justify-between items-center mb-8 lg:hidden">
              <ZenlitLogo isFooter={true} />
              <div className="flex items-center gap-5">
                {/* LinkedIn */}
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                      fill="#252131"
                    />
                  </svg>
                </a>

                {/* Twitter/X */}
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M13.0809 10.712L8.29489 4.002C8.23939 3.92404 8.16604 3.86049 8.08098 3.81666C7.99591 3.77282 7.90159 3.74996 7.8059 3.75H5.2799C5.1698 3.75014 5.06186 3.78057 4.9679 3.83797C4.87394 3.89536 4.79759 3.9775 4.7472 4.07539C4.69681 4.17328 4.67432 4.28315 4.6822 4.39296C4.69009 4.50278 4.72804 4.60831 4.79189 4.698L10.9189 13.288M13.0809 10.712L19.2079 19.302C19.2718 19.3917 19.3097 19.4972 19.3176 19.607C19.3255 19.7169 19.303 19.8267 19.2526 19.9246C19.2022 20.0225 19.1258 20.1046 19.0319 20.162C18.9379 20.2194 18.83 20.2499 18.7199 20.25H16.1939C16.0982 20.25 16.0039 20.2272 15.9188 20.1833C15.8337 20.1395 15.7604 20.076 15.7049 19.998L10.9189 13.288M13.0809 10.712L18.9229 3.75M10.9189 13.288L5.0769 20.25"
                      stroke="#252131"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9204 7.05032 21.765 6.22945 21.48 5.45C21.2269 4.78255 20.831 4.17846 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78198 2.77725 4.17736 3.17008 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17736 20.8299 4.78198 21.2227 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.765 17.7705 21.9204 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1329 16.6348 20.0179 17.2638 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7254 19.3403 18.3331 19.5961 17.9 19.76C17.3038 19.9779 16.6748 20.0929 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38085 20.1129 6.72445 20.0114 6.1 19.8C5.68619 19.6273 5.3119 19.3721 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01505 17.2954 3.8796 16.652 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86365 7.35098 3.98214 6.70772 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30292 4.65519 5.67863 4.38195 6.1 4.2C6.7094 3.97948 7.35194 3.8645 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86709 17.2638 3.98206 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3767 5.30802 19.6326 5.68334 19.8 6.1C20.0224 6.70888 20.1375 7.35176 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z"
                      fill="#252131"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex lg:items-center lg:gap-14">
              <ZenlitLogo isFooter={true} />
              <div className="flex items-center gap-5">
                {/* LinkedIn */}
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                      fill="#252131"
                    />
                  </svg>
                </a>

                {/* Twitter/X */}
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M13.0809 10.712L8.29489 4.002C8.23939 3.92404 8.16604 3.86049 8.08098 3.81666C7.99591 3.77282 7.90159 3.74996 7.8059 3.75H5.2799C5.1698 3.75014 5.06186 3.78057 4.9679 3.83797C4.87394 3.89536 4.79759 3.9775 4.7472 4.07539C4.69681 4.17328 4.67432 4.28315 4.6822 4.39296C4.69009 4.50278 4.72804 4.60831 4.79189 4.698L10.9189 13.288M13.0809 10.712L19.2079 19.302C19.2718 19.3917 19.3097 19.4972 19.3176 19.607C19.3255 19.7169 19.303 19.8267 19.2526 19.9246C19.2022 20.0225 19.1258 20.1046 19.0319 20.162C18.9379 20.2194 18.83 20.2499 18.7199 20.25H16.1939C16.0982 20.25 16.0039 20.2272 15.9188 20.1833C15.8337 20.1395 15.7604 20.076 15.7049 19.998L10.9189 13.288M13.0809 10.712L18.9229 3.75M10.9189 13.288L5.0769 20.25"
                      stroke="#252131"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9204 7.05032 21.765 6.22945 21.48 5.45C21.2269 4.78255 20.831 4.17846 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78198 2.77725 4.17736 3.17008 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17736 20.8299 4.78198 21.2227 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.765 17.7705 21.9204 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1329 16.6348 20.0179 17.2638 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7254 19.3403 18.3331 19.5961 17.9 19.76C17.3038 19.9779 16.6748 20.0929 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38085 20.1129 6.72445 20.0114 6.1 19.8C5.68619 19.6273 5.3119 19.3721 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01505 17.2954 3.8796 16.652 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86365 7.35098 3.98214 6.70772 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30292 4.65519 5.67863 4.38195 6.1 4.2C6.7094 3.97948 7.35194 3.8645 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86709 17.2638 3.98206 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3767 5.30802 19.6326 5.68334 19.8 6.1C20.0224 6.70888 20.1375 7.35176 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z"
                      fill="#252131"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-8 lg:hidden">
              <div className="flex justify-between items-center">
                <a
                  href="#features"
                  className="text-gray-footer font-inter text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  Features
                </a>
                <a
                  href="#faq"
                  className="text-gray-footer font-inter text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  FAQ
                </a>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#contact"
                  className="text-gray-footer font-inter text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  Contact
                </a>
                <a
                  href="#privacy"
                  className="text-gray-footer font-inter text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex lg:items-center lg:gap-14">
              <a
                href="#features"
                className="text-gray-footer font-inter text-base font-medium hover:opacity-80 transition-opacity"
              >
                Features
              </a>
              <a
                href="#faq"
                className="text-gray-footer font-inter text-base font-medium hover:opacity-80 transition-opacity"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-gray-footer font-inter text-base font-medium hover:opacity-80 transition-opacity"
              >
                Contact
              </a>
              <a
                href="#privacy"
                className="text-gray-footer font-inter text-base font-medium hover:opacity-80 transition-opacity"
              >
                Privacy Policy
              </a>
            </nav>
          </div>

          {/* Bottom Section - Divider and Copyright */}
          <div className="flex flex-col gap-6 lg:gap-0">
            <div className="h-px w-full bg-gray-border"></div>
            <p className="text-gray-copyright font-inter text-base font-medium mt-6">
              © Zenlit 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
