export interface BaseUserData {
    description: string,
    created: string,
    isBanned: boolean,
    externalAppDisplayName: string,
    hasVerifiedBadge: boolean,
    id: number,
    name: string,
    displayName: string
}

export interface BaseErrorResponse {
    errors: RobloxError[];
}

export interface RobloxError {
    code: number;
    message: string
}

export interface UserAvatarData {
    // id: number,
    // name: string,
    // url: string,
    thumbnailFinal: boolean,
    thumbnailUrl: string,
    substitutionType: number
}

export interface UserData extends BaseUserData  {
    avatar: UserAvatarData;
    createdTimestamp: `${string}`;
}