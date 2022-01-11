

export type SortType = 'title_desc' | 'title_asc' | 'year_desc' | 'year_asc'
type Options = {
    search?: string | null;
    maxCount?: number;
    sortType?: SortType
}
const makeItSlower = async<T>(p: Promise<T>, t = 450): Promise<T> => {
    const [res] = await Promise.all([
        p,
        new Promise((res) => setTimeout(res, t)),
    ]);
    return res;
}

const getSortFunction = (sort: SortType): (a: Entry, b: Entry) => number => {
    if (sort === 'title_asc') {
        return (a, b) => a.title > b.title ? 1 : -1
    }
    if (sort === 'title_desc') {
        return (a, b) => a.title > b.title ? -1 : 1
    }
    if (sort === 'year_asc') {
        return (a, b) => a.releaseYear > b.releaseYear ? 1 : -1
    }
    if (sort === 'year_desc') {
        return (a, b) => a.releaseYear > b.releaseYear ? -1 : 1
    }
    return (a, b) => 1;
}
export const getData = async (programType: ProgramType, { search = null, maxCount = 21, sortType = 'title_asc' }: Options): Promise<Entry[]> => {
    const res = await makeItSlower(import('./sample.json'))
        .then(a => a.default as EntryResponse);

    let raw = res.entries.filter(r => r.programType === programType);

    if (search) {
        const s = search.toLowerCase();
        raw = raw.filter(item => item.title.toLowerCase().includes(s));
    }
    return raw
        .sort(getSortFunction(sortType))
        .filter(item => item.releaseYear >= 2010)
        .filter((_, i) => i < maxCount);
};


