export const userTypes = ["business", "artisan", "consumer"] as const;

export type UserType = (typeof userTypes)[number];
