import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postDirectory = path.join(process.cwd(), "posts");
// process.cwd() method returns the current working directory of the Node.js process.
export async function getSortedPostData() {
  // this is to fetch the data from external endpoint
  const res = await fetch("");
  return res.json();
  // const fileNames = fs.readdirSync(postsDirectory);
  // const allPostsData = fileNames.map((fileName)=>{
  //     const id = fileName.replace(/\.md$/,'')
  //     const fullPath = path.join(postsDirectory,fileName);
  // const fileContents = fs.readFileSync(fullPath,'utf8')
  // const matterResult = matter(fileContents)
  // return{
  //     ...matterResult.data,
  // }
  // })
  // return allPostsData.sort((a,b) => {if(a.date<b.date)
  // {
  //     return 1;
  // }
  // else{
  //     return -1;
  // }
  // })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postDirectory);
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  //    return must be array of objects instead of strings
  // ]
  //    each object must have params as key and contain an object with id bcz we're using [id] in the file neame.
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
 
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
 
  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
}
