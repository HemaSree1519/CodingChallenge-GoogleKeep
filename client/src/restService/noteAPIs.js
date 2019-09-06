export const createNote = (note) => {
    return new Promise(async function (resolve, reject) {
        try {
            const response = await fetch('http://localhost:1234/googlekeep/notes/add', {
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
export const getAllNotesOfUser = (email) => {
    return new Promise(async function (resolve, reject) {
        try {
            const response = await fetch('http://localhost:1234/googlekeep/notes/all/' + email);
            const listOfNotes = await response.json();
            resolve(listOfNotes);
        } catch (e) {
            reject(e);
        }
    });
};