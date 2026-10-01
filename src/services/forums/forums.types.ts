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
	participants?: ForumParticipant[];
	sponsorLevels?: ForumSponsorLevel[];
}
