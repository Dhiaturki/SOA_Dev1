import { Genre } from "./Genre";

export class GenreWrapper{
    _embedded!: { genres: Genre[]};
}