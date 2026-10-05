export const delegateTextFields = [
    "firstName",
    "lastName",
    "organization",
    "position",
    "email",
    "phone",
    "country",
] as const;

export const delegateFileFields = [
    "photo",
    "companyLogo",
    "internalPassport",
    "foreignPassport",
] as const;

export type DelegateTextField = (typeof delegateTextFields)[number];
export type DelegateFileField = (typeof delegateFileFields)[number];

export type DelegateTextValues = Record<DelegateTextField, string>;
export type DelegateFiles = Record<DelegateFileField, File | null>;

export const emptyDelegateText: DelegateTextValues = {
    firstName: "",
    lastName: "",
    organization: "",
    position: "",
    email: "",
    phone: "",
    country: "",
};

export const emptyDelegateFiles: DelegateFiles = {
    photo: null,
    companyLogo: null,
    internalPassport: null,
    foreignPassport: null,
};

export const delegateDraftKey = "tmt-forum-delegate-draft";
export const delegateDraftMaxAge = 7 * 24 * 60 * 60 * 1000;
export const maxDelegateImageSize = 4 * 1024 * 1024;
export const maxDelegatePassportSize = 10 * 1024 * 1024;
