import React,{useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifExpertApp = ()=> {

    const [categories,setCategories] = useState(['One Punch' ]);
    /*const handleAdd = () => {
        // inmutable categories.push('Gon');
        // MALO setCategories('GON')
        //setCategories( ['GON',...categories])
        setCategories( catg => [ ...catg, 'HunterxHunter'])
    }*/


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(  (category) => (
                        //<li key={category}>{category}<å/li>
                        <GifGrid key= {category} category={category} />
                        )
                    )
                }
            </ol>
        </>
        )
}
