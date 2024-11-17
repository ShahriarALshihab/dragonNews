import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
    const {data:news} = useLoaderData(); 
    
    return (
        <div>
            <h3 className="font-semibold mb-3">Dragon News Home</h3>
            {news.map((singleNews) => (
                <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>
            ))
            }
        </div>
    );
};

export default CategoryNews;