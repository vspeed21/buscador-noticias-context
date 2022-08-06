import { createContext, useState, useEffect } from "react";
import axios from "axios";

const NoticiasContext = createContext();

export const NoticiasProvider = ({children}) => {

  const [categoria, setCategoria] = useState('general');
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0)

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&page=2&apiKey=${import.meta.env.VITE_API_KEY}`;

      const { data } = await axios(url);

      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
    }

    consultarAPI();
  }, [categoria]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${pagina}&category=${categoria}&page=2&apiKey=${import.meta.env.VITE_API_KEY}`;

      const { data } = await axios(url);

      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
      setPagina(1);
    }

    consultarAPI();
  }, [pagina]);

  const handleChangePaginas = (e, valor) => {
    setPagina(valor)
  }



  return(
    <NoticiasContext.Provider
      value={{
        categoria,
        setCategoria,
        noticias,
        totalNoticias,
        handleChangePaginas,
        pagina,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  )
}

export default NoticiasContext;