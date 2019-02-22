function testAddNoteToNoteList() {
  function noteDouble(string) {
    this._noteText = string;
  }

  noteDouble.prototype = {
    showNote: function() {
      return this._noteText;
      }
    }

    var testNote = new noteDouble("Hello, buddy");
    var testNote2 = new noteDouble("Hey");
    var testNoteList = new NoteList();

    testNoteList.addNote(testNote);
    testNoteList.addNote(testNote2);
    console.log("testAddNoteToNoteList: " + assert.isTrue(testNoteList.showNotes().includes(testNote)))
  };
testAddNoteToNoteList();
