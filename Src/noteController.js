(function (exports) {
  function NoteController(noteList){
    this._noteList = noteList;
    this._view = new NoteListView(noteList);
  }

  NoteController.prototype.returnNotesInHTML = function () {
    document.getElementById('app').innerHTML = this._view.printNotesInHTML()
   };

  exports.NoteController = NoteController;
})(this);
