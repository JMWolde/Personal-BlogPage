import {useEffect, useState} from "react";
import {BlogType} from "@/components/types";
import {supabase} from "@/lib/supabase";
import DecryptedText from "@/components/DecryptedText";

export default function BlogCard(){
    return <GetBlogs></GetBlogs>
}
function GetBlogs() {
    const [Blogs, setBlogs] = useState<BlogType[] | null>(null);
    useEffect(() => {
        const GetBlogs = async () => {
            const {data: Blogs} = await supabase
                .from("Blog")
                .select("*")
                .order("created_at",{ ascending: false })
                .returns<BlogType[]>();
            setBlogs(Blogs);
        }
        GetBlogs();
    }, []);

    return (
<ul>
            {Blogs?.map((Blog) => (

                    <li key = {Blog.id}><a href= {`/blogs?id=${Blog.id}`}>{Blog.Blog_Title}</a></li>

    )

)}
</ul>
)
}