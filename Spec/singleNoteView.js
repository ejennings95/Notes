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
  var singleViewNote = new SingleViewnote(testNote);

  console.log("testSingleNotePrintHTML: " + assert.isTrue(singleViewNote.printHTML() === "<div>testing</div>" ))

  };
  testSingleNotePrintHTML();
