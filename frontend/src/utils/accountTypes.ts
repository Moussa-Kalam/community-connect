export const AccountTypes = ["Business", "Artisan", "Consumer"] as const;

export type AccountType = (typeof AccountTypes)[number];
