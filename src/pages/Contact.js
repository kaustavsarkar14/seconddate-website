import {
  Mail,
  HelpCircle,
  Bug,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen px-4 py-14 text-white bg-gradient-to-b from-black/30 to-black/70">
      <div className="max-w-md mx-auto">

        {/* Header */}
        <header className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 mb-3">
            <MessageCircle size={14} />
            <span className="text-xs tracking-wide">
              Support
            </span>
          </div>

          <h1 className="text-2xl font-semibold mb-2">
            Contact Us
          </h1>

          <p className="text-xs opacity-80 leading-relaxed">
            Questions, feedback, or issues?  
            We’re here to help you.
          </p>
        </header>

        {/* Contact Actions */}
        <div className="space-y-3">

          <ContactRow
            icon={Mail}
            title="Email Support"
            subtitle="General questions & feedback"
            action="support@seconddate.app"
            href="mailto:support@seconddate.app"
          />

          <ContactRow
            icon={HelpCircle}
            title="Help Center"
            subtitle="Learn how SecondDate works"
            action="Open"
            href="#"
          />

          <ContactRow
            icon={Bug}
            title="Report a Bug"
            subtitle="Something isn’t working right"
            action="Report"
            href="#"
          />

          <ContactRow
            icon={ShieldCheck}
            title="Safety & Privacy"
            subtitle="Report abuse or safety concerns"
            action="safety@seconddate.app"
            href="mailto:safety@seconddate.app"
          />

        </div>

        {/* Footer note */}
        <div className="mt-10 text-center text-[11px] opacity-60">
          We usually respond within 24–48 hours
        </div>
      </div>
    </section>
  );
};

export default Contact;

/* ---------------------------------- */
/* Mobile Row Component */
/* ---------------------------------- */

const ContactRow = ({ icon: Icon, title, subtitle, action, href }) => {
  return (
    <a
      href={href}
      className="
        flex items-center gap-3
        p-3
        rounded-xl
        bg-white/5
        border border-white/10
        active:bg-white/10
        transition
      "
    >
      <div className="
        w-9 h-9
        rounded-lg
        bg-gradient-to-br from-pink-500/30 to-purple-500/30
        grid place-items-center
        shrink-0
      ">
        <Icon size={16} />
      </div>

      <div className="flex-1">
        <div className="text-sm font-medium">
          {title}
        </div>
        <div className="text-[11px] opacity-70">
          {subtitle}
        </div>
      </div>

      <div className="text-[11px] opacity-60">
        {action}
      </div>
    </a>
  );
};
