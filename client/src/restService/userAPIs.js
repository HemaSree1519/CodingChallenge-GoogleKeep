import ip from 'ip'
export const getUserByEmail = async (email) => {
    return new Promise(async function (resolve, reject) {
        try {
            const response = await fetch('http://'+ip.address()+':1234/googlekeep/users/' + email);
            if (response.status === 200) {
                resolve(await response.json())
            }
            else {
                resolve(false);
            }
        } catch (e) {
            reject(e)
        }
    });
};

export const createUser = (user) => {
    return new Promise(async function (resolve, reject) {
        try {
            const response = await fetch('http://'+ip.address()+':1234/googlekeep/users/add', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
            });
            resolve(response.status);
        } catch (e) {
            reject(e)
        }
    });
};