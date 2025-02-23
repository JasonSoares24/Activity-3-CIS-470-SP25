
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // Boundary Tests
      expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
      expect(classifyTriangle(199, 199, 199)).toBe('Equilateral');
      expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
      expect(classifyTriangle(2, 2, 2)).toBe('Equilateral');

      // Equivalence Tests
      expect(classifyTriangle(100, 100, 100)).toBe('Equilateral');
      expect(classifyTriangle(50, 50, 50)).toBe('Equilateral');
      expect(classifyTriangle(35, 35, 35)).toBe('Equilateral');
      expect(classifyTriangle(70, 70, 70)).toBe('Equilateral');
    });
  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');

      // Boundary Testing  
      expect(classifyTriangle(-1, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(10, -1, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(-1, -1, -1)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(10, 10, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(10, 201, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(201, 201, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');

      // Equivalence Testing
      expect(classifyTriangle(-200, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(10, 500, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
      expect(classifyTriangle(10, 10, 700)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      
      // Equivalence Testing
      expect(classifyTriangle(2, 5, 7)).toBe('Not a Triangle');
      expect(classifyTriangle(1, 200, 1)).toBe('Not a Triangle');
      expect(classifyTriangle(1, 1, 200)).toBe('Not a Triangle');
    });
  });
  