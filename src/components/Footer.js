import React from "react";
import "./../sass/main.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__row">
        <div className="footer__phone">
          <svg
            width="19"
            height="18"
            viewBox="0 0 27 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.6432 18.4339C26.5397 17.8243 26.3229 17.2779 26.0123 16.7897L26.0246 16.8111C25.8587 16.5567 25.5841 16.377 25.2629 16.3278L25.2568 16.327L17.3866 15.1587C17.3374 15.1513 17.2813 15.148 17.2242 15.148C16.9189 15.148 16.6416 15.2612 16.4389 15.4458C15.908 15.9455 15.4789 16.5403 15.1849 17.2016L15.1709 17.2377C12.0944 15.9471 9.68485 13.6942 8.33966 10.8964L8.30543 10.8168C9.05042 10.5289 9.6866 10.1285 10.2201 9.63129C10.4184 9.44587 10.5413 9.18907 10.5413 8.90519C10.5413 8.84858 10.536 8.79279 10.5264 8.73782L10.5272 8.74356L9.27857 1.3841C9.22504 1.07725 9.032 0.819632 8.76348 0.667848L8.75822 0.665387C8.27911 0.397099 7.71839 0.19937 7.12082 0.104197L7.09187 0.100095C6.78562 0.0360999 6.43375 0 6.0731 0C6.05204 0 6.03186 0 6.0108 0H6.01431H6.00554C2.69565 0.0229727 0.0201822 2.52781 0 5.62092V5.62256C0.0131623 16.3188 9.28296 24.9861 20.7219 24.9984C24.0353 24.9803 26.7169 22.4747 26.7371 19.3791V19.3774C26.738 19.3537 26.738 19.3258 26.738 19.297C26.738 18.991 26.7037 18.6924 26.6379 18.4044L26.6432 18.4323V18.4339ZM20.7237 22.9497C10.4948 22.939 2.20601 15.189 2.1946 5.62584C2.21127 3.65758 3.91536 2.0659 6.01958 2.05277C6.02835 2.05277 6.04064 2.05277 6.05117 2.05277C6.26966 2.05277 6.48289 2.07492 6.68822 2.11759L6.66892 2.11431C6.87337 2.1463 7.05326 2.19061 7.22612 2.24804L7.20419 2.24148L8.26595 8.50481C7.81316 8.81576 7.27 9.03892 6.68032 9.13492L6.65751 9.1382C6.13891 9.22599 5.75106 9.64524 5.75106 10.149C5.75106 10.2688 5.773 10.3836 5.81337 10.4903L5.81073 10.4829C7.41127 14.7632 10.9519 18.0737 15.4201 19.5391L15.5298 19.5703C15.636 19.6055 15.7588 19.6252 15.8869 19.6252C16.0923 19.6252 16.2836 19.5735 16.4485 19.4825L16.4433 19.4849C16.7162 19.334 16.9101 19.0813 16.9671 18.7843L16.968 18.7777C17.0742 18.205 17.3129 17.6972 17.6524 17.2631L17.6446 17.273L24.3424 18.2666C24.4021 18.4249 24.4556 18.6152 24.4916 18.8105L24.4951 18.8318C24.5276 18.9771 24.5451 19.1444 24.5451 19.3151C24.5451 19.3348 24.5451 19.3545 24.5442 19.375V19.3717C24.5328 21.3408 22.8296 22.9349 20.7254 22.9481H20.7237V22.9497ZM15.1779 4.53874C15.1534 4.5371 15.1253 4.53546 15.0963 4.53546C14.5172 4.53546 14.046 4.96702 14.0311 5.50524V5.50688C14.0302 5.52329 14.0293 5.54216 14.0293 5.56103C14.0293 6.10745 14.4847 6.55377 15.0603 6.58659H15.063C17.9289 6.73591 20.1928 8.94539 20.1928 11.6488C20.1928 11.817 20.184 11.9827 20.1673 12.1468L20.1691 12.1263C20.1691 12.6924 20.6605 13.1519 21.2659 13.1519C21.8714 13.1519 22.3628 12.6924 22.3628 12.1263C22.3742 11.9819 22.3804 11.8137 22.3804 11.6439C22.3804 7.84845 19.2021 4.74714 15.1981 4.53956L15.1779 4.53874ZM15.0682 2.16928C15.4456 2.18733 24.3021 2.71077 24.3021 12.1263C24.3021 12.6924 24.7935 13.1519 25.3989 13.1519C26.0044 13.1519 26.4958 12.6924 26.4958 12.1263C26.5089 11.9302 26.516 11.7005 26.516 11.4699C26.516 5.46011 21.5309 0.538217 15.2157 0.123888L15.1771 0.122247C15.1525 0.120607 15.1235 0.118966 15.0946 0.118966C14.5137 0.118966 14.0407 0.552985 14.0275 1.09366C14.0267 1.10925 14.0258 1.12812 14.0258 1.14617C14.0258 1.69423 14.4856 2.14138 15.0647 2.16928H15.0682Z"
              fill="#1e1e47"
            />
          </svg>
          <span>+7 999 888-77-666</span>
        </div>
        <div className="footer__social">
          <a href="/">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_154_36)">
                <path
                  d="M20.9727 0H5.02734C2.25469 0 0 2.25469 0 5.02734V10.3391V20.9828C0 23.7555 2.25469 26.0102 5.02734 26.0102H20.9727C23.7453 26.0102 26 23.7555 26 20.9828V10.3289V5.01719C25.9898 2.25469 23.7352 0 20.9727 0ZM22.4148 2.99609H22.9937V3.56484V7.40391L18.5961 7.41406L18.5859 3.00625L22.4148 2.99609ZM9.28281 10.3289C10.1156 9.18125 11.4664 8.41953 12.9898 8.41953C14.5133 8.41953 15.8641 9.17109 16.6969 10.3289C17.2453 11.0805 17.5602 12.0047 17.5602 13C17.5602 15.5187 15.5086 17.5805 12.9797 17.5805C10.4508 17.5805 8.41953 15.5187 8.41953 13C8.41953 12.0047 8.74453 11.0805 9.28281 10.3289ZM23.4609 20.9727C23.4609 22.3437 22.3438 23.4609 20.9727 23.4609H5.02734C3.65625 23.4609 2.53906 22.3437 2.53906 20.9727V10.3289H6.41875C6.08359 11.1516 5.89062 12.0555 5.89062 13C5.89062 16.9203 9.07969 20.1094 13 20.1094C16.9203 20.1094 20.1094 16.9203 20.1094 13C20.1094 12.0555 19.9164 11.1516 19.5813 10.3289H23.4609V20.9727Z"
                  fill="#1E1E47"
                />
              </g>
              <defs>
                <clipPath id="clip0_154_36">
                  <rect width="26" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="/">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.063 15.75C18.563 15.562 18.563 14.844 18.532 14.344C18.407 12.563 19.032 9.84398 18.282 8.68798C17.751 7.99998 15.188 8.06298 13.626 8.15698C13.188 8.21998 12.657 8.31298 12.282 8.50098C11.907 8.68898 11.532 9.00098 11.532 9.28198C11.532 9.68798 12.47 9.62598 12.813 10.157C13.188 10.72 13.188 11.938 13.188 12.938C13.188 14.094 13 15.626 12.532 15.688C11.813 15.719 11.407 15 11.032 14.469C10.282 13.438 9.53199 12.156 8.96899 10.906C8.68799 10.25 8.53099 9.53098 8.12499 9.24998C7.49999 8.81198 6.37499 8.78098 5.28099 8.81198C4.28099 8.84298 2.84299 8.71798 2.56199 9.31198C2.34299 9.96798 2.81199 10.593 3.06199 11.125C4.34299 13.906 5.71799 16.344 7.40599 18.656C8.96899 20.812 10.437 22.531 13.312 23.437C14.125 23.687 17.687 24.406 18.406 23.437C18.656 23.062 18.594 22.218 18.719 21.593C18.844 20.968 19 20.343 19.594 20.312C20.094 20.281 20.375 20.718 20.688 21.031C21.032 21.375 21.313 21.656 21.563 21.969C22.157 22.563 22.782 23.375 23.532 23.688C24.563 24.126 26.157 24.001 27.657 23.938C28.876 23.907 29.751 23.657 29.845 22.938C29.908 22.375 29.282 21.563 28.907 21.094C27.969 19.938 27.532 19.594 26.469 18.531C26 18.062 25.406 17.562 25.406 17C25.375 16.656 25.656 16.344 25.906 16C27 14.375 28.094 13.219 29.094 11.531C29.375 11.031 30.032 9.87498 29.782 9.31198C29.501 8.68698 27.938 8.87398 26.969 8.87398C25.719 8.87398 24.094 8.77998 23.781 9.02998C23.187 9.43598 22.937 10.093 22.656 10.718C22.031 12.156 21.187 13.624 20.312 14.718C19.999 15.093 19.406 15.874 19.062 15.749L19.063 15.75Z"
                fill="#1E1E47"
              />
            </svg>
          </a>
          <a href="/">
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.25 16C30.25 23.3637 24.0938 29.3333 16.5 29.3333C8.90608 29.3333 2.75 23.3637 2.75 16C2.75 8.63616 8.90608 2.66663 16.5 2.66663C24.0938 2.66663 30.25 8.63616 30.25 16ZM16.9927 12.5099C15.6553 13.0493 12.9824 14.1657 8.97403 15.8592C8.32312 16.1102 7.98215 16.3558 7.95112 16.5958C7.89866 17.0017 8.42269 17.1614 9.13626 17.379C9.23333 17.4086 9.3339 17.4393 9.437 17.4717C10.139 17.693 11.0834 17.952 11.5744 17.9622C12.0197 17.9716 12.5168 17.7936 13.0655 17.4281C16.8107 14.9766 18.744 13.7376 18.8653 13.7108C18.9509 13.692 19.0696 13.6682 19.15 13.7376C19.2305 13.8069 19.2225 13.9381 19.214 13.9733C19.1621 14.188 17.1051 16.0424 16.0406 17.002C15.7088 17.3012 15.4734 17.5133 15.4253 17.5618C15.3175 17.6704 15.2076 17.773 15.102 17.8717C14.4499 18.4814 13.9607 18.9386 15.1291 19.6853C15.6907 20.0441 16.1399 20.3408 16.5881 20.6368C17.0776 20.9601 17.5659 21.2825 18.1977 21.6841C18.3586 21.7864 18.5123 21.8926 18.6621 21.9961C19.2317 22.39 19.7435 22.7438 20.3758 22.6873C20.7432 22.6546 21.1228 22.3196 21.3155 21.3204C21.7711 18.959 22.6665 13.8426 22.8734 11.7344C22.8916 11.5497 22.8687 11.3133 22.8504 11.2095C22.832 11.1057 22.7938 10.9579 22.6546 10.8484C22.4899 10.7188 22.2357 10.6914 22.1218 10.6933C21.6047 10.7022 20.8112 10.9698 16.9927 12.5099Z"
                fill="#1E1E47"
              />
            </svg>
          </a>
        </div>
        <div className="footer__email">
          <svg
            width="24"
            height="24"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.11611 6.61611C4.34233 6.38991 4.65482 6.25 5 6.25H25C25.3451 6.25 25.6576 6.38991 25.8839 6.61611M4.11611 6.61611C3.88991 6.84233 3.75 7.15482 3.75 7.5V22.5C3.75 23.1904 4.30965 23.75 5 23.75H25C25.6904 23.75 26.25 23.1904 26.25 22.5V7.5C26.25 7.15482 26.1101 6.84233 25.8839 6.61611M4.11611 6.61611L13.2323 15.7321C14.2085 16.7085 15.7915 16.7085 16.7677 15.7321L25.8839 6.61611"
              stroke="#1E1E47"
              strokeWidth="3.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>some.email@snow.board</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
