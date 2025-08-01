import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { FileText, Clock, CheckCircle, AlertCircle, Download } from "lucide-react";

const Visa = () => {
  const handleDownloadVisaForm = async () => {
    try {
      const response = await fetch('/api/download/visa-form');

      if (!response.ok) {
        throw new Error('Failed to download visa form');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'visa-application-form.docx';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading visa form:', error);
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Visa Information
          </h1>
          <p className="text-lg text-gray-600">
            Complete guide to obtaining a visa for Saudi Arabia
          </p>
        </div>

        {/* Visa Support Alert */}
        <Alert className="mb-8 border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            <strong>Official Visa Support Available:</strong> ICDRA 2026 provides official invitation letters
            for registered participants to support your visa application.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Visa Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Tourist/Business Visa</h4>
                  <p className="text-gray-700 mb-3">
                    Most international visitors require a visa to enter Saudi Arabia.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Required Documents</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Passport valid for at least 6 months</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Completed visa application form</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Recent passport-sized photograph</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Conference invitation letter (provided by ICDRA)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Proof of accommodation booking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Return flight ticket</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Application Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                      <span className="text-blue-800 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Register for ICDRA 2026</h4>
                      <p className="text-gray-600">Complete your conference registration and indicate if you need visa support.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                      <span className="text-blue-800 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Receive Invitation Letter</h4>
                      <p className="text-gray-600">We will send you an official invitation letter within 5-7 business days.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                      <span className="text-blue-800 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Apply for Visa</h4>
                      <p className="text-gray-600">Submit your application online or at the nearest Saudi embassy/consulate.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                      <span className="text-blue-800 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Await Processing</h4>
                      <p className="text-gray-600">Processing time varies by nationality (typically 3-15 business days).</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Important Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <Alert className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Apply Early:</strong> Start your visa application at least 4-6 weeks before travel to avoid delays.
                  </AlertDescription>
                </Alert>

                <div className="space-y-3 text-sm text-gray-700">
                  <p>• Some nationalities may be eligible for visa-on-arrival or e-visa</p>
                  <p>• Visa fees vary depending on nationality and visa type</p>
                  <p>• Ensure your passport has at least two blank pages for entry/exit stamps</p>
                  <p>• Check if you need additional vaccinations or health certificates</p>
                  <p>• Business visas may require additional documentation from your employer</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-blue-900 hover:bg-blue-800">
                  <FileText className="w-4 h-4 mr-2" />
                  Request Invitation Letter
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleDownloadVisaForm}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Visa Form
                </Button>
                <Button variant="outline" className="w-full">
                  Check Visa Requirements
                </Button>
                <Button variant="outline" className="w-full">
                  Find Nearest Embassy
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Processing Times</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {/* <div className="flex justify-between items-center">
                    <span className="text-sm">E-Visa</span>
                    <Badge variant="outline">24-72 hours</Badge>
                  </div> */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Embassy/Consulate</span>
                    <Badge variant="outline">3-15 days</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Visa on Arrival</span>
                    <Badge variant="outline">Same day</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Visa Support:</strong></p>
                <p>Icdra2026@sfda.gov.sa</p>
                {/* <p>+966 11 XXX XXXX</p> */}
                <p className="text-gray-600 mt-3">
                  Our visa support team is available Monday-Thursday, 8 AM - 5 PM (GMT+3)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visa;