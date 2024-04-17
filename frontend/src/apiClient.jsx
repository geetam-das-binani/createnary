const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";


export const getFeatures = async (page) => {
  console.log(API_BASE_URL);
  const response = await fetch(`${API_BASE_URL}/api/v1/get-scroll-feature?page=${page}`);
  if (!response.ok) {
    throw new Error("Failed to fetch features");
  }
  return await response.json();
};
