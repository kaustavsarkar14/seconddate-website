import React from "react";
import {
  RefreshCcw,
  CreditCard,
  AlertTriangle,
  Settings,
  Mail,
} from "lucide-react";

const RefundPolicy = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 py-16 sm:py-20 text-white bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 mb-4 border border-white/5">
            <RefreshCcw size={16} className="text-pink-500" />
            <span className="text-xs font-medium tracking-wide text-pink-100">
              Billing & Refunds
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Refund Policy
          </h1>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            This policy explains how purchases, subscriptions, and refunds are
            handled for <strong>SecondDate</strong> digital services.
          </p>
        </header>

        <div className="space-y-6">
          {/* Important Notice */}
          <div className="p-6 sm:p-8 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                <AlertTriangle size={20} />
              </div>
              <div className="space-y-3 text-sm text-yellow-100/80 leading-relaxed">
                <h3 className="text-lg font-bold text-yellow-100">
                  Digital Products & No Refund Policy
                </h3>
                <p>
                  All purchases made within <strong>SecondDate</strong> are
                  considered <strong>digital consumables or services</strong>.
                  Once a purchase is completed and delivered, it is
                  <strong> non-refundable</strong> and cannot be canceled.
                </p>
                <p>
                  This includes subscriptions, premium features, boosts, or any
                  in-app purchases that provide immediate access or benefits.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <PolicyCard
              icon={CreditCard}
              title="Google Play Billing"
              text="All transactions are securely processed via Google Play. We do not store or manage your payment details directly."
            />

            <PolicyCard
              icon={RefreshCcw}
              title="Refund Requests"
              text="Refunds, if applicable, are handled solely by Google Play according to their policies. We do not process refunds directly."
            />

            <PolicyCard
              icon={Settings}
              title="Manage Subscriptions"
              text="You can cancel or manage your subscription anytime through your Google Play account settings."
            />

            <PolicyCard
              icon={AlertTriangle}
              title="No Partial Refunds"
              text="We do not provide partial refunds for unused time, features, or remaining subscription periods."
            />
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300 leading-relaxed">
            <p>
              By making a purchase on <strong>SecondDate</strong>, you agree to
              this refund policy. We recommend reviewing your purchase carefully
              before confirming payment.
            </p>
            <p className="mt-3">
              For billing-related issues, you may also contact Google Play
              support directly through your account.
            </p>
          </div>

          {/* Contact */}
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
                dev.seconddate@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;

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