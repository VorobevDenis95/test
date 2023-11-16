import { validateInput } from '../utils';

test('test validate', () => {
  const result = validateInput('51.50851,-0.12572');
  expect(result).toBe(true);
});

test('test validate2', () => {
  const result = validateInput('51.50851, -0.12572');
  expect(result).toBe(true);
});

test('test validate3', () => {
  const result = validateInput('[51.50851,-0.12572]');
  expect(result).toBe(true);
});

test('test validate4', () => {
  const result = validateInput('51.5051, -3120.12572 ');
  expect(result).toBe(false);
});
