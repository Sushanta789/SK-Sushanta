const text = "Welcome to My Website  S.K. Sushanta";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      document.getElementById("autoType").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  window.onload = typeWriter;