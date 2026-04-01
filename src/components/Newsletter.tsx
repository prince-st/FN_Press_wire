import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      className="py-16"
      style={{ background: "#f8f9ff" }}
    >
      <div className="fn-container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-blue-600 font-semibold uppercase text-xs tracking-widest mb-2">Newsletter</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Stay Updated with PR Insights
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Get the latest PR tips, industry news, and platform updates delivered straight to your inbox.
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-green-700 font-medium">
              Thank you for subscribing! You'll receive our next newsletter soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-blue-400 transition-colors"
              />
              <button type="submit" className="fn-btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
