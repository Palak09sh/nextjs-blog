import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
const postDirectory = path.join(process.cwd(),'posts')
// process.cwd() method returns the current working directory of the Node.js process.
export default function getSortedPostData() {
const fileName = fs.readdirSync(postsDirectory);
const allPostsData = fileNames.map((fileName)=>{
    const id = fileName.replace(/\.md$/,'')
    const fullPath = path.join(postsDirectory,fileName);
const fileContents = fs.readFileSync(fullPath,'utf8')
const matterResult = matter(fileContents)
return{
    ...matterResult.data,
}
})
return allPostsData.sort((a,b) => {if(a.date<b.date)
{
    return 1;
}
else{
    return -1;
}
})
}
