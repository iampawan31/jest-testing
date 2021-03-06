const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialised...');
// const closeDatabase = () => console.log('Database Closed...');

const nameCheck = () => console.log('Checking Name....');

describe('Checking names', () => {
  beforeEach(() => nameCheck());

  test('User is Pawan', () => {
    const user = 'Pawan';
    expect(user).toBe('Pawan');
  });

  test('User is Rajshree', () => {
    const user = 'Rajshree';
    expect(user).toBe('Rajshree');
  });
});

// toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// toBe
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be false', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual
test('User should be Pawan Kumar object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Pawan',
    lastName: 'Kumar',
  });
});

// Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test('There is no I in team', () => {
  expect('team').not.toMatch('/I/');
});

// Arrays
test('Admin should be in username', () => {
  usernames = ['karen', 'admin', 'pawan', 'ricky'];
  expect(usernames).toContain('admin');
});

// Working with Async Data

// Promise
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
