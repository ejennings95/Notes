function testGetFirst20Char() {
  function noteDouble(string) {
    this._noteText = string;
  }

  noteDouble.prototype = {
    showNote: function() {
      return this._noteText;
    }
  }

  function noteListDouble() {
    this._notes = [];
  }

  noteListDouble.prototype = {
    showNotes: function() {
      return this._notes;
    },
    addNote: function(note) {
      return this._notes.push(note);
    },
  }

  var testNote = new noteDouble("how much of this can you see?");
  var testNoteList = new noteListDouble();
  var testNoteListView = new NoteListView(testNoteList);

  testNoteList.addNote(testNote);
  console.log("testGetFirst20Char: " + assert.isTrue(testNoteListView.getFirst20Char()[0] === "how much of this can"  ));
};
testGetFirst20Char();
