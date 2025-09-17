import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe("giphy api", () => {
    test("should have correct baseURL", () => {
        expect(giphyApi.defaults.baseURL).toBe("https://api.giphy.com/v1/gifs");
        expect(giphyApi.defaults.params?.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY); 
        expect(giphyApi.defaults.params?.lang).toBe('es');

        expect(giphyApi.defaults.params).toStrictEqual({
            api_key: import.meta.env.VITE_GIPHY_API_KEY,
            lang: 'es'
        });
    });
});