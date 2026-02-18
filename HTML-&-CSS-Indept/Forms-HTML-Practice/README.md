# Frontend Mentor - Contact Form Solution

This is a solution to the [Contact Form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hY17_gnH). This project focused on building a responsive, accessible, and modern form using semantic HTML and custom CSS properties.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Key Concepts](#key-concepts)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success message (if logic is added later)
- Receive validation errors if fields are left empty or the email is formatted incorrectly
- See hover and focus states for all interactive elements on the page
- Use a layout that is optimized for their device's screen size

### Screenshot

![Project Screenshot](./screenshot.png)
_(Note: Replace the path above with the actual name of your image file, e.g., ./assets/images/preview.png)_

## My process

### Built with

- Semantic HTML5 markup
- CSS Custom Properties (Variables)
- Flexbox for layout alignment
- Modern CSS selectors (e.g., `:has()`)
- Mobile-first workflow

### Key Concepts

During this project, I focused on deep-diving into modern CSS layouts and form accessibility. Here are some of the key concepts used:

#### 1. Modern State Styling with `:has()`

I used the modern `:has()` pseudo-class to style the parent radio card container based on whether the child radio button is checked. This eliminates the need for JavaScript for simple UI state changes.

```css
/* Highlights the border of the card when the radio inside is selected */
.radio-card:has(input:checked) {
  border-color: var(--medium-green);
}
```

#### 2. Flexible Form Grids

To create a side-by-side layout for the First Name and Last Name fields while maintaining responsiveness, I utilized Flexbox with the `flex: 1` property.

```css
.form-container {
  display: flex;
  gap: 1rem;
}

.form-container .form-group {
  flex: 1; /* Allows inputs to grow and fill the space equally */
}
```

#### 3. Custom Form Accents

Instead of using standard blue browser defaults, I used `accent-color` to match the brand colors of the design, providing a more cohesive look.

```css
input[type="radio"],
input[type="checkbox"] {
  accent-color: var(--medium-green);
  width: 18px;
  height: 18px;
}
```

#### 4. Semantic Accessibility

Every input is correctly paired with a `<label>` using the `for` and `id` attributes. This ensures that clicking the label focuses the input and makes the form readable for screen readers.

```html
<label for="first-name">First Name <span>*</span></label>
<input type="text" id="first-name" name="first-name" required />
```

## Author

- Frontend Mentor - [@Allen1303](https://www.frontendmentor.io/profile/Allen1303)
- GitHub - [Allen1303](https://github.com/Allen1303)

---

### How to use this:

1. Copy the text above.
2. Create a file named `README.md` in your `HTML-&-CSS-Indept` folder.
3. Paste the text.
4. Make sure your screenshot is in the same folder and named `screenshot.png` (or update the link in the markdown).
5. `git add .`, `git commit -m "docs: add readme"`, and `git push`!
