var typed = new Typed('#element', {
    strings: ['Front-End Web Developer', 'React Developer', 'Back-End Developer', 'Content Writer'],
    typeSpeed: 50,
});

document.getElementById("downloadButton").addEventListener("click", downloadResume);

function downloadResume() {
    let resumePath = "Abubakar's Resume_7.pdf";
    let link = document.createElement('a');
    link.href = resumePath;
    link.target = '_blank';
    link.download = "Abubakar's Resume_7.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function scrollToSection(section) {
    if (section) {
      var sectionPosition = section.offsetTop;
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    }
  }