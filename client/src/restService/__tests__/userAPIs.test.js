import {createUser, getUserByEmail} from "../userAPIs";
import {ip} from "../../utilities/server";
describe('userAPIs', () => {
    let user;
    beforeEach(() => {
        user = {
            userName: "tester",
            password: "password",
            email: "testMail@gmail.com",
            role: "admin"
        };
    });
    it('should fetch with the given arguments', () => {
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                status: 200
            });
        });
        let expected = ["http://"+ip[0]+":1234/googlekeep/users/add",
            {
                "body": "{\"userName\":\"tester\"," +
                    "\"password\":\"password\"," +
                    "\"email\":\"testMail@gmail.com\"," +
                    "\"role\":\"admin\"}",
                "headers": {"Accept": "application/json", "Content-Type": "application/json"},
                "method": "POST"
            }];
        createUser(user).then(response => {
            expect(response).toEqual(200)
        });
        expect(global.fetch).toHaveBeenCalledWith(...expected)
    });
    it('should fetch user with given email', () => {
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                json: () => Promise.resolve(user)
            });
        });
        getUserByEmail("testMail@gmail.com").then();
        expect(global.fetch).toHaveBeenCalledWith("http://"+ip[0]+":1234/googlekeep/users/testMail@gmail.com")
    });
});