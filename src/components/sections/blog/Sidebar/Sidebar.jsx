import SearchWidget from "./SearchWidget";
import CategoriesWidget from "./CategoriesWidget";
import RecentPosts from "./RecentPosts";
import TagsWidget from "./TagsWidget";
import NewsletterWidget from "./NewsletterWidget";

const Sidebar = ({
  searchTerm,
  setSearchTerm,
  activeCategory,
  setActiveCategory,
  posts,
}) => {
  return (
    <aside className="lg:col-span-1">
      <SearchWidget searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoriesWidget
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <RecentPosts posts={posts} />
      <TagsWidget />
      <NewsletterWidget />
    </aside>
  );
};

export default Sidebar;
