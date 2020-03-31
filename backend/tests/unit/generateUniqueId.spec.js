const generateUniqueId = require("../../src/utils/generateUniqueId");

describe("Generate Unique ID", () => {
  it("should generate an unique ID", () => {
    const id = generateUniqueId();

    // Espera retornar um ID com um tamanho de 8 caracteres
    expect(id).toHaveLength(8);
  });
});
