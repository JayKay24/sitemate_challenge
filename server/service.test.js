const Service = require('./service');

const issueObj = {
    title: 'some issue',
    description: 'some description'
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

        const issues = service.issues

        expect(service.issues.length).toEqual(1);
    });
});