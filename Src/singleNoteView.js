(function (exports) {
    function SingleNoteView(note){
      this._note = note;
    }

    SingleNoteView.prototype.printHTML = function() {
        return "<div><li>" + this._note.showNote() + "</li></div>";
      };

    exports.SingleNoteView = SingleNoteView;

})(this);
