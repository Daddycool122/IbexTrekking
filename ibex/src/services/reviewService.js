import { apiUrl } from "../apiConfig";

let reviewsCache = null;
let reviewsPromise = null;

export function clearReviewsCache() {
  reviewsCache = null;
}

export async function getReviews() {
  if (Array.isArray(reviewsCache)) {
    return reviewsCache;
  }

  if (!reviewsPromise) {
    reviewsPromise = fetch(apiUrl("/reviews"))
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Failed to load reviews (${response.status})`);
        }

        const data = await response.json();
        reviewsCache = Array.isArray(data?.supply) ? data.supply : [];
        return reviewsCache;
      })
      .finally(() => {
        reviewsPromise = null;
      });
  }

  return reviewsPromise;
}