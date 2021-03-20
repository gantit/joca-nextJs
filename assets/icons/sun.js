const Icon = ({ isDarkMode, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512.001 512.001"
    {...props}
  >
    {isDarkMode ? (
      <>
        <path d="m152.924 512c-84.322 0-152.924-68.601-152.924-152.924 0-68.932 46.529-129.598 113.151-147.528 5.758-1.551 11.887.458 15.612 5.114s4.338 11.077 1.562 16.354c-9.371 17.813-14.123 37.024-14.123 57.099 0 67.78 55.144 122.923 122.924 122.923 10.458 0 21.216-1.468 31.976-4.364 5.759-1.55 11.886.458 15.612 5.114 3.725 4.656 4.338 11.076 1.562 16.354-26.561 50.492-78.425 81.858-135.352 81.858z" />
        <>
          <path
            d="m400.271 296.365c-1.456 0-2.927-.212-4.369-.652l-38.902-11.85-38.904 11.85c-6.021 1.834-12.545-.286-16.34-5.308l-24.508-32.446-38.422-13.302c-5.938-2.056-9.966-7.595-10.09-13.878l-.803-40.658-23.242-33.364c-3.589-5.152-3.589-11.995 0-17.147l23.242-33.367.804-40.658c.125-6.283 4.152-11.823 10.09-13.878l38.422-13.301 24.51-32.446c3.793-5.022 10.318-7.142 16.34-5.308l38.901 11.85 38.904-11.85c6.02-1.834 12.546.286 16.34 5.308l24.508 32.446 38.422 13.302c5.938 2.056 9.966 7.595 10.09 13.878l.803 40.657 23.242 33.365c3.589 5.152 3.589 11.995 0 17.147l-23.242 33.367-.804 40.658c-.125 6.283-4.152 11.823-10.09 13.878l-38.423 13.302-24.509 32.445c-2.884 3.819-7.349 5.959-11.97 5.96z"
            fill="#ffc85a"
          />
          <path
            d="m509.309 139.609-23.242-33.365-.803-40.657c-.124-6.283-4.151-11.823-10.09-13.878l-38.422-13.302-24.508-32.447c-3.794-5.022-10.32-7.143-16.34-5.308l-38.904 11.85v271.361l38.902 11.85c1.442.439 2.913.652 4.369.652 4.621 0 9.086-2.141 11.97-5.96l24.509-32.445 38.422-13.301c5.938-2.056 9.965-7.595 10.09-13.878l.804-40.658 23.242-33.367c3.59-5.152 3.589-11.995.001-17.147z"
            fill="#ff931e"
          />
          <path
            d="m357 228.183c-44.112 0-80-35.888-80-80s35.888-80 80-80 80 35.888 80 80-35.887 80-80 80z"
            fill="#fff58c"
          />

          <path
            d="m357 68.183v160c44.112 0 80-35.888 80-80s-35.887-80-80-80z"
            fill="#ffc85a"
          />
        </>
      </>
    ) : (
      <>
        <path d="m509.308 139.609-23.242-33.365-.803-40.657c-.124-6.283-4.151-11.823-10.09-13.878l-38.422-13.302-24.507-32.447c-3.794-5.022-10.32-7.143-16.34-5.308l-38.904 11.85-38.901-11.85c-6.022-1.834-12.547.286-16.34 5.308l-24.509 32.445-38.422 13.301c-5.938 2.056-9.965 7.595-10.09 13.878l-.804 40.658-23.242 33.367c-3.589 5.152-3.589 11.995 0 17.147l23.242 33.364.803 40.658c.124 6.283 4.151 11.823 10.09 13.878l38.422 13.302 24.508 32.446c3.794 5.022 10.319 7.142 16.34 5.308l38.903-11.849 38.902 11.85c1.442.439 2.913.652 4.369.652 4.621 0 9.086-2.141 11.97-5.96l24.509-32.445 38.422-13.301c5.938-2.056 9.965-7.595 10.09-13.878l.804-40.658 23.242-33.367c3.589-5.152 3.589-11.995 0-17.147zm-152.308 103.574c-52.383 0-95-42.617-95-95s42.617-95 95-95 95 42.617 95 95-42.617 95-95 95z" />
        <circle cx="357" cy="148.183" r="65" />
        <path
          d="m152.924 512.001c-84.322 0-152.924-68.601-152.924-152.924 0-68.932 46.529-129.598 113.151-147.528 5.758-1.551 11.887.458 15.612 5.114s4.338 11.077 1.562 16.354c-9.371 17.813-14.123 37.024-14.123 57.099 0 67.78 55.144 122.923 122.924 122.923 10.458 0 21.216-1.468 31.976-4.364 5.759-1.55 11.886.458 15.612 5.114 3.725 4.656 4.338 11.076 1.562 16.354-26.561 50.492-78.424 81.858-135.352 81.858z"
          fill="#fff58c"
        />
        <path
          d="m288.276 430.143c2.776-5.277 2.163-11.697-1.562-16.354-3.726-4.656-9.853-6.665-15.612-5.114-10.759 2.896-21.518 4.364-31.976 4.364-38.251 0-72.475-17.564-95.037-45.048l-99.208 99.208c27.687 27.667 65.902 44.802 108.043 44.802 56.928 0 108.791-31.366 135.352-81.858z"
          fill="#ffc85a"
        />
      </>
    )}

    <path
      d="m507.607 365.395-40-40c-5.857-5.858-15.355-5.858-21.213 0l-40 40c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.858 21.213 0l12.891-12.891c-8.445 49.49-51.637 87.285-103.498 87.285h-20c-8.284 0-15 6.716-15 15s6.716 15 15 15h20c69.254 0 126.484-52.42 134.124-119.663l15.27 15.27c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.859-5.86 5.859-15.357.001-21.214z"
      fill="#2e2654"
    />
    <path
      d="m195.001 21.001h-20c-69.254 0-126.484 52.42-134.124 119.663l-15.27-15.27c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l40 40c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394l40-40c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-12.891 12.891c8.445-49.49 51.637-87.285 103.498-87.285h20c8.284 0 15-6.716 15-15s-6.715-14.999-14.999-14.999z"
      fill="#453d81"
    />
  </svg>
)

export default Icon
