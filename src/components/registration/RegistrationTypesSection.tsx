
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
      description: "(for non-regulators and all other interested parties). No fees for Government, regulators, and other Intergovernmental Organizations."
    },
    {
      value: "combined",
      title: "Pre-ICDRA and ICDRA",
      description: "(for regulators, representatives of national ministries of health and selected development partners, including UN Agencies)"
    },
    {
      value: "icdra-only",
      title: "ICDRA",
      description: "(for regulators, representatives of national ministries of health, including UN Agencies). By completing this registration, you will be granted access to the full conference, including both the PRE-ICDRA and ICDRA."
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
