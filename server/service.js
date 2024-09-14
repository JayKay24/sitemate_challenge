const { NotFoundException } = require("./errors");

class IssueTracker {
  constructor() {
    this.issues = [];
  }

  create(title, description) {
    const issue = { id: (new Date()).getMilliseconds().toString(), title, description };
    this.issues.push(issue);

    return issue;
  }

  getAll() {
    return this.issues;
  }

  get(id) {
    const [issue] = this.issues.filter(issue => issue.id === id);
    if (!issue) throw new NotFoundException();

    return issue;
  }

  update(id, title, description) {
    const issue = this.get(id);
    if (!issue) throw new NotFoundException();
    issue.title = title;
    issue.description = description;

    return issue;
  }

  delete(id) {
    const issue = this.get(id);
    if (!issue) throw new NotFoundException();

    this.issues = this.issues.filter(issue => issue.id !== id);

    return true;
  }
}

module.exports = IssueTracker;