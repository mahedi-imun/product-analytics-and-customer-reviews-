import { useEffect, useState } from "react";
const useReviews = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://mahedi-imun.github.io/user-ratings/reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data) )
    },[])
    return [reviews, setReviews]
};

export default useReviews;