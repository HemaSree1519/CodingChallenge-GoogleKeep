import {createNote, getAllNotesOfUser} from "../noteAPIs";
import {getUserByEmail} from "../userAPIs";

describe('noteAPIs', () => {
    let note;
    beforeEach(() => {
        note = {
            id: 1,
            title: "TestTitle",
            content: "This is a testing note",
            email: "tester@gmail.com",
            updatedAt: null,
            createdAt: null
        };
    });
    it('should fetch with given arguments', () => {
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                status: 200
            });
        });
        let expected = ["http://localhost:1234/googlekeep/notes/add",
            {
                "body": "{\"id\":1," +
                    "\"title\":\"TestTitle\"," +
                    "\"content\":\"This is a testing note\"," +
                    "\"email\":\"tester@gmail.com\"," +
                    "\"updatedAt\":null," +
                    "\"createdAt\":null}",
                "headers": {"Accept": "application/json", "Content-Type": "application/json"},
                "method": "POST"
            }];
        createNote(note).then(response => {
            expect(response).toEqual(200)
        });
        expect(global.fetch).toHaveBeenCalledWith(...expected)
    });
    it('should fetch user with given email', () => {
        let list = [];
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                json: () => Promise.resolve(list)
            });
        });
        getAllNotesOfUser("testMail@gmail.com").then();
        expect(global.fetch).toHaveBeenCalledWith("http://localhost:1234/googlekeep/notes/all/testMail@gmail.com")
    });
});