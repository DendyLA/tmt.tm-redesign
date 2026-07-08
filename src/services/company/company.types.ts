export type CompanyTranslation = {
    name?: string;
    description?: string;
};

export type Company = {
    name?: string;
    logo?: string;
    translation?: CompanyTranslation;
};



export type Contacts = {
	email: string;
	phone: string;
	address: string;
	location: string;
}