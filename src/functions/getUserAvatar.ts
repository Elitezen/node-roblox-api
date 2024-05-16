import robloxFetch from '../util/request';

import type { UserAvatarData } from "../typings/interfaces";

export default async function getUserAvatar(id: string): Promise<UserAvatarData> {
    try {
        let request = await robloxFetch<UserAvatarData[]>(`https://www.roblox.com/avatar-thumbnails?params=[{userId:${id}}]`);
        if ('errors' in request) throw request.errors.shift()!;

        const extendedData = request.shift()! as UserAvatarData;
        const data:UserAvatarData = {
            thumbnailFinal: extendedData.thumbnailFinal,
            thumbnailUrl: extendedData.thumbnailUrl.replace(/60/g, '512'),
            substitutionType: extendedData.substitutionType
        }

        return data;
    } catch (err) {
        throw err;
    }
}