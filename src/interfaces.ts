export interface IItems {
	title: string;
	image: string;
}

export interface IIndexable {
	[key: string]: any;
}

export interface ITodo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export interface ILink {
	href: string;
	name: string;
}

export interface IUser {
	id: number;
	name: string;
	email: string;
}