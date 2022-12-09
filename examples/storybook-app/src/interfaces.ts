export interface Actor {
    /**
     * The name of the actor
     */
    name: string;
    /**
     * The age of the actor
     */
    age: number;
    /**
     * @deprecated
     */
    birthDate: Date;
    /**
     * The place of birth of the actor
     */
    birthPlace?: string;
    /**
     * The roles the actor has played
     */
    roles: string[];
}

export interface Director {
    /**
     * The name of the director
     */
    name: string;
    /**
     * The age of the director
     */
    age: number;
    /**
     * @deprecated
     */
    birthDate: Date;
    /**
     * The place of birth of the director
     */
    birthPlace?: string;
    /**
     * The movies the director has directed
     */
    movies: Movie[];
}

/**
 * A movie
 * @link https://wikipedia.org/wiki/Film | Useful link
 */
export interface Movie {
    /**
     * The title of the movie
     */
    readonly title: string;
    /**
     * The year the movie was released
     * @type {Date}
     */
    year: number;
    /**
     * The rating of the movie
     * @default 0
     */
    rating?: number;
    genres: string[];
    /**
     * The actors in the movie
     */
    cast: Actor[];
    /**
     * The director of the movie
     */
    director: Director;
}
