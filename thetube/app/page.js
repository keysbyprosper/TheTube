import CloudWatch from "@/cloudinary/CloudWatch";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Featured Video */}
        <div className="mb-8">
          <iframe
            className="w-full h-96"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Video Cards */}
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-md hover:shadow-lg transition duration-300">
              {/* Thumbnail */}
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={`https://picsum.photos/seed/${index}/400/225`}
                  alt="Video Thumbnail"
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
              {/* Title */}
              <h2 className="text-lg font-medium mb-2">Video Title Here</h2>
              {/* Channel */}
              <p className="text-gray-500">Channel Name</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
