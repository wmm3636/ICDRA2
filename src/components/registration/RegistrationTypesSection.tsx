
import { Label } from "@/components/ui/label";
import { RegistrationTypeCard } from "./RegistrationTypeCard";

interface RegistrationTypesSectionProps {
  registrationType: string;
  onRegistrationTypeChange: (value: string) => void;
}

export const RegistrationTypesSection = ({ registrationType, onRegistrationTypeChange }: RegistrationTypesSectionProps) => {
  const registrationTypes = [
    {
      value: "pre-icdra",
      title: "Pre-ICDRA only",
      description: "For non-regulators and all other interested participants. A small fee may apply. Regulators, national health ministry representatives, and UN agencies are exempt from the fee."
    },
    {
      value: "combined",
      title: "Pre-ICDRA and ICDRA combined",
      description: "For regulators, representatives of national ministries of health, and selected development partners, including UN agencies."
    },
    {
      value: "icdra-only",
      title: "ICDRA only",
      description: "For the same categories as the combined option, but for those attending only the ICDRA meeting."
    }
  ];

  return (
    <div>
      <Label className="text-base font-semibold mb-4 block">Registration Type *</Label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {registrationTypes.map((type) => (
          <RegistrationTypeCard
            key={type.value}
            type={type}
            isSelected={registrationType === type.value}
            onSelect={onRegistrationTypeChange}
          />
        ))}
      </div>
    </div>
  );
};
