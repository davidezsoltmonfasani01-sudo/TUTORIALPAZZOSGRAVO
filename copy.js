document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("pre > code").forEach((block) => {
    const button = document.createElement("button");
    button.textContent = "📋 Copy";
    button.className = "copy-btn";
    button.onclick = () => {
      navigator.clipboard.writeText(block.innerText);
      button.textContent = "✅ Copied!";
      setTimeout(() => button.textContent = "📋 Copy", 1500);
    };
    // Posiziona il pulsante prima del blocco di codice
    block.parentNode.style.position = "relative";
    button.style.position = "absolute";
    button.style.top = "5px";
    button.style.right = "5px";
    block.parentNode.appendChild(button);
  });
});
