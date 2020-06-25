export default (promptMeta) => {
  return `
    .reaim-web-modal {
      box-sizing: border-box;
      display: flex;
      position: absolute;
      max-width: 547px;
      padding: 45px;
      font-size: 14px;
      font-weight: 100;
      width: 100%;
      height: 200px;
      background: ${promptMeta.backgroundColor};
      color: ${promptMeta.fontColor};
      margin: 0 auto;
      left: 0;
      right: 0;
      box-shadow: 0 20px 70px 0 #E5E8EC;
      border-radius: 8px;
      top: 0;
    }

    .reaim-prompt-logo-branding small a {
      position: relative;
      top: 15px;
      text-decoration: none;
      opacity: 0.5;
      color: #020E17;
      font-size: 10px;
      text-decoration: none;
    }

    .reaim-prompt-logo {
      width: 80px;
      height: 80px;
      margin-right: 30px;
    }

    .reaim-prompt-logo img {
      max-width: 80px;
      width: 100%;
    }

    .reaim-modal-content {
      width: 360px;
      position: relative;
    }

    .reaim-modal-content p {
      height: 65px;
      font-size: 16px;
      margin-top: 0;
    }

    .reaim-prompt-buttons {
      position: absolute;
      right: 20px;
    }

    .reaim-prompt-buttons button {
      height: 52px;
      border-radius: 8px;
      cursor: pointer;
      margin-left: 10px;
      padding: 10px 20px;
      border: none;
      outline: none;
    }

    .reaim-button-deny {
      backgorund: ${promptMeta.blockButtonColor};
      color: ${promptMeta.blockFontColor};
    }

    .reaim-button-accept {
      background: ${promptMeta.allowButtonColor};
      color: ${promptMeta.allowFontColor};
    }

    @media(max-width: 768px) {
      .reaim-web-modal {
        max-width: 375px;
        font-size: 12px;
        position: absolute;
        bottom: 0;
        top: auto;
        left: 0;
        right: 0;
      }


      .reaim-prompt-logo {
        width: 68px;
        height: 68px;
      }

      .reaim-prompt-buttons {
        display: flex;
        right: 0;
      }

      .reaim-prompt-buttons button {
        height: 40px;
        padding: 10px 15px;
      }
    }


    @media(max-width: 350px) {
      .reaim-modal-content p {
        height: 90px;
      }
    }

    @media(max-width: 324px) {
      .reaim-web-modal {
        height: 250px;
      }

      .reaim-modal-content p {
        height: 110px;
      }

      .reaim-prompt-buttons button {
        paddding: 10px 10px;
      }
    }
  `;
};
