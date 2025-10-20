# Unit 01 - Lab 04: Profile Formatter

In this activity, you’ll use common **JavaScript string methods** to clean, search, replace, extract, and format text data just like a real developer.

---

## 🎯 Learning Objectives

By the end of this challenge, you will be able to:

- ✅ Clean and format user input using string methods  
- 🧠 Search and extract parts of strings  
- 🔤 Replace and combine text values dynamically  
- 🧰 Build reusable code with functions

**String Methods Practiced:**  
`trim()` · `toLowerCase()` · `toUpperCase()` · `includes()` · `replace()` · `indexOf()` · `slice()` · `concat()`

---

## 🧭 Project Setup

1. Open `index.html` in your browser.  
2. Open the **Console** in Developer Tools.  
3. Complete the steps in `script.js`.  
4. Run your code to see the results!

---

## 🪄 Challenge Instructions

### 1. Clean Up the Name

```javascript
let rawName = "   jOhN    doE   ";
```

- Remove extra spaces at the start and end.  
- Convert to proper casing (capitalize first and last name).  
- Print the formatted name.

✅ **Expected Output:**  
```
John Doe
```

📝 *Hint:* Use `trim()`, `toLowerCase()`, `indexOf()`,`toUpperCase()`, `charAt()`, and `slice()`.

---

### 2. 🔍 Check for Keywords in a Bio

```javascript
let bio = "i love to code in javascript!";
```

- Check if the bio includes the word `"javascript"`.  

📝 *Hint:* Use `includes()`.

✅ **Expected Output:**  
```
true
```

---

### 3. ✏️ Replace Old Text with New Text

```javascript
let status = "I am learning HTML";
```

- Replace `"HTML"` with `"JavaScript"`.  
- Print the updated sentence.

📝 *Hint:* Use `replace()`.

✅ **Expected Output:**  
```
I am learning JavaScript
```

---

### 4. 🪝 Extract a Substring for a Username

```javascript
let email = "john.doe@studentmail.com";
```

- Extract the text before the `@` symbol.  
- Print it as the username.

📝 *Hint:* Use `indexOf()` and `slice()`.

✅ **Expected Output:**  
```
john.doe
```

---

### 5. 🤝 Concatenate a Welcome Message

- Combine the formatted name from Step 1 with a welcome message.  
- Use `concat()` to build the sentence.

✅ **Expected Output:**  
```
Welcome to EHS, John Doe!
```

---

## 🏆 Extension Ideas

- Use `replaceAll()` to replace multiple occurrences of a word.  
- Use `prompt()` to accept dynamic input from the user.  
- Display the formatted profile in the web page instead of just the console.  

