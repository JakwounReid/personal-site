import { Eyebrow } from "@/components/ui";

// Ships hidden. Flip to `true` once real quotes are in place below.
const SHOW_TESTIMONIALS = false;

// TODO: replace these placeholder entries with real, attributed client quotes.
const testimonials = [
  {
    quote:
      "[PLACEHOLDER] He found the thing costing us leads in the first call and had it fixed the same week.",
    name: "Client Name",
    business: "Business / Role",
  },
  {
    quote:
      "[PLACEHOLDER] The site finally looks like the work we actually do — and it runs itself.",
    name: "Client Name",
    business: "Business / Role",
  },
  {
    quote:
      "[PLACEHOLDER] Fixed price, delivered early, and I own every line of it.",
    name: "Client Name",
    business: "Business / Role",
  },
];

export default function Testimonials() {
  if (!SHOW_TESTIMONIALS) return null;

  return (
    <section className="border-t border-neutral-800 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Eyebrow>What Clients Say</Eyebrow>
        <h2 className="mb-12 text-3xl font-black tracking-tight text-white sm:text-4xl">
          The work speaks. So do the people it&apos;s for.
        </h2>

        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map(({ quote, name, business }) => (
            <figure
              key={name + quote}
              className="flex flex-col border border-neutral-800 bg-neutral-900/50 p-6"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-neutral-300">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 border-t border-neutral-800 pt-4">
                <p className="text-sm font-bold text-white">{name}</p>
                <p className="text-xs text-neutral-500">{business}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
