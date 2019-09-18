import {createNote, deleteNote, getAllNotesOfUser, updateNote} from "../noteAPIs";
import {ip} from "../../utilities/server_localhost";
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
        let expected = ["http://"+ip[0]+":1234/googlekeep/notes/add",
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
    it('should fetch note with given email', () => {
        let list = [];
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                json: () => Promise.resolve(list)
            });
        });
        getAllNotesOfUser("testMail@gmail.com").then();
        expect(global.fetch).toHaveBeenCalledWith("http://"+ip[0]+":1234/googlekeep/notes/all/testMail@gmail.com")
    });
    it('should update note with updated details', () => {
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                status: 200
            });
        });
        let expected = ["http://"+ip[0]+":1234/googlekeep/notes/1/update",
            {
                "body": "{\"id\":1," +
                    "\"title\":\"TestTitle\"," +
                    "\"content\":\"This is a testing note\"," +
                    "\"email\":\"tester@gmail.com\"," +
                    "\"updatedAt\":null," +
                    "\"createdAt\":null}",
                "headers": {"Accept": "application/json", "Content-Type": "application/json"},
                "method": "PUT"
            }];
        updateNote(1, note).then(response => {
            expect(response).toEqual(200)
        });
        expect(global.fetch).toHaveBeenCalledWith(...expected);
    });
    it('should delete note with given email and note id', () => {
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                status: 200
            });
        });
        let expected = ["http://"+ip[0]+":1234/googlekeep/notes/testMail@gmail.com/1/delete", {
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }, "method": "DELETE"
        }]

        deleteNote('testMail@gmail.com', 1).then(response => {
            expect(response).toEqual(200)
        });
        expect(global.fetch).toHaveBeenCalledWith(...expected);
    })
});