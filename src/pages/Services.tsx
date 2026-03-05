import Button from '../components/ui/Button'

const services = [
  {
    title: 'Septic Tank Pumping',
    desc: 'Regular pumping keeps your system healthy. We recommend pumping every 3–5 years depending on household size and usage.',
  },
  {
    title: 'Septic System Installation',
    desc: 'New construction or replacing a failed system? We design and install complete septic systems to code.',
  },
  {
    title: 'Inspections & Evaluations',
    desc: 'Buying or selling a home? We provide thorough septic inspections with detailed reports.',
  },
  {
    title: 'Repairs & Troubleshooting',
    desc: 'From minor fixes to major component replacements, we diagnose and repair all types of septic issues.',
  },
  {
    title: 'Drain Field Services',
    desc: 'Installation, repair, and restoration of drain fields and leach lines to keep wastewater flowing properly.',
  },
  {
    title: 'Emergency Services',
    desc: 'Septic backup or overflow? We offer 24/7 emergency response to get your system back on track fast.',
  },
]

export default function Services() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-center text-4xl font-bold text-gray-800">
        Our Services
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
        We offer a full range of septic services for residential and commercial
        properties. Every job is handled by licensed professionals.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-gray-200 p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-forest">
              {service.title}
            </h2>
            <p className="mt-2 text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button to="/contact">Request a Quote</Button>
      </div>
    </div>
  )
}
