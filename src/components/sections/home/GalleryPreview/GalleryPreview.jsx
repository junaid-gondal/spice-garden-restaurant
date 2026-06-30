import Container from "../../../common/Container";
import SectionTitle from "../../../common/SectionTitle";

const images = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
];

const GalleryPreview = () => {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        
        <SectionTitle
          subtitle="Gallery"
          title="Our Restaurant Moments"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="rounded-2xl h-64 w-full object-cover hover:scale-105 transition"
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default GalleryPreview;
