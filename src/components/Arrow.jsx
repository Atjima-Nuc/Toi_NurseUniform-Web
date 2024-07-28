const heightArrow = {
  neckToWaist: "104px",
  backLength: "116px",
  bustHeight: "50px",
  big: "400px",
};

const widthArrow = {
  chestWidth: "85px",
  shoulderWidth: "100px",
  bustSeparation: "40px",
};

export function VerticalDualArrow({
  height = "neckToWaist",
  id = "neckToWaistArrow",
}) {
  return (
    // <svg
    //   viewBox="0 0 64 64"
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill="none"
    //   stroke="#316993"
    //   height={heightArrow[height]}
    //   className="absolute top-[100px] -left-[6px]"
    // >
    //   <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    //   <g
    //     id="SVGRepo_tracerCarrier"
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //   ></g>
    //   <g id="SVGRepo_iconCarrier">
    //     <polyline points="40 20 32 12 24 20"></polyline>
    //     <polyline points="24 44 32 52 40 44"></polyline>
    //     <line x1="32" y1="12" x2="32" y2="52"></line>
    //   </g>
    // </svg>
    <svg
      height={heightArrow[height]}
      viewBox="0 0 12 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Arrow 2"
        d="M6 0L0.226497 10L11.7735 10L6 0ZM6 100L11.7735 90L0.226493 90L6 100ZM5 9L5 91L7 91L7 9L5 9Z"
        fill="#316993"
      />
    </svg>
  );
}

export function DownArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M7.33199 16.3154C6.94146 15.9248 6.3083 15.9248 5.91777 16.3154C5.52725 16.7059 5.52725 17.339 5.91777 17.7296L10.5834 22.3952C11.3644 23.1762 12.6308 23.1762 13.4118 22.3952L18.0802 17.7267C18.4707 17.3362 18.4707 16.703 18.0802 16.3125C17.6897 15.922 17.0565 15.922 16.666 16.3125L13 19.9786V2.0001C13 1.44781 12.5523 1.0001 12 1.0001C11.4477 1.0001 11 1.44781 11 2.0001V19.9833L7.33199 16.3154Z"
          fill="#316993"
        ></path>
      </g>
    </svg>
  );
}

export function IncomeArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M21.6862 2.33464C21.2957 1.94412 20.6625 1.94412 20.272 2.33464L4 18.6066V12.0001C4 11.4478 3.55228 11.0001 3 11.0001C2.44772 11.0001 2 11.4478 2 12.0001V20.0001C2 21.1047 2.89543 22.0001 4 22.0001H12C12.5523 22.0001 13 21.5524 13 21.0001C13 20.4478 12.5523 20.0001 12 20.0001H5.43498L21.6862 3.74885C22.0767 3.35833 22.0767 2.72517 21.6862 2.33464Z"
          fill="#316993"
        ></path>
      </g>
    </svg>
  );
}

export function HorizonDualArrow({ width = "chestWidth" }) {
  return (
    <svg
      width={widthArrow[width]}
      height="12"
      viewBox="0 0 100 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Arrow 2"
        d="M100 6L90 0.226496L90 11.7735L100 6ZM0 5.99999L10 11.7735L10 0.226489L0 5.99999ZM91 5L9 4.99999L9 6.99999L91 7L91 5Z"
        fill="#316993"
      />
    </svg>
  );
}

export function HorizonDualArrow2({ width = "chestWidth" }) {
  return (
    <svg
      width="40"
      height="12"
      viewBox="0 0 40 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Arrow 2"
        d="M40 6L30 0.226496L30 11.7735L40 6ZM0 6L10 11.7735L10 0.226495L0 6ZM31 5L9 5L9 7L31 7L31 5Z"
        fill="#316993"
      />
    </svg>
  );
}

export function DiagonalDualArrow({ width = "bustHeight" }) {
  return (
    <svg
      width="33"
      height="51"
      viewBox="0 0 33 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Arrow 3"
        d="M33 51L32.5204 39.463L22.7688 45.6469L33 51ZM0.867479 0.329485L1.34713 11.8665L11.0987 5.68262L0.867479 0.329485ZM29.0246 42.8639L6.53187 7.39452L4.84285 8.4656L27.3356 43.935L29.0246 42.8639Z"
        fill="#316993"
      />
    </svg>
  );
}
