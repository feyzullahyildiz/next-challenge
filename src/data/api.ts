
export const getData = async (programType: ProgramType): Promise<Entry[]> => {
    const res = await import('./sample.json')
        .then(a => a.default as EntryResponse);

    return res.entries.filter(r => r.programType === programType)
};


