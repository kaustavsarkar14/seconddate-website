import {
  ShieldCheck,
  User,
  Lock,
  Database,
  Share2,
  Cookie,
  Mail,
  RefreshCcw,
} from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 py-16 sm:py-20 text-white bg-gradient-to-b from-black/30 to-black/70">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 mb-4">
            <ShieldCheck size={16} />
            <span className="text-xs tracking-wide">Privacy & Security</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base opacity-80 max-w-xl mx-auto leading-relaxed">
            At <strong>SecondDate</strong>, your privacy comes first. This
            policy explains what data we collect and how we protect it.
          </p>
        </header>

        {/* Policy Sections */}
        <div className="space-y-5 sm:space-y-8">
          <PolicyCard
            icon={User}
            title="Information We Collect"
            text="Profile details like name, age, photos, interests, and preferences you choose to share, along with basic usage data."
          />

          <PolicyCard
            icon={Database}
            title="How We Use Your Data"
            text="To personalize matches, improve recommendations, ensure safety, and enhance overall experience."
          />

          <PolicyCard
            icon={Lock}
            title="Data Protection"
            text="We use secure servers, encryption, and strict access controls to protect your information."
          />

          <PolicyCard
            icon={Share2}
            title="Data Sharing"
            text="We never sell your data. Information is shared only when required for functionality or legal reasons."
          />

          <PolicyCard
            icon={Cookie}
            title="Cookies & Analytics"
            text="Used to understand usage patterns and improve app performance."
          />

          <PolicyCard
            icon={RefreshCcw}
            title="Your Rights"
            text="You can edit, download, or delete your data anytime from the app."
          />

          <PolicyCard
            icon={Mail}
            title="Contact Us"
            text="Questions? Reach us at our support email"
          />
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;

/* ---------------------------------- */
/* Card Component (Mobile First) */
/* ---------------------------------- */

const PolicyCard = ({ icon: Icon, title, text }) => {
  return (
    <div
      className="
      flex gap-3 sm:gap-4
      p-4 sm:p-6
      rounded-xl sm:rounded-2xl
      bg-white/5 backdrop-blur
      border border-white/10
      hover:border-white/20
      transition
    "
    >
      <div
        className="
        shrink-0
        w-9 h-9 sm:w-11 sm:h-11
        rounded-lg sm:rounded-xl
        bg-gradient-to-br from-pink-500/30 to-purple-500/30
        grid place-items-center
      "
      >
        <Icon size={18} />
      </div>

      <div>
        <h3 className="font-semibold text-sm sm:text-base mb-0.5">{title}</h3>
        <p className="text-xs sm:text-sm opacity-80 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};
