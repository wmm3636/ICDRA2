
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const GeneralInfo = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            General Information
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn about ICDRA's mission, objectives, and the significance of the 2026 conference in Saudi Arabia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>About ICDRA</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  The International Conference of Drug Regulatory Authorities (ICDRA) is a unique global forum
                  organized by the World Health Organization (WHO) that brings together regulatory authorities,
                  international organizations, and other stakeholders to discuss current and emerging issues in
                  the regulation of medical products.
                </p>
                <p className="text-gray-700 mb-4">
                  ICDRA serves as the premier platform for regulatory authorities worldwide to exchange information,
                  share experiences, and explore collaborative approaches to address common regulatory challenges.
                  The conference facilitates dialogue between regulatory authorities and promotes convergence of
                  regulatory approaches to ensure the safety, efficacy, and quality of medical products worldwide.
                </p>
                <p className="text-gray-700 mb-4">
                  Since its inception in 1976, ICDRA has played a crucial role in fostering international cooperation
                  in pharmaceutical regulation, contributing to improved public health outcomes globally. The conference
                  has evolved to address emerging challenges including digital health technologies, regulatory science,
                  and global supply chain security.
                </p>
                <p className="text-gray-700">
                  The 20th ICDRA conference in Saudi Arabia represents a milestone in regulatory convergence, bringing
                  together decision-makers from national drug regulatory authorities, WHO, and regional regulatory
                  harmonization initiatives to shape the future of global pharmaceutical regulation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conference Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Facilitate dialogue and cooperation between regulatory authorities worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Share best practices in pharmaceutical regulation, oversight, and enforcement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Address emerging challenges in drug regulation, safety, and innovation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Promote convergence and harmonization of regulatory approaches globally</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Strengthen global regulatory networks and partnerships for better health outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Enhance regulatory capacity building initiatives in developing countries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Discuss regulatory science advancements and their implementation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Target Attendees</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Primary Participants</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• National Drug Regulatory Authorities</li>
                      <li>• WHO Headquarters and Regional Office representatives</li>
                      <li>• International regulatory organizations (ICH, IPRP)</li>
                      <li>• Regional harmonization initiatives (AMRH, AVAREF, EMA)</li>
                      <li>• Regulatory policy makers and senior officials</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Additional Stakeholders</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Academic institutions and research organizations</li>
                      <li>• Professional associations and regulatory societies</li>
                      <li>• Healthcare professionals and public health experts</li>
                      <li>• International development organizations</li>
                      <li>• Observer organizations (by invitation)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Historical Significance</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  ICDRA has been instrumental in advancing global regulatory convergence since 1976. Previous
                  conferences have led to significant developments in:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Establishment of international regulatory standards and guidelines</li>
                  <li>• Development of mutual recognition agreements between regulatory authorities</li>
                  <li>• Creation of regional regulatory harmonization initiatives</li>
                  <li>• Implementation of capacity-building programs for emerging economies</li>
                  <li>• Advancement of regulatory science and evidence-based decision making</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Dates</h4>
                  <p className="text-gray-700">April 13-17, 2026</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-700">Riyadh, Saudi Arabia</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-900">Host</h4>
                  <p className="text-gray-700">Saudi Food and Drug Authority (SFDA)</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-900">Organizer</h4>
                  <p className="text-gray-700">World Health Organization (WHO)</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-900">Language</h4>
                  <p className="text-gray-700">English (Primary)</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-900">Expected Participants</h4>
                  <p className="text-gray-700">500+ International Delegates</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-900">Conference Number</h4>
                  <p className="text-gray-700">20th ICDRA</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Themes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Regulatory Innovation and Digital Transformation</li>
                  <li>• Digital Health Technologies and AI in Regulation</li>
                  <li>• Global Supply Chain Security and Integrity</li>
                  <li>• Antimicrobial Resistance and Regulatory Response</li>
                  <li>• Regulatory Science and Evidence Generation</li>
                  <li>• Emergency Preparedness and Pandemic Response</li>
                  <li>• Capacity Building and Technical Cooperation</li>
                  <li>• Regional Harmonization and Convergence</li>
                  <li>• Quality Assurance and Manufacturing Standards</li>
                  <li>• Post-market Surveillance and Pharmacovigilance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regional Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-3">
                  The 2026 conference in Saudi Arabia will emphasize Middle East and North Africa (MENA)
                  region regulatory development while maintaining its global perspective.
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• MENA regulatory landscape</li>
                  <li>• Arab States pharmaceutical regulation</li>
                  <li>• Gulf Cooperation Council initiatives</li>
                  <li>• South-South cooperation models</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
