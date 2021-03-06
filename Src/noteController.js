(function (exports) {
  function NoteController(noteList){
    this._noteList = noteList;
    this._view = new NoteListView(noteList);
  }

  NoteController.prototype.returnNotesInHTML = function () {
    document.getElementById('app').innerHTML = this._view.printNotesInHTML()
   };

  exports.NoteController = NoteController;

  makeUrlChangeShowNoteForCurrentPage();
  listenForFormSubmit();

  function makeUrlChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(location) {
    return location.hash.split("#")[1];
  };

  function showNote(noteNumber) {
    noteList.showNotes().forEach(note => {
      if (note.showId().toString() === noteNumber){
        view = new SingleNoteView(note)
        document.getElementById("app").innerHTML = view.printHTML();
      }
    })
  };

  function listenForFormSubmit() {
    document.getElementById('text').addEventListener("submit", function(submitEvent) {
      submitEvent.preventDefault();
      var newNote = new Note(submitEvent.path[0][0].value, genId.newId());
      newNoteList.addNote(newNote);
    })
  };
})(this);
