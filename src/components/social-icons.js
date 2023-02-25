import React from "react";

const SocialIcons = () => {
  return (
    <>
      <ul>
        <li>
          <a aria-label="github" href="#" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a aria-label="linkedin" href="#" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a aria-label="angellist" href="#" target="_blank">
            <i className="fa-brands fa-angellist"></i>
          </a>
        </li>
        <li>
          <a aria-label="twitter" href="#" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a aria-label="medium" href="#" target="_blank">
            <i className="fa-brands fa-medium"></i>
          </a>
        </li>
      </ul>
    </>
  );
}

export default SocialIcons;
