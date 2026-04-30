import React from 'react';

const steps = [
  {
    id: "01",
    title: "Invoice Creation in UBL 2.1",
    desc: "Our system automatically converts your invoice data into the ZATKA-approved XML (UBL 2.1) format, ensuring all mandatory fields are included."
  },
  {
    id: "02",
    title: "Digital Signing & Encryption",
    desc: "Invoices are digitally signed using ZATKA-certified CSID certificates and encrypted according to PKI standards."
  },
  {
    id: "03",
    title: "Submission to Fatoora Portal",
    desc: "Invoices are automatically sent to the ZATKA platform via Reporting API (for simplified invoices) or Clearance API (for standard tax invoices)."
  },
  {
    id: "04",
    title: "Real-time Validation",
    desc: "Receive instant validation from ZATKA. Your invoice status is automatically updated in your system with the official timestamp."
  },
  {
    id: "05",
    title: "Delivery & Archiving",
    desc: "The final PDF invoice (including the certified QR code) is delivered to the customer, and an XML copy is securely archived for legal compliance."
  }
];

const WorkflowSection = () => {
  return (
    <section className="bg-slate-900 py-24 relative font-sans overflow-hidden" dir="ltr">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-brand-green text-sm font-bold tracking-[0.3em] uppercase">
            Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            How Our System Works?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The journey of an invoice from issuance to validation in simple, automated steps.
          </p>
        </div>

        {/* Steps List */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-slate-700 to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start gap-8 group">
                
                {/* Step Number Circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-slate-900 font-black text-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform duration-300">
                  {step.id}
                </div>

                {/* Content Card */}
                <div className="flex-1 pb-8 border-b border-slate-800 group-last:border-0">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-3 group-hover:text-brand-green transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
      
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 -right-64 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default WorkflowSection;