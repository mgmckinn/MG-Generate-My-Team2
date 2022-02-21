const Intern = require("../lib/Intern");

test("Set school with constructor argument", () => {

    const intern = new Intern("Micha", 1, "example@example.com", "Indiana University");
    expect(intern.school).toEqual(expect.any(String));
});

test("getRole() function runs", () => {

    const intern = new Intern("Mitchell", 1, "example@example.com", "Indiana University");
    expect(intern.getRole()).toEqual('Intern');
});

test("Get school with getSchool()", () => {

    const intern = new Intern("Micha", 1, "example@example.com", "Indiana University");
    expect(intern.getSchool()).toEqual(expect.any(String));

});