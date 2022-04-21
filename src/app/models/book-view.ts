import {Author} from "./author";
import {Location} from './location';

export interface BookView {
  id?: number;
  title?: string;
  isbn?: string;
  authors?: Author[];
  location?: Location;
}