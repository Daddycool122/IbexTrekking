import { useEffect, useState } from "react";
import { getReviews } from "../services/reviewService";

export function useReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    getReviews()
      .then((items) => {
        if (active) {
          setReviews(items);
          setError(null);
        }
      })
      .catch((err) => {
        if (active) {
          setReviews([]);
          setError(err);
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return { reviews, loading, error };
}