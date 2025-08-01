import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { RegistrationTypesSection } from "@/components/registration/RegistrationTypesSection";
import { PersonalInfoSection } from "@/components/registration/PersonalInfoSection";
import { ProfessionalInfoSection } from "@/components/registration/ProfessionalInfoSection";
import { ContactInfoSection } from "@/components/registration/ContactInfoSection";

const Registration = () => {
  const [formData, setFormData] = useState({
    familyName: "",
    firstName: "",
    nationality: "",
    countryOfWork: "",
    cityProvince: "",
    jobTitle: "",
    companyOrganization: "",
    organizationType: "",
    email: "",
    mobilePhone: "",
    phoneCountry: "",
    agreeCodeOfConduct: false,
    registrationType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    setError('');
  };

  const validateForm = () => {
    const requiredFields = [
      'familyName', 'firstName', 'nationality', 'countryOfWork',
      'cityProvince', 'jobTitle', 'companyOrganization', 'organizationType',
      'email', 'mobilePhone', 'phoneCountry', 'registrationType'
    ];

    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        const fieldName = field.replace(/([A-Z])/g, ' $1').toLowerCase();
        setError(`Please fill in the ${fieldName} field.`);
        return false;
      }
    }

    if (!formData.agreeCodeOfConduct) {
      setError("Please agree to the Code of Conduct to proceed.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const mapRegistrationType = (type: string) => {
    const typeMap: Record<string, string> = {
      'pre-icdra': 'PRE_ICDRA_ONLY',
      'combined': 'PRE_ICDRA_AND_ICDRA_COMBINED',
      'icdra-only': 'ICDRA_ONLY'
    };
    return typeMap[type] || type;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setError('');

    try {
      const submissionData = {
        ...formData,
        registrationType: mapRegistrationType(formData.registrationType)
      };

      const response = await fetch('/api/registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      setIsSubmitted(true);
      toast({
        title: "Registration Successful!",
        description: "Thank you for registering. You will receive a confirmation email shortly.",
      });

    } catch (error: any) {
      setError(error.message);
      toast({
        title: "Registration Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewRegistration = () => {
    setIsSubmitted(false);
    setFormData({
      familyName: "",
      firstName: "",
      nationality: "",
      countryOfWork: "",
      cityProvince: "",
      jobTitle: "",
      companyOrganization: "",
      organizationType: "",
      email: "",
      mobilePhone: "",
      phoneCountry: "",
      agreeCodeOfConduct: false,
      registrationType: "",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Registration Submitted Successfully!
              </h1>
              <p className="text-gray-600 mb-6">
                Thank you for registering for ICDRA 2025. Your registration is now pending review.
                You will receive a confirmation email shortly with further details.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800">
                  <strong>What's next?</strong><br />
                  Our team will review your registration and send you confirmation details within 2-3 business days.
                </p>
              </div>
              <Button onClick={handleNewRegistration} variant="outline">
                Submit Another Registration
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ICDRA 2025 Registration
          </h1>
          <p className="text-lg text-gray-600">
            Please complete all fields to register for the conference
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Registration Form</CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <RegistrationTypesSection
                registrationType={formData.registrationType}
                onRegistrationTypeChange={(value) => handleInputChange('registrationType', value)}
              />

              <PersonalInfoSection
                formData={formData}
                onInputChange={handleInputChange}
              />

              <ProfessionalInfoSection
                formData={formData}
                onInputChange={handleInputChange}
              />

              <ContactInfoSection
                formData={formData}
                onInputChange={handleInputChange}
              />

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeCodeOfConduct"
                  checked={formData.agreeCodeOfConduct}
                  onCheckedChange={(checked) => handleInputChange('agreeCodeOfConduct', checked)}
                  required
                />
                <Label htmlFor="agreeCodeOfConduct" className="text-sm">
                  I agree to abide by the Code of Conduct to prevent harassment including sexual harassment at WHO events.{' '}
                  <a
                    href="https://www.who.int/about/ethics/code-of-conduct-at-who-events"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    https://www.who.int/about/ethics/code-of-conduct-at-who-events
                  </a>{' '}
                  *
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting Registration...
                  </>
                ) : (
                  "Submit Registration"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registration;