// utils/validateForm.js

export default function validateForm(values) {
    let errors = {};
  
    // Title
    if(!values.title) {
      errors.title = 'Title is required';
    } else if(values.title.length > 100) {
      errors.title = 'Title cannot exceed 100 characters';
    }
  
    // Content
    if(!values.content) {
      errors.content = 'Content is required';
    }
  
    // Tags
    if(values.tags.length === 0) {
      errors.tags = 'Please provide at least 1 tag';
    } else if(values.tags.length > 5) {
      errors.tags = 'Cannot add more than 5 tags';
    }
  
    // Image
    if(!values.image) {
      errors.image = 'Image is required';
    } else if(!isValidImage(values.image)) {
      errors.image = 'Please upload a valid image file (jpg/png/gif)';
    }
  
    // Return errors
    return errors;
}
  
// Check if valid image file
function isValidImage(image) {
    const types = ['image/jpeg', 'image/png', 'image/gif'];
    return types.includes(image.type); 
}