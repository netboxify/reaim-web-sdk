export default (promptMeta) => {
  return `
    .reaim-web-modal {
      all: initial;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      position: fixed;
      max-width: 547px;
      max-height: 500px;
      padding: 45px;
      padding-bottom: 30px;
      font-size: 14px;
      font-weight: 100;
      width: 100%;
      background: ${promptMeta.backgroundColor};
      color: ${promptMeta.fontColor};
      margin: 0 auto;
      left: 0;
      right: 0;
      box-shadow: 1px 2px 20px rgba(0,0,0,0.12), -2px -1px 20px 0px rgba(0,0,0,0.24);
      border-radius: 0px 0px 8px 8px;
      top: 0;
      z-index: 999999;
      font-family: "Arial", sans-serif;
      transition-property: all;
      transition-duration: .5s;
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }

    .reaim-web-modal-closed {
      max-height: 0;
    }

    .reaim-web-modal * {
      all: unset;
    }

    .reaim-web-modal .reaim-prompt-content-wrapper {
      display: flex;
    }

    .reaim-web-modal .reaim-prompt-buttons small a {
      display: block;
      color: ${promptMeta.fontColor};
      position: relative;
      text-decoration: none;
      opacity: 0.5;
      color: #020E17;
      font-size: 9px;
      text-decoration: none;
      cursor: button;
    }

    .reaim-web-modal .reaim-prompt-logo {
      width: 80px;
      height: 80px;
      margin-right: 30px;
    }

    .reaim-web-modal .reaim-prompt-logo img {
      max-width: 80px;
      width: 100%;
    }

    .reaim-web-modal .reaim-modal-content {
      width: 360px;
      position: relative;
      margin-left: 20px;
    }

    .reaim-web-modal .reaim-modal-content p {
      height: 65px;
      font-size: 16px;
      margin-top: 0;
    }

    .reaim-web-modal .reaim-prompt-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 25px;
    }

    .reaim-web-modal .reaim-prompt-buttons button {
      box-sizing: border-box;
      height: 52px;
      border-radius: 8px;
      cursor: pointer;
      margin-left: 10px;
      padding: 10px 20px;
      border: none;
      outline: none;
      font-size: 14px;
    }

    .reaim-web-modal .reaim-button-deny {
      background: ${promptMeta.blockButtonColor};
      color: ${promptMeta.blockFontColor};
    }

    .reaim-web-modal .reaim-button-accept {
      background: ${promptMeta.allowButtonColor};
      color: ${promptMeta.allowFontColor};
    }

    @media(max-width: 768px) {
      .reaim-web-modal {
        max-width: 375px;
        font-size: 12px;
        position: fixed;
        bottom: 0;
        top: auto;
        left: 0;
        right: 0;
        border-radius: 8px 8px 0px 0px;
        padding-left: 20px;
        padding-right: 20px;
      }

      .reaim-web-modal .reaim-modal-content p {
        font-size: 14px;
      }

      .reaim-web-modal .reaim-prompt-logo {
        width: 68px;
        height: 68px;
      }

      .reaim-web-modal .reaim-prompt-buttons {
        display: flex;
        margin-top: 10px;
      }

      .reaim-web-modal .reaim-prompt-buttons button {
        height: 40px;
        padding: 10px 15px;
        font-size: 12px;
      }
    }


    @media(max-width: 350px) {
      .reaim-web-modal .reaim-modal-content p {
        height: 90px;
      }
    }

    @media(max-width: 324px) {
      .reaim-web-modal {
        padding-left: 20px;
        padding-right: 20px;
      }

      .reaim-web-modal .reaim-modal-content p {
        height: 110px;
      }

      .reaim-web-modal .reaim-prompt-buttons button {
        paddding: 10px 10px;
        font-size: 10px;
      }
    }
  `;
};
