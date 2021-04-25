const Icon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M508.882,263.234c-3.198-4.538-8.404-7.236-13.955-7.234h-51.191v-68.267c-0.011-9.421-7.645-17.056-17.067-17.067,h-17.067V102.4c-0.011-9.421-7.646-17.056-17.067-17.067h-25.6v-25.6c-0.011-9.421-7.645-17.056-17.067-17.067h-25.6v-25.6,C324.258,7.645,316.623,0.011,307.202,0h-204.8c-9.421,0.011-17.056,7.645-17.067,17.067v153.6h-76.8,c-0.517,0.053-1.027,0.156-1.524,0.307c-0.469,0.029-0.935,0.099-1.393,0.209c-0.067,0.025-0.109,0.081-0.175,0.106,c-0.602,0.275-1.168,0.62-1.688,1.029c-0.394,0.223-0.77,0.476-1.123,0.758c-0.367,0.411-0.692,0.858-0.97,1.333,c-0.34,0.414-0.64,0.859-0.896,1.329c-0.15,0.444-0.264,0.9-0.34,1.362c-0.2,0.612-0.327,1.246-0.381,1.888,c-0.002,0.074-0.043,0.135-0.043,0.211v324.267c0,0.11,0.059,0.202,0.063,0.313c0.022,1.002,0.222,1.991,0.59,2.923,c0.044,0.108,0.115,0.198,0.163,0.303c0.204,0.481,0.453,0.943,0.742,1.378c0.227,0.288,0.473,0.56,0.736,0.815,c0.131,0.144,0.243,0.29,0.383,0.424c0.684,0.651,1.473,1.182,2.333,1.572c0.178,0.081,0.359,0.135,0.544,0.205,c0.948,0.379,1.957,0.583,2.978,0.601H415.69c7.211-0.012,13.641-4.545,16.075-11.333l79.237-221.858,C512.871,273.581,512.08,267.771,508.882,263.234z M409.602,187.733h17.067V256h-17.067V187.733z M392.535,102.4V256h-54.234,c25.37-20.427,35.095-54.636,24.265-85.355c-10.83-30.718-39.859-51.264-72.43-51.264s-61.601,20.546-72.43,51.264,c-10.83,30.718-1.105,64.927,24.265,85.355h-54.234V102.4H392.535z M290.135,221.867c6.797-0.124,13.405,2.234,18.587,6.633,c4.326,3.381,6.901,8.528,7.013,14.017v7.637c-16.177,7.794-35.023,7.794-51.2,0v-7.637,C266.056,229.83,277.414,220.668,290.135,221.867z M273.069,187.733c0-9.426,7.641-17.067,17.067-17.067,s17.067,7.641,17.067,17.067s-7.641,17.067-17.067,17.067C280.714,204.789,273.079,197.155,273.069,187.733z M314.431,211.652,c13.2-13.37,13.114-34.894-0.192-48.159c-13.306-13.265-34.83-13.284-48.159-0.042s-13.453,34.765-0.276,48.158,c-9.753,5.76-16.337,15.663-17.876,26.884c-17.102-17.077-22.229-42.777-12.988-65.109c9.241-22.332,31.029-36.895,55.197-36.893,s45.955,14.566,55.194,36.899c9.239,22.333,4.11,48.032-12.994,65.108l0,0c-1.105-8.969-5.58-17.182-12.518-22.973,C318.13,214.092,316.328,212.797,314.431,211.652z M349.869,59.733v25.6H187.735c-9.421,0.011-17.056,7.646-17.067,17.067V256,h-25.6V59.733H349.869z M102.402,17.067h204.8v25.6H145.069c-9.421,0.011-17.056,7.645-17.067,17.067V256h-25.6V17.067z, M85.335,187.733v69.571l-37.071,6.18l-27.545-75.75H85.335z M17.069,227.642l15.154,41.675c2.811,7.731,10.737,12.356,18.85,11,l29.876-4.979l-63.88,178.865V227.642z M415.69,494.933H20.644l79.237-221.867h395.045L415.69,494.933z" />
    <path d="M187.735,357.188v18.279c0.015,14.132,11.468,25.585,25.6,25.6h119.467c14.132-0.015,25.585-11.468,25.6-25.6v-18.279,c16.638-4.267,27.496-20.254,25.328-37.293s-16.685-29.798-33.861-29.761c-17.177-0.037-31.693,12.722-33.861,29.761,s8.69,33.027,25.328,37.293v18.279c-0.005,4.711-3.823,8.529-8.533,8.533H213.335c-4.711-0.005-8.529-3.822-8.533-8.533v-18.279,c16.643-4.297,27.494-20.299,25.328-37.35c-2.166-17.051-16.673-29.832-33.861-29.832s-31.695,12.781-33.861,29.832,C160.242,336.889,171.093,352.89,187.735,357.188z M333.384,319.762c1.999-7.461,8.761-12.649,16.485-12.649,s14.486,5.188,16.485,12.649c1.999,7.461-1.262,15.335-7.952,19.197V332.8c0-4.713-3.82-8.533-8.533-8.533,s-8.533,3.821-8.533,8.533v6.159C334.646,335.097,331.384,327.223,333.384,319.762z M193.247,307.382,c8.162-1.468,16.199,3.144,19.048,10.932s-0.312,16.498-7.494,20.645V332.8c0-4.713-3.82-8.533-8.533-8.533,s-8.533,3.821-8.533,8.533v6.159c-5.262-3.025-8.513-8.624-8.533-14.693C179.16,315.974,185.085,308.85,193.247,307.382z" />
  </svg>
)

export default Icon
