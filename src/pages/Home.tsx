import Button from '../components/ui/Button'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-dark px-4 py-14 text-center text-white md:py-24">
        <h1 className="text-3xl font-bold md:text-5xl">
          Your Septic System Deserves<br className="hidden md:block" />
          <span className="text-earth-light">the Right Team Behind It</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300 md:text-lg">
          Licensed. Insured. Locally trusted. From routine pumping to emergency
          repairs, Lone Wolf Septic and Drains keeps your home protected — done
          right the first time, every time.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Button to="/contact">Get Your Free Quote Today</Button>
          <Button to="/services" variant="secondary">
            Our Services
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto flex max-w-7xl flex-col justify-center px-4 py-12 md:py-6 md:min-h-[calc(100vh-6rem)]">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 md:mb-8 md:text-3xl">
          Why Choose Lone Wolf Septic and Drains?
        </h2>

        {/* Mobile: mascot left, cards right (mirrors desktop) */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="flex-shrink-0">
            <img
              src="/mascot.svg"
              alt="Lone Wolf mascot"
              className="w-44"
            />
          </div>

          <div className="flex flex-1 flex-col gap-2.5">
            {[
              { title: 'Licensed & Insured', desc: 'Fully licensed with comprehensive insurance.', animation: 'animate-levitate-1' },
              { title: '24/7 Emergency', desc: "Emergencies don't wait — neither do we.", animation: 'animate-levitate-2' },
              { title: 'Locally Owned', desc: 'Your satisfaction is our reputation.', animation: 'animate-levitate-3' },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-lg border border-gray-200 bg-white px-3 py-2.5 shadow-md ${item.animation}`}
              >
                <h3 className="text-sm font-bold text-forest">{item.title}</h3>
                <p className="mt-0.5 text-xs leading-snug text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: original side-by-side layout */}
        <div className="hidden md:flex md:flex-row md:items-center md:justify-center md:gap-6">
          <div className="flex-shrink-0">
            <img
              src="/mascot.svg"
              alt="Lone Wolf mascot"
              className="w-72"
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            {[
              {
                title: 'Licensed & Insured',
                desc: 'Fully licensed professionals with comprehensive insurance coverage.',
                animation: 'animate-levitate-1',
                offset: '',
              },
              {
                title: '24/7 Emergency Service',
                desc: "Septic emergencies don't wait — and neither do we.",
                animation: 'animate-levitate-2',
                offset: 'md:ml-16',
              },
              {
                title: 'Locally Owned',
                desc: 'We live and work in this community. Your satisfaction is our reputation.',
                animation: 'animate-levitate-3',
                offset: '',
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`max-w-md rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-md ${item.animation} ${item.offset}`}
              >
                <h3 className="text-xl font-bold text-forest">{item.title}</h3>
                <p className="mt-1.5 text-lg text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 px-4 py-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-gray-800 md:text-3xl">
            How We Can Help
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
            Comprehensive septic solutions from a team you can trust.
          </p>

          {/* Featured services */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-12 md:gap-5">
            <div className="rounded-2xl bg-forest-dark px-6 py-6 text-white md:px-8 md:py-8">
              <svg className="h-8 w-8 text-earth-light md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.72 17.72l1.06 1.06M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M17.72 6.28l1.06-1.06" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9a3 3 0 100 6 3 3 0 000-6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l-1.5 4h11L16 16" />
              </svg>
              <h3 className="mt-3 text-lg font-bold md:mt-4 md:text-2xl">Septic Tank Pumping</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300 md:mt-3 md:text-base">
                The most important thing you can do for your septic system.
                Regular pump-outs every 3–5 years prevent costly backups and
                extend the life of your system by decades.
              </p>
            </div>
            <div className="rounded-2xl bg-earth-light px-6 py-6 text-white md:px-8 md:py-8">
              <svg className="h-8 w-8 text-white md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
              <h3 className="mt-3 text-lg font-bold md:mt-4 md:text-2xl">24/7 Emergencies</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85 md:mt-3 md:text-base">
                Sewage backup? Overflow? Strange smells? Don't wait — call us
                any time, day or night. We respond fast so the damage stays small.
              </p>
            </div>
          </div>

          {/* Supporting services */}
          <div className="mt-5 grid gap-3 grid-cols-2 lg:grid-cols-4 md:gap-5">
            {[
              {
                title: 'New Installations',
                desc: 'Full system design and installation, built to code.',
                icon: (
                  <svg className="h-8 w-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.193-.14 1.743" />
                  </svg>
                ),
              },
              {
                title: 'Inspections',
                desc: 'Detailed evaluations for buyers, sellers, and realtors.',
                icon: (
                  <svg className="h-8 w-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                ),
              },
              {
                title: 'Repairs',
                desc: 'Fast diagnosis and repair for any septic issue.',
                icon: (
                  <svg className="h-8 w-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                  </svg>
                ),
              },
              {
                title: 'Drain Fields',
                desc: 'Installation, repair, and restoration of drain fields.',
                icon: (
                  <svg className="h-8 w-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                ),
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-xl bg-white px-4 py-4 shadow-sm md:px-5 md:py-5"
              >
                <div className="hidden md:block">{service.icon}</div>
                <h3 className="text-sm font-bold text-gray-800 md:mt-3 md:text-base">
                  {service.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-500 md:mt-1.5 md:text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
