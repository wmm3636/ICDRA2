import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Globe, ArrowRight } from "lucide-react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Conference date - April 13-17, 2026
  const conferenceDate = new Date("2026-04-13T09:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = conferenceDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden" style={{
        backgroundImage: `url('/lovable-uploads/b190cc43-d97d-43db-976b-53ccd39ae43a.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-emerald-700/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <img
                src="/lovable-uploads/icdra19th_logo.png"
                alt="ICDRA 2026 Logo"
                className="h-20 w-auto"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The 20th ICDRA 2026
            </h1>
            <h2 className="text-2xl md:text-4xl mb-8 text-emerald-100 font-medium">
              International Conference of Drug Regulatory Authorities
            </h2>
            <div className="flex items-center justify-center gap-6 mb-8 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>April 13<sup>th</sup>-17<sup>th</sup>, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Riyadh, Saudi Arabia</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-emerald-100 leading-relaxed">
              Strengthening regulatory systems worldwide for better health outcomes through international collaboration and harmonization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registration">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 text-lg h-auto">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/programme">
                <Button size="lg" variant="outline" className="border-2 border-white text-blue-600 bg-white hover:bg-blue-50 hover:text-blue-700 px-8 py-4 text-lg h-auto font-semibold">
                  View Programme
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Conference Countdown
            </h2>
            <p className="text-xl text-gray-600">
              Join us in the heart of the Kingdom
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <Card key={unit} className="text-center border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-emerald-100">
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-emerald-700 mb-3">
                    {value}
                  </div>
                  <div className="text-sm uppercase text-gray-600 font-semibold tracking-wider">
                    {unit}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About ICDRA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                About ICDRA
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  The International Conference of Drug Regulatory Authorities (ICDRA) is  world's only global forum that brings together heads of drug regulatory authorities from around the world to discuss challenges and opportunities in pharmaceutical regulation.
                </p>
                <p>
                  Organized in collaboration with the World Health Organization (WHO), ICDRA serves as a platform for regulatory convergence, knowledge sharing, and collaborative problem-solving to strengthen regulatory systems worldwide and improve access to safe, effective, and quality medical products.
                </p>
                <p>
                  The 20th ICDRA marks a significant milestone in global regulatory cooperation, hosted in the Kingdom of
                  Saudi Arabia as part of commitment to advancing healthcare excellence and international collaboration.
                </p>
                <p>
                  The Saudi Food and Drug Authority and WHO are delighted to invite you to participate in the 20th International Conference of Drug Regulatory Authorities.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">150+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">1000+</div>
                  <div className="text-gray-600">Delegates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">5</div>
                  <div className="text-gray-600">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                  <div className="text-gray-600">Sessions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Conference Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join global regulatory leaders in advancing pharmaceutical safety, innovation, and international collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                  <Globe className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Regulatory Convergence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fostering international partnerships and regulatory harmonization for global health security
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                  <Users className="h-8 w-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Knowledge Sharing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connecting regulatory authorities worldwide to share best practices and innovative solutions
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Calendar className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Comprehensive Programme</h3>
                <p className="text-gray-600 leading-relaxed">
                  Five days of intensive sessions, workshops, and networking opportunities
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-600 transition-colors duration-300">
                  <MapPin className="h-8 w-8 text-rose-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Saudi Arabia</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experience the rich culture and hospitality of the Kingdom while advancing global health
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join the 20th ICDRA 2026?
          </h2>
          <p className="text-xl mb-12 text-emerald-100 max-w-2xl mx-auto">
            Be part of this landmark conference shaping the future of pharmaceutical regulation in the heart of Saudi Arabia
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/registration">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-4 text-lg h-auto">
                Register Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/general-info">
              <Button size="lg" variant="outline" className="border-2 border-white text-blue-600 bg-white hover:bg-blue-50 hover:text-blue-700 px-10 py-4 text-lg h-auto font-semibold">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
