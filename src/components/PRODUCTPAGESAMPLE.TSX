import { useState } from "react";
import { ProductType } from "@/types/product";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

interface ProductCardProps {
  type: ProductType;
  productName: string;
}

export const ProductCard = ({ type, productName }: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = type.images.length > 1;

  const toggleImage = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex((prev) => (prev + 1) % type.images.length);
    }
  };

  return (
    <Card className="group h-full overflow-hidden border-border hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 transition-all duration-300 bg-card">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-muted/30 to-muted/60">
        <img
          src={type.images[currentImageIndex]}
          alt={`${type.name}`}
          className="w-full h-full object-contain p-8 transition-all duration-500 group-hover:scale-110"
        />
        
        {hasMultipleImages && (
          <button
            onClick={toggleImage}
            className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm p-3 rounded-full 
                     shadow-lg hover:bg-primary hover:text-primary-foreground hover:scale-110
                     transition-all duration-300 z-10 border border-border"
            aria-label="Toggle alternate view"
          >
            <ImageIcon className="w-5 h-5" />
          </button>
        )}

        {hasMultipleImages && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {type.images.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-background/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <CardContent className="p-6 space-y-5">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {type.name}
          </h3>
          <Badge variant="secondary" className="text-xs font-medium">
            {type.origin}
          </Badge>
        </div>

        <div className="space-y-4">
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
              Why Choose This
            </p>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {type.reasonToBelieve}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-accent/10 rounded-lg p-3 border border-accent/20">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                Calibre
              </p>
              <p className="text-sm font-semibold text-foreground">{type.calibre}</p>
            </div>

            <div className="bg-secondary/10 rounded-lg p-3 border border-secondary/20">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                Origin
              </p>
              <p className="text-sm font-semibold text-foreground">{type.origin}</p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
              Perfect For
            </p>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {type.application}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
