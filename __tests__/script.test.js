/**
 * Unit Tests for JavaScript String Methods Challenge
 * Profile Formatter - Unit 2.1
 */

describe('JavaScript String Methods Challenge', () => {

  // Step 1: Clean Up the Name
  describe('Step 1: Clean up the name', () => {
    test('should remove extra spaces and format name to proper case', () => {
      let rawName = "   jOhN    doE   ";

      // Student's solution should produce this result
      let trimmedName = rawName.trim();
      let lowerName = trimmedName.toLowerCase();

      // Split by spaces and capitalize each word
      let nameParts = lowerName.split(/\s+/);
      let formattedName = nameParts.map(part =>
        part.charAt(0).toUpperCase() + part.slice(1)
      ).join(' ');

      expect(formattedName).toBe('John Doe');
    });

    test('should handle name with multiple spaces between words', () => {
      let rawName = "   jOhN    doE   ";
      let trimmedName = rawName.trim();

      expect(trimmedName).not.toMatch(/^\s+/);
      expect(trimmedName).not.toMatch(/\s+$/);
    });
  });

  // Step 2: Check for Keywords in a Bio
  describe('Step 2: Check for keywords in a bio', () => {
    test('should find "javascript" in the bio', () => {
      let bio = "i love to code in javascript!";
      let hasKeyword = bio.includes("javascript");

      expect(hasKeyword).toBe(true);
    });

    test('should be case-sensitive by default', () => {
      let bio = "i love to code in javascript!";

      expect(bio.includes("javascript")).toBe(true);
      expect(bio.includes("JavaScript")).toBe(false);
    });

    test('should return false when keyword is not present', () => {
      let bio = "i love to code in python!";
      let hasKeyword = bio.includes("javascript");

      expect(hasKeyword).toBe(false);
    });
  });

  // Step 3: Replace Old Text with New Text
  describe('Step 3: Replace old text with new text', () => {
    test('should replace "HTML" with "JavaScript"', () => {
      let status = "I am learning HTML";
      let updatedStatus = status.replace("HTML", "JavaScript");

      expect(updatedStatus).toBe("I am learning JavaScript");
    });

    test('should not modify the original string if no match', () => {
      let status = "I am learning Python";
      let updatedStatus = status.replace("HTML", "JavaScript");

      expect(updatedStatus).toBe("I am learning Python");
    });

    test('should only replace first occurrence', () => {
      let status = "HTML is fun, HTML is great";
      let updatedStatus = status.replace("HTML", "JavaScript");

      expect(updatedStatus).toBe("JavaScript is fun, HTML is great");
    });
  });

  // Step 4: Extract a Substring for a Username
  describe('Step 4: Extract a substring for a username', () => {
    test('should extract username before @ symbol', () => {
      let email = "john.doe@studentmail.com";
      let atIndex = email.indexOf("@");
      let username = email.slice(0, atIndex);

      expect(username).toBe("john.doe");
    });

    test('should find correct index of @ symbol', () => {
      let email = "john.doe@studentmail.com";
      let atIndex = email.indexOf("@");

      expect(atIndex).toBe(8);
    });

    test('should handle different email formats', () => {
      let email = "test.user@example.com";
      let atIndex = email.indexOf("@");
      let username = email.slice(0, atIndex);

      expect(username).toBe("test.user");
    });
  });

  // Step 5: Concatenate a Welcome Message
  describe('Step 5: Concatenate a welcome message', () => {
    test('should create welcome message with formatted name', () => {
      let formattedName = "John Doe";
      let welcomeMessage = "Welcome to EHS, ".concat(formattedName, "!");

      expect(welcomeMessage).toBe("Welcome to EHS, John Doe!");
    });

    test('should work with + operator as well', () => {
      let formattedName = "John Doe";
      let welcomeMessage = "Welcome to EHS, " + formattedName + "!";

      expect(welcomeMessage).toBe("Welcome to EHS, John Doe!");
    });

    test('should include proper punctuation and spacing', () => {
      let formattedName = "John Doe";
      let welcomeMessage = "Welcome to EHS, ".concat(formattedName, "!");

      expect(welcomeMessage).toContain("Welcome to EHS, ");
      expect(welcomeMessage).toContain("!");
    });
  });

  // Bonus Challenge: formatProfile function
  describe('Bonus Challenge: formatProfile function', () => {
    test('should format complete profile', () => {
      function formatProfile(name, bio, status, email) {
        // Clean and format name
        let trimmedName = name.trim();
        let lowerName = trimmedName.toLowerCase();
        let nameParts = lowerName.split(/\s+/);
        let formattedName = nameParts.map(part =>
          part.charAt(0).toUpperCase() + part.slice(1)
        ).join(' ');

        // Replace HTML with JavaScript
        let updatedStatus = status.replace("HTML", "JavaScript");

        // Extract username
        let atIndex = email.indexOf("@");
        let username = email.slice(0, atIndex);

        return `Name: ${formattedName}\nBio: ${bio}\nStatus: ${updatedStatus}\nUsername: ${username}`;
      }

      let result = formatProfile(
        "   jOhN    doE   ",
        "i love to code in javascript!",
        "I am learning HTML",
        "john.doe@studentmail.com"
      );

      expect(result).toContain("Name: John Doe");
      expect(result).toContain("Bio: i love to code in javascript!");
      expect(result).toContain("Status: I am learning JavaScript");
      expect(result).toContain("Username: john.doe");
    });
  });

  // Integration test - All steps together
  describe('Integration: Complete workflow', () => {
    test('should complete all steps in sequence', () => {
      // Step 1
      let rawName = "   jOhN    doE   ";
      let trimmedName = rawName.trim();
      let lowerName = trimmedName.toLowerCase();
      let nameParts = lowerName.split(/\s+/);
      let formattedName = nameParts.map(part =>
        part.charAt(0).toUpperCase() + part.slice(1)
      ).join(' ');

      // Step 2
      let bio = "i love to code in javascript!";
      let hasKeyword = bio.includes("javascript");

      // Step 3
      let status = "I am learning HTML";
      let updatedStatus = status.replace("HTML", "JavaScript");

      // Step 4
      let email = "john.doe@studentmail.com";
      let atIndex = email.indexOf("@");
      let username = email.slice(0, atIndex);

      // Step 5
      let welcomeMessage = "Welcome to EHS, ".concat(formattedName, "!");

      // Assertions
      expect(formattedName).toBe('John Doe');
      expect(hasKeyword).toBe(true);
      expect(updatedStatus).toBe("I am learning JavaScript");
      expect(username).toBe("john.doe");
      expect(welcomeMessage).toBe("Welcome to EHS, John Doe!");
    });
  });
});
