function Contacts() {
  return (
    <section className="content-section min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="eyebrow">Start a conversation</p>
        <h1 className="section-heading">Have a product, role, or idea worth building?</h1>
        <p className="section-lede max-w-xl mx-auto mb-10">
          I’m open to frontend opportunities, freelance builds, and thoughtful collaborations with people solving meaningful problems.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Email */}
          <a
            href="mailto:babawaleowootori@gmail.com"
            className="contact-card">
            <p className="text-sm text-gray-500 mb-2">Email</p>
            <p className="font-semibold">babawaleowootori@gmail.com</p>
          </a>

          {/* Phone / WhatsApp */}
          <a
            href="https://wa.me/2347065533548"
            target="_blank"
            className="contact-card">
            <p className="text-sm text-gray-500 mb-2">Phone / WhatsApp</p>
            <p className="font-semibold">+234 706 553 3548</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/wale-owootori"
            target="_blank"
            className="contact-card">
            <p className="text-sm text-gray-500 mb-2">LinkedIn</p>
            <p className="font-semibold">Connect with me</p>
          </a>
        </div>

        <p className="mt-12 text-sm text-gray-500">
          I usually respond within 24 hours.
        </p>
      </div>
    </section>
  );
}

export default Contacts;
