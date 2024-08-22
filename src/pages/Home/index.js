import { useEffect, useState } from "react";
import api from "../../services/api";

//https://api.themoviedb.org/3/movie/now_playing?api_key=67516dda184a61ee9e9dd721d6ea8b99&language=pt-BR




function Home (){

    useEffect(()=>{
    async function loadFilmes(){
        const response = await api.get("movie/now_playing", {
            params:{
                api_key: "67516dda184a61ee9e9dd721d6ea8b99",
                language: "pt-BR",
                page: "1"
            }
        })

        console.log(response)
    }

    loadFilmes();
},[])

    return(
        <>Home</>
    );
}

export default Home;