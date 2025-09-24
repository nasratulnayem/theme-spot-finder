import { useState, useMemo } from "react";
import { ProductCard, type Product } from "@/components/ProductCard";
import { SearchAndFilter } from "@/components/SearchAndFilter";

// Demo data - replace with your CSV data later
const demoProducts: Product[] = [
  {
    id: "1",
    name: "RT-Theme 13 Multipurpose WordPress Theme",
    category: "WordPress Themes",
    downloadLink: "#",
    date: "09 Sep, 2025"
  },
  {
    id: "2",
    name: "GoodzShop WordPress Theme",
    category: "WordPress Themes",
    downloadLink: "#",
    date: "09 Sep, 2025"
  },
  {
    id: "3",
    name: "Sleek Blog WordPress Theme",
    category: "WordPress Themes",
    downloadLink: "#",
    date: "09 Sep, 2025"
  },
  {
    id: "4",
    name: "Life Coach WordPress Theme Coaching Template",
    category: "WordPress Themes",
    downloadLink: "#",
    date: "09 Sep, 2025"
  },
  {
    id: "5",
    name: "Themify Minshop WooCommerce Themes",
    category: "Woocommerce Plugin",
    downloadLink: "#",
    date: "09 Sep, 2025"
  },
  {
    id: "6",
    name: "Advanced Custom Fields Pro",
    category: "WordPress Plugins",
    downloadLink: "#",
    date: "08 Sep, 2025"
  },
  {
    id: "7",
    name: "Elementor Pro Page Builder",
    category: "WordPress Plugins",
    downloadLink: "#",
    date: "08 Sep, 2025"
  },
  {
    id: "8",
    name: "Minimal Shopify Theme",
    category: "Shopify Themes",
    downloadLink: "#",
    date: "07 Sep, 2025"
  },
  {
    id: "9",
    name: "Creative Landing Page Template",
    category: "Web design",
    downloadLink: "#",
    date: "07 Sep, 2025"
  },
];

const categories = [
  { name: "Shopify Themes", count: 201 },
  { name: "Web design", count: 450 },
  { name: "Woocommerce Plugin", count: 230 },
  { name: "WordPress Plugins", count: 890 },
  { name: "WordPress Themes", count: 1200 }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return demoProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Browse All 3000+ WordPress Assets
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            wordpress themes, wordpress plugins, woocommerce plugins, templates, landing page, shopify theme
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <SearchAndFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {demoProducts.length} products
            {selectedCategory && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">
              No products found matching your criteria
            </p>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search terms or category filter
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
