import Link from "next/link";

// Configuration for book purchase - update the URL with your Stripe Checkout link
const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/5kQ00bcqc8RIfhdfpngA801";

export default function BookPage() {
  return (
    <div className="space-y-16">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="space-y-6">
        <div className="space-y-4">
          {/* Main headline - analytical, not aspirational */}
          <h1 className="text-4xl md:text-5xl font-black leading-tight">
            The Career Switcher's Framework
          </h1>
          
          {/* Subheadline - problem-solution focused */}
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl">
            Most career switchers fail not from lack of effort, but from following the wrong sequence. This book shows you the right one.
          </p>
        </div>

        {/* Primary CTA button */}
        <div className="pt-4">
          <a
            href={STRIPE_CHECKOUT_URL}
            className="inline-block rounded-xl bg-white text-neutral-900 px-6 py-3 font-semibold hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
            aria-label="Purchase the Career Switcher's Framework book"
          >
            Get the Book
          </a>
        </div>
      </section>

      {/* ============================================
          WHO THIS IS FOR / NOT FOR
          ============================================ */}
      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            This book is for you if:
          </h2>
          <ul className="space-y-3">
            {/* List items - precise, outcome-focused */}
            <li className="flex gap-3">
              <span className="text-neutral-400 flex-shrink-0 pt-1">•</span>
              <span className="text-neutral-300">
                You're switching careers and need a structured approach instead of random advice
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 flex-shrink-0 pt-1">•</span>
              <span className="text-neutral-300">
                You want to understand which skills compound over time and which ones waste your effort
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 flex-shrink-0 pt-1">•</span>
              <span className="text-neutral-300">
                You're making decisions based on actual patterns, not industry hype
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 flex-shrink-0 pt-1">•</span>
              <span className="text-neutral-300">
                You have a non-traditional background and need realistic expectations for your path
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 flex-shrink-0 pt-1">•</span>
              <span className="text-neutral-300">
                You're willing to think critically about your strategy instead of just working harder
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            This book is NOT for you if:
          </h2>
          <ul className="space-y-3">
            {/* Negative list - clear disqualifiers */}
            <li className="flex gap-3">
              <span className="text-neutral-400 flex-shrink-0 pt-1">•</span>
              <span className="text-neutral-300">
                You're looking for motivational content or "you can do anything" messaging
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 flex-shrink-0 pt-1">•</span>
              <span className="text-neutral-300">
                You expect to transition in under 6 months with minimal prior technical foundation
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 flex-shrink-0 pt-1">•</span>
              <span className="text-neutral-300">
                You need coding tutorials or language syntax guides (this assumes self-directed learning)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 flex-shrink-0 pt-1">•</span>
              <span className="text-neutral-300">
                You prefer prescriptive answers over decision frameworks you can apply to your situation
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 flex-shrink-0 pt-1">•</span>
              <span className="text-neutral-300">
                You're already 3+ years into your career and optimizing for senior roles
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================
          WHAT YOU'LL LEARN
          ============================================ */}
      <section>
        <h2 className="text-2xl font-bold mb-6">What you'll learn:</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Each item - framework and principle-focused */}
          <div className="rounded-xl border border-neutral-800 p-6 hover:bg-neutral-900/30 transition-colors">
            <h3 className="font-semibold mb-2">The Sequence Framework</h3>
            <p className="text-sm text-neutral-300">
              Why the order of what you learn matters more than the content itself. How to map your personal sequence based on your background and target role.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 p-6 hover:bg-neutral-900/30 transition-colors">
            <h3 className="font-semibold mb-2">Decision Models for Learning</h3>
            <p className="text-sm text-neutral-300">
              A framework for choosing what to learn next, when to shift direction, and how to validate your choices against real hiring requirements.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 p-6 hover:bg-neutral-900/30 transition-colors">
            <h3 className="font-semibold mb-2">Realistic Time Allocation</h3>
            <p className="text-sm text-neutral-300">
              How different learning speeds affect your timeline. What matters in your first 6 months vs. your first 2 years, and when to expect momentum.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 p-6 hover:bg-neutral-900/30 transition-colors">
            <h3 className="font-semibold mb-2">Common Failure Patterns</h3>
            <p className="text-sm text-neutral-300">
              The specific mistakes that trap career switchers—tutorial dependency, skill obsession, poor networking strategy—and how to avoid them.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 p-6 hover:bg-neutral-900/30 transition-colors">
            <h3 className="font-semibold mb-2">Building Credible Evidence</h3>
            <p className="text-sm text-neutral-300">
              How to demonstrate competence without a traditional resume. What actually moves hiring decisions when you're coming from outside the industry.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 p-6 hover:bg-neutral-900/30 transition-colors">
            <h3 className="font-semibold mb-2">From Offer to Growth</h3>
            <p className="text-sm text-neutral-300">
              How to position yourself for opportunities. What to expect in your first role, and how to accelerate learning once you're hired.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          CREDIBILITY / AUTHOR SECTION
          ============================================ */}
      <section className="rounded-2xl border border-neutral-800 p-8">
        <h2 className="text-2xl font-bold mb-4">About the Author</h2>
        
        <p className="text-neutral-300">
          I switched into tech from a non-traditional background after trying multiple paths. Instead of following industry hype, I spent 2+ years systematically learning, failing, and discovering what actually determines success for career switchers. This book is what I learned.
        </p>
      </section>

      {/* ============================================
          CTA SECTION (BOTTOM)
          ============================================ */}
      <section 
        id="cta-section"
        className="py-12 space-y-6 text-center"
      >
        <div className="space-y-3">
          {/* Final headline - analytical framing */}
          <h2 className="text-3xl md:text-4xl font-bold">
            Get the framework. Skip the mistakes.
          </h2>
          
          {/* Brief supporting text - practical benefit */}
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            A clear, structured approach to moving into tech. Based on patterns, not promises.
          </p>
        </div>

        {/* Primary CTA button */}
        <div>
          <a
            href={STRIPE_CHECKOUT_URL}
            className="inline-block rounded-xl bg-white text-neutral-900 px-8 py-4 font-semibold hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors text-lg"
            aria-label="Purchase the Career Switcher's Framework book"
          >
            Download the Book
          </a>
        </div>

        {/* Secondary text - address common concerns */}
        <p className="text-sm text-neutral-400 pt-4">
          PDF delivered instantly. No signup required.
        </p>
      </section>
    </div>
  );
}
