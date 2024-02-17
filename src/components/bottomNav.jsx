export default function Nav() {
  return (
    <nav className="grid grid-cols-3 justify-items-center fixed bottom-0 w-1/2 h-16 left-1/4 bg-transparent border border-black rounded-full">
      <a
        className="flex flex-col items-center justify-center text-xs text-black opacity-60 hover:opacity-100 transition-opacity"
        href="#"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" id="chat"><path fill="#200E32" d="M10.0067501,0 C11.62449,0 13.2360653,0.399066203 14.6679897,1.15403251 C19.5432254,3.72637977 21.4181128,9.7854909 18.847518,14.6623794 C17.0941592,17.9879311 13.6420414,20 9.99530173,20 C9.28286212,20 8.56337738,19.9233581 7.8474152,19.7647888 C7.44408103,19.6749328 7.18957541,19.2749857 7.27852028,18.8715148 C7.36746515,18.4680439 7.76639611,18.2152138 8.1723722,18.302427 C11.8966084,19.1305114 15.7414927,17.3430824 17.523032,13.9637933 C19.7087862,9.81808572 18.1148236,4.66546271 13.9696404,2.47896754 C12.7525927,1.83676166 11.3823133,1.49759944 10.0058694,1.49759944 L10.0058694,1.49759944 C5.31028477,1.49759944 1.49710367,5.31119235 1.49710367,9.99867859 C1.49534238,11.3641369 1.82822517,12.7234286 2.45964569,13.9311985 L2.45964569,13.9311985 L2.65162571,14.3064793 C2.8867572,14.7469497 2.93871509,15.294014 2.78636398,15.7891028 C2.57589047,16.3440955 2.40064266,16.8841122 2.25621732,17.4214861 C2.8180671,17.2523455 3.50408744,17.0030392 3.99988905,16.8224464 L3.99988905,16.8224464 L4.20331742,16.7493283 C4.5881581,16.6057349 5.02055346,16.8092323 5.16145622,17.1986081 C5.30235899,17.587103 5.10069191,18.0170022 4.71232866,18.1570718 L4.71232866,18.1570718 L4.51154222,18.2301898 C3.77004141,18.4988768 2.7555415,18.867991 2.0704018,19.0212747 C2.01227941,19.0336079 1.9497538,19.0415364 1.89251206,19.0397745 C1.43281678,19.0397745 1.15277254,18.853896 0.998660135,18.6970885 C0.76176736,18.4565916 0.649045147,18.1191913 0.662254782,17.6945778 C0.664016066,17.6461261 0.670180562,17.5959124 0.681628912,17.5474607 C0.859518654,16.7898516 1.09112758,16.0340043 1.37117182,15.3019425 C1.39142659,15.2305863 1.3790976,15.101088 1.32185585,14.9927322 L1.32185585,14.9927322 L1.12899519,14.6183324 C0.390136315,13.2035414 -0.00174950235,11.6028719 5.87135273e-06,9.99779765 C5.87135273e-06,4.48486984 4.48424231,0 9.99530173,0 L9.99530173,0 Z M9.99565399,8.80949654 C10.6517325,8.80949654 11.1845211,9.34334669 11.1845211,9.99876668 C11.1845211,10.6541867 10.6517325,11.1880368 9.99565399,11.1880368 C9.33957549,11.1880368 8.8067869,10.6541867 8.8067869,9.99876668 C8.8067869,9.34334669 9.33957549,8.80949654 9.99565399,8.80949654 Z M14.3988654,8.80949654 C15.0549439,8.80949654 15.5877325,9.34334669 15.5877325,9.99876668 C15.5877325,10.6541867 15.0549439,11.1880368 14.3988654,11.1880368 C13.7427869,11.1880368 13.2099983,10.6541867 13.2099983,9.99876668 C13.2099983,9.34334669 13.7427869,8.80949654 14.3988654,8.80949654 Z M5.59235449,8.80984892 C6.248433,8.80984892 6.78122158,9.34281813 6.78122158,9.99911906 C6.78122158,10.654539 6.248433,11.1875083 5.59235449,11.1875083 C4.93627599,11.1875083 4.40348741,10.654539 4.40348741,9.99911906 C4.40348741,9.34281813 4.93627599,8.80984892 5.59235449,8.80984892 Z" transform="translate(2 2)"></path></svg>
        Chat
      </a>
      <a
        className="flex flex-col items-center justify-center text-xs text-black opacity-60 hover:opacity-100 transition-opacity"
        href="#"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" data-name="Layer 1" id="git-branch">
          <path d="M37.1 15.14a3.39 3.39 0 1 0-4.32 3.23c-.33 5.11-6.63 5.53-8.6 5.53a10.42 10.42 0 0 0-8.7 4.81V15.85a3.39 3.39 0 1 0-1.65 0v16a.41.41 0 0 1 0 .09v1.83a3.39 3.39 0 1 0 1.65 0v-1.31c.09-.28 2.29-6.76 8.66-6.76 4.92 0 10.15-1.94 10.41-7.32a3.39 3.39 0 0 0 2.55-3.24Zm-24.17-2.56a1.73 1.73 0 1 1 1.73 1.73 1.72 1.72 0 0 1-1.73-1.73ZM16.38 37a1.73 1.73 0 1 1-1.72-1.72A1.73 1.73 0 0 1 16.38 37Zm17.33-20.14a1.73 1.73 0 1 1 1.73-1.72 1.72 1.72 0 0 1-1.73 1.72Z"></path>
        </svg>
        Tree
      </a>
      <a
        className="flex flex-col items-center justify-center text-xs text-black opacity-60 hover:opacity-100 transition-opacity"
        href="#"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 16.933 16.933" id="menu"><path d="M12.271 1.323H1.984c-1.1-.042-1.1 1.63 0 1.588H12.23c1.08.042 1.122-1.588.042-1.588zM1.984 7.673c-1.058 0-1.058 1.587 0 1.587h5.8c1.08 0 1.08-1.587 0-1.587zm0 6.35c-1.058 0-1.058 1.587 0 1.587h12.997c1.058 0 1.058-1.587 0-1.587z"></path></svg>
        Menu
      </a>
    </nav>
  )
}