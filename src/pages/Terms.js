import {
  FileText,
  UserCheck,
  ShieldAlert,
  Lock,
  Ban,
  RefreshCcw,
  Scale,
  Mail,
} from "lucide-react";

const Terms = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 py-16 sm:py-20 text-white bg-gradient-to-b from-black/30 to-black/70">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <header className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 mb-4">
            <FileText size={16} />
            <span className="text-xs tracking-wide">
              Legal Information
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Terms & Conditions
          </h1>

          <p className="text-sm sm:text-base opacity-80 max-w-xl mx-auto leading-relaxed">
            These terms govern your use of <strong>SecondDate</strong>.
            By using the app, you agree to the conditions outlined below.
          </p>
        </header>

        {/* Terms Sections */}
        <div className="space-y-5 sm:space-y-8">
          <TermCard
            icon={UserCheck}
            title="Eligibility"
            text="You must be at least 18 years old to use SecondDate. By using the app, you confirm that all information you provide is accurate."
          />

          <TermCard
            icon={ShieldAlert}
            title="User Responsibilities"
            text="Users must behave respectfully and refrain from harassment, abuse, impersonation, or sharing harmful content."
          />

          <TermCard
            icon={Lock}
            title="Account Security"
            text="You are responsible for maintaining the confidentiality of your account credentials and all activities under your account."
          />

          <TermCard
            icon={Ban}
            title="Prohibited Activities"
            text="Any misuse of the platform including spam, fraud, illegal activities, or violation of community guidelines may result in suspension."
          />

          <TermCard
            icon={RefreshCcw}
            title="Modifications"
            text="SecondDate reserves the right to update these terms at any time. Continued use of the app implies acceptance of changes."
          />

          <TermCard
            icon={Scale}
            title="Limitation of Liability"
            text="SecondDate is not responsible for user interactions or outcomes arising from connections made on the platform."
          />

          <TermCard
            icon={Mail}
            title="Contact"
            text="For questions regarding these terms, contact us at support@seconddate.app"
          />
        </div>

        {/* Footer note */}
        <div className="mt-12 sm:mt-16 text-center text-xs sm:text-sm opacity-60">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </section>
  );
};

export default Terms;

/* ---------------------------------- */
/* Card Component */
/* ---------------------------------- */

const TermCard = ({ icon: Icon, title, text }) => {
  return (
    <div className="
      flex gap-3 sm:gap-4
      p-4 sm:p-6
      rounded-xl sm:rounded-2xl
      bg-white/5 backdrop-blur
      border border-white/10
      hover:border-white/20
      transition
    ">
      <div className="
        shrink-0
        w-9 h-9 sm:w-11 sm:h-11
        rounded-lg sm:rounded-xl
        bg-gradient-to-br from-purple-500/30 to-pink-500/30
        grid place-items-center
      ">
        <Icon size={18} />
      </div>

      <div>
        <h3 className="font-semibold text-sm sm:text-base mb-0.5">
          {title}
        </h3>
        <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};
