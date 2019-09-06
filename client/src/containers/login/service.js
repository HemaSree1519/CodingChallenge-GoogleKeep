import {getUserByEmail} from "../../restService/userAPIs";
import {ErrorMessages} from "../../utilities/errorMessages";

export const isAuthenticated = (email, password) => {
    return new Promise(async function (resolve, reject) {
        try {
            if (email !== '' && password !== '') {
                await getUserByEmail(email).then((user) => {
                    if (user) {
                        if (user['password'] === password) {
                            resolve(true);
                        }
                        else resolve(ErrorMessages[106]);
                    }
                    else resolve(ErrorMessages[107]);
                })
            }
            else resolve(ErrorMessages[108])
        } catch (e) {
            reject(e)
        }
    });
};