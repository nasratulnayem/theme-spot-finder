import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";

interface Category {
  name: string;
  count: number;
}

interface SearchAndFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: Category[];
}

export const SearchAndFilter = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories
}: SearchAndFilterProps) => {
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  return (
    <div className="space-y-6">
      {/* Search Box */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search for WordPress themes, plugins, templates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-input border-border focus:border-primary focus:ring-primary text-foreground placeholder:text-muted-foreground h-12"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearchTerm('')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Categories Filter */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Categories</h3>
          {(selectedCategory || searchTerm) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Clear all
            </Button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedCategory === '' ? "default" : "secondary"}
            className={`cursor-pointer transition-colors ${
              selectedCategory === ''
                ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border'
            }`}
            onClick={() => setSelectedCategory('')}
          >
            All Categories
          </Badge>
          
          {categories.map((category) => (
            <Badge
              key={category.name}
              variant={selectedCategory === category.name ? "default" : "secondary"}
              className={`cursor-pointer transition-colors ${
                selectedCategory === category.name
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border'
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};