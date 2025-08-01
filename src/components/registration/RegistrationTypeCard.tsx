
import { Card, CardContent } from "@/components/ui/card";

interface RegistrationType {
  value: string;
  title: string;
  description: string;
}

interface RegistrationTypeCardProps {
  type: RegistrationType;
  isSelected: boolean;
  onSelect: (value: string) => void;
}

export const RegistrationTypeCard = ({ type, isSelected, onSelect }: RegistrationTypeCardProps) => {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-200 ${
        isSelected 
          ? 'ring-2 ring-emerald-500 bg-emerald-50' 
          : 'hover:shadow-md'
      }`}
      onClick={() => onSelect(type.value)}
    >
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 mt-1">
            <div className={`w-4 h-4 rounded-full border-2 ${
              isSelected
                ? 'bg-emerald-500 border-emerald-500'
                : 'border-gray-300'
            }`}>
              {isSelected && (
                <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
              )}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-sm mb-2">{type.title}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{type.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
