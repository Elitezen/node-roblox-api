import request from "../util/request";

import type { BaseUserData, UserData } from "../typings/interfaces";
import getUserAvatar from "./getUserAvatar";

export default async function getUser(id:string): Promise<UserData> {
    try {
        const baseData = await request<BaseUserData>(`https://users.roblox.com/v1/users/${id}`);

        if ('errors' in baseData) throw baseData.errors.shift()!;

        const data: UserData = {
            ...baseData,
            avatar: await getUserAvatar(id),
            createdTimestamp: `${new Date(baseData.created).getTime()}`
        }

        return data;
    } catch (err) {
        throw err;
    }
}