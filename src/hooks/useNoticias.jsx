import { useContext } from "react";
import NoticiasContext from "../contexts/NoticiasProvider";

const useNoticias = () => {
  return useContext(NoticiasContext)
}

export default useNoticias;