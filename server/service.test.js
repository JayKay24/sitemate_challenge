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
});