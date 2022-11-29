import React, { useState, useEffect } from 'react'
import './emojim.css'
import List from '../data';
import EmojiCard from './emojicard';

const Emoji = () => {



    const [emojiData, setEmojiData] = useState(List);
    const [filterEmojiData, setFilterEmojiData] = useState(List);
    const [query, setquery] = useState('');
    
    //  setEmojiData(emojiData);
   

    const handlesearch = (event) => {
        const getSearch = event.target.value;
        if (getSearch.length > 0) {
            const searchdata = emojiData.filter((item) => item.name.toLowerCase().includes(getSearch));
            setEmojiData(searchdata);
        } else {
            setEmojiData(filterEmojiData)
            
        }
        // setFilterEmojiData(List);
        setquery(getSearch)
    }

    return (
        <div>
            <div className="search mb-5">
                {/* <i className="fa fa-search"></i> */}
                <input type="text" value={query} className="form-control" onChange={(e) => handlesearch(e)} placeholder="Search a Emoji Name" />
            </div>
            < EmojiCard emojiData={emojiData} />
        </div>


    )
}

export default Emoji
