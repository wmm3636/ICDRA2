import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Search, FileText, Video, Image, File } from "lucide-react";

const Presentations = () => {
  const materials = [
    {
      title: "Presentation sample #1",
      type: "presentation",
      session: "Opening Ceremony",
      speaker: "Dr. Johnson, Michael",
      date: "Day 1",
      format: "PDF",
      size: "2.3 MB",
      downloads: 245
    },
    {
      title: "Presentation sample #2",
      type: "presentation",
      session: "Keynote Session",
      speaker: "Mrs. Smith, Sarah",
      date: "Day 1",
      format: "PDF",
      size: "4.1 MB",
      downloads: 189
    },
    {
      title: "Presentation sample #3",
      type: "video",
      session: "Panel Discussion",
      speaker: "Mr. Wilson, Robert",
      date: "Day 1",
      format: "MP4",
      size: "156 MB",
      downloads: 67
    },
    {
      title: "Presentation sample #4",
      type: "document",
      session: "Interactive Workshop",
      speaker: "Dr. Brown, Jennifer",
      date: "Day 2",
      format: "ZIP",
      size: "8.7 MB",
      downloads: 123
    },
    {
      title: "Presentation sample #5",
      type: "image",
      session: "General",
      speaker: "Mrs. Davis, Emily",
      date: "Day 1",
      format: "ZIP",
      size: "45 MB",
      downloads: 89
    },
    {
      title: "Presentation sample #6",
      type: "document",
      session: "Synthesis Session",
      speaker: "Mr. Anderson, David",
      date: "Day 3",
      format: "PDF",
      size: "1.8 MB",
      downloads: 201
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'presentation': return <FileText className="w-5 h-5" />;
      case 'video': return <Video className="w-5 h-5" />;
      case 'image': return <Image className="w-5 h-5" />;
      default: return <File className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'presentation': return 'bg-blue-100 text-blue-800';
      case 'video': return 'bg-red-100 text-red-800';
      case 'image': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Conference Presentations
          </h1>
          <p className="text-lg text-gray-600">
            Access presentations, recordings, and resources from ICDRA 2026
          </p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search presentations..."
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Filter by Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="presentation">Presentations</SelectItem>
                    <SelectItem value="video">Videos</SelectItem>
                    <SelectItem value="document">Documents</SelectItem>
                    <SelectItem value="image">Images</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Filter by Day" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Days</SelectItem>
                    <SelectItem value="day1">Day 1</SelectItem>
                    <SelectItem value="day2">Day 2</SelectItem>
                    <SelectItem value="day3">Day 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {materials.map((material, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(material.type)}
                    <Badge className={getTypeColor(material.type)}>
                      {material.type.charAt(0).toUpperCase() + material.type.slice(1)}
                    </Badge>
                  </div>
                  <Badge variant="outline">{material.date}</Badge>
                </div>

                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {material.title}
                </h3>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p><strong>Session:</strong> {material.session}</p>
                  <p><strong>Speaker:</strong> {material.speaker}</p>
                  <div className="flex justify-between">
                    <span><strong>Format:</strong> {material.format}</span>
                    <span><strong>Size:</strong> {material.size}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {material.downloads} downloads
                  </span>
                  <Button size="sm" className="bg-blue-900 hover:bg-blue-800">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bulk Download Options */}
        <Card>
          <CardHeader>
            <CardTitle>Bulk Download Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">All Presentations</h4>
                <p className="text-sm text-gray-600 mb-3">Complete collection of presentation slides</p>
                <Button variant="outline" size="sm">
                  Download ZIP (12.4 MB)
                </Button>
              </div>

              <div className="text-center p-4 border rounded-lg">
                <Video className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Session Recordings</h4>
                <p className="text-sm text-gray-600 mb-3">no recording</p>
                {/* <Button variant="outline" size="sm">
                  Access Portal
                </Button> */}
              </div>

              <div className="text-center p-4 border rounded-lg">
                <File className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Complete Package</h4>
                <p className="text-sm text-gray-600 mb-3">All materials and resources</p>
                <Button variant="outline" size="sm">
                  Download All (156 MB)
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Access Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Access Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <div>
                <h4 className="font-semibold mb-2">Registration Required</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Access to conference presentations is restricted to registered participants.
                  Please log in with your registration credentials to download materials.
                </p>
                <Button variant="outline" size="sm">
                  Login to Access
                </Button>
              </div> */}

              <div>
                <h4 className="font-semibold mb-2">Usage Guidelines</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Materials are for personal and educational use only</li>
                  <li>• Commercial use of the meeting materials is strictly prohibited</li>
                  {/* <li>• Please cite ICDRA 2025 when using materials</li> */}
                  <li>• Respect copyright and intellectual property rights</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Presentations;
