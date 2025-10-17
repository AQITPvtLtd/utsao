import { httpAxios } from "@/helper/httphelper";

export async function productlist() {
    try {
        const response = await httpAxios.get("/api/products");
        console.log("Full Axios Response:", response);
        console.log("Response Data:", response.data);

        // Normalize: Always return an array
        const data = response.data;
        return Array.isArray(data?.result) ? data.result : [];
    } catch (error) {
        console.error("Error fetching types:", error.message);
        return []; // fail-safe: return empty array
    }
}
