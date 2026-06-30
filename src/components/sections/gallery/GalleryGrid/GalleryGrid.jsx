import GalleryCard from "./GalleryCard";

const GalleryGrid = ({ items, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <GalleryCard
          key={item.id}
          item={item}
          index={index}
          onClick={() => onImageClick(item.id)}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
