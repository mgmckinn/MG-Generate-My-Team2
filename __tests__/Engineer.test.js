const Engineer = require("../lib/Engineer");

test("create engineer", () => {

    const engineer = new Engineer("Micha", 52, "example@example.com", "Micha123");

    expect(engineer.github).toEqual(engineer.github);

});

test("Get GitHub username with getGitHub", () => {
    const engineer = new Engineer("Micha", 52, "example@example.com", "Micha123");

    expect(engineer.getGitHub()).toEqual(engineer.github);
});

test("getRole () runs properly", () => {
    const engineer = new Engineer("Micha", 52, "example@example.com", "Micha123");

    expect(engineer.getRole()).toString("Engineer");

});