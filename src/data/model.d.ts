type ProgramType = 'movie' | 'series'
type Entry = {
    title: string;
    description: string;
    programType: ProgramType;
    images: {
        "Poster Art": {
            url: string;
            width: number,
            height: number
        }
    },
    releaseYear: number
}

type EntryResponse = {
    total: number;
    entries: Entry[];
}