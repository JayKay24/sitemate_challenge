class NotFoundException extends Error {
  constructor(message = "Issue not found") {
    super(message);
    this.status = 404;
  }
}

module.exports = {
  NotFoundException
};