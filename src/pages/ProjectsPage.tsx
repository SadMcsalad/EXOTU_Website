import { Cpu, Zap, Shield, Wrench, Brain, Heart } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      name: 'APEX-1 Full Body Exoskeleton',
      category: 'Flagship',
      icon: Shield,
      status: 'In Development',
      progress: 75,
      image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Advanced full-body powered exoskeleton designed for heavy lifting applications and endurance enhancement.',
      specs: [
        'Max Load Capacity: 150 kg',
        'Battery Life: 8 hours',
        'Weight: 45 kg',
        'Actuators: 12 DOF',
      ],
      team: 'Mechanical, Electrical, Software',
    },
    {
      name: 'LiftAssist Lower Limb System',
      category: 'Medical',
      icon: Heart,
      status: 'Testing Phase',
      progress: 60,
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Assistive lower-limb exoskeleton designed for rehabilitation and mobility enhancement for individuals with limited mobility.',
      specs: [
        'Joint Support: Hip, Knee, Ankle',
        'Weight: 12 kg',
        'Battery Life: 6 hours',
        'Max Speed: 4 km/h',
      ],
      team: 'Mechanical, Biomedical, Software',
    },
    {
      name: 'PowerGrip Arm Enhancement',
      category: 'Industrial',
      icon: Zap,
      status: 'Competition Ready',
      progress: 85,
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Upper-limb exoskeleton module designed for precision manufacturing and heavy assembly work in industrial settings.',
      specs: [
        'Lift Assistance: 35 kg per arm',
        'Weight: 8 kg',
        'Range of Motion: 180°',
        'Battery Life: 10 hours',
      ],
      team: 'Mechanical, Electrical',
    },
    {
      name: 'NeuroLink Control System',
      category: 'Research',
      icon: Brain,
      status: 'Research Phase',
      progress: 40,
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Next-generation neural interface for intuitive exoskeleton control using EMG and IMU sensor fusion.',
      specs: [
        'Sensors: 16 EMG channels',
        'Latency: <50ms',
        'Accuracy: 94%',
        'ML Model: Custom CNN',
      ],
      team: 'Software, ML/AI, Electrical',
    },
    {
      name: 'SpineGuard Posture Support',
      category: 'Medical',
      icon: Cpu,
      status: 'Prototype',
      progress: 55,
      image: 'https://images.pexels.com/photos/7551666/pexels-photo-7551666.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Lightweight back support exoskeleton designed to prevent workplace injuries and improve posture during extended work periods.',
      specs: [
        'Weight: 3.5 kg',
        'Support Force: 20 kg',
        'Battery Life: 12 hours',
        'Comfort Rating: 9/10',
      ],
      team: 'Mechanical, Design',
    },
    {
      name: 'Modular Joint System V2',
      category: 'Platform',
      icon: Wrench,
      status: 'In Development',
      progress: 70,
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Standardized modular joint platform enabling rapid prototyping and customization across all exoskeleton projects.',
      specs: [
        'Torque Range: 5-100 Nm',
        'Modularity: 100%',
        'Quick Release: <30 seconds',
        'Cost Reduction: 40%',
      ],
      team: 'Mechanical, Manufacturing',
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <span className="text-sm text-blue-400 font-medium uppercase tracking-wide">Our Projects</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Building Tomorrow's Technology
            <span className="block text-blue-400">Today</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            From concept to competition, explore our cutting-edge exoskeleton projects
            and research initiatives pushing the boundaries of human augmentation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 rounded-2xl overflow-hidden transition-all"
            >
              <div className="grid md:grid-cols-5 gap-8 p-8">
                <div className="md:col-span-2">
                  <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex items-center space-x-2 px-3 py-1 bg-blue-500/90 rounded-full">
                      <project.icon size={16} className="text-white" />
                      <span className="text-sm font-medium text-white">{project.category}</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                      <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium rounded-full whitespace-nowrap ml-4">
                        {project.status}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Technical Specs
                        </h4>
                        <ul className="space-y-1">
                          {project.specs.map((spec, i) => (
                            <li key={i} className="text-sm text-gray-300">
                              • {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Team Disciplines
                        </h4>
                        <p className="text-sm text-gray-300">{project.team}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-400">Development Progress</span>
                      <span className="text-sm font-semibold text-blue-400">{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
