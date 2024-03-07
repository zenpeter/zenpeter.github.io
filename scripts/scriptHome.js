//IMG BLUR
window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var projectImgs = document.querySelectorAll('figure');

    if (scrollPosition > 100) {
        projectImgs.forEach(function(img) {
            img.classList.remove('ImgBlur');
        });
    } else {
        projectImgs.forEach(function(img) {
            img.classList.add('ImgBlur');
        });
    }
});


//COPY EMAIL
  document.addEventListener('DOMContentLoaded', function() {
  const emailText = document.querySelector('.EmailText');
  const emailButton = document.querySelector('.EmailTextButton');

  emailButton.addEventListener('click', function() {
    // Select the text content of the email paragraph
    const textToCopy = emailText.textContent;

    // Create a textarea element to temporarily hold the text to copy
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    textarea.setAttribute('readonly', ''); // Make it readonly to prevent keyboard from showing on mobile

    // Append the textarea to the document body
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the textarea from the document body
    document.body.removeChild(textarea);

    // Change the email text to "Copied!" temporarily
    emailText.textContent = 'Copied 👍';

    // Revert the email text back to its original state after 2 seconds
    setTimeout(function() {
      emailText.textContent = textToCopy;
    }, 2000);
  });
});

