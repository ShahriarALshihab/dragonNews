/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";


const LeftNavbar = () => {
    const [categories, setCategories] = useState([]); 

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
        .then(data=>setCategories(data.data.news_category))
    },[])
    return (
        <div>
            <h3 className="font-semibold mb-2">All Category</h3>
            
            <div className="flex flex-col items-start justify-start gap-3">
                {
                    categories.map((category) => (
                        <button className="text-sm text-gray-500 hover:underline" key={category.category_id}>{category.category_name}</button>
                    ))
                }
            </div>
        </div>
    );
};

export default LeftNavbar;