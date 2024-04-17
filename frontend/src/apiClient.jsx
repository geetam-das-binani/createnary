const API_BASE_URL = "http://localhost:7000";

export const getFeatures = async (page) => {
  const response = await fetch(`${API_BASE_URL}/api/v1/get-scroll-feature?page=${page}`);
  if (!response.ok) {
    throw new Error("Failed to fetch features");
  }
  return await response.json();
};
