var assert = {
    isTrue: function(assertionToCheck) {
        if (!assertionToCheck) {
            return ("Test failed: did not match")
        } else {
            return ("Test passed: match checks out ")
        }
    }
}
