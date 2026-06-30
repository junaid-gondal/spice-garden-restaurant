import { useState, useMemo } from "react";
import Container from "../../components/common/Container";
import GalleryHero from "../../components/sections/gallery/GalleryHero/GalleryHero";
import GalleryFilter from "../../components/sections/gallery/GalleryFilter/GalleryFilter";
import GalleryGrid from "../../components/sections/gallery/GalleryGrid/GalleryGrid";
import Lightbox from "../../components/sections/gallery/Lightbox/Lightbox";
import LoadMore from "../../components/sections/gallery/LoadMore/LoadMore";
import galleryData from "../../data/galleryData";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter images by category
  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return galleryData;
    return galleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Get visible images
  const visibleImages = filteredImages.slice(0, visibleCount);

  // Lightbox handlers
  const handleImageClick = (id) => {
    const index = filteredImages.findIndex((img) => img.id === id);
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevImage = () => {
    setLightboxIndex((prev) =>
      prev > 0 ? prev - 1 : filteredImages.length - 1
    );
  };

  const handleNextImage = () => {
    setLightboxIndex((prev) =>
      prev < filteredImages.length - 1 ? prev + 1 : 0
    );
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const hasMore = visibleCount < filteredImages.length;

  return (
    <>
      <GalleryHero />

      <section className="py-16 bg-gray-50">
        <Container>
          
          {/* Filter */}
          <div className="mb-12">
            <GalleryFilter
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>

          {/* Gallery Grid */}
          <div className="mb-12">
            <GalleryGrid
              items={visibleImages}
              onImageClick={handleImageClick}
            />
          </div>

          {/* Load More */}
          <LoadMore onClick={loadMore} hasMore={hasMore} />

        </Container>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
        />
      )}
    </>
  );
};

export default Gallery;
