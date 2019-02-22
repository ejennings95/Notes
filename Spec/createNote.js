function testCreateNote() {
  var testNote = new Note("hello, buddy");

  console.log("testCreateNote: " + assert.isTrue(testNote.showNote() === "hello, buddy"))
};
testCreateNote();
