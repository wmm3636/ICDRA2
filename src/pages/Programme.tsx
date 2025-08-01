
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, User, Download } from "lucide-react";

const Programme = () => {
  const [selectedDay, setSelectedDay] = useState("day1");

  const programme = {
    day1: {
      date: "April 13, 2026",
      title: "Opening & Regulatory Innovation",
      sessions: [
        {
          time: "08:00 - 09:00",
          title: "Registration & Welcome Coffee",
          type: "networking",
          location: "Main Foyer",
          speaker: null,
        },
        {
          time: "09:00 - 09:30",
          title: "Opening Ceremony",
          type: "plenary",
          location: "Main Auditorium",
          speaker: "H.E. Minister of Health, Saudi Arabia",
        },
        {
          time: "09:30 - 10:30",
          title: "Keynote: The Future of Global Drug Regulation",
          type: "keynote",
          location: "Main Auditorium",
          speaker: "Dr. WHO Director-General",
        },
        {
          time: "10:30 - 11:00",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area",
          speaker: null,
        },
        {
          time: "11:00 - 12:30",
          title: "Panel: Regulatory Innovation and Digital Transformation",
          type: "panel",
          location: "Main Auditorium",
          speaker: "International Regulatory Leaders",
        },
        {
          time: "12:30 - 13:30",
          title: "Lunch",
          type: "break",
          location: "Dining Hall",
          speaker: null,
        },
        {
          time: "13:30 - 15:00",
          title: "Concurrent Sessions",
          type: "concurrent",
          location: "Rooms A, B, C",
          speaker: "Various Experts",
        },
        {
          time: "15:00 - 15:30",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area",
          speaker: null,
        },
        {
          time: "15:30 - 17:00",
          title: "Workshop: Regulatory Science Applications",
          type: "workshop",
          location: "Workshop Hall",
          speaker: "Technical Experts",
        },
        {
          time: "19:00 - 21:00",
          title: "Welcome Reception",
          type: "social",
          location: "Rooftop Terrace",
          speaker: null,
        },
      ],
    },
    day2: {
      date: "April 14, 2026",
      title: "Global Harmonization & Supply Chain",
      sessions: [
        {
          time: "09:00 - 10:30",
          title: "Plenary: Global Supply Chain Security",
          type: "plenary",
          location: "Main Auditorium",
          speaker: "International Trade & Security Experts",
        },
        {
          time: "10:30 - 11:00",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area",
          speaker: null,
        },
        {
          time: "11:00 - 12:30",
          title: "Panel: Antimicrobial Resistance - Regulatory Responses",
          type: "panel",
          location: "Main Auditorium",
          speaker: "AMR Global Leaders",
        },
        {
          time: "12:30 - 13:30",
          title: "Lunch",
          type: "break",
          location: "Dining Hall",
          speaker: null,
        },
        {
          time: "13:30 - 15:00",
          title: "Regional Forums",
          type: "forum",
          location: "Multiple Venues",
          speaker: "Regional Representatives",
        },
        {
          time: "15:00 - 15:30",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area",
          speaker: null,
        },
        {
          time: "15:30 - 17:00",
          title: "Interactive Session: Digital Health Regulation",
          type: "interactive",
          location: "Innovation Lab",
          speaker: "Digital Health Experts",
        },
      ],
    },
    day3: {
      date: "April 15, 2026",
      title: "Capacity Building & Collaboration",
      sessions: [
        {
          time: "09:00 - 10:30",
          title: "Keynote: Emergency Preparedness & Response",
          type: "keynote",
          location: "Main Auditorium",
          speaker: "WHO Emergency Programme Director",
        },
        {
          time: "10:30 - 11:00",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area",
          speaker: null,
        },
        {
          time: "11:00 - 12:30",
          title: "Panel: Building Regulatory Capacity in Emerging Markets",
          type: "panel",
          location: "Main Auditorium",
          speaker: "Capacity Building Experts",
        },
        {
          time: "12:30 - 13:30",
          title: "Lunch",
          type: "break",
          location: "Dining Hall",
          speaker: null,
        },
        {
          time: "13:30 - 15:00",
          title: "Workshop: Regulatory Pathways for Innovation",
          type: "workshop",
          location: "Workshop Hall",
          speaker: "Innovation Experts",
        },
        {
          time: "15:00 - 15:30",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area",
          speaker: null,
        },
        {
          time: "15:30 - 17:00",
          title: "Panel: International Collaboration Models",
          type: "panel",
          location: "Main Auditorium",
          speaker: "International Cooperation Leaders",
        },
        {
          time: "19:30 - 22:00",
          title: "Gala Dinner & Cultural Program",
          type: "social",
          location: "Grand Ballroom",
          speaker: null,
        },
      ],
    },
    day4: {
      date: "April 16, 2026",
      title: "Future Directions & Closing",
      sessions: [
        {
          time: "09:00 - 10:30",
          title: "Panel: Future of Pharmaceutical Regulation",
          type: "panel",
          location: "Main Auditorium",
          speaker: "Future-focused Regulatory Leaders",
        },
        {
          time: "10:30 - 11:00",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area",
          speaker: null,
        },
        {
          time: "11:00 - 12:30",
          title: "Synthesis Session: Key Outcomes & Recommendations",
          type: "synthesis",
          location: "Main Auditorium",
          speaker: "Conference Rapporteurs",
        },
        {
          time: "12:30 - 13:30",
          title: "Lunch",
          type: "break",
          location: "Dining Hall",
          speaker: null,
        },
        {
          time: "13:30 - 15:00",
          title: "Action Planning Session",
          type: "interactive",
          location: "Main Auditorium",
          speaker: "Facilitation Team",
        },
        {
          time: "15:00 - 15:30",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area",
          speaker: null,
        },
        {
          time: "15:30 - 16:30",
          title: "Closing Ceremony & Next Steps",
          type: "closing",
          location: "Main Auditorium",
          speaker: "ICDRA Leadership",
        },
      ],
    },
    day5: {
      date: "April 17, 2026",
      title: "Future Directions & Closing",
      sessions: [
        {
          time: "09:00 - 10:30",
          title: "Panel: Future of Pharmaceutical Regulation",
          type: "panel",
          location: "Main Auditorium",
          speaker: "Future-focused Regulatory Leaders",
        },
        {
          time: "10:30 - 11:00",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area",
          speaker: null,
        },
        {
          time: "11:00 - 12:30",
          title: "Synthesis Session: Key Outcomes & Recommendations",
          type: "synthesis",
          location: "Main Auditorium",
          speaker: "Conference Rapporteurs",
        },
        {
          time: "12:30 - 13:30",
          title: "Lunch",
          type: "break",
          location: "Dining Hall",
          speaker: null,
        },
        {
          time: "13:30 - 15:00",
          title: "Action Planning Session",
          type: "interactive",
          location: "Main Auditorium",
          speaker: "Facilitation Team",
        },
        {
          time: "15:00 - 15:30",
          title: "Coffee Break",
          type: "break",
          location: "Exhibition Area",
          speaker: null,
        },
        {
          time: "15:30 - 16:30",
          title: "Closing Ceremony & Next Steps",
          type: "closing",
          location: "Main Auditorium",
          speaker: "ICDRA Leadership",
        },
      ],
    }
  };

  const getSessionTypeColor = (type: string) => {
    const colors = {
      plenary: "bg-blue-100 text-blue-800",
      keynote: "bg-purple-100 text-purple-800",
      panel: "bg-green-100 text-green-800",
      workshop: "bg-orange-100 text-orange-800",
      concurrent: "bg-yellow-100 text-yellow-800",
      interactive: "bg-pink-100 text-pink-800",
      forum: "bg-indigo-100 text-indigo-800",
      synthesis: "bg-teal-100 text-teal-800",
      social: "bg-rose-100 text-rose-800",
      networking: "bg-gray-100 text-gray-800",
      break: "bg-gray-50 text-gray-600",
      closing: "bg-red-100 text-red-800",
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Conference Programme
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Five days of comprehensive sessions, workshops, and networking opportunities
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="bg-blue-900 hover:bg-blue-800">
              <Download className="w-4 h-4 mr-2" />
              Download Full Programme (PDF)
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Abstract Book
            </Button>
          </div>
        </div>

        <Tabs value={selectedDay} onValueChange={setSelectedDay} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="day1">Day 1 - Apr 13</TabsTrigger>
            <TabsTrigger value="day2">Day 2 - Apr 14</TabsTrigger>
            <TabsTrigger value="day3">Day 3 - Apr 15</TabsTrigger>
            <TabsTrigger value="day4">Day 4 - Apr 16</TabsTrigger>
            <TabsTrigger value="day5">Day 5 - Apr 17</TabsTrigger>
          </TabsList>

          {Object.entries(programme).map(([dayKey, day]) => (
            <TabsContent key={dayKey} value={dayKey} className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {day.date}: {day.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {day.sessions.map((session, index) => (
                      <div
                        key={index}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge className={getSessionTypeColor(session.type)}>
                                {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                              </Badge>
                              <div className="flex items-center text-sm text-gray-600">
                                <Clock className="w-4 h-4 mr-1" />
                                {session.time}
                              </div>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {session.title}
                            </h3>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {session.location}
                              </div>
                              {session.speaker && (
                                <div className="flex items-center">
                                  <User className="w-4 h-4 mr-1" />
                                  {session.speaker}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Session Types</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-100 text-blue-800">Plenary</Badge>
                  <span className="text-sm text-gray-600">Full assembly sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-purple-100 text-purple-800">Keynote</Badge>
                  <span className="text-sm text-gray-600">Featured presentations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-800">Panel</Badge>
                  <span className="text-sm text-gray-600">Expert discussions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-orange-100 text-orange-800">Workshop</Badge>
                  <span className="text-sm text-gray-600">Hands-on sessions</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Important Notes</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 space-y-2">
              <p>• All sessions will be conducted in English</p>
              <p>• Simultaneous interpretation may be available for selected sessions</p>
              <p>• ICDRA is in-person conference, with no remote participation </p>
              <p>• Coffee breaks include networking opportunities</p>
              <p>• Detailed abstracts available in the downloadable programme</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Programme;
