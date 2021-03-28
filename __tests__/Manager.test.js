const Manager = require('../lib/Manager');

test('gets intern school', () => {
    const manager = new Manager ('Me', '007', 'me@email.com', 'Manager', '1');

    expect(manager.officeNumber).toBe('1');

});