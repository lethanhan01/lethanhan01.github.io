export type Locale = "vi" | "en" | "ja";

export type PortfolioContent = {
  navLinks: { href: string; label: string }[];
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    socials: { label: string; href: string; icon: string }[];
  };
  about: {
    title: string;
    headline: string;
    subtitle: string;
    paragraphs: string[];
    info: { label: string; value: string }[];
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      title: string;
      icon: string;
      items: { name: string; level: number }[];
    }[];
  };
  experience: {
    title: string;
    subtitle: string;
    items: {
      role: string;
      company: string;
      period: string;
      bullets: string[];
    }[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      tags: string[];
      icon: string;
      links: { href: string; label: string }[];
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    message: string;
    email: string;
    phone: string;
    location: string;
    labels: {
      email: string;
      phone: string;
      location: string;
    };
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
    };
    demoNotice: string;
  };
  footer: { copyright: string };
};

const socials = [
  { label: "GitHub", href: "https://github.com/lethanhan01", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thanh-an-le-6024861b9",
    icon: "linkedin",
  },
  { label: "X", href: "https://x.com/an_lethanh", icon: "twitter" },
  {
    label: "Email",
    href: "mailto:An.LT235631@sis.hust.edu.vn",
    icon: "mail",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lethanhan01/",
    icon: "instagram",
  },
];

export const translations: Record<Locale, PortfolioContent> = {
  /* ======================= VI ======================= */
  vi: {
    navLinks: [
      { href: "#home", label: "Trang Chủ" },
      { href: "#about", label: "Về Tôi" },
      { href: "#skills", label: "Kỹ Năng" },
      { href: "#experience", label: "Học Tập & Dự Án" },
      { href: "#projects", label: "Dự Án" },
      { href: "#contact", label: "Liên Hệ" },
    ],
    hero: {
      greeting: "Xin chào, tôi là",
      name: "Lê Thành An",
      title: "HEDSPI Student | Full-stack Developer",
      description:
        "Sinh viên Công nghệ Thông tin chương trình Vietnam–Japan (HEDSPI) tại HUST, định hướng Full-stack Web Development và xây dựng các sản phẩm phần mềm có giá trị thực tiễn.",
      primaryCta: { label: "Xem Dự Án", href: "#projects" },
      secondaryCta: { label: "Liên Hệ", href: "#contact" },
      socials,
    },
    about: {
      title: "Về Tôi",
      headline: "Sinh viên IT yêu thích xây dựng sản phẩm thực tế",
      subtitle: "Thông tin tổng quan",
      paragraphs: [
        "Tôi là sinh viên chương trình Vietnam–Japan IT (HEDSPI) tại Trường Công nghệ Thông tin & Truyền thông – Đại học Bách khoa Hà Nội.",
        "Tôi tập trung vào phát triển ứng dụng web full-stack, có nền tảng tốt về cấu trúc dữ liệu, lập trình hướng đối tượng và cơ sở dữ liệu.",
        "Mục tiêu của tôi là tạo ra các phần mềm giải quyết vấn đề thực tế trong đời sống hằng ngày.",
      ],
      info: [
        { label: "Học vấn", value: "HEDSPI – HUST (2023–2027)" },
        { label: "Địa điểm", value: "Hà Nội, Việt Nam" },
        { label: "Định hướng", value: "Full-stack Software Engineer" },
        { label: "Ngôn ngữ", value: "Vietnamese, English, Japanese (N3)" },
      ],
    },
    skills: {
      title: "Kỹ Năng",
      subtitle: "Công nghệ tôi thường xuyên sử dụng",
      categories: [
        {
          title: "Ngôn ngữ lập trình",
          icon: "code",
          items: [
            { name: "C / C++", level: 80 },
            { name: "Java", level: 80 },
            { name: "JavaScript / TypeScript", level: 85 },
            { name: "Python", level: 70 },
          ],
        },
        {
          title: "Web & Frameworks",
          icon: "layers",
          items: [
            { name: "React / Next.js", level: 85 },
            { name: "Node.js / Express", level: 80 },
            { name: "NestJS", level: 70 },
            { name: "Spring Boot", level: 65 },
            { name: "Tailwind CSS", level: 85 },
          ],
        },
        {
          title: "Database & Tools",
          icon: "database",
          items: [
            { name: "PostgreSQL", level: 75 },
            { name: "MongoDB", level: 75 },
            { name: "MySQL", level: 70 },
            { name: "Git / GitHub", level: 90 },
            { name: "Docker", level: 65 },
          ],
        },
      ],
    },
    experience: {
      title: "Học Tập & Dự Án",
      subtitle: "Kinh nghiệm thông qua học tập và project cá nhân",
      items: [
        {
          role: "Sinh viên Công nghệ Thông tin (HEDSPI)",
          company: "Đại học Bách khoa Hà Nội",
          period: "09/2023 – Hiện tại",
          bullets: [
            "Học tập các môn cốt lõi: DSA, OOP, Database, OS, Computer Networks",
            "Thực hành qua các dự án web và phần mềm",
            "Rèn luyện tư duy thiết kế hệ thống và clean code",
          ],
        },
      ],
    },
    projects: {
      title: "Dự Án",
      subtitle: "Các dự án tiêu biểu",
      items: [
        {
          title: "Citizen Management System",
          description:
            "Ứng dụng web full-stack hỗ trợ quản lý công dân, hộ khẩu, tạm trú và thống kê.",
          tags: ["React", "Node.js", "Express", "PostgreSQL"],
          icon: "building",
          links: [
            {
              href: "https://github.com/lethanhan01/Citizen-Management",
              label: "Code",
            },
          ],
        },
        {
          title: "Paradise Seeker – 2D RPG Game",
          description:
            "Game nhập vai 2D phát triển bằng Java và libGDX.",
          tags: ["Java", "libGDX", "OOP"],
          icon: "gamepad",
          links: [
            {
              href: "https://github.com/lethanhan01/Paradise-Seeker",
              label: "Code",
            },
          ],
        },
        {
          title: "Hotel Management System",
          description:
            "Hệ thống quản lý khách sạn với các chức năng đặt phòng và thanh toán.",
          tags: ["Java", "SQL", "Database Design"],
          icon: "hotel",
          links: [
            {
              href: "https://github.com/lethanhan01/Hotel-Management-System",
              label: "Code",
            },
          ],
        },
        {
          title: "E-Commerce Store",
          description:
            "Website thương mại điện tử full-stack với giỏ hàng và quản lý đơn hàng.",
          tags: ["React", "Node.js", "MongoDB"],
          icon: "shoppingCart",
          links: [
            {
              href: "https://github.com/lethanhan01/E-Commerce-Store",
              label: "Code",
            },
          ],
        },
      ],
    },
    contact: {
      title: "Liên Hệ",
      subtitle: "Kết nối với tôi",
      message:
        "Tôi sẵn sàng trao đổi về dự án, cơ hội thực tập hoặc hợp tác học tập.",
      email: "An.LT235631@sis.hust.edu.vn",
      phone: "(+84) 865 797 312",
      location: "Hà Nội, Việt Nam",
      labels: { email: "Email", phone: "Điện thoại", location: "Địa điểm" },
      form: {
        name: "Họ và tên",
        email: "Email",
        subject: "Chủ đề",
        message: "Nội dung",
        submit: "Gửi",
      },
      demoNotice: "Form demo – chưa kết nối backend.",
    },
    footer: { copyright: "© Le Thanh An. All rights reserved." },
  },

  /* ======================= EN ======================= */
  en: {
    navLinks: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#skills", label: "Skills" },
      { href: "#experience", label: "Education & Experience" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      greeting: "Hi, I'm",
      name: "Le Thanh An",
      title: "HEDSPI Student | Aspiring Full-stack Developer",
      description:
        "An IT student from the Vietnam–Japan (HEDSPI) program at HUST, focusing on full-stack web development and building practical software solutions.",
      primaryCta: { label: "View Projects", href: "#projects" },
      secondaryCta: { label: "Contact Me", href: "#contact" },
      socials,
    },
    about: {
      title: "About Me",
      headline: "An IT student passionate about real-world software",
      subtitle: "Brief introduction",
      paragraphs: [
        "I am currently a student in the Vietnam–Japan Information Technology (HEDSPI) program at Hanoi University of Science and Technology (HUST).",
        "My main interests are full-stack web development and software engineering. I have a solid foundation in data structures, object-oriented programming, databases, and operating systems.",
        "Through personal and academic projects, I aim to design clean, maintainable systems that solve practical problems in everyday life.",
      ],
      info: [
        { label: "Education", value: "HEDSPI – HUST (2023–2027)" },
        { label: "Location", value: "Hanoi, Vietnam" },
        { label: "Career Goal", value: "Full-stack Software Engineer" },
        { label: "Languages", value: "Vietnamese, English, Japanese (JLPT N3)" },
      ],
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies I frequently use",
      categories: [
        {
          title: "Programming Languages",
          icon: "code",
          items: [
            { name: "C / C++", level: 80 },
            { name: "Java", level: 80 },
            { name: "JavaScript / TypeScript", level: 85 },
            { name: "Python", level: 70 },
          ],
        },
        {
          title: "Web & Frameworks",
          icon: "layers",
          items: [
            { name: "React / Next.js", level: 85 },
            { name: "Node.js / Express", level: 80 },
            { name: "NestJS", level: 70 },
            { name: "Spring Boot", level: 65 },
            { name: "Tailwind CSS", level: 85 },
          ],
        },
        {
          title: "Databases & Tools",
          icon: "database",
          items: [
            { name: "PostgreSQL", level: 75 },
            { name: "MongoDB", level: 75 },
            { name: "MySQL", level: 70 },
            { name: "Git / GitHub", level: 90 },
            { name: "Docker", level: 65 },
          ],
        },
      ],
    },
    experience: {
      title: "Education & Experience",
      subtitle: "Learning and project-based experience",
      items: [
        {
          role: "Information Technology Student (HEDSPI)",
          company: "Hanoi University of Science and Technology",
          period: "Sep 2023 – Present",
          bullets: [
            "Studying core subjects such as Data Structures, OOP, Databases, Operating Systems, and Computer Networks",
            "Developing full-stack and software projects as part of coursework and self-learning",
            "Building a strong foundation in system design and clean coding practices",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Selected academic and personal projects",
      items: [
        {
          title: "Citizen Management System",
          description:
            "A full-stack web application for managing citizen records, temporary residence, and administrative statistics.",
          tags: ["React", "Node.js", "Express", "PostgreSQL"],
          icon: "building",
          links: [
            {
              href: "https://github.com/lethanhan01/Citizen-Management",
              label: "Source Code",
            },
          ],
        },
        {
          title: "Paradise Seeker – 2D RPG Game",
          description:
            "A 2D role-playing game developed in Java using libGDX, featuring combat, collision handling, and an inventory system.",
          tags: ["Java", "libGDX", "OOP"],
          icon: "gamepad",
          links: [
            {
              href: "https://github.com/lethanhan01/Paradise-Seeker",
              label: "Source Code",
            },
          ],
        },
        {
          title: "Hotel Management System",
          description:
            "A hotel management application supporting room booking, billing, and customer management.",
          tags: ["Java", "SQL", "Database Design"],
          icon: "hotel",
          links: [
            {
              href: "https://github.com/lethanhan01/Hotel-Management-System",
              label: "Source Code",
            },
          ],
        },
        {
          title: "E-Commerce Store",
          description:
            "A full-stack e-commerce website with user authentication, shopping cart, and order management.",
          tags: ["React", "Node.js", "MongoDB"],
          icon: "shoppingCart",
          links: [
            {
              href: "https://github.com/lethanhan01/E-Commerce-Store",
              label: "Source Code",
            },
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Get in touch",
      message:
        "I am open to internship opportunities, project discussions, and academic collaboration.",
      email: "An.LT235631@sis.hust.edu.vn",
      phone: "(+84) 865 797 312",
      location: "Hanoi, Vietnam",
      labels: { email: "Email", phone: "Phone", location: "Location" },
      form: {
        name: "Full Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        submit: "Send",
      },
      demoNotice: "Demo form – not connected to a backend.",
    },
    footer: { copyright: "© Le Thanh An. All rights reserved." },
  },

  /* ======================= JA ======================= */
  ja: {
    navLinks: [
      { href: "#home", label: "ホーム" },
      { href: "#about", label: "自己紹介" },
      { href: "#skills", label: "スキル" },
      { href: "#experience", label: "学歴・経験" },
      { href: "#projects", label: "プロジェクト" },
      { href: "#contact", label: "お問い合わせ" },
    ],
    hero: {
      greeting: "こんにちは、私は",
      name: "レ・タイン・アン",
      title: "HEDSPI 学生｜フルスタックエンジニア志望",
      description:
        "ハノイ工科大学の Vietnam–Japan IT（HEDSPI）プログラムに在籍し、フルスタック Web 開発と実用的なソフトウェア開発を学んでいます。",
      primaryCta: { label: "プロジェクトを見る", href: "#projects" },
      secondaryCta: { label: "連絡する", href: "#contact" },
      socials,
    },
    about: {
      title: "自己紹介",
      headline: "実用的なソフトウェア開発を目指す IT 学生",
      subtitle: "概要",
      paragraphs: [
        "私はハノイ工科大学（HUST）の Vietnam–Japan IT（HEDSPI）プログラムに在籍している IT 学生です。",
        "データ構造、オブジェクト指向プログラミング、データベース、OS などの基礎を重視しながら、フルスタック Web 開発を中心に学習しています。",
        "授業や個人プロジェクトを通じて、実生活の課題を解決できるソフトウェアを設計・開発することを目標としています。",
      ],
      info: [
        { label: "学歴", value: "HEDSPI – ハノイ工科大学（2023–2027）" },
        { label: "所在地", value: "ベトナム・ハノイ" },
        { label: "志望職種", value: "フルスタックソフトウェアエンジニア" },
        { label: "使用言語", value: "ベトナム語・英語・日本語（JLPT N3）" },
      ],
    },
    skills: {
      title: "スキル",
      subtitle: "主に使用している技術",
      categories: [
        {
          title: "プログラミング言語",
          icon: "code",
          items: [
            { name: "C / C++", level: 80 },
            { name: "Java", level: 80 },
            { name: "JavaScript / TypeScript", level: 85 },
            { name: "Python", level: 70 },
          ],
        },
        {
          title: "Web・フレームワーク",
          icon: "layers",
          items: [
            { name: "React / Next.js", level: 85 },
            { name: "Node.js / Express", level: 80 },
            { name: "NestJS", level: 70 },
            { name: "Spring Boot", level: 65 },
            { name: "Tailwind CSS", level: 85 },
          ],
        },
        {
          title: "データベース・ツール",
          icon: "database",
          items: [
            { name: "PostgreSQL", level: 75 },
            { name: "MongoDB", level: 75 },
            { name: "MySQL", level: 70 },
            { name: "Git / GitHub", level: 90 },
            { name: "Docker", level: 65 },
          ],
        },
      ],
    },
    experience: {
      title: "学歴・経験",
      subtitle: "学習およびプロジェクト経験",
      items: [
        {
          role: "IT 学生（HEDSPI）",
          company: "ハノイ工科大学",
          period: "2023年9月 – 現在",
          bullets: [
            "データ構造、OOP、データベース、OS、ネットワークなどの基礎科目を履修",
            "フルスタック Web およびソフトウェア開発プロジェクトを実施",
            "設計力とクリーンコードを意識した開発を重視",
          ],
        },
      ],
    },
    projects: {
      title: "プロジェクト",
      subtitle: "主な開発実績",
      items: [
        {
          title: "Citizen Management System",
          description:
            "住民情報、仮住居、行政統計を管理するフルスタック Web アプリケーション。",
          tags: ["React", "Node.js", "Express", "PostgreSQL"],
          icon: "building",
          links: [
            {
              href: "https://github.com/lethanhan01/Citizen-Management",
              label: "コード",
            },
          ],
        },
        {
          title: "Paradise Seeker（2D RPG ゲーム）",
          description:
            "Java と libGDX を用いて開発した 2D RPG ゲーム。戦闘、当たり判定、インベントリ機能を実装。",
          tags: ["Java", "libGDX", "OOP"],
          icon: "gamepad",
          links: [
            {
              href: "https://github.com/lethanhan01/Paradise-Seeker",
              label: "コード",
            },
          ],
        },
        {
          title: "Hotel Management System",
          description:
            "予約、請求、顧客管理を行うホテル管理システム。",
          tags: ["Java", "SQL", "データベース設計"],
          icon: "hotel",
          links: [
            {
              href: "https://github.com/lethanhan01/Hotel-Management-System",
              label: "コード",
            },
          ],
        },
        {
          title: "E-Commerce Store",
          description:
            "ユーザー認証、カート、注文管理を備えた EC サイト。",
          tags: ["React", "Node.js", "MongoDB"],
          icon: "shoppingCart",
          links: [
            {
              href: "https://github.com/lethanhan01/E-Commerce-Store",
              label: "コード",
            },
          ],
        },
      ],
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "お気軽にご連絡ください",
      message:
        "インターンシップ、プロジェクト相談、学術的なコラボレーションに興味があります。",
      email: "An.LT235631@sis.hust.edu.vn",
      phone: "(+84) 865 797 312",
      location: "ベトナム・ハノイ",
      labels: { email: "メール", phone: "電話", location: "所在地" },
      form: {
        name: "お名前",
        email: "メール",
        subject: "件名",
        message: "メッセージ",
        submit: "送信",
      },
      demoNotice: "※ デモ用フォーム（送信機能は未実装）",
    },
    footer: { copyright: "© Le Thanh An. All rights reserved." },
  },
};
