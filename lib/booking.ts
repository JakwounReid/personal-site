// Every paid engagement is scoped on the free Clarity Call first, so this is the only
// booking link the site exposes. Nothing on the site links to a checkout or to a Cal
// event that shows a price — scope decides cost, and a payment page can't know scope.
export const CLARITY_CALL_URL = "https://cal.com/jakwoun-reid-ha7wcd/15min";

// One 90-minute Strategy Session covers both business and career work. Deliberately
// not linked from any page: the link goes out after scope is agreed on the Clarity
// Call. Keep it hidden in Cal so the public booking page doesn't leak a price either.
export const STRATEGY_SESSION_URL =
  "https://cal.com/jakwoun-reid-ha7wcd/strategy-consultation-reduced";

// Answers for the "What do you want to talk about?" question on the Clarity Call.
// These strings must match the option labels in Cal character for character — Cal
// matches a prefill against the option text and silently ignores anything it can't
// resolve, so a typo here reads as "the prefill just doesn't work."
export const INTEREST = {
  siteCare: "Site Care",
  businessStrategy: "Business Strategy",
  careerStrategy: "Career Strategy",
  unsure: "Not Sure Yet",
} as const;

export type Interest = (typeof INTEREST)[keyof typeof INTEREST];

// Prefills the interest question from whichever page the click came from, so the
// answer is already set before the call. `interest` is the question's identifier in
// Cal; renaming it there breaks the prefill without any visible error.
export function clarityCall(interest?: Interest): string {
  return interest
    ? `${CLARITY_CALL_URL}?interest=${encodeURIComponent(interest)}`
    : CLARITY_CALL_URL;
}
