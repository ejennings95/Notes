function testGenerateNewId() {
  var testId = new GenerateId();

  console.log("testGenerateId: " + assert.isTrue(testId.newId() === 1))
};
testGenerateNewId();
