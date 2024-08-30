import { DEFAULT_URL } from "./constants";

export const saveData = async (data, apiEndpoint) => {
  const fetchPromises = data.map((item) =>
    fetch(DEFAULT_URL + apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
  );

  try {
    const responses = await Promise.all(fetchPromises);
    const results = await Promise.all(
      responses.map((response) => response.json())
    );
  } catch (error) {
    
  }
};
