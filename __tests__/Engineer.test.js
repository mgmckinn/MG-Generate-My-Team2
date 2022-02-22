const Engineer = require("../lib/Engineer");

test("create engineer", () => {

    const engineer = new Engineer("Micha", "example@example.com", "Micha123");
    expect(engineer.github).toEqual(expect.any(String));

});

test("getRole () runs properly", () => {
    const engineer = new Engineer("Micha", "example@example.com", "Micha123");
    expect(engineer.getRole()).toEqual("Engineer");

});

test("Get GitHub username with getGitHub", () => {
    const engineer = new Engineer("Micha", "example@example.com", "Micha123");
    expect(engineer.getGitHub()).toEqual(expect.objectContaining({ engineer.GitHub }));
});