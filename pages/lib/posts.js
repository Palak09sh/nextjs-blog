// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// const postDirectory = path.join(process.cwd(), "posts");
// import { remark } from "remark";
// import html from "remark-html";
// // process.cwd() method returns the current working directory of the Node.js process.
// export function getSortedPostsData() {
//   // * get the file name under/posts
//   // this is to fetch the data from external endpoint
//   // const res = await fetch("");
//   // return res.json();
//   const fileNames = fs.readdirSync(postDirectory);
//   const allPostsData = fileNames.map((fileName) => {
//     // * Remove the ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, "");
//     // * Read the markdown file as string
//     const fullPath = path.join(postDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf8");
//     // * Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);
  
//     //  * combine the data with id
//     return {
//       id,
//       ...matterResult.data,
//     };
//   });
//   // * Sort posts by date
//   return allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postDirectory);
//   // Returns an array that looks like this:
//   // [
//   //   {
//   //     params: {
//   //       id: 'ssg-ssr'
//   //     }
//   //   },
//   //   {
//   //     params: {
//   //       id: 'pre-rendering'
//   //     }
//   //   }
//   //    return must be array of objects instead of strings
//   // ]
//   //    each object must have params as key and contain an object with id bcz we're using [id] in the file neame.
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ""),
//       },
//     };
//   });
// }
// export async function getPostData(id) {
//   const fullPath = path.join(postDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");

//   // *Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);
//   // *Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();
//   // *Combine the data with the id
//   return {
//     id,
//     ...matterResult.data,
//   };
// }
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
  // const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    console.log(matterResult)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}