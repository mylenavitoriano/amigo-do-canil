export function Wave() {
  return (
    <div className="hidden md:block absolute top-30 w-full overflow-hidden">
      <svg
        className="w-[100vw] h-96 sm:h-[30vh] md:h-[50vh] lg:h-[70vh] block"
        viewBox="0 0 1440 920"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 650.02L60 673.024C120 696.029 240 742.039 360 796.051C480 850.062 600 911.075 720 919.077C840 927.079 960 881.069 1080 858.064C1200 835.059 1320 835.059 1380 835.059H1440V558H1380C1320 558 1200 558 1080 558C960 558 840 558 720 558C600 558 480 558 360 558C240 558 120 558 60 558H0V650.02Z"
          fill="#3B7A57"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 308.5C70.7317 288.275 143.927 263.499 302.581 283.171C460.899 301.664 636.408 380.279 777.871 339.83C919.335 299.38 1026.75 139.865 1158.44 65.2278C1290.13 -9.4091 1361.69 -1.53108 1439.5 3.00007V560.277L0 560.277L0 308.5Z"
          fill="#3B7A57"
        />
      </svg>
    </div>
  );
}
