export default (promptMeta) => {
  return `
    <div class="reaim-prompt-content-wrapper">
      <div class="reaim-prompt-logo-branding">
        ${promptMeta.logo ? `
          <div class="reaim-prompt-logo" style="${promptMeta.logo ? 'visibility: visible' : 'visibility: hidden'}">
            <img src="${promptMeta.logo}" alt="logo">
          </div>
        ` : ''}
      </div>

      <div class="reaim-modal-content">
        <p>${promptMeta.actionText}</p>
      </div>
    </div>

    <div class="reaim-prompt-buttons">
      <small>
        <a href="https://reaim.me" target="_blank" rel="noopener">
          ${promptMeta.removeBranding ? '' : 'Powered by ReAim'}
        </a>
      </small>

      <div>
        <button class="reaim-button-deny">${promptMeta.blockButton}</button>
        <button class="reaim-button-accept">${promptMeta.allowButton}</button>
      </div>
    </div>
  `;
};
