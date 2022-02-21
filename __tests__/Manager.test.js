const Manager = require('../lib/Manager');


test("Get Office Number ", () => {
    const manager = new Manager("Micha", 1, "example@example.com", 106);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("getRole() function", () => {

    const manager = new Manager("Micha", 1, "example@example.com", 106);
    expect(manager.getRole()).toEqual('Manager');
});