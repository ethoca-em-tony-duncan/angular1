import { Author } from "./author";

export interface Book {
    id?: number;
    title?: string;
    isbn?: string;
    location?: Location;
    
    authors?: Author[];
    authorIds: number[];
}