import { motion } from "framer-motion";
import Button from "../../../common/Button";

const LoadMore = ({ onClick, hasMore }) => {
  if (!hasMore) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-center"
    >
      <Button onClick={onClick}>
        Load More Images
      </Button>
    </motion.div>
  );
};

export default LoadMore;
