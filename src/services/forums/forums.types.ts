type ForumTranslation = {
	id: string;
	forumId: string;
	locale: string;
	title: string;
	description?: string | null;
	venue: string;
	createdAt?: string;
	updatedAt?: string;
}

export type ForumParticipant = {
    id: string;
    type: "SPEAKER" | "DELEGATE";
    firstName: string;
    lastName: string;
    photoUrl?: string | null;
    organization?: string | null;
    position?: string | null;
    companyLogoUrl?: string | null;
    sortOrder?: number;
};

export type ForumSponsor = {
    id: string;
    name: string;
    logoUrl?: string | null;
    website?: string | null;
    sortOrder?: number;
};

export type ForumSponsorLevel = {
    id: string;
    name: string;
    sortOrder?: number;
    sponsors: ForumSponsor[];
};

export type ForumOrganizer = {
    id: string;
    name: string;
    logoUrl?: string | null;
    website?: string | null;
    sortOrder?: number;
    translation?: { locale: string; name: string } | null;
    translations?: { locale: string; name: string }[];
};

export type ForumProgramItem = {
    id: string;
    startsAt: string;
    endsAt?: string | null;
    title: string;
    description?: string | null;
    translations?: {
        locale: string;
        title: string;
        description?: string | null;
    }[];
    sortOrder: number;
    speaker?: ForumParticipant | null;
    speakers?: { participant: ForumParticipant }[];
};

export type ForumProgramDay = {
    id: string;
    date: string;
    title?: string | null;
    translations?: {
        locale: string;
        title?: string | null;
    }[];
    sortOrder: number;
    items: ForumProgramItem[];
};

export type ForumFile = {
    id: string;
    locale: "RU" | "EN" | "TK";
    title: string;
    fileUrl: string;
    isActive: boolean;
    sortOrder: number;
};

export type Forum = {
	id: string;
	title: string;
	slug: string;
	description?: string | null;
	venue: string;
	startDate: string;
	endDate: string;
	logoUrl?: string | null;
	isActive?: boolean;
	sortOrder?: number;
	createdAt?: string;
	updatedAt?: string;
	translations?: ForumTranslation[];
	translation?: ForumTranslation | null;
	files?: ForumFile[];
	participants?: ForumParticipant[];
	organizers?: ForumOrganizer[];
	sponsorLevels?: ForumSponsorLevel[];
}
