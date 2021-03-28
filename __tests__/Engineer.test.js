const Engineer = require('../lib/Engineer');

test('gets engineer github', () => {
    const engineer = new Engineer ('Me', '007', 'me@email.com', 'Manager', 'Ryobia');

    expect(engineer.github).toBe('Ryobia');

});