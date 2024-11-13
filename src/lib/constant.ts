import { type topicType, type questionType } from "@/types";

export const QUESTION_LIST: questionType[] = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae esse, laboriosam blanditiis reprehenderit consectetur cum iste rerum similique quas itaque, obcaecati in. Tempora perferendis illum unde nesciunt vitae, molestias quae.",
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae esse, laboriosam blanditiis reprehenderit consectetur cum iste rerum similique quas itaque, obcaecati in. Tempora perferendis illum unde nesciunt vitae, molestias quae.",
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae esse, laboriosam blanditiis reprehenderit consectetur cum iste rerum similique quas itaque, obcaecati in. Tempora perferendis illum unde nesciunt vitae, molestias quae.",
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae esse, laboriosam blanditiis reprehenderit consectetur cum iste rerum similique quas itaque, obcaecati in. Tempora perferendis illum unde nesciunt vitae, molestias quae.",
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae esse, laboriosam blanditiis reprehenderit consectetur cum iste rerum similique quas itaque, obcaecati in. Tempora perferendis illum unde nesciunt vitae, molestias quae.",
  },
];

export const TOPIC_LIST: topicType[] = [
  {
    topic: "Quisque a a ante, at voluptua enim.",
  },
  {
    topic: "Suspendisse eleifend nunc non.",
  },
  {
    topic: "Donec sit amet vinar ultricies commodo id ligula.",
  },
  {
    topic: "Quisque a a ante, at voluptua enim.",
  },
  {
    topic: "Suspendisse eleifend nunc non.",
  },
  {
    topic: "Donec sit amet vinar ultricies commodo id ligula.",
  },
];

export const HEADER_MENU = [
  {
    id: 1,
    title: "Visit our blog",
    description: "Nam sollicitudin dignissim nunc cursus ullamcorper",
    imageUrl: "/Images/blog.png",
    borderStyle: "border-2 border-indigo-550",
    bgColor: "bg-blue-750 opacity-30",
  },
  {
    id: 2,
    title: "Developer Guide",
    description: "Nam sollicitudin dignissim nunc cursus ullamcorper",
    imageUrl: "/Images/guide.png",
    borderStyle: "border-2 border-cyan-350",
    bgColor: "bg-indigo-950 opacity-50",
  },
  {
    id: 3,
    title: "Ask for help",
    description: "Nam sollicitudin dignissim nunc cursus ullamcorper",
    imageUrl: "/Images/news.png",
    borderStyle: "border-2 border-red-450",
    bgColor: "bg-indigo-950",
  },
];

export const THEME_MODE = Object.freeze({
  DARK_MODE: "dark",
  LIGHT_MODE: "light",
  SYSTEM: "system"
});