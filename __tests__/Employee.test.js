const Employee = require('../lib/Employee');

test("create new employee", () => {
    const employee = new Employee("Sarah", 25, "example@example.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

test("get employee id", () => {
    const employee = new Employee("Sarah", 25, "staff@example.com");
    expect(employee.getId()).toEqual(expect.any(Number));
});

test("get employee email", () => {
    const employee = new Employee("Sarah", 25, "staff@example.com");
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString())
    );
});

test("get employee role", () => {
    const employee = new Employee("Sarah", 25, "staff@example.com");
    expect(employee.getRole()).toEqual("Employee");
});