
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PersonalInfoSectionProps {
  formData: {
    familyName: string;
    firstName: string;
    nationality: string;
    countryOfWork: string;
    cityProvince: string;
  };
  onInputChange: (field: string, value: string) => void;
}

export const PersonalInfoSection = ({ formData, onInputChange }: PersonalInfoSectionProps) => {
  return (
    <>
      <div>
        <Label htmlFor="familyName">Family Name (as in passport) *</Label>
        <Input
          id="familyName"
          value={formData.familyName}
          onChange={(e) => onInputChange('familyName', e.target.value)}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="firstName">First Name (as in passport) *</Label>
        <Input
          id="firstName"
          value={formData.firstName}
          onChange={(e) => onInputChange('firstName', e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="nationality">Nationality (as in passport) *</Label>
        <Input
          id="nationality"
          value={formData.nationality}
          onChange={(e) => onInputChange('nationality', e.target.value)}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="countryOfWork">Country of Work *</Label>
        <Input
          id="countryOfWork"
          value={formData.countryOfWork}
          onChange={(e) => onInputChange('countryOfWork', e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="cityProvince">City/Province *</Label>
        <Input
          id="cityProvince"
          value={formData.cityProvince}
          onChange={(e) => onInputChange('cityProvince', e.target.value)}
          required
        />
      </div>
    </>
  );
};
