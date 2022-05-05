/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
import { v4 as uuid } from "uuid";

export const videos = [
  {
    _id: uuid(),
    title: "Computation Thinking & Scratch-Intro to Computer Science",
    creator: "David J. Malan -Harvard University",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    videoImage:
      "https://i.ytimg.com/vi/F0WoVEr0-44/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCyb0oW_6V-oKPK64XalvhC5-OSiA",
    views: "10",
    videoUrl: "https://www.youtube.com/embed/F0WoVEr0-44",
    category: "Computer Programming",
  },
  {
    _id: uuid(),
    title: "C Programming Language -Intro to Computer Science",
    creator: "David J. Malan -Harvard University",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    videoImage:
      "https://i.ytimg.com/vi/ix5jPkxsr7M/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCQMuwYn6FwORg0pteLpe1KJBHfQQ",
    views: "10",
    videoUrl: "https://www.youtube.com/embed/ix5jPkxsr7M",
    category: "Computer Programming",
  },
  {
    _id: uuid(),
    title: "Arrays and Sorting Algorithms -Intro to Computer Science",
    creator: "David J. Malan -Harvard University",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    videoImage:
      "https://i.ytimg.com/vi/ba7e4mksR5I/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLByEsaXW3--CTcFCduyJhvk5Mb_Vw",
    views: "10",
    videoUrl: "https://www.youtube.com/embed/ba7e4mksR5I",
    category: "Computer Programming",
  },
  {
    _id: uuid(),
    title: "Memory -Intro to Computer Science",
    creator: "David J. Malan -Harvard University",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    videoImage:
      "https://i.ytimg.com/vi/pejxLkT-wek/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCAzU8zcMtztbQXOkj06m4mAwgp0g",
    views: "10",
    videoUrl: "https://www.youtube.com/embed/pejxLkT-wek",
    category: "Computer Programming",
  },
  {
    _id: uuid(),
    title: "Data Structure-Intro to Computer Science",
    creator: "David J. Malan -Harvard University",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    videoImage:
      "https://i.ytimg.com/vi/uTZFGXv798o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAoswg-SX-ImbGlibv3jXFjJuNvSg",
    views: "10",
    videoUrl: "https://www.youtube.com/embed/uTZFGXv798o4",
    category: "Computer Programming",
  },
  {
    _id: uuid(),
    title: "HTTP, HTML & CSS-Intro to Computer Science",
    creator: "David J. Malan -Harvard University",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    videoImage:
      "https://i.ytimg.com/vi/mudOTSUumXg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBKis5nrEwdYQQrc26p8lII2EVajA",
    views: "10",
    videoUrl: "https://www.youtube.com/embed/mudOTSUumXg",
    category: "Frontend Development",
  },
  {
    _id: uuid(),
    title: "Python-Intro to Computer Science",
    creator: "David J. Malan -Harvard University",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    videoImage:
      "https://i.ytimg.com/vi/hnDU1G9hWqU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBKLEZd4hfwiLxCHaI6ExcKArJcTw",
    views: "10",
    videoUrl: "https://www.youtube.com/embed/hnDU1G9hWqU",
    category: "Backend Development",
  },
  {
    _id: uuid(),
    title: "Web Programming with Flask-Intro to Computer Science",
    creator: "David J. Malan -Harvard University",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    videoImage:
      "https://i.ytimg.com/vi/zdgYw-3tzfI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAb5DPrrqyOTOYjeOW42S1LN8B40Q",
    views: "10",
    videoUrl: "https://www.youtube.com/embed/zdgYw-3tzfI",
    category: "Backend Development",
  },
  {
    _id: uuid(),
    title: "SQL-Intro to Computer Science",
    creator: "David J. Malan -Harvard University",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    videoImage:
      "https://i.ytimg.com/vi/TplT4qjz1RQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCOLkF5IdycMtoDdyP9fZ0zo6LNjg",
    views: "10",
    videoUrl: "https://www.youtube.com/embed/TplT4qjz1RQ",
    category: "Backend Development",
  },
];
