export const navLinks = [
  { href: "#home", label: "Trang Chủ" },
  { href: "#about", label: "Về Tôi" },
  { href: "#skills", label: "Kỹ Năng" },
  { href: "#experience", label: "Kinh Nghiệm" },
  { href: "#projects", label: "Dự Án" },
  { href: "#contact", label: "Liên Hệ" },
];

export const hero = {
  name: "Lê Thành An",
  title: "Full Stack Web Developer | UI/UX Enthusiast",
  description:
    "Tôi đam mê xây dựng các ứng dụng web hiện đại, thân thiện với người dùng và giải quyết các vấn đề thực tế.",
  primaryCta: { label: "Xem Dự Án", href: "#projects" },
  secondaryCta: { label: "Liên Hệ", href: "#contact" },
  socials: [
    { label: "GitHub", href: "https://github.com/lethanhan01", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/lethanhan",
      icon: "linkedin",
    },
    { label: "Twitter", href: "https://twitter.com/lethanhan", icon: "twitter" },
    { label: "Email", href: "mailto:lethanhan@example.com", icon: "mail" },
  ],
};

export const about = {
  title: "Về Tôi",
  headline: "Chào mừng đến với portfolio của tôi!",
  paragraphs: [
    "Tôi là một Full Stack Developer với hơn 3 năm kinh nghiệm trong việc phát triển các ứng dụng web và mobile. Tôi có niềm đam mê với công nghệ và luôn tìm kiếm những cách sáng tạo để giải quyết vấn đề.",
    "Chuyên môn của tôi bao gồm JavaScript, React, Node.js, và các công nghệ web hiện đại khác. Tôi thích làm việc trong môi trường năng động, nơi tôi có thể học hỏi những điều mới và đóng góp vào các dự án có ý nghĩa.",
  ],
  info: [
    { label: "Sinh nhật", value: "01/01/1995" },
    { label: "Địa chỉ", value: "TP. Hồ Chí Minh, Việt Nam" },
    { label: "Học vấn", value: "Cử nhân Khoa học Máy tính" },
    { label: "Kinh nghiệm", value: "3+ năm" },
  ],
};

export const skillCategories = [
  {
    title: "Frontend",
    icon: "code",
    items: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    title: "Tools & Others",
    icon: "wrench",
    items: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Agile/Scrum", level: 80 },
    ],
  },
];

export const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Solutions Vietnam",
    period: "01/2023 - Hiện tại",
    bullets: [
      "Phát triển và duy trì các ứng dụng web quy mô lớn sử dụng React và Node.js",
      "Dẫn dắt team 5 developers trong việc triển khai các tính năng mới",
      "Tối ưu hóa hiệu suất ứng dụng, giảm thời gian load trang xuống 40%",
      "Triển khai CI/CD pipeline sử dụng GitHub Actions và Docker",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Digital Agency Vietnam",
    period: "06/2021 - 12/2022",
    bullets: [
      "Xây dựng các website và ứng dụng web cho khách hàng",
      "Làm việc với nhiều công nghệ: React, Vue.js, Express, MongoDB",
      "Cộng tác với team design để tạo ra các giao diện người dùng tốt nhất",
      "Quản lý và tối ưu hóa cơ sở dữ liệu",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Startup XYZ",
    period: "03/2020 - 05/2021",
    bullets: [
      "Phát triển frontend cho các tính năng mới của sản phẩm",
      "Sửa lỗi và cải thiện trải nghiệm người dùng",
      "Học hỏi và áp dụng best practices trong phát triển web",
      "Tham gia code review và pair programming",
    ],
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Nền tảng thương mại điện tử đầy đủ tính năng với giỏ hàng, thanh toán, quản lý sản phẩm và dashboard admin.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    icon: "shoppingCart",
    links: [
      { href: "#", label: "Demo" },
      { href: "#", label: "Code" },
    ],
  },
  {
    title: "Task Management App",
    description:
      "Ứng dụng quản lý công việc với khả năng tạo boards, lists, cards, và theo dõi tiến độ dự án theo thời gian thực.",
    tags: ["Vue.js", "Firebase", "Vuex"],
    icon: "listChecks",
    links: [
      { href: "#", label: "Demo" },
      { href: "#", label: "Code" },
    ],
  },
  {
    title: "Real-time Chat Application",
    description:
      "Ứng dụng chat thời gian thực với hỗ trợ phòng chat, tin nhắn riêng tư, chia sẻ file và emoji.",
    tags: ["React", "Socket.io", "Express"],
    icon: "messageSquare",
    links: [
      { href: "#", label: "Demo" },
      { href: "#", label: "Code" },
    ],
  },
  {
    title: "Personal Blog Platform",
    description:
      "Nền tảng blog cá nhân với CMS, markdown editor, quản lý bài viết, comments và SEO optimization.",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    icon: "fileText",
    links: [
      { href: "#", label: "Demo" },
      { href: "#", label: "Code" },
    ],
  },
];

export const contact = {
  message:
    "Tôi luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo hoặc cơ hội để trở thành một phần của tầm nhìn của bạn.",
  email: "lethanhan@example.com",
  phone: "+84 123 456 789",
  location: "TP. Hồ Chí Minh, Việt Nam",
};
