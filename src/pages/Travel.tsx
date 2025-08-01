
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plane, Car, Train, MapPin, Clock, Info, Calculator, Smartphone } from "lucide-react";
import { useState } from "react";

const Travel = () => {
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [sarAmount, setSarAmount] = useState("");
  
  // Exchange rates to SAR (approximate)
  const exchangeRates: { [key: string]: number } = {
    USD: 3.75,
    EUR: 4.1,
    GBP: 4.7,
    JPY: 0.025,
    AUD: 2.5,
    CAD: 2.8,
    CHF: 4.2,
    CNY: 0.52,
    INR: 0.045,
    AED: 1.02,
    KWD: 12.2,
    QAR: 1.03,
    BHD: 9.95,
    OMR: 9.75,
    EGP: 0.077,
    JOD: 5.29,
    LBP: 0.00025,
  };
  
  const handleCurrencyConversion = (value: string) => {
    setAmount(value);
    if (value && selectedCurrency) {
      const rate = exchangeRates[selectedCurrency];
      const converted = (parseFloat(value) * rate).toFixed(2);
      setSarAmount(isNaN(parseFloat(converted)) ? "" : converted);
    } else {
      setSarAmount("");
    }
  };
  
  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
    if (amount) {
      const rate = exchangeRates[currency];
      const converted = (parseFloat(amount) * rate).toFixed(2);
      setSarAmount(isNaN(parseFloat(converted)) ? "" : converted);
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Travel Information
          </h1>
          <p className="text-lg text-gray-600">
            Everything you need to know about traveling to Riyadh, Saudi Arabia
          </p>
        </div>

        {/* Airport Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Plane className="w-6 h-6 mr-2" />
              King Khalid International Airport (RUH)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Airport Details</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• IATA Code: RUH</li>
                  <li>• Distance to venue: 45 km</li>
                  <li>• Travel time: 30-45 minutes</li>
                  <li>• Operating: 24/7</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Transportation</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Taxi: 120-150 SAR (~$32-40)</li>
                  <li>• Uber/Careem: 80-120 SAR (~$21-32)</li>
                  <li>• Airport shuttle: Available</li>
                  <li>• Car rental: Multiple agencies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Facilities</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Free WiFi</li>
                  <li>• Currency exchange</li>
                  <li>• Duty-free shopping</li>
                  <li>• Restaurants & cafes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Major Airlines */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Major Airlines Serving Riyadh</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Saudi Arabian Airlines", "Emirates", "Qatar Airways", 
                "Etihad Airways", "Turkish Airlines", "Lufthansa",
                "British Airways", "Air France", "KLM", "Delta",
                "United Airlines", "Singapore Airlines"
              ].map((airline, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded">
                  <p className="text-sm font-medium">{airline}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Riyadh Metro - 2 Column Layout */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Train className="w-5 h-5 mr-2" />
              Riyadh Metro
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-100 text-blue-800">Line 1</Badge>
                  <span className="text-sm">Blue Line - Nearest to venue</span>
                </div>
                
                {/* Official Website */}
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-sm mb-1">Official Metro & Bus Website (Darb)</h5>
                  <p className="text-sm text-blue-800">
                    Purchase tickets via Darb app or website: <a href="https://rpt.sa/en" target="_blank" rel="noopener noreferrer" className="underline">https://rpt.sa/en</a>
                  </p>
                  <p className="text-xs text-blue-600 mt-1">Available on Google Play and App Store</p>
                </div>

                {/* Ticket Prices */}
                <div>
                  <h5 className="font-semibold mb-2">Ticket Prices (via Darb app)</h5>
                  <div className="space-y-3">
                    <div>
                      <h6 className="font-medium text-sm text-green-700">Standard Class (unlimited rides)</h6>
                      <ul className="space-y-1 text-xs text-gray-600 ml-2">
                        <li>• 2-hour pass – SAR 4</li>
                        <li>• 3-day pass – SAR 20</li>
                        <li>• 7-day pass – SAR 40</li>
                        <li>• 30-day pass – SAR 140</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-medium text-sm text-purple-700">First Class (enhanced comfort)</h6>
                      <ul className="space-y-1 text-xs text-gray-600 ml-2">
                        <li>• 2-hour pass – SAR 10</li>
                        <li>• 3-day pass – SAR 50</li>
                        <li>• 7-day pass – SAR 100</li>
                        <li>• 30-day pass – SAR 350</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    * Passes are valid on both metro and Riyadh city buses during their advertised durations
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* Operating Hours */}
                <div>
                  <h5 className="font-semibold mb-2">Operating Hours</h5>
                  <p className="text-sm text-gray-600">
                    Daily: 6:00 AM - 12:00 midnight (all lines, metro and integrated buses)
                  </p>
                </div>

                {/* How to Ride */}
                <div>
                  <h5 className="font-semibold mb-2">How to Ride</h5>
                  <ol className="space-y-1 text-sm text-gray-600 list-decimal list-inside">
                    <li>Download and register on the Darb app</li>
                    <li>Choose your class (Standard or First Class) and duration</li>
                    <li>Pay within the app to receive a QR code or use smart Darb card</li>
                    <li>Scan at entry and exit gates</li>
                    <li>After first swipe, ticket is active for chosen time period</li>
                    <li>Use same pass for buses during validity—no extra charge</li>
                  </ol>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ride Services */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Car className="w-5 h-5 mr-2" />
              Ride Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Available Apps</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Uber</Badge>
                  <Badge variant="outline">Careem</Badge>
                  <Badge variant="outline">Bolt</Badge>
                </div>
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <p>• Standard ride: 15-25 SAR (~$4-7)</p>
                <p>• Premium ride: 25-40 SAR (~$7-11)</p>
                <p>• Available 24/7</p>
                <p>• Cash and card payments accepted</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Travel Tips */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="w-5 h-5 mr-2" />
              Important Travel Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Before You Travel</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Ensure passport validity (6+ months remaining)</li>
                  <li>• Apply for visa well in advance</li>
                  <li>• Check airline baggage restrictions</li>
                  <li>• Purchase travel insurance</li>
                  <li>• Download offline maps and translation apps</li>
                  <li>• Inform your bank of travel plans</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Upon Arrival</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Keep passport and visa documents handy</li>
                  <li>• Exchange currency at airport or banks</li>
                  <li>• Get a local SIM card for data/calls</li>
                  <li>• Download Riyadh Metro and ride-sharing apps</li>
                  <li>• Save important local numbers</li>
                  <li>• Respect local customs and dress codes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mobile Carriers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Smartphone className="w-5 h-5 mr-2" />
              Mobile Carriers in Saudi Arabia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">STC (Saudi Telecom)</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Largest network coverage</li>
                  <li>• Best 5G coverage</li>
                  <li>• Tourist SIM available</li>
                  <li>• Data plans from 50 SAR</li>
                </ul>
                <Badge className="bg-purple-100 text-purple-800">Most Popular</Badge>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Mobily</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Good urban coverage</li>
                  <li>• Competitive data rates</li>
                  <li>• Prepaid options available</li>
                  <li>• Plans from 35 SAR</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Zain</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Strong international roaming</li>
                  <li>• Budget-friendly options</li>
                  <li>• Easy activation process</li>
                  <li>• Plans from 30 SAR</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold mb-2">Getting a SIM Card:</h4>
              <ul className="space-y-1 text-sm text-green-800">
                <li>• Available at airport, malls, and telecom stores</li>
                <li>• Bring your passport for registration</li>
                <li>• Activation usually takes 15-30 minutes</li>
                <li>• Tourist packages include data, calls, and SMS</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Local Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Time Zone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p><strong>GMT+3</strong></p>
                <p>Arabia Standard Time (AST)</p>
                <p>No daylight saving time</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Currency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p><strong>Saudi Riyal (SAR)</strong></p>
                <p>1 USD ≈ 3.75 SAR</p>
                <p>Cards widely accepted</p>
                <p>ATMs available everywhere</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weather (April)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p><strong>Temperature:</strong> 30-40°C</p>
                <p><strong>Season:</strong> Summer</p>
                <p><strong>Weather:</strong> Hot & dry</p>
                <p><strong>Humidity:</strong> Low</p>
                <p><strong>Rainfall:</strong> Minimal</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Currency Converter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="w-5 h-5 mr-2" />
              Currency Converter to Saudi Riyals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div className="space-y-2">
                <Label htmlFor="currency-select">From Currency</Label>
                <Select value={selectedCurrency} onValueChange={handleCurrencyChange}>
                  <SelectTrigger id="currency-select">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">US Dollar (USD)</SelectItem>
                    <SelectItem value="EUR">Euro (EUR)</SelectItem>
                    <SelectItem value="GBP">British Pound (GBP)</SelectItem>
                    <SelectItem value="JPY">Japanese Yen (JPY)</SelectItem>
                    <SelectItem value="AUD">Australian Dollar (AUD)</SelectItem>
                    <SelectItem value="CAD">Canadian Dollar (CAD)</SelectItem>
                    <SelectItem value="CHF">Swiss Franc (CHF)</SelectItem>
                    <SelectItem value="CNY">Chinese Yuan (CNY)</SelectItem>
                    <SelectItem value="INR">Indian Rupee (INR)</SelectItem>
                    <SelectItem value="AED">UAE Dirham (AED)</SelectItem>
                    <SelectItem value="KWD">Kuwaiti Dinar (KWD)</SelectItem>
                    <SelectItem value="QAR">Qatari Riyal (QAR)</SelectItem>
                    <SelectItem value="BHD">Bahraini Dinar (BHD)</SelectItem>
                    <SelectItem value="OMR">Omani Rial (OMR)</SelectItem>
                    <SelectItem value="EGP">Egyptian Pound (EGP)</SelectItem>
                    <SelectItem value="JOD">Jordanian Dinar (JOD)</SelectItem>
                    <SelectItem value="LBP">Lebanese Pound (LBP)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount-input">Amount</Label>
                <Input
                  id="amount-input"
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => handleCurrencyConversion(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sar-result">Saudi Riyals (SAR)</Label>
                <Input
                  id="sar-result"
                  type="text"
                  value={sarAmount}
                  readOnly
                  className="bg-gray-50"
                  placeholder="Converted amount"
                />
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Exchange Rate:</strong> 1 {selectedCurrency} = {exchangeRates[selectedCurrency]} SAR (approximate)
              </p>
              <p className="text-xs text-blue-600 mt-1">
                Note: Rates may vary at banks and exchange offices. This converter uses approximate rates for reference only.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Travel;
