import { CheckCircle, Users, Calendar, Mail } from 'lucide-react';
import { useState } from 'react';

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    major: '',
    year: '',
    interests: '',
    experience: '',
  });

  const benefits = [
    'Hands-on experience with cutting-edge robotics technology',
    'Collaborative environment with multidisciplinary teams',
    'Access to state-of-the-art lab facilities and equipment',
    'Opportunities to compete in international competitions',
    'Networking with industry professionals and researchers',
    'Build your portfolio with real engineering projects',
    'Leadership and project management experience',
    'Connect with like-minded passionate engineers',
  ];

  const requirements = [
    'Currently enrolled as a university student',
    'Passionate about robotics and human augmentation',
    'Ability to commit 8-10 hours per week',
    'Strong teamwork and communication skills',
    'No prior experience required for entry-level positions',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <span className="text-sm text-blue-400 font-medium uppercase tracking-wide">Join EXOTU</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Be Part of Something
            <span className="block text-blue-400">Extraordinary</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Join a team of passionate engineers and researchers building the future of human augmentation.
            No matter your background or experience level, there's a place for you at EXOTU.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Why Join EXOTU?</h2>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-6">What We're Looking For</h2>
            <div className="space-y-3 mb-8">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{req}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                <Calendar className="text-blue-400" size={24} />
                <span>Recruitment Timeline</span>
              </h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Fall Semester:</strong> Applications open September 1-15</p>
                <p><strong className="text-white">Spring Semester:</strong> Applications open January 10-25</p>
                <p><strong className="text-white">Info Sessions:</strong> First week of each semester</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Users size={48} className="text-blue-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2">Application Form</h2>
              <p className="text-gray-400">
                Fill out the form below and we'll get back to you within 48 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                    placeholder="john@university.edu"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Major/Department *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.major}
                    onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                    placeholder="Mechanical Engineering"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Year of Study *
                  </label>
                  <select
                    required
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select year</option>
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                    <option value="graduate">Graduate</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Areas of Interest *
                </label>
                <textarea
                  required
                  value={formData.interests}
                  onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none resize-none"
                  placeholder="e.g., Mechanical design, control systems, machine learning, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Relevant Experience (Optional)
                </label>
                <textarea
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none resize-none"
                  placeholder="Tell us about any relevant coursework, projects, or experience..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <Mail size={20} />
                <span>Submit Application</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
