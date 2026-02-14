import React from "react";
import {
  ShieldCheck,
  User,
  Lock,
  Database,
  Share2,
  Cookie,
  Mail,
  RefreshCcw,
  AlertTriangle,
} from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 py-16 sm:py-20 text-white bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 mb-4 border border-white/5">
            <ShieldCheck size={16} className="text-pink-500" />
            <span className="text-xs font-medium tracking-wide text-pink-100">
              Privacy & Security
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            At <strong>SecondDate</strong> (developed by HrithikAdhikary), your
            privacy and safety come first. This policy explains what data we
            collect, how we protect it, and our strict community standards.
          </p>
        </header>

        <div className="space-y-6">
          {/* --- CRITICAL UPDATE: Child Safety Section --- */}
          {/* This section is designed to pass Google Play Policy Review */}
          <div className="p-6 sm:p-8 rounded-2xl bg-red-500/10 border border-red-500/20 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400">
                <AlertTriangle size={20} />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-red-100">
                  Child Safety Standards & Zero Tolerance Policy
                </h3>
                <div className="space-y-3 text-sm text-red-100/80 leading-relaxed">
                  <p>
                    <strong>SecondDate</strong> is committed to maintaining a
                    safe online environment and protecting users, especially
                    minors. We strictly comply with Google Play’s Child Safety
                    Standards.
                  </p>
                  
                  <div className="bg-black/20 p-4 rounded-lg border border-red-500/10">
                    <strong className="block text-red-200 mb-1">
                      Prohibition of CSAE:
                    </strong>
                    We have a <strong>zero-tolerance policy</strong> for Child
                    Sexual Abuse and Exploitation (CSAE). Any content, behavior,
                    or communication that promotes, facilitates, solicits, or
                    depicts CSAE is strictly prohibited on our platform.
                  </div>

                  <p>
                    <strong>Reporting & Enforcement:</strong> If we identify any
                    content or behavior violating this policy:
                    <ul className="list-disc pl-5 mt-1 space-y-1 opacity-90">
                      <li>The content will be removed immediately.</li>
                      <li>The user account will be permanently banned.</li>
                      <li>
                        We will report the incident and user details to the{" "}
                        <strong>
                          National Center for Missing & Exploited Children
                          (NCMEC)
                        </strong>{" "}
                        and relevant law enforcement agencies.
                      </li>
                    </ul>
                  </p>

                  <p className="pt-2 border-t border-red-500/20 mt-3">
                    <strong>Child Safety Point of Contact:</strong> <br />
                    For inquiries or reports specifically related to child
                    safety, please contact our dedicated safety team at:{" "}
                    <a
                      href="mailto:support@seconddate.app"
                      className="text-white underline decoration-red-400 decoration-2 underline-offset-2 hover:text-red-300"
                    >
                      support@seconddate.app
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* --- End of Child Safety Section --- */}

          {/* Standard Policy Sections */}
          <div className="grid gap-4 sm:grid-cols-2">
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
              text="You can edit, download, or delete your data anytime directly from the app settings."
            />
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <div className="inline-flex items-center justify-center gap-2 text-gray-400 mb-2">
              <Mail size={16} />
              <span className="text-sm font-medium">Contact Us</span>
            </div>
            <p className="text-sm text-gray-500">
              Questions? Reach us at{" "}
              <a
                href="mailto:support@seconddate.app"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                support@seconddate.app
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

/* ---------------------------------- */
/* Card Component */
/* ---------------------------------- */

const PolicyCard = ({ icon: Icon, title, text }) => {
  return (
    <div className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors group">
      <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 grid place-items-center border border-white/5 group-hover:border-pink-500/30 transition-colors">
        <Icon size={18} className="text-gray-300 group-hover:text-pink-400" />
      </div>

      <div>
        <h3 className="font-semibold text-sm sm:text-base text-gray-200 mb-1">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};