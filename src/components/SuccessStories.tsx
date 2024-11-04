export default function SuccessStories() {
  const stories = [
    {
      couple: "Sarah & Mike",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      story: "Found love within 2 months of joining NETDATE. Now happily married!",
      location: "New York, USA"
    },
    {
      couple: "Emma & James",
      image: "https://images.unsplash.com/photo-1529519195486-16945f0fb37f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      story: "Connected through our shared passion for travel. Together for 1 year!",
      location: "London, UK"
    },
    {
      couple: "David & Lisa",
      image: "https://images.unsplash.com/photo-1523622805393-a76e08d71e79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      story: "Our mutual love for cooking brought us together. Now expecting our first child!",
      location: "Sydney, AUS"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Real couples who found true love on NETDATE
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 w-full relative">
                <img
                  className="w-full h-full object-cover"
                  src={story.image}
                  alt={story.couple}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  {story.couple}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{story.story}</p>
                <p className="mt-4 text-sm text-gray-500">{story.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}