export default (promptMeta) => {
  return `
    <div class="reaim-prompt-logo-branding">
      <div class="reaim-prompt-logo">
        <img src="${promptMeta.logo}" alt="logo">
      </div>

      ${promptMeta.removeBranding ? '' : `<small>
        <a href="https://reaim.me" target="_blank" rel="noopener">Powered by ReAim</a>
      </small>`}
    </div>

    <div class="reaim-modal-content">
      <p>${promptMeta.actionText}</p>
      <div class="reaim-prompt-buttons">
        <button class="reaim-button-deny">${promptMeta.blockButton}</button>
        <button class="reaim-button-accept">${promptMeta.allowButton}</button>
      </div>
    </div>
  `;
};
