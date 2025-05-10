import { describe, it, expect } from 'vitest';
import { mapRegistrationCategory } from '../registrationCategoryMapper';

describe('mapRegistrationCategory', () => {
  it('should return "Pendaftar baru" for NEW_REGISTRATION', () => {
    expect(mapRegistrationCategory('NEW_REGISTRATION')).toBe('Pendaftar baru');
  });

  it('should return "Pendaftar kembali" for RE_REGISTRATION', () => {
    expect(mapRegistrationCategory('RE_REGISTRATION')).toBe('Pendaftar kembali');
  });

  it('should return "Pendaftar rutin/lanjutan" for REGULAR_REGISTRATION', () => {
    expect(mapRegistrationCategory('REGULAR_REGISTRATION')).toBe('Pendaftar rutin/lanjutan');
  });

  it('should return null for null input', () => {
    expect(mapRegistrationCategory(null)).toBeNull();
  });

  it('should return undefined for undefined input', () => {
    expect(mapRegistrationCategory(undefined)).toBeUndefined();
  });

  it('should return the same string for unknown input', () => {
    const unknown = 'UNKNOWN_CATEGORY';
    expect(mapRegistrationCategory(unknown)).toBe(unknown);
  });
});