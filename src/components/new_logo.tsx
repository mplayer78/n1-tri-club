import * as React from "react"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={'100%'}
      height={'100%'}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M149.803 266.144c-64.283 0-116.394-52.088-116.394-116.341 0-64.254 52.111-116.342 116.394-116.342 64.282 0 116.393 52.088 116.393 116.342 0 64.253-52.111 116.341-116.393 116.341zm0-260.605C70.128 5.539 5.539 70.128 5.539 149.803c0 79.673 64.589 144.263 144.264 144.263 79.673 0 144.262-64.59 144.262-144.263 0-79.675-64.589-144.264-144.262-144.264z"
        fill="#000"
      />
      <path
        d="M149.802 296.58c-81.056 0-146.764-65.715-146.764-146.779 0-81.065 65.708-146.78 146.764-146.78 81.056 0 146.764 65.715 146.764 146.78 0 81.064-65.708 146.779-146.764 146.779zm0-296.58C67.068 0 0 67.068 0 149.801c0 82.732 67.068 149.798 149.802 149.798 82.733 0 149.801-67.066 149.801-149.798C299.603 67.068 232.535 0 149.802 0z"
        fill="#AAA"
      />
      <path
        d="M149.803 260.654c-61.223 0-110.855-49.632-110.855-110.855 0-61.224 49.632-110.856 110.855-110.856 61.224 0 110.855 49.632 110.855 110.856 0 61.223-49.631 110.855-110.855 110.855zm0-224.747c-62.901 0-113.891 50.991-113.891 113.892 0 62.9 50.99 113.892 113.891 113.892s113.892-50.992 113.892-113.892S212.704 35.907 149.803 35.907z"
        fill="#AAA"
      />
      <path
        d="M57.142 242.897c-12.088-10.788-21.946-24.215-28.877-39.047-3.51-7.402-6.191-15.195-8.2-23.152-1.967-7.971-3.132-16.137-3.59-24.34-.353-8.205-.014-16.445 1.157-24.575 1.222-8.115 3.123-16.137 5.894-23.847 5.446-15.444 13.949-29.767 24.918-41.688-9.58 13.052-17.012 27.485-21.745 42.74-4.72 15.245-6.768 31.268-5.946 47.163.363 7.949 1.476 15.856 3.248 23.613 1.729 7.772 4.244 15.36 7.307 22.73 6.2 14.719 15.011 28.362 25.834 40.403zM173.836 20.645c2.888.504 5.802.932 8.664 1.61 2.885.59 5.706 1.434 8.547 2.214 5.643 1.706 11.173 3.8 16.573 6.213 10.728 4.972 20.852 11.366 29.855 19.121 2.289 1.896 4.432 3.956 6.605 5.986 2.08 2.123 4.178 4.232 6.123 6.485 3.938 4.454 7.641 9.135 10.932 14.102 6.646 9.89 11.846 20.733 15.614 32.044a144.43 144.43 0 014.336 17.337c1 5.874 1.686 11.801 1.949 17.753.346 11.893-.591 23.866-3.444 35.415-.624 2.906-1.519 5.742-2.328 8.596-.441 1.417-.946 2.814-1.416 4.219l-.722 2.104-.827 2.065c-2.108 5.545-4.74 10.87-7.586 16.048-2.883 5.168-6.233 10.048-9.745 14.774-3.561 4.698-7.497 9.088-11.647 13.237 15.514-17.631 26.261-39.102 31.006-61.773 4.724-22.659 3.582-46.519-3.649-68.449-7.099-21.973-20.203-41.924-37.397-57.44-17.205-15.508-38.504-26.603-61.443-31.66z"
        fill="#fff"
      />
      <g>
        <path
          d="M74.302 51.201c2.25 0 4.257-2.048 4.276-4.364.015-1.874-1.145-3.079-2.98-3.098-2.263-.023-4.119 2.02-4.074 4.483.033 1.81 1.125 2.98 2.778 2.98zm-25.248 3.661c.944 1.696 2.388 2.73 4.172 3.3 2.782.886 5.604.71 8.414.165 4.059-.787 8.094-1.72 12.172-2.383 1.759-.285 3.602-.047 5.406-.047l.067-.424c-.938-.367-1.852-.822-2.819-1.084-4.173-1.133-8.29-.617-12.386.497-4.989 1.357-9.99 2.36-15.026-.024zm3.048-.858l.025.49c1.503.095 3.029.4 4.503.239 2.406-.263 4.78-.82 7.165-1.268 2.494-.468 4.986-.952 7.48-1.431-.988-4.383-4.701-7.834-9.256-8.529-3.846-.587-7.454-.15-10.48 2.604 4.354-.795 8.696-1.828 12.575 1.938l-12.012 5.957zM164.856 10.254c.021-1.828-1.064-3.194-2.58-3.249-1.456-.052-2.734 1.384-2.761 3.102-.03 1.858 1.337 3.538 2.862 3.518 1.369-.019 2.457-1.496 2.479-3.371zM154.758 32.73c.517-.098.708-.085.842-.167 2.958-1.805 5.037-4.376 6.287-7.572.595-1.522-.208-2.666-1.885-2.927-1.152-.18-2.326-.241-3.798-.384 1.226-1.448 2.308-2.723 3.526-4.16 1.072 1.793 2.098 3.348 4.342 2.675 1.92-.575 4.117-2.598 4.335-4.102-.921.47-1.742.947-2.608 1.318-1.99.848-2.371.748-3.533-1.087-1.201-1.896-2.706-3.323-4.979-3.815-3.885-.84-9.069 1.18-11.311 4.46-.259.38-.427.824-.637 1.239 5.206-3.16 7.414-3.88 9.67-2.863-2.77 4.2-5.427 8.445-8.322 12.522-1.607 2.265-4.011 3.655-6.666 4.533-.41.135-.8.327-1.2.492l.095.418c.682 0 1.371.06 2.046-.01 4.563-.47 8.116-2.716 10.818-6.336.777-1.04 1.494-1.87 2.96-1.73 1.221.115 2.462.023 4.101.023l-4.083 7.473zM112.003 16.168c1.217-.034 2.136-1.295 2.142-2.937.005-1.629-.95-2.752-2.318-2.725-1.29.025-2.409 1.305-2.403 2.752.006 1.524 1.265 2.945 2.579 2.91zM95.839 36.136a5.36 5.36 0 110-10.723 5.36 5.36 0 015.361 5.361 5.36 5.36 0 01-5.361 5.361zm.183-12.73c-4.169-.045-7.596 3.302-7.605 7.426-.007 4.128 3.274 7.463 7.376 7.497 4.206.034 7.535-3.203 7.61-7.4.072-4.032-3.31-7.48-7.38-7.523z"
          fill="#fff"
        />
        <path
          d="M107.873 21.174c.208.525.602 1.248 1.046 1.362 2.189.567 4.319.205 6.356-.662a57.348 57.348 0 01-.049-.41c-1.108-.056-2.217-.117-3.325-.166-1.222-.055-1.898-.6-1.985-1.903a23.442 23.442 0 00-.504-3.465c-.357-1.618-1.352-2.264-2.859-1.645-2.475 1.018-4.924 2.136-7.276 3.406-1.735.937-1.695 2.872-.049 4.008.78.538 1.634.979 2.484 1.4 3.347 1.666 3.534 1.986 3.149 5.71-.031.301-.066.603-.095.905l-.321 3.313c.333-.23.475-.276.521-.368 1.259-2.5 2.07-5.131 2.256-7.934.074-1.136-.416-2.005-1.382-2.613-.894-.561-1.777-1.139-2.923-1.875l4.254-1.738c.256 1.019.387 1.884.702 2.675z"
          fill="#fff"
        />
        <path
          d="M115.716 36.134a5.36 5.36 0 01-5.361-5.361 5.361 5.361 0 115.361 5.361zm-.108-12.729c-4.076.012-7.446 3.375-7.461 7.445-.017 4.132 3.374 7.5 7.534 7.486 4.105-.015 7.476-3.377 7.446-7.425-.031-4.197-3.358-7.518-7.519-7.506z"
          fill="#fff"
        />
      </g>
      <g>
        <path
          d="M68.518 238.98l-11.502 14.956 16.638 12.796 2.759-3.587-12.154-9.347 1.828-2.378 11.458 8.812 2.535-3.296-11.458-8.812 1.673-2.175 12.064 9.278 2.707-3.52-16.548-12.727zM85.646 262.837c.696-1.007 1.074-.935 4.247.751 2.673 1.42 2.89 1.856 1.907 3.704l-.332.625-.2-.106c-.3-1.121-.808-1.615-2.856-2.703-3.247-1.726-4.436-2.26-5.67-2.533-1.962-.465-3.385.285-4.514 2.408-1.486 2.798-.727 4.322 3.195 6.406 2.873 1.527 4.05 2.024 4.934 2.109.972.1 1.672-.073 2.458-.648l.175.093-.863 1.624 4.247 2.256 3.783-7.12c1.141-2.148 1.37-3.18 1.044-4.377-.467-1.531-1.274-2.182-5.146-4.24-3.548-1.885-5.715-2.749-6.991-2.818-1.732-.055-2.799.563-3.84 2.22l4.422 2.349zm1.289 4.69c1.873.995 2.56 1.392 2.781 1.638.407.44.496.936.243 1.411-.557 1.049-1.59.883-4.713-.776-2.372-1.261-2.901-1.893-2.397-2.842.518-.975 1.387-.865 4.086.569zM97.116 274.272c-.479 1.48-.461 2.473.074 3.436.764 1.43 2.25 2.241 6.851 3.824 7.329 2.522 9.327 2.282 10.57-1.329.976-2.835-.047-4.384-3.703-5.672-4.858-1.702-5.679-2.014-6.435-2.335-.732-.311-1.013-.707-.839-1.215.276-.802 1.268-.731 4.238.291 1.604.552 2.531.991 2.84 1.397.124.161.15.26.119.698l4.814 1.657c.418-1.562.408-2.313-.077-3.078-.757-1.277-2.243-2.088-6.55-3.57-3.317-1.141-5.601-1.719-6.755-1.666-1.692.045-2.792.983-3.464 2.935-.93 2.702.18 4.341 3.747 5.628 4.654 1.601 5.822 2.034 6.445 2.308.668.32.95.805.775 1.314-.313.909-1.288.872-4.364-.186-2.969-1.022-3.768-1.656-3.471-2.78l-4.815-1.657zM121.255 269.203l-.576 3.029-2.584-.491-.671 3.53 2.584.491-.729 3.834c-.206 1.084-.332 1.752-.346 1.979-.229 1.511-.089 2.287.474 3.113.793 1.131 2.018 1.651 5.159 2.248 3.39.645 4.969.513 6.208-.547.935-.831 1.283-1.6 1.813-4.09l-4.502-.856c-.258 1.361-.307 1.468-.532 1.741-.312.43-.905.52-1.905.329-.945-.179-1.408-.469-1.574-.961-.159-.376-.15-.576.124-2.021l.729-3.835 7.782 1.479.671-3.529-7.782-1.479.575-3.029-4.918-.935zM142.77 289.221l13.597-.501c6.361-.233 8.017-.577 9.412-1.931 1.338-1.323 1.692-3.261 1.511-8.18-.114-3.081-.271-4.264-.744-5.578-.629-1.732-1.913-2.76-3.792-3.058-1.624-.281-2.275-.286-7.081-.109l-13.597.5.694 18.857zm5.476-5.015l-.343-9.328 7.944-.292c3.505-.129 4.273-.045 4.891.612.588.602.825 1.641.91 3.959.157 4.267-.2 4.564-5.401 4.755l-8.001.294zM183.304 280.468c.065 1.202-.464 1.553-3.584 2.252-1.766.395-2.825.457-3.436.189-.55-.254-.787-.665-1.083-1.989l12.753-2.856c-.095-.558-.231-1.166-.268-1.332-.662-2.954-1.431-4.317-2.807-5.024-1.403-.7-3.011-.63-7.428.359-4.251.952-5.818 1.592-6.89 2.76-1.163 1.275-1.26 2.659-.475 6.165.748 3.339 1.425 4.55 2.911 5.232 1.385.618 3.254.547 7.035-.299 6.985-1.564 8.581-2.849 8.13-6.545l-4.858 1.088zm-8.703-2.226c-.352-1.835.328-2.422 3.613-3.157 1.932-.433 2.969-.462 3.516-.092.372.235.483.472.739 1.487l-7.868 1.762zM186.214 270.547l10.989 10.085 6.038-2.345 1.299-14.859-5.3 2.059-.408 10.355-7.318-7.354-5.3 2.059zM212.496 258.397c-3.943 2.277-5.477 3.524-6.103 4.93-.67 1.498-.376 2.798 1.195 5.517 1.938 3.356 2.83 4.278 4.417 4.537 1.626.27 3.213-.32 7.548-2.824 4.286-2.476 5.59-3.556 6.169-5.099.544-1.49.215-2.737-1.624-5.922-1.683-2.915-2.61-3.784-4.281-3.962-1.531-.162-3.353.531-7.321 2.823zm1.907 3.244c1.225-.708 2.325-1.179 2.991-1.271.992-.147 1.562.274 2.468 1.842 1.415 2.45 1.092 3.191-2.19 5.087-1.397.807-2.447 1.25-3.128 1.317-.968.133-1.461-.268-2.352-1.81-1.429-2.475-1.096-3.255 2.211-5.165zM222.229 252.976l8.452 10.374 3.882-3.163-3.377-4.145c-1.555-1.908-1.86-2.462-1.788-3.359.067-.858.673-1.681 2.1-2.843 1.447-1.179 2.318-1.633 3.074-1.555.738.055 1.108.375 2.465 2.041l3.842 4.716 3.882-3.163-3.842-4.715c-2.323-2.851-3.163-3.481-4.91-3.7-1.689-.192-3.247.494-5.725 2.513-2.522 2.054-3.296 3.524-2.908 5.433l-.198.161-1.286-1.579-3.663 2.984z"
          fill="#fff"
        />
        <g fill="#000">
          <path d="M62.425 198.262v5.646h9.865v16.508h7.075v-16.508h9.864v-5.646H62.425z" />
          <path d="M85.474 204.708v15.71h5.879v-6.51c0-2.425.166-3.288.73-4.052.565-.731 1.661-1.129 2.99-1.129 2.424 0 3.089.631 3.089 2.956h5.546v-1.063c0-4.717-1.594-6.311-6.344-6.311-3.288 0-4.949.764-6.045 2.757h-.299v-2.358h-5.546zM104.407 204.706v15.71h5.879v-15.71h-5.879zm0-6.444v4.418h5.879v-4.418h-5.879zM117.989 209.62c.166-1.428.598-1.561 4.816-1.561 3.554 0 4.019.332 4.019 2.79v.83h-.266c-.93-.996-1.727-1.229-4.45-1.229-4.318 0-5.846.1-7.274.499-2.292.597-3.355 2.158-3.355 4.982 0 3.72 1.628 4.882 6.842 4.882 3.82 0 5.315-.133 6.278-.531 1.063-.432 1.694-.997 2.192-2.026h.232v2.159h5.647v-9.466c0-2.857-.332-4.053-1.329-5.115-1.328-1.329-2.524-1.562-7.672-1.562-4.717 0-7.44.299-8.802.93-1.827.897-2.591 2.126-2.757 4.418h5.879zm3.919 4.152c2.492 0 3.422.033 3.787.166.664.232 1.03.697 1.03 1.328 0 1.395-1.163 1.794-5.315 1.794-3.155 0-4.052-.365-4.052-1.628 0-1.295.963-1.66 4.55-1.66zM136.023 201.086v3.621h-3.088v4.218h3.088v4.584c0 1.295.001 2.092.034 2.358.066 1.793.398 2.657 1.229 3.487 1.162 1.13 2.69 1.462 6.443 1.462 4.052 0 5.846-.499 7.042-1.993.896-1.163 1.129-2.126 1.195-5.115h-5.38c0 1.627-.034 1.76-.233 2.126-.266.564-.93.797-2.126.797-1.129 0-1.727-.233-2.026-.764-.265-.399-.299-.631-.299-2.358v-4.584h9.3v-4.218h-9.3v-3.621h-5.879zM152.664 198.262v22.154h5.879v-6.709c0-4.185.83-5.016 4.982-5.016 3.853 0 4.551.631 4.551 4.052v7.673h5.879v-7.673c0-3.686-.366-5.115-1.728-6.51-1.361-1.395-3.321-1.959-6.809-1.959-3.72 0-5.646.83-6.609 2.823h-.266v-8.835h-5.879zM181.427 198.262h-5.879v22.154h5.879v-22.154zM193.921 204.309c-5.348 0-7.639.365-9.101 1.428-1.561 1.13-2.026 2.624-2.026 6.311 0 4.55.366 6.012 1.827 7.207 1.495 1.229 3.454 1.562 9.333 1.562 5.813 0 7.772-.333 9.267-1.562 1.428-1.195 1.827-2.657 1.827-6.975 0-3.952-.432-5.38-2.026-6.543-1.462-1.063-3.72-1.428-9.101-1.428zm.033 4.418c1.661 0 3.056.166 3.787.465 1.096.431 1.428 1.195 1.428 3.321 0 3.321-.764 3.886-5.215 3.886-1.893 0-3.222-.166-3.952-.498-1.063-.432-1.329-1.129-1.329-3.222 0-3.355.797-3.952 5.281-3.952zM206.277 204.708v15.71h5.879v-6.277c0-2.89.133-3.621.864-4.385.697-.731 1.86-1.029 4.019-1.029 2.192 0 3.321.232 3.952.863.631.598.731 1.163.731 3.687v7.141h5.879v-7.141c0-4.318-.299-5.514-1.727-7.008-1.395-1.428-3.322-1.96-7.075-1.96-3.819 0-5.613.764-6.676 2.79h-.299v-2.391h-5.547zM129.851 237.586c-.033 3.288-.132 3.321-7.539 3.321-7.108 0-7.208-.066-7.208-5.746 0-3.354.266-4.65 1.063-5.314.664-.531 1.893-.664 6.112-.664 4.251 0 6.211.199 6.709.631.398.332.465.631.531 2.092h6.743v-1.096c0-3.554-.664-5.181-2.558-6.144-1.528-.798-3.587-1.03-9.499-1.03-11.592 0-14.016.565-15.212 3.554-.498 1.229-.631 3.056-.631 8.004 0 2.824.066 4.65.166 5.647.266 2.258.93 3.487 2.391 4.318 1.794 1.029 4.584 1.295 13.253 1.295 4.916 0 7.34-.199 9.134-.764 2.458-.797 3.388-2.424 3.388-6.012 0-.332-.034-.83-.067-2.092h-6.776zM143.698 223.97h-5.879v22.154h5.879V223.97zM166.585 246.126v-15.711h-5.879v6.311c0 2.923-.2 3.753-1.03 4.484-.731.631-1.794.864-3.886.864-2.225 0-3.122-.2-3.82-.864-.631-.598-.797-1.329-.797-3.62v-7.175h-5.879v7.175c0 4.284.299 5.48 1.727 6.941 1.429 1.429 3.355 1.993 7.009 1.993 3.952 0 5.812-.764 6.709-2.757h.299v2.359h5.547zM168.352 223.97v22.154h5.547v-2.059h.298c1.163 1.959 2.658 2.458 7.042 2.458 4.052 0 6.244-.465 7.54-1.628 1.328-1.162 1.727-2.757 1.727-6.676 0-4.085-.465-5.613-1.993-6.776-1.362-1.029-3.554-1.461-7.44-1.461-3.919 0-5.414.564-6.577 2.524h-.265v-8.536h-5.879zm11.093 10.429c1.595 0 3.023.166 3.787.432 1.063.432 1.395 1.163 1.395 3.255 0 1.96-.233 2.823-.897 3.288-.631.465-2.059.698-4.185.698-1.561 0-3.056-.166-3.786-.399-1.196-.398-1.528-1.129-1.528-3.354 0-2.026.265-2.824 1.096-3.322.664-.398 2.059-.598 4.118-.598z" />
        </g>
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M76.227 105.124l63.045 82.936h33.577V79.919h-20.557l-.686 72.364-58.247-78.057H50.87v113.021h25.356v-82.123z"
            fill="#000"
            stroke="#fff"
            strokeWidth={4}
            strokeMiterlimit={10}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M76.227 105.124l63.045 82.936h33.577V79.919h-20.557l-.686 72.364-58.247-78.057H50.87v113.021h25.356v-82.123z"
            fill="#000"
          />
          <path
            d="M236.578 48.688l3.426 132.867-60.989 5.692 2.741-115.793-28.781.814 4.113-14.636 79.49-8.944z"
            fill="#AAA"
            stroke="#fff"
            strokeWidth={4}
            strokeMiterlimit={10}
          />
          <path
            d="M236.578 48.688l3.426 132.867-60.989 5.692 2.741-115.793-28.781.814 4.113-14.636 79.49-8.944z"
            fill="#AAA"
          />
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M174.219 48.202l7.538-15.45c-29.011-1.9-42.26 7.858-49.34 27.646 11.422-12.335 23.756-16.67 41.802-12.197z"
              fill="#000"
              stroke="#fff"
              strokeWidth={0.014}
              strokeMiterlimit={10}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M174.219 48.202l7.538-15.45c-29.011-1.9-42.26 7.858-49.34 27.646 11.422-12.335 23.756-16.67 41.802-12.197z"
              fill="#000"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default SvgComponent