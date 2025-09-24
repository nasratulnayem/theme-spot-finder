import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: string;
  downloadLink: string;
  date?: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const handleDownload = () => {
    window.open(product.downloadLink, '_blank');
  };

  return (
    <Card className="group relative overflow-hidden bg-card border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <Badge 
              variant="outline" 
              className="mb-3 bg-primary/10 text-primary border-primary/30 text-xs font-medium"
            >
              {product.category.toUpperCase()}
            </Badge>
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
            {product.date && (
              <p className="text-sm text-muted-foreground">
                {product.date}
              </p>
            )}
          </div>
          
          <Button
            onClick={handleDownload}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shrink-0"
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>
      
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Card>
  );
};