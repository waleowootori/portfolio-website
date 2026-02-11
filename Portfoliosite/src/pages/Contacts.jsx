function Contacts() {
  return (
    <section className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Have a project in mind, a role to fill, or just want to connect? I’m
          open to freelance work, internships, and junior developer roles.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Email */}
          <a
            href="mailto:babawaleowootori@gmail.com"
            className="border rounded-2xl p-6 bg-white shadow hover:shadow-lg transition">
            <p className="text-sm text-gray-500 mb-2">Email</p>
            <p className="font-semibold">babawaleowootori@gmail.com</p>
          </a>

          {/* Phone / WhatsApp */}
          <a
            href="https://wa.me/2347065533548"
            target="_blank"
            className="border rounded-2xl p-6 bg-white shadow hover:shadow-lg transition">
            <p className="text-sm text-gray-500 mb-2">Phone / WhatsApp</p>
            <p className="font-semibold">+234 706 553 3548</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME"
            target="_blank"
            className="border rounded-2xl p-6 bg-white shadow hover:shadow-lg transition">
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
