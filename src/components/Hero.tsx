import heroImage from "@/assets/hero-image.png";
import shape1 from "@/assets/shape1.png";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #e8eeff 40%, #d6e0ff 100%)",
        minHeight: "560px",
      }}
    >
      {/* Background shape */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={shape1}
          alt=""
          className="absolute bottom-0 left-0 w-full object-cover opacity-60"
          style={{ maxHeight: "200px" }}
        />
      </div>

      <div className="fn-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 py-16 lg:py-20">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left max-w-lg">
            <h1
              className="font-bold text-gray-900 leading-tight mb-4"
              style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
            >
              Communication made{" "}
              <span className="text-blue-600">easier.</span>
            </h1>

            <p
              className="text-blue-600 font-semibold mb-3"
              style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
            >
              Customer happiness made better.
            </p>

            <p className="text-gray-500 text-base mb-8 leading-relaxed">
              Transform how brands distribute news, pitch the media, and manage
              public relations with our industry-leading communications platform.
            </p>

            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8">
              <button className="fn-btn-primary">Get Started Free</button>
              <button className="fn-btn-outline">Watch Demo</button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-gray-500 font-medium">50,000+ press releases sent</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-gray-500 font-medium">185 media outlets</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-gray-500 font-medium">24/7 support</span>
              </div>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Person using laptop with social media notifications"
              className="w-full max-w-sm lg:max-w-md object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
