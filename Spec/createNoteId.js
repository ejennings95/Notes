function testCreateNoteId() {
  var testnote = new Note("Hello, buddy");

  console.log("testCreateNoteId: " + assert.isTrue(testnote.showNoteId() === 0))
};
testCreateNoteId();
