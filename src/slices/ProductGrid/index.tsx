import { FC } from "react";
import { Content, ContentRelationshipField, isFilled } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { SkateBoardProduct } from "./SkateBoardProduct";
import { SlideIn } from "@/components/SlideIn";

/**
 * Props for `ProductGrid`.
 */
export type ProductGridProps = SliceComponentProps<Content.ProductGridSlice>;

/**
 * Component for "ProductGrid" Slices.
 */
const ProductGrid: FC<ProductGridProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="='bg-texture bg-brand-gray"
    >
      <SlideIn>
        <Heading className="text-center ~mb-4/6" as="h2">
          <PrismicText field={slice.primary.heading} />
        </Heading>
      </SlideIn>
      <div className="text-center ~mb-6/10">
        <SlideIn>
          <PrismicRichText field={slice.primary.body} />
        </SlideIn>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {slice.primary.products.map(
          ({ skateboard }, index) =>
            isFilled.contentRelationship(
              skateboard as ContentRelationshipField
            ) && <SkateBoardProduct key={index} id={`${(index = 1)}`} />
        )}
      </div>
    </Bounded>
  );
};

export default ProductGrid;
