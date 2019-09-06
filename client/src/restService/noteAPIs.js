export const createNote = (note) => {
    return new Promise(async function (resolve, reject) {
        try {
            const response = await fetch('http://localhost:1235/notesaver/notes/add', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(note),
            });
            resolve(response.status);
        } catch (e) {
            reject(e)
        }
    });
};