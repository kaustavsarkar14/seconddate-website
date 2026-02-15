import React from 'react';
import { ShieldCheck, AlertTriangle, Mail } from 'lucide-react';

const ChildSafety = () => {
  return (
    <section className="min-h-screen px-4 py-14 text-white bg-gradient-to-b from-black/30 to-black/70">
      <div className="max-w-md mx-auto">

        {/* Header Section */}
        <header className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 mb-3">
            <ShieldCheck size={14} />
            <span className="text-xs tracking-wide">
              Safety Standards
            </span>
          </div>

          <h1 className="text-2xl font-semibold mb-2">
            Child Safety & Zero Tolerance
          </h1>

          <p className="text-xs opacity-80 leading-relaxed">
            App Name: <span className="font-medium text-white">Second Date</span><br />
            Developer: <span className="font-medium text-white">Hrithik Adhikary</span>
          </p>
        </header>

        {/* Content Stack */}
        <div className="space-y-4">

          {/* Introduction Card */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <p className="text-sm opacity-80 leading-relaxed">
              <strong className="text-white">Second Date - Video Dating App</strong> (developed by Hrithik Adhikary) is committed to maintaining a safe, positive, and respectful platform. We have a <strong className="text-white">Zero Tolerance Policy</strong> regarding any form of Child Sexual Abuse and Exploitation (CSAE). Protecting minors is our highest priority.
            </p>
          </div>

          {/* Zero Tolerance Policy */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-medium mb-3 flex items-center gap-2">
              <ShieldCheck size={18} className="text-pink-500" />
              Zero Tolerance Policy on CSAE
            </h2>
            <p className="text-sm opacity-80 leading-relaxed mb-3">
              We strictly prohibit any content or behavior that endangers minors. This includes, but is not limited to:
            </p>
            <ul className="list-disc pl-4 space-y-2 text-sm opacity-80 mb-4">
              <li><strong className="text-white">CSAM (Child Sexual Abuse Material):</strong> The depiction of minors in sexual acts or sexually explicit poses.</li>
              <li><strong className="text-white">Grooming & Solicitation:</strong> Any attempt by an adult to build an emotional connection with a minor for sexual purposes.</li>
              <li><strong className="text-white">Sexualization of Minors:</strong> Any content that promotes, normalizes, or facilitates the sexual exploitation of children.</li>
            </ul>
            
            {/* Warning Box Themed */}
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-100 text-xs leading-relaxed flex gap-3">
              <AlertTriangle size={16} className="shrink-0 mt-0.5" />
              <div>
                <strong className="block mb-1 text-red-50">Enforcement:</strong>
                Any user found violating this policy will face immediate and permanent account termination. We reserve the right to report such users and their data to relevant law enforcement agencies.
              </div>
            </div>
          </div>

          {/* Reporting to Authorities */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-medium mb-3">Reporting to NCMEC & Authorities</h2>
            <p className="text-sm opacity-80 leading-relaxed mb-3">
              If we identify any content involving Child Sexual Abuse Material (CSAM) on <strong className="text-white">Second Date</strong>, we will strictly follow legal obligations by:
            </p>
            <ol className="list-decimal pl-4 space-y-2 text-sm opacity-80">
              <li>Removing the content immediately.</li>
              <li>Preserving the data as evidence for legal proceedings.</li>
              <li>Reporting the incident to the <strong className="text-white">National Center for Missing & Exploited Children (NCMEC)</strong> via their CyberTipline.</li>
              <li>Cooperating fully with local and international law enforcement.</li>
            </ol>
          </div>

          {/* Age Restriction */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-medium mb-3">Age Restriction & Gating</h2>
            <p className="text-sm opacity-80 leading-relaxed">
              <strong className="text-white">Second Date</strong> is strictly for users aged <strong className="text-white">18 years and older</strong>. We employ age-gating measures during registration and utilize AI-moderation alongside human review to identify and remove any profiles suspected to be minors.
            </p>
          </div>

          {/* User Reporting Mechanism */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-medium mb-3">How Users Can Report Violations</h2>
            <p className="text-sm opacity-80 leading-relaxed mb-3">
              We empower our community to help keep the platform safe. Users can report suspicious behavior or content directly within the app via:
            </p>
            <ul className="list-disc pl-4 space-y-2 text-sm opacity-80 mb-3">
              <li>The "Report User" button on every profile.</li>
              <li>The "Report Message" option in chat.</li>
              <li>Direct email reporting for safety concerns.</li>
            </ul>
            <p className="text-xs opacity-60 italic">All safety-related reports are reviewed promptly by our moderation team (24/7 priority).</p>
          </div>

          {/* Contact Info */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-white/10">
            <h2 className="text-lg font-medium mb-3 flex items-center gap-2">
               <Mail size={16} />
               Child Safety Contact Point
            </h2>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              For urgent inquiries specifically related to child safety, law enforcement requests, or policy violations:
            </p>
            
            <a 
              href="mailto:dev.seconddate@gmail.com"
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 active:bg-white/10 transition mb-4"
            >
              <div className="w-8 h-8 rounded-full bg-blue-500/20 grid place-items-center text-blue-400">
                <Mail size={14} />
              </div>
              <div className="text-sm font-medium text-blue-300">
                dev.seconddate@gmail.com
              </div>
            </a>

            <div className="text-xs opacity-60">
              <strong className="block text-white opacity-100 mb-1">Address for Legal Correspondence:</strong>
              Hrithik Adhikary<br />
              Kolkata, West Bengal, India
            </div>
          </div>

        </div>

        {/* Footer / Compliance */}
        <footer className="mt-10 text-center px-4">
          <p className="text-[11px] opacity-50 leading-relaxed">
            This policy complies with the Google Play Child Safety Standards, the Indian Information Technology Act, 2000, and applicable international child protection laws.
          </p>
        </footer>

      </div>
    </section>
  );
};

export default ChildSafety;