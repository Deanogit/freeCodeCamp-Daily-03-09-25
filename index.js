// Markdown Ordered List Item Converter
// Given a string representing an ordered list item in Markdown, return the equivalent HTML string.

// A valid ordered list item in Markdown must:

// Start with zero or more spaces, followed by
// A number (1 or greater) and a period (.), followed by
// At least one space, and then
// The list item text.
// If the string doesn't have the exact format above, return "Invalid format". Otherwise, wrap the list item text in li tags and return the string.

// For example, given "1. My item", return "<li>My item</li>".

// Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

function convertListItem(markdown) {
  console.log(markdown);
  // zero or more spaces
  const regex = /\s*\d\.\s+/;
  if (regex.test(markdown)) {
    console.log('Hello');
    console.log(markdown.replace(regex, '<li>'));
    let test = markdown.replace(regex, '<li>');
    console.log(test);
    return test + '</li>';
  } else {
    return 'Invalid format';
  }
  return markdown;
}
