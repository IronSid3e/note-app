import react from "react";
const BlogContext = react.createContext();

export const BlogProvider = ({children}) => {

    const blogPosts=[{title:'react'}, {title: 'JSX'}]

    return (
    <BlogContext.Provider value = {blogPosts}>
        {children}
    </BlogContext.Provider>
    )
};
export default BlogContext;