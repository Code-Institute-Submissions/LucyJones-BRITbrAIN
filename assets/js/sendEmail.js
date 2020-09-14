function sendMail(contactForm) {
  emailjs
    .send("lucyjpjones@gmail.com", "lucy", {
      from_name: contactForm.name.value,
      from_email: contactForm.email.value,
      project_subject: contactForm.subject.value,
      project_request: contactForm.projectsummary.value
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
  return false; // To block from loading a new page
}
