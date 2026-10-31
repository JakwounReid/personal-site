export const metadata = {
  title: "Privacy — homebase assistant",
  description: "Privacy policy for homebase assistant, Jakwoun Reid's personal assistant app.",
};

export default function PrivacyPage() {
  return (
    <article className="prose prose-invert mx-auto max-w-2xl py-16">
      <h1>Privacy policy: homebase assistant</h1>
      <p>Last updated: October 31, 2026</p>
      <p>
        homebase assistant is a personal app built and used only by Jakwoun Reid. It is not offered to
        anyone else, and no one else can sign in to it.
      </p>
      <h2>What it accesses</h2>
      <p>
        With my permission, it reads my own Gmail, Google Calendar, and Google Drive so it can answer my
        questions and prepare drafts. It sends email, changes calendar events, or takes any other action
        only after I approve each one.
      </p>
      <h2>Where the data goes</h2>
      <p>
        Data is processed on a private server I run and is not sold, shared, or used for advertising.
        Requests to AI models go only to providers configured not to retain or train on the data, or to a
        model running on my own computer.
      </p>
      <p>
        Its use of information received from Google APIs adheres to the{" "}
        <a href="https://developers.google.com/terms/api-services-user-data-policy">
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements.
      </p>
      <h2>Contact</h2>
      <p>
        Questions: <a href="mailto:jakwounreid@gmail.com">jakwounreid@gmail.com</a>
      </p>
    </article>
  );
}
