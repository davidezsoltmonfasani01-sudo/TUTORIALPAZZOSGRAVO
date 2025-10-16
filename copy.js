document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre > code").forEach((block) => {
    const button = document.createElement("button");
    button.textContent = "📋 Copy";
    button.className = "copy-btn";
    button.onclick = () => {
      navigator.clipboard.writeText(block.innerText);
      button.textContent = "✅ Copied!";
      setTimeout(() => button.textContent = "📋 Copy", 1500);
    };
    block.parentNode.insertBefore(button, block);
  });
});
