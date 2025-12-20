// Define the menu items
export const mainMenu = [
  {
    label: "Trang chủ",
    href: "/",
  },
  {
    label: "Giới thiệu",
    href: "/gioi-thieu",
    children: [
      {
        label: "Giới thiệu",
        href: "/gioi-thieu/gioi-thieu",
      },
      {
        label: "Sự kiện",
        href: "/gioi-thieu/su-kien",
      },
    ],
  },
  {
    label: "Dịch vụ",
    href: "/dich-vu",
    children: [
      {
        label: "Landing Page",
        href: "/dich-vu/landing-page",
      },
      {
        label: "Website Doanh nghiệp",
        href: "/dich-vu/website-doanh-nghiep",
      },
      {
        label: "Website Thương mại",
        href: "/dich-vu/website-thuong-mai",
      },
      {
        label: "Thiết kế theo yêu cầu",
        href: "/dich-vu/thiet-ke-theo-yeu-cau",
      },
    ],
  },
  {
    label: "Dự án",
    href: "/du-an",
  },
  {
    label: "Tin tức",
    href: "/tin-tuc",
  },
  {
    label: "Liên hệ",
    href: "/lien-he",
  },
];

export const servicesMenu = [
  {
    label: "Landing Page",
    description: "Landing Page",
    href: "/dich-vu/landing-page",
  },
  {
    label: "Website Doanh nghiệp",
    description: "Website Doanh nghiệp",
    href: "/dich-vu/website-doanh-nghiep",
  },
  {
    label: "Website Thương mại",  
    description: "Website Thương mại",
    href: "/dich-vu/website-thuong-mai",
  },
  {
    label: "Thiết kế theo yêu cầu",
    description: "Thiết kế theo yêu cầu",
    href: "/dich-vu/thiet-ke-theo-yeu-cau",
  },
];

export const contentMenu = {
  categories: "/posts/categories",
  tags: "/posts/tags",
  authors: "/posts/authors",
};


export const termsMenu = [
  {
    label: "Điều khoản sử dụng",
    href: "/dieu-khoan-su-dung",
  },
  {
    label: "Quyền riêng tư",
    href: "/quyen-rieng-tu",
  },
  {
    label: "Chính sách bảo mật",
    href: "/chinh-sach-bao-mat",
  },
];