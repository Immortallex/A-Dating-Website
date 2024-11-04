import { Heart, Shield, Sparkles, Users } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-rose-500" />,
      title: "Smart Matching",
      description: "Our AI-powered algorithm finds your perfect match based on interests, values, and compatibility."
    },
    {
      icon: <Shield className="h-8 w-8 text-rose-500" />,
      title: "Verified Profiles",
      description: "Feel secure with our thorough verification process ensuring authentic connections."
    },
    {
      icon: <Users className="h-8 w-8 text-rose-500" />,
      title: "Active Community",
      description: "Join millions of singles looking for meaningful relationships."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-rose-500" />,
      title: "Premium Experience",
      description: "Unlock exclusive features with our premium membership for better matches."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose NETDATE?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Find meaningful connections with our innovative features
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="p-3 bg-rose-50 rounded-full group-hover:bg-rose-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500 text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}