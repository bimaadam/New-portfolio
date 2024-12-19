import { url } from "inspector";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  { name: "CoverLetter", 
    link: "https://drive.google.com/file/d/1CR_p3TQHoi8qpY5JOyyUwyJy5IGsqkcj/view?usp=sharing",
    target: "_blank" },
];

export const gridItems = [
  {
    id: 1,
    title: "Saya selalu mengutamakan kolaborasi dengan klien, memastikan komunikasi yang efektif dan terbuka.",
    description: "",
    className: "lg:col-span-3 md:col-span-4 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/komponen1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Saya sangat fleksibel dalam berkomunikasi lintas zona waktu, menyesuaikan kebutuhan proyek.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech Stack Saya",
    description: "Saya terus mengembangkan dan memperbarui kemampuan teknologi saya untuk menghasilkan solusi terbaik.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Teknologi adalah passion saya, dan saya selalu bersemangat untuk mengembangkan solusi inovatif.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Saat ini, saya sedang mengembangkan library animasi JavaScript.",
    description: "Masih belajar dan ngulik",
    className: "md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Apakah Anda tertarik untuk memulai proyek bersama?",
    description: "Gua masih mumet di Backend.",
    className: "md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 7,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-right",
    img: "/BIMZJS1.png",
    spareImg: "/grid.svg",
  },
];


export const projects = [
  {
    id: 1,
    title: "My Profile",
    des: "Personal profile page detailing my background, skills, and experience.",
    img: "/Webbima.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://bimaadamrin.my.id/myprofile",
  },
  {
    id: 2,
    title: "Chat Ai",
    des: "Interactive AI chatbot that helps users with various tasks and queries.",
    img: "/Chatai.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://chataibima.bimaadamrin.my.id/",
  },
  {
    id: 3,
    title: "Cek Khodam",
    des: "Web application that allows users to check spiritual entities with a streamlined process.",
    img: "/cekkodam.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "/https://bimaadamrin.my.id/cekkhodam/",
  },
  {
    id: 4,
    title: "Tugas Kuliah",
    des: "Portal for managing and submitting college assignments efficiently.",
    img: "/tugaskuliah.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://bimaadamrin.my.id/tugaskuliah/",
  },
  {
    id: 5,
    title: "Portfolio V2",
    des: "Second version of my portfolio showcasing an updated design and recent projects.",
    img: "/v2bima.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://v2.bimaadamrin.my.id/",
  },
];



export const testimonials = [
  {
    quote: "Portofolio ini benar-benar mencerminkan keterampilan dan kreativitas luar biasa yang dimiliki oleh Bima.",
    name: "Andi Pratama",
    title: "CEO PT Inovasi Teknologi",
  },
  {
    quote: "Sebuah tampilan talenta yang luar biasa. Perhatian terhadap detail sangat terlihat di setiap proyek.",
    name: "Rina Saraswati",
    title: "Lead Developer di CodeWorks",
  },
  {
    quote: "Portofolio yang mengesankan, menunjukkan keahlian teknis dan sentuhan artistik yang tinggi.",
    name: "Michael Santoso",
    title: "Product Manager di DigitalWave",
  },
  {
    quote: "Portofolio Bima adalah bukti dedikasi dan passion-nya terhadap teknologi. Sangat direkomendasikan!",
    name: "Siti Nurhaliza",
    title: "CTO PT Solusi Web",
  },
  {
    quote: "Setiap proyek adalah sebuah karya yang mencerminkan pendekatan unik Bima dalam menyelesaikan masalah dan desain.",
    name: "Dewi Anggraini",
    title: "UX/UI Designer di Creatify Studio",
  },
];

export const companies = [
  {
    id: 1,
    name: "Vercel",
    img: "/logo-vercel-svgrepo-com.svg",
    nameImg: "/vercelname.svg",
  },
  {
    id: 2,
    name: "Railway",
    img: "/railwaylogo.svg", // Ganti dengan path ke logo Railway
    nameImg: "/railwayname.svg", // Ganti dengan path ke nama logo Railway
  },
  {
    id: 3,
    name: "IDCloudHost",
    img: "/idcloudhost.com.svg", // Ganti dengan path ke logo IDCloudHost
    nameImg: "/idname.svg", // Ganti dengan path ke nama logo IDCloudHost
  },
  {
    id: 4,
    name: "Docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 5,
    name: "Heroku",
    img: "/herokulogo_only.svg", // Ganti dengan path ke logo Heroku
    nameImg: "/herokuname.svg", // Ganti dengan path ke nama logo Heroku
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Freelance Web Developer",
    desc: "Mengerjakan proyek web freelance, termasuk membangun website portofolio dan dashboard admin dengan Next.js dan Tailwind CSS.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "React Native Developer",
    desc: "Mengembangkan aplikasi mobile untuk platform Android, memanfaatkan React Native dan Expo untuk kinerja optimal.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Web Developer - Internship",
    desc: "Menjalani PKL sebagai pengembang web, berfokus pada pembuatan UI/UX responsif dan integrasi API menggunakan Next.js.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer - Side Projects",
    desc: "Memimpin pengembangan frontend untuk berbagai proyek sampingan, memastikan fitur user-facing berjalan dengan lancar menggunakan teknologi modern seperti TypeScript dan React.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/bimaadam/"
  },
  {
    id: 2,
    img: "/whatsapplogo.svg",
    url: "https://wa.me/+6289663164143"
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://id.linkedin.com/in/bima-adam"
  },
];
