# HTML Form Elements Cheat Sheet

A comprehensive guide to HTML `<input>` types and button elements.

## Table of Contents

- [Buttons](#buttons)
- [Selection Controls](#selection-controls)
- [Text Inputs](#text-inputs)
- [Date & Time Inputs](#date--time-inputs)
- [Validation & Specialized Inputs](#validation--specialized-inputs)
- [Hidden & Administrative](#hidden--administrative)

---

## Buttons

### Button

Used to activate a script when clicked. Can be defined via `<input>` or the more flexible `<button>` tag.

```html
<!-- Input version -->
<input type="button" value="Click me" onclick="msg()" />

<!-- Button tag version (allows nested HTML like images) -->
<button onclick="alert('Are you sure?')">
  <img
    src="https://yourserver.com/button_img.jpg"
    alt="Submit"
    height="64"
    width="64"
  />
</button>
```

### Submit

Submits all form values to a form-handler (specified in the `action` attribute).

```html
<form action="myserver.com" method="POST">
  <input type="submit" value="Submit" />
</form>
```

### Reset

Resets all controls in the form to their default values.

```html
<input type="reset" />
```

### Image

Defines an image as a graphical submit button.

```html
<input type="image" src="submit_img.png" alt="Submit" width="48" height="48" />
```

---

## Selection Controls

### Checkbox

Allows single or multiple values to be selected from a list.

```html
<input type="checkbox" id="dog" name="dog" value="Dog" />
<label for="dog">I like dogs</label>

<input type="checkbox" id="cat" name="cat" value="Cat" />
<label for="cat">I like cats</label>
```

### Radio

Allows only one value to be selected from a group. Elements must share the same `name` attribute to be grouped.

```html
<input type="radio" id="light" name="theme" value="Light" />
<label for="light">Light</label>

<input type="radio" id="dark" name="theme" value="Dark" />
<label for="dark">Dark</label>
```

---

## Text Inputs

### Text

Basic single-line text field.

```html
<label for="fname">First name:</label>
<input type="text" id="fname" name="fname" />
```

### Password

Obscures characters for sensitive information.

```html
<label for="pwd">Password:</label>
<input type="password" id="pwd" name="pwd" />
```

### Search

Functionally identical to text, but may be styled differently by browsers to indicate a search query.

```html
<label for="gsearch">Search:</label>
<input type="search" id="gsearch" name="gsearch" />
```

---

## Date & Time Inputs

### Date

Select year, month, and day.

```html
<input type="date" id="dob" name="dob" />
```

### Datetime-local

Select year, month, day, and time (hours/minutes).

```html
<input type="datetime-local" id="birthdaytime" name="birthdaytime" />
```

### Time

Select time (hours and minutes) with no time zone.

```html
<input type="time" id="appt" name="appt" />
```

### Month

Select month and year only. _Note: Limited browser support._

```html
<input
  type="month"
  id="bdaymonth"
  name="bdaymonth"
  min="1930-01"
  value="2000-01"
/>
```

### Week

Select a specific week and year. _Note: Limited browser support._

```html
<input type="week" id="week" name="week" />
```

---

## Validation & Specialized Inputs

### Email

Validates that the input is a correctly formatted email address upon submission.

```html
<input type="email" id="email" name="email" />
```

### URL

Validates that the input is a properly formatted URL.

```html
<input type="url" id="homepage" name="homepage" />
```

### Tel

Used for telephone numbers. Use the `pattern` attribute for specific validation.

```html
<input type="tel" id="phone" name="phone" pattern="[+]{1}[0-9]{11,14}" />
```

### Number

Allows only numeric input. Supports `min`, `max`, and `step`.

```html
<input type="number" id="quantity" name="quantity" min="1" max="5" />
```

### Range

A slider control for selecting a value where the exact number isn't critical.

```html
<input type="range" id="volume" name="volume" min="0" max="10" />
```

### File

Allows the user to upload files. Use `accept` for file types and `multiple` for many files.

```html
<input type="file" id="myfile" name="myfile" />
```

---

## Hidden & Administrative

### Hidden

Stored data that is submitted with the form but not visible to the user.

```html
<input type="hidden" id="custId" name="custId" value="3487" />
```
