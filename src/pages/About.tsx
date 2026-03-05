export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800">About Lone Wolf Septic</h1>

      <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
        <p>
          Lone Wolf Septic was founded with a simple mission: deliver honest,
          dependable septic services at fair prices. What started as a one-truck
          operation has grown into a trusted name in the community — but our
          values haven't changed.
        </p>
        <p>
          We specialize in septic system installation, maintenance, pumping, and
          repair. Our team brings years of hands-on experience to every job,
          whether it's a routine pump-out or a full system replacement.
        </p>
        <p>
          As a locally owned and operated business, we treat every property like
          it's our own. We show up on time, do the job right, and leave your
          yard clean. That's the Lone Wolf guarantee.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-xl bg-gray-50 p-6">
          <h2 className="text-xl font-semibold text-forest">Our Mission</h2>
          <p className="mt-2 text-gray-600">
            To provide reliable, professional septic services that protect your
            home, your health, and the environment.
          </p>
        </div>
        <div className="rounded-xl bg-gray-50 p-6">
          <h2 className="text-xl font-semibold text-forest">Our Values</h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
            <li>Integrity in every interaction</li>
            <li>Quality workmanship</li>
            <li>Respect for your property</li>
            <li>Transparent pricing</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
