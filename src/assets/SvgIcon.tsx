
const SvgIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width="100%"
    height="100%"
    style={{ maxWidth: "60px", maxHeight: "60px" }}
    preserveAspectRatio="xMidYMid meet"
  >
    <circle
      cx="40"
      cy="100"
      r="15"
      fill="#C1C1C1"
      stroke="#C1C1C1"
      strokeWidth="21"
    >
      <animate
        attributeName="opacity"
        begin="-0.4"
        calcMode="spline"
        dur="2"
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        values="1;0;1;"
      />
    </circle>

    <circle
      cx="100"
      cy="100"
      r="15"
      fill="#C1C1C1"
      stroke="#C1C1C1"
      strokeWidth="21"
    >
      <animate
        attributeName="opacity"
        begin="-0.2"
        calcMode="spline"
        dur="2"
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        values="1;0;1;"
      />
    </circle>

    <circle
      cx="160"
      cy="100"
      r="15"
      fill="#C1C1C1"
      stroke="#C1C1C1"
      strokeWidth="21"
    >
      <animate
        attributeName="opacity"
        begin="0"
        calcMode="spline"
        dur="2"
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        values="1;0;1;"
      />
    </circle>
  </svg>
);

export default SvgIcon;
