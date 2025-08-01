
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Star, MapPin, Phone, Mail, Wifi, Car, Utensils, Waves } from "lucide-react";

const Accommodation = () => {
  const hotels = [
    {
      name: "Riyadh Diplomatic Quarter - Marriott Executive Apartments",
      grading: "5 Star",
      rooms: "Over 220 rooms",
      price: "1500SR - 2000SR",
      distance: "1KM"
    },
    {
      name: "PossSarwat Park Hotel Riyadh - Diplomatic Quarter hotel",
      grading: "4 Star",
      rooms: "Over 150 rooms",
      price: "850SR - 1000SR",
      distance: "2KM"
    },
    {
      name: "PossibCourtyard Riyadh by Marriott Diplomatic Quarter - le hotel",
      grading: "4 Star",
      rooms: "Over 100 rooms",
      price: "1000SR",
      distance: "8KM"
    },
    {
      name: "Radisson Blu Hotel & Residence, Riyadh Diplomatic Quarter",
      grading: "4 Star",
      rooms: "Over 286 rooms",
      price: "1100SR - 1300SR",
      distance: "8KM"
    },
    {
      name: "Jareed",
      grading: "5 Star",
      rooms: "Over 60 rooms",
      price: "1500SR",
      distance: "6KM"
    },
    {
      name: "DoubleTree By Hilton",
      grading: "4 Star",
      rooms: "Over 150 rooms",
      price: "850SR",
      distance: "8KM"
    },
    {
      name: "Hilton Garden Inn",
      grading: "4 Star",
      rooms: "Over 100 rooms",
      price: "1000SR",
      distance: "8KM"
    },
    {
      name: "Movenpick",
      grading: "5 Star",
      rooms: "Over 300 rooms",
      price: "1350SR",
      distance: "8KM"
    },
    {
      name: "Iris Boutique",
      grading: "4 Star",
      rooms: "Over 50 rooms",
      price: "650SR",
      distance: "750M"
    },
    {
      name: "ART View",
      grading: "4 Star",
      rooms: "Over 90 rooms",
      price: "900SR",
      distance: "7KM"
    },
    {
      name: "Radisson Blu",
      grading: "5 Star",
      rooms: "Over 90 rooms",
      price: "1800SR",
      distance: "8KM"
    }
  ];

  const getStarRating = (grading: string) => {
    const stars = parseInt(grading.charAt(0));
    return stars;
  };

  const getBadgeVariant = (grading: string) => {
    const stars = getStarRating(grading);
    if (stars === 5) return "default";
    if (stars === 4) return "secondary";
    return "outline";
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Accommodation
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Official partner hotels with special rates for ICDRA 2026 attendees
          </p>
        </div>

        {/* Special Offer Banner */}
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Special Conference Rates</h2>
            <p className="text-blue-700 mb-4">
              Book through our official partners and save up to 25% on accommodation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-900 hover:bg-blue-800">
                Book Now - Group Code: ICDRA2026
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600">
                Download Booking Guide
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Hotels Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Available Hotels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Hotel</TableHead>
                    <TableHead>Grading</TableHead>
                    <TableHead>Number of Bedrooms</TableHead>
                    <TableHead>Approximate Price</TableHead>
                    <TableHead>Walking Distance from Potential Venue</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {hotels.map((hotel, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        <div className="max-w-xs">
                          {hotel.name}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Badge variant={getBadgeVariant(hotel.grading)}>
                            {hotel.grading}
                          </Badge>
                          <div className="flex items-center">
                            {[...Array(getStarRating(hotel.grading))].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{hotel.rooms}</TableCell>
                      <TableCell className="font-semibold text-green-600">
                        {hotel.price}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                          {hotel.distance}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-blue-900 hover:bg-blue-800">
                            Book
                          </Button>
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Booking Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Booking Instructions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p><strong>Group Code:</strong> Use "ICDRA2026" when booking</p>
              <p><strong>Booking Deadline:</strong> September 15, 2025</p>
              <p><strong>Cancellation:</strong> Free cancellation up to 48 hours before arrival</p>
              <p><strong>Check-in:</strong> October 14, 2025 (day before conference)</p>
              <p><strong>Check-out:</strong> October 18, 2025 (day after conference)</p>
              <p><strong>Payment:</strong> Credit card required for booking</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Important Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p><strong>Currency:</strong> All prices are listed in Saudi Riyals (SAR)</p>
              <p><strong>Distance:</strong> Walking distances are approximate from potential venue</p>
              <p><strong>Availability:</strong> Room availability subject to booking date</p>
              <p><strong>Special Rates:</strong> Conference rates valid only with group code</p>
              <p><strong>Amenities:</strong> All hotels include standard business amenities</p>
              <p><strong>Contact:</strong> For assistance, contact accommodation@icdra2025.sa</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
