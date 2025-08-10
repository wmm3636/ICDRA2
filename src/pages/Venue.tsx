
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Car, Plane } from "lucide-react";

const Venue = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Conference Venue
          </h1>
          <p className="text-lg text-gray-600">
            Join us at the prestigious venue in the heart of Riyadh
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
          {/* Venue Information */}
          {/* <Card>
            <CardHeader>
              <CardTitle>King Abdulaziz International Conference Center</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">
                    King Abdulaziz Road<br />
                    Diplomatic Quarter<br />
                    Riyadh 11564, Saudi Arabia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Contact</h4>
                  <p className="text-gray-600">+966 11 XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">Icdra2026@sfda.gov.sa</p>
                </div>
              </div>
            </CardContent>
          </Card> */}

          {/* Venue Features */}
          <Card>
            <CardHeader>
              <CardTitle>Venue Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Main auditorium capacity: 1,200 seats</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>8 breakout rooms for concurrent sessions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Exhibition space for 50+ booths</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>High-speed WiFi throughout</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Professional A/V equipment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Simultaneous interpretation facilities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Accessible facilities (wheelchair access)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>On-site catering and dining facilities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Location Map</CardTitle>
            <h4 className="text-md font-medium text-gray-700 mt-1">
              Crowne Plaza Riyadh RDC Hotel & Convention by IHG
            </h4>
            <p className="text-sm text-muted-foreground">
              Wadi Al Muaydin Street, Unit 4, Imam Saud Ibn Abdul Aziz Road, Riyadh 12382
            </p>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg overflow-hidden h-64 w-full">
              <iframe
                title="Hotel Location Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps?q=Crowne+Plaza+Riyadh+Rdc+Hotel+%26+Convention+by+IHG&output=embed"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <Button className="bg-blue-900 hover:bg-blue-800" asChild>
                <a
                  href="https://www.google.com/maps?q=Crowne+Plaza+Riyadh+Rdc+Hotel+%26+Convention+by+IHG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>




        {/* Transportation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plane className="w-5 h-5 mr-2" />
                From the Airport
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">King Khalid International Airport (RUH)</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Distance: 45 km (30 minutes by car)</li>
                  <li>• Taxi: Available 24/7 (~120-150 SAR)</li>
                  <li>• Uber/Careem: Available (~80-120 SAR)</li>
                  <li>• Airport shuttle: Available on request</li>
                  <li>• Rental cars: Available at airport</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Car className="w-5 h-5 mr-2" />
                Local Transportation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Getting Around Riyadh</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Riyadh Metro: Line 1 (nearest station: 5 min walk)</li>
                  <li>• Taxi services: Readily available</li>
                  <li>• Ride-sharing: Uber, Careem, Bolt</li>
                  <li>• Conference shuttle: Daily service from hotels</li>
                  <li>• Parking: 500 spaces available on-site</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Important Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Security & Access</h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Photo ID required for entry</li>
                  <li>• Security screening at entrance</li>
                  <li>• Conference badge must be worn at all times</li>
                  <li>• Bag inspection may be required</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Facilities</h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Prayer rooms available</li>
                  <li>• Nursing/quiet rooms for mothers</li>
                  <li>• Medical assistance on-site</li>
                  <li>• Currency exchange services</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Venue;
