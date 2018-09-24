import React from 'react'

const divStyle = {
  alignItems: 'center',
  display: 'flex',
  flex: '1 0 auto',
  flexDirection: 'column',
  justifyContent: 'center'
}

const svgStyle = {
  "webkiAanimation": "spin 2s linear infinite" /* Safari */,
  animation: "spin 2s linear infinite",
  color: "#fafafa",
  height: "3.2rem",
  width: "3.2rem"
};

const Loading = () => (
  <div className="loading" style={divStyle}>
    <svg
      aria-hidden="true"
      className="loading__icon"
      data-prefix="fas"
      data-icon="spinner"
      role="img"
      style={svgStyle}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
      />
    </svg>
  </div>
);

export default Loading