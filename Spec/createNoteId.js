function testCreateNoteId() {
  function generateIdDouble(string) {
    this._id = 0;
  }

  generateIdDouble.prototype = {
    newId: function() {
      this._id ++;
      return this._id;
    }
  }

  var generateId = new generateIdDouble();
  var testnote = new Note("Hello, buddy", generateId.newId());

  console.log("testCreateNoteId: " + assert.isTrue(testnote.showNoteId() === 1))
};
testCreateNoteId();
