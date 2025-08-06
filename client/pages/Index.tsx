import { useState } from "react";

const ZenlitLogo = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
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
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
    <div className="min-h-screen bg-white p-5">
      {/* Main Container */}
      <div className="relative w-full max-w-[1400px] mx-auto h-[720px] bg-purple-light rounded-[40px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/b2f6470dea3d9d1ea8d7ce36c0c897d8796d36ae?width=2824"
            alt="Peaceful person in dreamy landscape"
            className="w-full h-full object-cover object-center"
            style={{
              transform: 'scale(1.01) translateY(-12%)',
            }}
          />
        </div>

        {/* Navigation */}
        <div className="relative z-10 flex justify-center pt-6">
          <Navigation />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16 h-full pt-16 md:pt-0">
          <div className="max-w-[844px] mx-auto space-y-4">
            {/* Main Heading */}
            <h1 className="text-white font-inter text-3xl md:text-4xl lg:text-[56px] lg:leading-[76px] font-medium">
              Start your wellness journey
            </h1>

            {/* Subtitle */}
            <p className="text-white font-inter text-base md:text-lg lg:text-xl lg:leading-7 font-normal max-w-2xl mx-auto">
              Zenlit is your AI companion for calm, clarity and support through mindful conversation.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-20 py-12 md:py-16">
        <div className="flex flex-wrap justify-center gap-7">
          {/* Feature 1: Chat with empathy */}
          <div className="flex flex-col gap-6 w-[408px]">
            <div className="relative w-[408px] h-[360px] rounded-[40px] bg-purple-card overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9920dd70971bf2fe7ecc484b0aa6fb348584df66?width=816"
                alt="Chat interface showing empathetic AI conversation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-purple-dark font-inter text-2xl md:text-[28px] md:leading-9 font-medium">
                Chat with empathy
              </h3>
              <p className="text-gray-text font-inter text-base leading-6 font-normal">
                Have meaningful conversations with an AI that listens, understands and responds with care.
              </p>
            </div>
          </div>

          {/* Feature 2: Speak your mind */}
          <div className="flex flex-col gap-6 w-[408px]">
            <div className="relative w-[408px] h-[360px] rounded-[40px] bg-purple-card overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/be53db6acb631ac59464ed02a1296b5557bba851?width=816"
                alt="Voice message interface with audio controls"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-purple-dark font-inter text-2xl md:text-[28px] md:leading-9 font-medium">
                Speak your mind
              </h3>
              <p className="text-gray-text font-inter text-base leading-6 font-normal">
                Send voice messages and let your emotions flow naturally without needing to type.
              </p>
            </div>
          </div>

          {/* Feature 3: Your space is safe */}
          <div className="flex flex-col gap-6">
            <div className="relative h-[360px] rounded-[40px] bg-purple-card overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/92e90a704968e7c81621de7314f14d7d7efa4fff?width=816"
                alt="Security interface showing privacy protection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-purple-dark font-inter text-2xl md:text-[28px] md:leading-9 font-medium">
                Your space is safe
              </h3>
              <p className="text-gray-text font-inter text-base leading-6 font-normal">
                Everything you share stays private. Zenlit is built with end to end privacy in mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
