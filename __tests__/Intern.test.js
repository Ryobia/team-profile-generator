const Intern = require('../lib/Intern');

test('gets intern school', () => {
    const intern = new Intern ('Me', '007', 'me@email.com', 'Manager', 'UofU');

    expect(intern.school).toBe('UofU');

});