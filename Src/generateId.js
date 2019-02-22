(function (exports) {
    function GenerateId(){
        this._id = 0
    }

    GenerateId.prototype.newId = function () {
      this._id ++;
      return this._id;
    };

    exports.GenerateId = GenerateId;
})(this);
