
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProfessionalInfoSectionProps {
  formData: {
    jobTitle: string;
    companyOrganization: string;
    organizationType: string;
  };
  onInputChange: (field: string, value: string) => void;
}

export const ProfessionalInfoSection = ({ formData, onInputChange }: ProfessionalInfoSectionProps) => {
  const organizationTypes = [
    "Regulatory Authority",
    "Pharmaceutical Company",
    "Academic Institution",
    "Research Organization",
    "Consulting Firm",
    "International Organization",
    "Other",
  ];

  return (
    <>
      <div>
        <Label htmlFor="jobTitle">Job Title *</Label>
        <Input
          id="jobTitle"
          value={formData.jobTitle}
          onChange={(e) => onInputChange('jobTitle', e.target.value)}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="companyOrganization">Company/Organization *</Label>
        <Input
          id="companyOrganization"
          value={formData.companyOrganization}
          onChange={(e) => onInputChange('companyOrganization', e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="organizationType">Organization Type *</Label>
        <Select value={formData.organizationType} onValueChange={(value) => onInputChange('organizationType', value)}>
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
    </>
  );
};
