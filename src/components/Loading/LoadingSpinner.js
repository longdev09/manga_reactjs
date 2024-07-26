export default function LoadingSpinner() {
  return (
    <div className="flex justify-center h-screen items-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="80"
        height="100"
        style={{ shapeRendering: "auto", display: "block" }}
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <g transform="translate(50 42)">
            <g transform="scale(0.8)">
              <g transform="translate(-50 -50)">
                <polygon points="72.5 50 50 11 27.5 50 50 50" fill="#0077c0">
                  <animateTransform
                    keyTimes="0;1"
                    values="0 50 38.5;360 50 38.5"
                    dur="1s"
                    repeatCount="indefinite"
                    type="rotate"
                    attributeName="transform"
                  />
                </polygon>
                <polygon points="5 89 50 89 27.5 50" fill="#81ceff">
                  <animateTransform
                    keyTimes="0;1"
                    values="0 27.5 77.5;360 27.5 77.5"
                    dur="1s"
                    repeatCount="indefinite"
                    type="rotate"
                    attributeName="transform"
                  />
                </polygon>
                <polygon points="72.5 50 50 89 95 89" fill="#00598e">
                  <animateTransform
                    keyTimes="0;1"
                    values="0 72.5 77.5;360 72 77.5"
                    dur="1s"
                    repeatCount="indefinite"
                    type="rotate"
                    attributeName="transform"
                  />
                </polygon>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
