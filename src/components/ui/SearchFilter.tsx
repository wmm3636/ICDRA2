import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, X } from "lucide-react";

export interface FilterOption {
  value: string;
  label: string;
}

interface SearchFilterProps {
  searchPlaceholder?: string;
  filterOptions?: FilterOption[];
  filterLabel?: string;
  onSearch: (searchTerm: string, filterValue: string) => void;
  initialSearch?: string;
  initialFilter?: string;
}

const SearchFilter = ({
  searchPlaceholder = "Search...",
  filterOptions = [],
  filterLabel = "Filter",
  onSearch,
  initialSearch = "",
  initialFilter = ""
}: SearchFilterProps) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [filterValue, setFilterValue] = useState(initialFilter || "all");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const actualFilterValue = filterValue === "all" ? "" : filterValue;
      onSearch(searchTerm, actualFilterValue);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, filterValue, onSearch]);

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const handleClearFilter = () => {
    setFilterValue("all");
  };

  const hasActiveFilters = searchTerm || (filterValue && filterValue !== "all");

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder={searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearSearch}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 h-auto"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
      
      {filterOptions.length > 0 && (
        <div className="flex gap-2">
          <Select value={filterValue} onValueChange={setFilterValue}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder={filterLabel} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All {filterLabel}</SelectItem>
              {filterOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          {filterValue && filterValue !== "all" && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleClearFilter}
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      )}

      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={() => {
            setSearchTerm("");
            setFilterValue("all");
          }}
          className="whitespace-nowrap"
        >
          Clear All
        </Button>
      )}
    </div>
  );
};

export default SearchFilter;