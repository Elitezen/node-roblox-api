import type { BaseErrorResponse } from "../typings/interfaces";

export default async function robloxFetch<T>(url:string, method = "GET"): Promise<T | BaseErrorResponse> {
    try {
        const req = await fetch(url, {
            method
        });
    
        return await req.json() as T;
    } catch (err) {
        throw err;
    }
}