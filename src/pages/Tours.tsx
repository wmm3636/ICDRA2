import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users, Star, Quote } from "lucide-react";

const Tours = () => {
  const tours = [
    {
      title: "The Edge of the World (Jebel Fihrayn)",
      duration: "8 hours",
      time: "7:00 AM - 3:00 PM",
      capacity: "20 people",
      price: "$140",
      rating: 4.9,
      highlights: ["Jebel Fihrayn Cliffs", "Panoramic Desert Views", "Ancient Caravan Routes", "Photography Opportunities"],
      description: "One of Saudi's most popular tourist destinations, got its nickname from the uninterrupted view of the horizon, which overlook the surrounding plain. From the top of the cliffs, you'll spot dried rivers weaving across the land and may even see camels moving far below — an ancient caravan route once passed through these grounds.",
      date: "October 16, 2026 (During Conference)",
      difficulty: "Moderate",
      travelTime: "90 minutes by car from Riyadh"
    },
    {
      title: "Historic At-Turaif in Ad-Diriyah (UNESCO World Heritage Site)",
      duration: "5 hours",
      time: "2:00 PM - 7:00 PM",
      capacity: "30 people",
      price: "$95",
      rating: 4.8,
      highlights: ["At-Turaif District", "UNESCO World Heritage Site", "Najdi Architecture", "Saudi State History"],
      description: "Stunning mud-brick palaces, mosques, and homes make up this UNESCO World Heritage site. Today, the district has been carefully restored to its former glory. Museums tell the story of the earliest settlers to this region, highlight the history of the Saudi state, and delve into the unique Najdi architecture.",
      date: "October 15, 2026 (Pre-Conference)",
      difficulty: "Easy"
    },
    {
      title: "Masmak Fortress Historical Tour",
      duration: "3 hours",
      time: "10:00 AM - 1:00 PM",
      capacity: "25 people",
      price: "$65",
      rating: 4.7,
      highlights: ["Masmak Fortress", "Kingdom's Birth", "Historical Artifacts", "Traditional Architecture"],
      description: "A vast clay and mud-brick citadel that witnessed the birth of a kingdom, Al Masmak - the word means a high, strong and thick building — serves as a proud reminder of Saudi Arabia's storied history. Explore the fortress that played a crucial role in the founding of modern Saudi Arabia.",
      date: "October 17, 2026 (During Conference)",
      difficulty: "Easy"
    },
    {
      title: "Traditional Market Experience (Al-Dirah)",
      duration: "4 hours",
      time: "3:00 PM - 7:00 PM",
      capacity: "20 people",
      price: "$80",
      rating: 4.6,
      highlights: ["Al-Dirah Neighborhood", "Traditional Souq", "Local Artisans", "Cultural Shopping"],
      description: "Visit the traditional market in the heart of Riyadh, about 5.4 km from Al-Murabba Historical Palace. The souq covers an area of 38,000 square meters and is one of Riyadh's oldest traditional markets that carries 100 years of history within its alleyways. Experience authentic Saudi culture and craftsmanship.",
      date: "October 16, 2026 (During Conference)",
      difficulty: "Easy"
    },
    {
      title: "Modern Riyadh & Iconic Towers Tour",
      duration: "6 hours",
      time: "9:00 AM - 3:00 PM",
      capacity: "35 people",
      price: "$110",
      rating: 4.8,
      highlights: ["Kingdom Tower", "Al Faisaliah Tower", "King Abdullah Financial District", "Modern Architecture"],
      description: "Discover the modern face of Riyadh with visits to iconic landmarks including the Kingdom Tower and Al Faisaliah Tower. Experience the transformation of Riyadh into a modern metropolis while learning about Saudi Arabia's Vision 2030.",
      date: "October 17, 2026 (During Conference)",
      difficulty: "Easy"
    },
    {
      title: "Riyadh Shopping & Entertainment Experience",
      duration: "5 hours",
      time: "2:00 PM - 7:00 PM",
      capacity: "25 people",
      price: "$90",
      rating: 4.5,
      highlights: ["Riyadh Park Mall", "Granada Mall", "Via Riyadh", "Modern Shopping"],
      description: "Experience modern Saudi lifestyle with visits to Riyadh's premier shopping destinations including Riyadh Park Mall, Granada Mall, and Via Riyadh. Enjoy contemporary dining, shopping, and entertainment facilities that showcase the kingdom's modern development.",
      date: "October 18, 2026 (Post-Conference)",
      difficulty: "Easy"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Challenging': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative">
        <div className="relative h-[70vh] bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('/saudi-hospitality.jpg')`
        }}>
          <div className="absolute bottom-8 left-8">
            <h1 className="text-6xl lg:text-7xl font-light text-white mb-4">
              Saudi
            </h1>
            <div className="bg-white/90 backdrop-blur-sm px-8 py-4 inline-block">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-800">
                Hospitality
              </h2>
            </div>
          </div>
          <div className="absolute bottom-8 right-8">
            <img
              src="/saudi-welcome-logo.png"
              alt="Saudi Welcome to Arabia"
              className="h-20 w-auto"
            />
          </div>
        </div>
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                  <Quote className="w-12 h-12 text-amber-600 mb-6" />
                  <blockquote className="text-gray-800 text-lg leading-relaxed">
                    Hospitality in the Kingdom of Saudi Arabia is one of the strong and unconditional human bonds that remained embedded in the Arabian Peninsula over centuries.
                  </blockquote>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-800 leading-relaxed">
                    Saudi hospitality is well-known for its warmth and generosity, deeply rooted in the region's cultural heritage.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-800 leading-relaxed">
                    Visitors always experience an extraordinary level of welcome, characterized by traditional customs such as offering Arabic coffee and dates.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-800 leading-relaxed">
                    In Saudi Arabia, it's common for hosts to go to great lengths to ensure their guests feel comfortable and valued, reflecting the nation's pride in its rich traditions and commitment to fostering strong community ties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cultural Tours & Social Programs
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Discover the rich heritage, modern wonders, and cultural treasures of Saudi Arabia
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-blue-800">
                <strong>Early Bird Special:</strong> Book by September 1st and save 15% on all tours!
              </p>
            </div>
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tours.map((tour, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{tour.title}</CardTitle>
                    <div className="text-right">
                      {/* <div className="text-2xl font-bold text-green-600">{tour.price}</div>
                      <div className="text-sm text-gray-600">per person</div> */}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Tour Details */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      Max {tour.capacity}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                      {tour.rating}
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    <Badge className={getDifficultyColor(tour.difficulty)}>
                      {tour.difficulty}
                    </Badge>
                    <Badge variant="outline">{tour.date}</Badge>
                    <Badge variant="outline">{tour.time}</Badge>
                  </div>

                  {/* Travel Time */}
                  {tour.travelTime && (
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {tour.travelTime}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-700">{tour.description}</p>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold mb-2">Tour Highlights:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {tour.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {/* <div className="flex gap-2 pt-4">
                    <Button className="flex-1 bg-blue-900 hover:bg-blue-800">
                      Book Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      More Details
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;