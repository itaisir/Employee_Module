import { CURRENT_MEDIA_SERVER_URL } from "../Constants/server"

export const getImageLink = (local_link: string | undefined): string => {
    if (!local_link) return ""
    return CURRENT_MEDIA_SERVER_URL + local_link
}

export const isBase64Image = (str: string | undefined): boolean => {
    if (!str) return false
    return str.startsWith("data:image");
};
export const isResponseError = (response: any): boolean => {
    if (response && response.response && response.response.status >= 400 && response.response.status < 600)
        return true; // This is a server error
    return false; // Not a server error
};