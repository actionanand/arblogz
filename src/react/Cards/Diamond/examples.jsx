import { DiamondCard, DiamondCardContainer } from './index';

/**
 * Example usage of Diamond Cards
 */

function DiamondCardExamples() {
  return (
    <div>
      <h2>Single Diamond Card</h2>
      <DiamondCard 
        image="/images/sample-product.jpg"
        imageAlt="Featured Product"
      />

      <h2>Gallery Grid</h2>
      <DiamondCardContainer>
        <DiamondCard 
          image="/images/gallery/photo1.jpg"
          imageAlt="Gallery Image 1"
          width="250px"
          height="250px"
        />
        <DiamondCard 
          image="/images/gallery/photo2.jpg"
          imageAlt="Gallery Image 2"
          width="250px"
          height="250px"
        />
        <DiamondCard 
          image="/images/gallery/photo3.jpg"
          imageAlt="Gallery Image 3"
          width="250px"
          height="250px"
        />
        <DiamondCard 
          image="/images/gallery/photo4.jpg"
          imageAlt="Gallery Image 4"
          width="250px"
          height="250px"
        />
      </DiamondCardContainer>

      <h2>Free Size Mode</h2>
      <DiamondCard 
        image="/images/hero-image.jpg"
        imageAlt="Large featured image"
        isFreeSize={true}
      />

      <h2>Custom Sizes</h2>
      <DiamondCardContainer>
        <DiamondCard 
          image="/images/product1.jpg"
          imageAlt="Product 1"
          width="400px"
          height="400px"
        />
        <DiamondCard 
          image="/images/product2.jpg"
          imageAlt="Product 2"
          width="400px"
          height="400px"
        />
      </DiamondCardContainer>

      <h2>Responsive with Percentage</h2>
      <DiamondCardContainer>
        <DiamondCard 
          image="/images/portfolio1.jpg"
          imageAlt="Portfolio Item 1"
          size="30%"
        />
        <DiamondCard 
          image="/images/portfolio2.jpg"
          imageAlt="Portfolio Item 2"
          size="30%"
        />
        <DiamondCard 
          image="/images/portfolio3.jpg"
          imageAlt="Portfolio Item 3"
          size="30%"
        />
      </DiamondCardContainer>
    </div>
  );
}

export default DiamondCardExamples;
