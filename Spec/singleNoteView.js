function testSingleNotePrintHTML() {
  function noteDouble(string) {
    this._noteText = string;
  }

  noteDouble.prototype = {
    showNote: function() {
      return this._noteText;
    }
  }

  var testNote = new noteDouble("testing");
  var singleNoteView = new SingleNoteView(testNote);

  console.log("testSingleNotePrintHTML: " + assert.isTrue(singleNoteView.printHTML() === "<div><li>testing</li></div>" ))

  };
  testSingleNotePrintHTML();
