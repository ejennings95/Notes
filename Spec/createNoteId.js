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
  var testnote2 = new Note("Hey", generateId.newId());

  console.log("testCreateNoteId: " + assert.isTrue(testnote.showNoteId() === 1))
  console.log("testCreateNoteId2: " + assert.isTrue(testnote2.showNoteId() === 2))
};
testCreateNoteId();
