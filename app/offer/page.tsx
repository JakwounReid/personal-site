"use client";

import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Bell,
  Zap,
  Clock,
  DollarSign,
} from "lucide-react";

export default function OfferPage() {
  return (
    <div className="space-y-20 py-10">
      {/* Hero Section */}
      <section className="space-y-6 text-center">
        <h1 className="text-5xl md:text-6xl font-black leading-tight">
          Instant Lead Follow-Up for Milwaukee Real Estate Agents
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">
          Every new inquiry gets a response in under 2 minutes — even when
          you're busy.
        </p>
      </section>

      {/* Problem Section */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">The Problem</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-neutral-900 rounded-lg p-8 border border-neutral-800">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-red-500" />
              <h3 className="font-semibold text-lg">
                Leads Come in After Hours
              </h3>
            </div>
            <p className="text-neutral-400">
              Your best prospects reach out when you're sleeping or showing
              properties. By morning, they've moved on.
            </p>
          </div>

          <div className="bg-neutral-900 rounded-lg p-8 border border-neutral-800">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-yellow-500" />
              <h3 className="font-semibold text-lg">
                Busy Showings = Slow Responses
              </h3>
            </div>
            <p className="text-neutral-400">
              You're back-to-back with clients. By the time you respond, the
              lead's inbox is full of competitor offers.
            </p>
          </div>

          <div className="bg-neutral-900 rounded-lg p-8 border border-neutral-800">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-6 h-6 text-orange-500" />
              <h3 className="font-semibold text-lg">
                Cold Leads = Lost Commissions
              </h3>
            </div>
            <p className="text-neutral-400">
              A 2-hour delay can cost you thousands. Speed isn't a nice-to-have.
              It's your competitive edge.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
        <div className="space-y-4 max-w-2xl">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white text-neutral-900 font-bold">
                1
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Lead Comes In</h3>
              <p className="text-neutral-400">
                Someone fills out your website form or sends an inquiry via
                text/email.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white text-neutral-900 font-bold">
                2
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Automatic Response</h3>
              <p className="text-neutral-400">
                They immediately get a personalized text + email acknowledging
                their inquiry and setting expectations.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white text-neutral-900 font-bold">
                3
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">You Get Notified</h3>
              <p className="text-neutral-400">
                You receive an instant alert so you know exactly who's reached
                out and can prioritize follow-up.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white text-neutral-900 font-bold">
                4
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Follow-Ups Happen Automatically
              </h3>
              <p className="text-neutral-400">
                If the lead doesn't respond, your system sends reminder messages
                on a schedule you set. No manual work required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">What's Included</h2>
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg p-8 md:p-12 border border-neutral-700 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Setup + Customization</h3>
                <p className="text-neutral-400 text-sm">
                  We configure your system to match your workflow and messaging
                  style.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  Integration with Your Site
                </h3>
                <p className="text-neutral-400 text-sm">
                  We connect it to your website forms and CRM so everything
                  syncs automatically.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">SMS + Email Templates</h3>
                <p className="text-neutral-400 text-sm">
                  Professional, conversion-tested templates that reflect your
                  brand and build trust.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Testing</h3>
                <p className="text-neutral-400 text-sm">
                  We run test submissions to make sure everything works
                  perfectly before launch.
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:col-span-2">
              <div className="flex-shrink-0 mt-1">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">3–5 Day Delivery</h3>
                <p className="text-neutral-400 text-sm">
                  You'll be live and catching leads within a week. No months of
                  back-and-forth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            One-Time Setup
          </h2>
          <div className="bg-neutral-900 rounded-lg p-8 md:p-12 border border-neutral-700 inline-block">
            <p className="text-5xl md:text-6xl font-black mb-2">$750–$1,250</p>
            <p className="text-neutral-400">
              depending on integrations and complexity
            </p>
          </div>
          <p className="mt-6 text-neutral-300 max-w-2xl mx-auto">
            That's it. No monthly fees. No ongoing charges. Once it's set up,
            your leads get instant responses 24/7 without any extra work from
            you.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">Common Questions</h2>
        <div className="space-y-4">
          <details className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 group cursor-pointer">
            <summary className="font-semibold flex items-center justify-between">
              Will this work with my current website?
              <span className="group-open:rotate-180 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </span>
            </summary>
            <p className="text-neutral-400 mt-4">
              Yes. We integrate with the most popular website builders and CRMs.
              If you're on WordPress, Wix, Squarespace, or a custom site, we can
              connect it. If you use Zillow, Follow Up Boss, or another real
              estate platform, we'll sync with that too.
            </p>
          </details>

          <details className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 group cursor-pointer">
            <summary className="font-semibold flex items-center justify-between">
              What if I want to customize the messages?
              <span className="group-open:rotate-180 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </span>
            </summary>
            <p className="text-neutral-400 mt-4">
              Absolutely. The templates are starting points. We'll customize the
              tone, messaging, and timing to match your brand and your leads'
              expectations.
            </p>
          </details>

          <details className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 group cursor-pointer">
            <summary className="font-semibold flex items-center justify-between">
              How much will it cost me after setup?
              <span className="group-open:rotate-180 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </span>
            </summary>
            <p className="text-neutral-400 mt-4">
              Nothing. There are no monthly fees or per-message charges. It's a
              one-time setup cost, and then your system runs on its own.
            </p>
          </details>

          <details className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 group cursor-pointer">
            <summary className="font-semibold flex items-center justify-between">
              Can I turn it off or make changes later?
              <span className="group-open:rotate-180 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </span>
            </summary>
            <p className="text-neutral-400 mt-4">
              Yes. After setup, you can pause it, adjust messages, change
              follow-up timing, or modify anything else. You're in control.
            </p>
          </details>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Ready to Stop Losing Leads?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Let's set up your instant follow-up system. No pressure — just a
            quick walkthrough to show you how it works.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/jakwounreid/intro-call" // Replace with your actual Calendly link
            className="rounded-xl bg-white text-neutral-900 px-8 py-4 font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
          >
            Book a 15-Minute Walkthrough
            <ArrowRight className="w-5 h-5" />
          </a>
          <Link
            href="/"
            className="rounded-xl border border-neutral-700 px-8 py-4 hover:bg-neutral-900 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
