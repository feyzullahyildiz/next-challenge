import { QueryFunctionContext } from 'react-query';


export type SortType = 'title_desc' | 'title_asc' | 'year_desc' | 'year_asc'
const makeItSlower = async<T>(p: Promise<T>, t = 50): Promise<T> => {
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
type getDataFunctionType = (context: QueryFunctionContext) => Promise<Entry[]>;
export const getDataReactQueryFriendly: getDataFunctionType = async (context) => {
    const maxCount = 21;
    const [programType, sortType, search] = context.queryKey as [ProgramType, SortType, string];
    const res = await makeItSlower(import('./sample.json'), 0)
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


