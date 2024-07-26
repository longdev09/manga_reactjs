import instance from "../utils/instance";

export const getNewComics = ({ page, status }) => ({
  path: `/new-comics?page=${page}&status=${status}`,
});

export const getRecentUpdateComics = (page, status) => ({
  path: `/recent-update-comics?page=${page}&status=${status}`,
});

export const getRecommendComics = () => ({
  path: `/recommend`,
});

export const getTopComics = (option) => ({
  path: `top/${option}`,
});

// detail comics

// detail chapter
export const getSingleChapter = (comic_id, chapter_id) => ({
  path: `comics/${comic_id}/chapters/${chapter_id}`,
});
