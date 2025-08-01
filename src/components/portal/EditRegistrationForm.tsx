import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EditRegistrationFormProps {
  registrationId: string;
  onSuccess: () => void;
  onCancel: () => void;
}

interface RegistrationFormData {
  familyName: string;
  firstName: string;
  nationality: string;
  countryOfWork: string;
  cityProvince: string;
  jobTitle: string;
  companyOrganization: string;
  organizationType: string;
  email: string;
  mobilePhone: string;
  phoneCountry: string;
  registrationType: string;
}

const EditRegistrationForm = ({ registrationId, onSuccess, onCancel }: EditRegistrationFormProps) => {
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<RegistrationFormData>({
    familyName: '',
    firstName: '',
    nationality: '',
    countryOfWork: '',
    cityProvince: '',
    jobTitle: '',
    companyOrganization: '',
    organizationType: '',
    email: '',
    mobilePhone: '',
    phoneCountry: '',
    registrationType: ''
  });

  const { toast } = useToast();

  const organizationTypes = [
    "Regulatory Authority",
    "Pharmaceutical Company", 
    "Academic Institution",
    "Research Organization",
    "Consulting Firm",
    "International Organization",
    "Other",
  ];

  useEffect(() => {
    const fetchRegistration = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await fetch(`/api/registrations/${registrationId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();
        if (response.ok) {
          const reg = data.registration;
          setFormData({
            familyName: reg.familyName,
            firstName: reg.firstName,
            nationality: reg.nationality,
            countryOfWork: reg.countryOfWork,
            cityProvince: reg.cityProvince,
            jobTitle: reg.jobTitle,
            companyOrganization: reg.companyOrganization,
            organizationType: reg.organizationType,
            email: reg.email,
            mobilePhone: reg.mobilePhone,
            phoneCountry: reg.phoneCountry,
            registrationType: reg.registrationType
          });
        } else {
          throw new Error(data.error || 'Failed to fetch registration');
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setFetchLoading(false);
      }
    };

    fetchRegistration();
  }, [registrationId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/registrations/${registrationId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update registration');
      }

      toast({
        title: "Registration updated successfully",
        description: `${formData.firstName} ${formData.familyName}'s registration has been updated.`,
      });

      onSuccess();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatRegistrationType = (type: string) => {
    const typeMap: Record<string, string> = {
      'PRE_ICDRA_ONLY': 'Pre-ICDRA Only',
      'PRE_ICDRA_AND_ICDRA_COMBINED': 'Pre-ICDRA & ICDRA Combined',
      'ICDRA_ONLY': 'ICDRA Only'
    };
    return typeMap[type] || type;
  };

  if (fetchLoading) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-8">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Edit Registration</CardTitle>
        <Button variant="ghost" size="sm" onClick={onCancel}>
          <X className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Label className="text-base font-semibold">Personal Information</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="familyName">Family Name</Label>
                <Input
                  id="familyName"
                  value={formData.familyName}
                  onChange={(e) => updateField('familyName', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <Input
                  id="nationality"
                  value={formData.nationality}
                  onChange={(e) => updateField('nationality', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="countryOfWork">Country of Work</Label>
                <Input
                  id="countryOfWork"
                  value={formData.countryOfWork}
                  onChange={(e) => updateField('countryOfWork', e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cityProvince">City/Province</Label>
              <Input
                id="cityProvince"
                value={formData.cityProvince}
                onChange={(e) => updateField('cityProvince', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-base font-semibold">Professional Information</Label>
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                value={formData.jobTitle}
                onChange={(e) => updateField('jobTitle', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyOrganization">Company/Organization</Label>
              <Input
                id="companyOrganization"
                value={formData.companyOrganization}
                onChange={(e) => updateField('companyOrganization', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organizationType">Organization Type</Label>
              <Select value={formData.organizationType} onValueChange={(value) => updateField('organizationType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select organization type" />
                </SelectTrigger>
                <SelectContent>
                  {organizationTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-base font-semibold">Contact Information</Label>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phoneCountry">Phone Country</Label>
                <Input
                  id="phoneCountry"
                  value={formData.phoneCountry}
                  onChange={(e) => updateField('phoneCountry', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobilePhone">Mobile Phone</Label>
                <Input
                  id="mobilePhone"
                  value={formData.mobilePhone}
                  onChange={(e) => updateField('mobilePhone', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-base font-semibold">Registration Information</Label>
            <div className="space-y-2">
              <Label htmlFor="registrationType">Registration Type</Label>
              <Select value={formData.registrationType} onValueChange={(value) => updateField('registrationType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select registration type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PRE_ICDRA_ONLY">Pre-ICDRA Only</SelectItem>
                  <SelectItem value="PRE_ICDRA_AND_ICDRA_COMBINED">Pre-ICDRA & ICDRA Combined</SelectItem>
                  <SelectItem value="ICDRA_ONLY">ICDRA Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                'Update Registration'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default EditRegistrationForm;