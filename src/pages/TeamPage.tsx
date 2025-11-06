import { User } from 'lucide-react';

export default function TeamPage() {
  const teamSections = [
    {
      title: 'Executive Leadership',
      members: [
        { name: 'Sarah Chen', role: 'President & Chief Engineer', department: 'Mechanical Engineering' },
        { name: 'Marcus Johnson', role: 'Vice President', department: 'Electrical Engineering' },
        { name: 'Priya Patel', role: 'Technical Director', department: 'Computer Science' },
        { name: 'David Kim', role: 'Operations Manager', department: 'Industrial Engineering' },
      ],
    },
    {
      title: 'Mechanical Engineering',
      members: [
        { name: 'Alex Rivera', role: 'Lead Mechanical Engineer', department: 'Mechanical Engineering' },
        { name: 'Emily Zhang', role: 'Structural Design Lead', department: 'Mechanical Engineering' },
        { name: 'James Wilson', role: 'Manufacturing Lead', department: 'Mechanical Engineering' },
        { name: 'Maya Anderson', role: 'CAD Specialist', department: 'Mechanical Engineering' },
      ],
    },
    {
      title: 'Electrical Engineering',
      members: [
        { name: 'Ryan Cooper', role: 'Lead Electrical Engineer', department: 'Electrical Engineering' },
        { name: 'Sophia Martinez', role: 'Power Systems Lead', department: 'Electrical Engineering' },
        { name: 'Liam Brown', role: 'Sensor Integration Lead', department: 'Electrical Engineering' },
        { name: 'Olivia Taylor', role: 'PCB Design Specialist', department: 'Electrical Engineering' },
      ],
    },
    {
      title: 'Software & ML/AI',
      members: [
        { name: 'Kevin Nguyen', role: 'Lead Software Engineer', department: 'Computer Science' },
        { name: 'Isabella Garcia', role: 'ML/AI Research Lead', department: 'Data Science' },
        { name: 'Nathan Lee', role: 'Control Systems Engineer', department: 'Computer Engineering' },
        { name: 'Ava Thompson', role: 'UI/UX Developer', department: 'Computer Science' },
      ],
    },
    {
      title: 'Research & Development',
      members: [
        { name: 'Dr. Michael Park', role: 'Faculty Advisor', department: 'Robotics Lab' },
        { name: 'Emma Davis', role: 'Biomechanics Researcher', department: 'Biomedical Engineering' },
        { name: 'Daniel White', role: 'Materials Research Lead', department: 'Materials Science' },
        { name: 'Grace Kim', role: 'Human Factors Specialist', department: 'Ergonomics' },
      ],
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <span className="text-sm text-blue-400 font-medium uppercase tracking-wide">Our Team</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Meet the Minds Behind
            <span className="block text-blue-400">the Innovation</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            A diverse team of passionate engineers, researchers, and innovators working together
            to push the boundaries of powered exoskeleton technology.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {teamSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">
              {section.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.members.map((member, memberIndex) => (
                <div
                  key={memberIndex}
                  className="group bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 rounded-xl p-6 transition-all hover:-translate-y-2"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <User size={32} className="text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-400 text-center mb-2 font-medium">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-500 text-center uppercase tracking-wide">
                    {member.department}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented, passionate individuals to join our mission.
            Whether you're a student, researcher, or industry professional, there's a place for you at EXOTU.
          </p>
          <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
