const Service = require('./service');

const issueObj = {
    title: 'some issue',
    description: 'some description'
};

const updatedIssueObj = {
    title: 'some updated issue',
    description: 'some updated description'
};

describe('create an issue', () => {
    test('it instantiates with zero issues', () => {
        const service = new Service();

        const issues = service.getAll();

        expect(issues.length).toEqual(0);
    });

    test('it creates a new issue', () => {
        const service = new Service();

        service.create(issueObj.title, issueObj.description);

        const issues = service.getAll();

        expect(issues.length).toEqual(1);
    });

    test('it gets an issue with correct id', () => {
        const service = new Service();

        service.create(issueObj.title, issueObj.description);

        const [issue] = service.getAll();

        expect(service.get(issue.id)).toEqual(issue);
    });

    test('it throws with wrong issue id', () => {
        const service = new Service();

        expect(() => service.get('fake id')).toThrow();
    });

    test('it updates an issue with the correct issue id', () => {
        const service = new Service();

        service.create(issueObj.title, issueObj.description);

        const [issue] = service.getAll();

        service.update(issue.id, updatedIssueObj.title, updatedIssueObj.description);

        const updatedIssue = service.get(issue.id);

        expect(updatedIssue.title).toBe(updatedIssueObj.title);
        expect(updatedIssue.description).toBe(updatedIssueObj.description);
    });

    test('it throws with wrong issue id', () => {
        const service = new Service();

        expect(() => service.update('fake id', updatedIssueObj.title, updatedIssueObj.description)).toThrow();
    });

    test('it deletes an issue', () => {
        const service = new Service();

        service.create(issueObj.title, issueObj.description);

        const issues = service.getAll();

        expect(issues.length).toEqual(1);

        service.delete(issues[0].id);

        const newIssues = service.getAll();

        expect(newIssues.length).toEqual(0);
    });
});