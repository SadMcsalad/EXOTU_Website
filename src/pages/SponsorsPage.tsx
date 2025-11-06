import { Handshake, TrendingUp, Users, Award } from 'lucide-react';

export default function SponsorsPage() {
  const sponsorTiers = [
    {
      tier: 'Platinum Partners',
      description: 'Industry-leading organizations providing major funding and resources',
      sponsors: [
        { name: 'TechCorp Industries', type: 'Manufacturing & Robotics' },
        { name: 'FutureTech Labs', type: 'Research & Development' },
      ],
    },
    {
      tier: 'Gold Partners',
      description: 'Organizations contributing significant support and expertise',
      sponsors: [
        { name: 'Advanced Materials Co.', type: 'Materials Science' },
        { name: 'Precision Engineering Ltd.', type: 'Manufacturing' },
        { name: 'AI Systems Group', type: 'Software & AI' },
      ],
    },
    {
      tier: 'Silver Partners',
      description: 'Supporting organizations providing equipment and technical assistance',
      sponsors: [
        { name: 'Component Supply Inc.', type: 'Electronics' },
        { name: 'Design Studio Pro', type: 'CAD & Design Tools' },
        { name: 'Battery Tech Solutions', type: 'Power Systems' },
        { name: 'Sensor Dynamics', type: 'Sensor Technology' },
      ],
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Talent Pipeline',
      description: 'Direct access to highly skilled engineering students for recruitment',
    },
    {
      icon: TrendingUp,
      title: 'Brand Visibility',
      description: 'Logo placement on website, competition displays, and team materials',
    },
    {
      icon: Award,
      title: 'Innovation Access',
      description: 'Early access to research findings and prototype demonstrations',
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'Opportunities for joint research projects and technical partnerships',
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <span className="text-sm text-blue-400 font-medium uppercase tracking-wide">Our Sponsors</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Powered by
            <span className="block text-blue-400">Strategic Partnerships</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            EXOTU's groundbreaking work is made possible by the generous support of industry leaders,
            academic institutions, and organizations committed to advancing robotics innovation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-20">
          {sponsorTiers.map((tier, index) => (
            <div key={index} className="mb-12">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">{tier.tier}</h2>
                <p className="text-gray-400">{tier.description}</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <div
                    key={sponsorIndex}
                    className="group bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 rounded-xl p-8 transition-all hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Handshake size={28} className="text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{sponsor.name}</h3>
                    <p className="text-sm text-gray-400">{sponsor.type}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Partnership Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-900/50 border border-gray-800 rounded-xl"
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={28} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-12">
          <div className="text-center max-w-3xl mx-auto">
            <Handshake size={48} className="text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Become a Sponsor</h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with EXOTU to support the next generation of robotics innovators and gain
              access to cutting-edge research in powered exoskeleton technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all">
                Download Sponsorship Package
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-blue-500 hover:bg-blue-500/10 text-blue-400 font-semibold rounded-lg transition-all">
                Contact Partnership Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
