import { useState } from "react";

const ZenlitLogo = ({ isFooter = false }) => (
  <svg
    className={isFooter ? "w-10 h-10" : "w-8 h-8"}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.8476 3.56479C25.3643 5.1156 24.2403 7.81007 20.8237 8.93392C17.4071 10.0578 14.887 8.56197 14.3703 7.01116C13.8535 5.46035 14.9775 2.76587 18.3941 1.64202C21.8107 0.518176 24.3308 2.01398 24.8476 3.56479Z"
      fill={isFooter ? "#0F0E16" : "white"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.5545 20.9566C27.2106 22.0786 26.1386 23.1561 24.1511 23.7607C22.1803 24.3603 19.5619 24.3878 16.811 23.5554C14.0601 22.723 11.9015 21.2501 10.6016 19.6609C9.29066 18.0582 9.00499 16.5699 9.34889 15.4479C9.69278 14.3259 10.7648 13.2485 12.7523 12.6438C14.7231 12.0442 17.3416 12.0167 20.0925 12.8491C22.8434 13.6815 25.0019 15.1544 26.3018 16.7437C27.6128 18.3464 27.8984 19.8346 27.5545 20.9566Z"
      fill={isFooter ? "#0F0E16" : "white"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.32 26.5585C23.8064 26.5585 25.4989 26.2482 27.118 25.934L27.6007 25.8399C29.0971 25.5479 30.5464 25.2649 31.9003 25.1527C33.4086 25.0276 34.6208 25.1341 35.5173 25.5588C36.3387 25.948 37.0286 26.6673 37.3953 28.1247C37.8914 30.0967 36.6294 32.6879 33.5103 34.9452C30.4712 37.1445 25.9846 38.75 20.9674 38.75C15.7827 38.75 10.2787 37.9789 6.59819 36.3439C4.75152 35.5235 3.51892 34.5539 2.92645 33.5067C2.3803 32.5414 2.27943 31.3355 3.09703 29.7109C4.13408 27.6502 6.6943 26.7209 10.4757 26.4426C12.3093 26.3077 14.3056 26.3338 16.3402 26.3968C16.8906 26.4138 17.4458 26.4336 18.0007 26.4534C19.4736 26.506 20.9449 26.5585 22.32 26.5585Z"
      fill={isFooter ? "#0F0E16" : "white"}
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
      <div className="w-full px-20 py-15">
        <div className="flex justify-center gap-7">
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
          <div className="flex flex-col gap-6 w-[408px]">
            <div className="relative w-[408px] h-[360px] rounded-[40px] bg-purple-card overflow-hidden">
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

      {/* Start the conversation Section */}
      <div className="w-full px-20 py-15">
        <div className="flex items-center gap-20 mt-[60px]">
          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-3">
            <h2 className="text-purple-dark font-inter text-[48px] leading-[64px] font-medium">
              Start the conversation
            </h2>
            <p className="text-gray-text font-inter text-xl leading-7 font-normal">
              Connect with your AI companion to share thoughts, ask questions and get gentle support whenever you need it.
            </p>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/36d0687079c20b1937dd45b1f438f68c9a5a930b?width=1252"
              alt="Zenlit app interface on mobile phone"
              className="w-[626px] h-[576px] rounded-[40px]"
            />
          </div>
        </div>
      </div>

      {/* Support your mind Section */}
      <div className="w-full px-20 py-15">
        <div className="flex items-center gap-20 mt-[60px]">
          {/* Phone Mockup */}
          <div className="flex justify-center items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/66be1563d1bfa9431c6a9bcdcc2e927683ae2cfd?width=1252"
              alt="Zenlit Discover screen showing books, meditation and mood tracking"
              className="w-[626px] h-[576px] rounded-[40px]"
            />
          </div>

          {/* Text Content */}
          <div className="w-[574px] flex flex-col gap-3">
            <h2 className="text-purple-dark font-inter text-[48px] leading-[64px] font-medium">
              Support your mind
            </h2>
            <p className="text-gray-text font-inter text-xl leading-7 font-normal">
              Discover calming resources like books, meditation and mood tracking to support your daily wellbeing.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full px-20 py-15">
        <div className="flex flex-col items-center gap-7 mt-[60px]">
          {/* FAQ Title */}
          <h2 className="text-purple-dark font-inter text-[48px] leading-[64px] font-medium text-center w-full">
            Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div className="flex flex-col w-full max-w-[1280px]">
            {/* FAQ 1 - Expanded by default */}
            <div className="flex flex-col py-6 border-b border-gray-border">
              <div className="flex justify-between items-center w-full mb-4">
                <h3 className="flex-1 text-purple-dark font-inter text-[28px] leading-9 font-medium">
                  What is Zenlit?
                </h3>
                <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 40 40" fill="none">
                  <path d="M29.9999 21.6634H9.99992C9.55789 21.6634 9.13397 21.4878 8.82141 21.1753C8.50885 20.8627 8.33325 20.4388 8.33325 19.9967C8.33325 19.5547 8.50885 19.1308 8.82141 18.8182C9.13397 18.5057 9.55789 18.3301 9.99992 18.3301H29.9999C30.4419 18.3301 30.8659 18.5057 31.1784 18.8182C31.491 19.1308 31.6666 19.5547 31.6666 19.9967C31.6666 20.4388 31.491 20.8627 31.1784 21.1753C30.8659 21.4878 30.4419 21.6634 29.9999 21.6634Z" fill="#0A051A"/>
                </svg>
              </div>
              <p className="w-[960px] text-gray-text font-inter text-xl leading-7 font-normal">
                Zenlit is an AI-powered companion designed to support your mental wellbeing through calming conversations, guided voice interactions, and self-care tools.
              </p>
            </div>

            {/* FAQ 2 - Collapsed */}
            <div className="flex justify-between items-center py-6 border-b border-gray-border">
              <h3 className="flex-1 text-purple-dark font-inter text-[28px] leading-9 font-medium">
                Is my data private?
              </h3>
              <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 40 40" fill="none">
                <path d="M29.9999 21.6634H21.6666V29.9967C21.6666 30.4388 21.491 30.8627 21.1784 31.1753C20.8659 31.4878 20.4419 31.6634 19.9999 31.6634C19.5579 31.6634 19.134 31.4878 18.8214 31.1753C18.5088 30.8627 18.3333 30.4388 18.3333 29.9967V21.6634H9.99992C9.55789 21.6634 9.13397 21.4878 8.82141 21.1753C8.50885 20.8627 8.33325 20.4388 8.33325 19.9967C8.33325 19.5547 8.50885 19.1308 8.82141 18.8182C9.13397 18.5057 9.55789 18.3301 9.99992 18.3301H18.3333V9.99674C18.3333 9.55472 18.5088 9.13079 18.8214 8.81823C19.134 8.50567 19.5579 8.33008 19.9999 8.33008C20.4419 8.33008 20.8659 8.50567 21.1784 8.81823C21.491 9.13079 21.6666 9.55472 21.6666 9.99674V18.3301H29.9999C30.4419 18.3301 30.8659 18.5057 31.1784 18.8182C31.491 19.1308 31.6666 19.5547 31.6666 19.9967C31.6666 20.4388 31.491 20.8627 31.1784 21.1753C30.8659 21.4878 30.4419 21.6634 29.9999 21.6634Z" fill="#0A051A"/>
              </svg>
            </div>

            {/* FAQ 3 - Collapsed */}
            <div className="flex justify-between items-center py-6 border-b border-gray-border">
              <h3 className="flex-1 text-purple-dark font-inter text-[28px] leading-9 font-medium">
                Can I use Zenlit without talking?
              </h3>
              <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 40 40" fill="none">
                <path d="M29.9999 21.6634H21.6666V29.9967C21.6666 30.4388 21.491 30.8627 21.1784 31.1753C20.8659 31.4878 20.4419 31.6634 19.9999 31.6634C19.5579 31.6634 19.134 31.4878 18.8214 31.1753C18.5088 30.8627 18.3333 30.4388 18.3333 29.9967V21.6634H9.99992C9.55789 21.6634 9.13397 21.4878 8.82141 21.1753C8.50885 20.8627 8.33325 20.4388 8.33325 19.9967C8.33325 19.5547 8.50885 19.1308 8.82141 18.8182C9.13397 18.5057 9.55789 18.3301 9.99992 18.3301H18.3333V9.99674C18.3333 9.55472 18.5088 9.13079 18.8214 8.81823C19.134 8.50567 19.5579 8.33008 19.9999 8.33008C20.4419 8.33008 20.8659 8.50567 21.1784 8.81823C21.491 9.13079 21.6666 9.55472 21.6666 9.99674V18.3301H29.9999C30.4419 18.3301 30.8659 18.5057 31.1784 18.8182C31.491 19.1308 31.6666 19.5547 31.6666 19.9967C31.6666 20.4388 31.491 20.8627 31.1784 21.1753C30.8659 21.4878 30.4419 21.6634 29.9999 21.6634Z" fill="#0A051A"/>
              </svg>
            </div>

            {/* FAQ 4 - Collapsed */}
            <div className="flex justify-between items-center py-6 border-b border-gray-border">
              <h3 className="flex-1 text-purple-dark font-inter text-[28px] leading-9 font-medium">
                Is Zenlit a replacement for therapy?
              </h3>
              <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 40 40" fill="none">
                <path d="M29.9999 21.6634H21.6666V29.9967C21.6666 30.4388 21.491 30.8627 21.1784 31.1753C20.8659 31.4878 20.4419 31.6634 19.9999 31.6634C19.5579 31.6634 19.134 31.4878 18.8214 31.1753C18.5088 30.8627 18.3333 30.4388 18.3333 29.9967V21.6634H9.99992C9.55789 21.6634 9.13397 21.4878 8.82141 21.1753C8.50885 20.8627 8.33325 20.4388 8.33325 19.9967C8.33325 19.5547 8.50885 19.1308 8.82141 18.8182C9.13397 18.5057 9.55789 18.3301 9.99992 18.3301H18.3333V9.99674C18.3333 9.55472 18.5088 9.13079 18.8214 8.81823C19.134 8.50567 19.5579 8.33008 19.9999 8.33008C20.4419 8.33008 20.8659 8.50567 21.1784 8.81823C21.491 9.13079 21.6666 9.55472 21.6666 9.99674V18.3301H29.9999C30.4419 18.3301 30.8659 18.5057 31.1784 18.8182C31.491 19.1308 31.6666 19.5547 31.6666 19.9967C31.6666 20.4388 31.491 20.8627 31.1784 21.1753C30.8659 21.4878 30.4419 21.6634 29.9999 21.6634Z" fill="#0A051A"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Get the Zenlit App Section */}
      <div className="w-full px-20 py-10">
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
                Scan the code to start your journey toward calm, clarity and everyday support for your mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full px-20 pt-20 pb-10">
        <div className="flex flex-col">
          {/* Main Footer Content */}
          <div className="flex justify-between items-center mb-15">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center gap-14">
              <ZenlitLogo isFooter={true} />
              <nav className="flex items-center gap-14">
                <a href="#features" className="text-gray-footer font-inter text-base font-medium hover:opacity-80 transition-opacity">
                  Features
                </a>
                <a href="#faq" className="text-gray-footer font-inter text-base font-medium hover:opacity-80 transition-opacity">
                  FAQ
                </a>
                <a href="#contact" className="text-gray-footer font-inter text-base font-medium hover:opacity-80 transition-opacity">
                  Contact
                </a>
                <a href="#privacy" className="text-gray-footer font-inter text-base font-medium hover:opacity-80 transition-opacity">
                  Privacy Policy
                </a>
              </nav>
            </div>

            {/* Right side - Social Media Icons */}
            <div className="flex items-center gap-5">
              {/* LinkedIn */}
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#252131"/>
                </svg>
              </a>

              {/* Twitter/X */}
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M13.0809 10.712L8.29489 4.002C8.23939 3.92404 8.16604 3.86049 8.08098 3.81666C7.99591 3.77282 7.90159 3.74996 7.8059 3.75H5.2799C5.1698 3.75014 5.06186 3.78057 4.9679 3.83797C4.87394 3.89536 4.79759 3.9775 4.7472 4.07539C4.69681 4.17328 4.67432 4.28315 4.6822 4.39296C4.69009 4.50278 4.72804 4.60831 4.79189 4.698L10.9189 13.288M13.0809 10.712L19.2079 19.302C19.2718 19.3917 19.3097 19.4972 19.3176 19.607C19.3255 19.7169 19.303 19.8267 19.2526 19.9246C19.2022 20.0225 19.1258 20.1046 19.0319 20.162C18.9379 20.2194 18.83 20.2499 18.7199 20.25H16.1939C16.0982 20.25 16.0039 20.2272 15.9188 20.1833C15.8337 20.1395 15.7604 20.076 15.7049 19.998L10.9189 13.288M13.0809 10.712L18.9229 3.75M10.9189 13.288L5.0769 20.25" stroke="#252131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9204 7.05032 21.765 6.22945 21.48 5.45C21.2269 4.78255 20.831 4.17846 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78198 2.77725 4.17736 3.17008 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17736 20.8299 4.78198 21.2227 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.765 17.7705 21.9204 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1329 16.6348 20.0179 17.2638 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7254 19.3403 18.3331 19.5961 17.9 19.76C17.3038 19.9779 16.6748 20.0929 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38085 20.1129 6.72445 20.0114 6.1 19.8C5.68619 19.6273 5.3119 19.3721 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01505 17.2954 3.8796 16.652 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86365 7.35098 3.98214 6.70772 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30292 4.65519 5.67863 4.38195 6.1 4.2C6.7094 3.97948 7.35194 3.8645 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86709 17.2638 3.98206 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3767 5.30802 19.6326 5.68334 19.8 6.1C20.0224 6.70888 20.1375 7.35176 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z" fill="#252131"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Section - Divider and Copyright */}
          <div className="flex flex-col gap-6">
            <div className="h-px w-full bg-gray-border"></div>
            <p className="text-gray-copyright font-inter text-base font-medium">
              © Zenlit 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
