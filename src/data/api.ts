

type Options = {
    search?: string | null;
    maxCount?: number;
}
const makeItSlower = async<T>(p: Promise<T>, t = 450): Promise<T> => {
    const [res] = await Promise.all([
        p,
        new Promise((res) => setTimeout(res, t)),
    ]);
    return res;
}
export const getData = async (programType: ProgramType, { search = null, maxCount = 21 }: Options): Promise<Entry[]> => {
    const res = await makeItSlower(import('./sample.json'))
        .then(a => a.default as EntryResponse);

    let raw = res.entries.filter(r => r.programType === programType);

    if (search) {
        const s = search.toLowerCase();
        raw = raw.filter(item => item.title.toLowerCase().includes(s));
    }
    return raw
        .sort((a, b) => a.title > b.title ? 1 : -1)
        .filter(item => item.releaseYear >= 2010)
        .filter((_, i) => i < maxCount);
};


