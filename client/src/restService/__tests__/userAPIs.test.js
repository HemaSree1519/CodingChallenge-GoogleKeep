import {createUser, getUserByEmail} from "../userAPIs";

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
        let expected = ["http://localhost:1234/googlekeep/users/add",
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
        let mockUser = [{
            userName: "tester",
            password: "password",
            email: "testMail@gmail.com",
            role: "admin"
        }];
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                json: () => Promise.resolve(mockUser)
            });
        });
        getUserByEmail("testMail@gmail.com").then();
        expect(global.fetch).toHaveBeenCalledWith("http://localhost:1234/googlekeep/users/testMail@gmail.com")
    });
});