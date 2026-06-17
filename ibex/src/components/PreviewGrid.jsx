import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from '../Header.module.css';

/**
 * PreviewGrid Component
 * Reusable component for displaying preview items in a horizontal scrollable grid
 * 
 * @param {Array} items - Array of item objects with { name, route/id, image }
 * @param {string} title - Title for the preview section
 * @param {Function} onItemClick - Callback to handle item selection
 * @param {string} type - Type of preview ('trek', 'tour', 'rafting')
 */
export default function PreviewGrid({ items, title, onItemClick, type = 'trek' }) {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    onItemClick?.();
    
    if (type === 'rafting') {
      navigate(`/rafting?id=${item.id}`);
    } else {
      navigate(item.route);
    }
  };

  return (
    <div className={styles.previewContent}>
      <div className={styles.previewTitle} role="heading" aria-level="2">
        {title}
      </div>
      <div 
        className={styles.previewGrid}
        role="list"
        aria-label={`${title} options`}
      >
        {items.map((item) => (
          <div
            key={item.name}
            className={styles.previewItem}
            role="listitem"
            tabIndex={0}
            onClick={() => handleItemClick(item)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleItemClick(item);
              }
            }}
            aria-label={`${item.name} - Click to view details`}
          >
            <img 
              src={item.image} 
              alt="Ibex Trekking"
              className={styles.previewImage}
              loading="lazy"
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
