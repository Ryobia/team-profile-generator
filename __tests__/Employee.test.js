const Employee = require('../lib/Employee.js');

test('Creates employee object', () => {
    const employee = new Employee ('Me', '007', 'me@email.com', 'Manager');

    expect(employee.name).toBe('Me');
    expect(employee.id).toBe('007');
    expect(employee.email).toBe('me@email.com');
    expect(employee.role).toBe('Manager');

});

test('gets employee name', () => {
    const employee = new Employee ('Me', '007', 'me@email.com', 'Manager');

    expect(employee.name).toBe('Me');

});

test('gets employee id', () => {
    const employee = new Employee ('Me', '007', 'me@email.com', 'Manager');

    expect(employee.id).toBe('007');

});

test('gets employee email', () => {
    const employee = new Employee ('Me', '007', 'me@email.com', 'Manager');

    expect(employee.email).toBe('me@email.com');

});

test('gets employee role', () => {
    const employee = new Employee ('Me', '007', 'me@email.com', 'Manager');

    expect(employee.role).toBe('Manager');

});

