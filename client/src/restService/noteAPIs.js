import ip from 'ip'
export const createNote = (note) => {
    return new Promise(async function (resolve, reject) {
        try {
            const response = await fetch('http://'+ip.address()+':1234/googlekeep/notes/add', {
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
            const response = await fetch('http://'+ip.address()+':1234/googlekeep/notes/all/' + email);
            const listOfNotes = await response.json();
            resolve(listOfNotes);
        } catch (e) {
            reject(e);
        }
    });
};
export const updateNote = async (id, editedNote) => {
    return new Promise(async function (resolve, reject) {
        try {
            const response = await fetch('http://'+ip.address()+':1234/googlekeep/notes/' + id + '/update', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editedNote),
            });
            resolve(response.status)
        } catch (e) {
            reject(e)
        }
    })
};

export const deleteNote = (email, id) => {
    return new Promise(async function (resolve, reject) {
        try {
            const response = await fetch('http://'+ip.address()+':1234/googlekeep/notes/' + email + '/' + id + '/delete', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            resolve(response.status)
        } catch (e) {
            reject(e)
        }
    })
};