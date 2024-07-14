import { createContext, useEffect, useState } from "react";
import { getVideos } from "./api/getVideos";
import { getCategories } from "./api/getCategories";
import { addCategory } from "./api/addCategory";
import { deleteCategory } from "./api/deleteCategory";
import { updateCategory } from "./api/updateCategory";
import { addVideo } from "./api/addVideo";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [videos, setVideos] = useState([]);
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const onCreateCategory = async(name, description, color) => {
    try {
      await addCategory(name, description,color);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }
  
  const onCreateVideo = async(title, link, category, description) => {
    try {
      await addVideo(title, link, category, description);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }

  const onDeleteCategory = async(id) => {
    try {
      await deleteCategory(id);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }

  const onUpdateCategory = async(name, description, color, id) => {
    try {
      await updateCategory(name, description, color, id);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }

  const fetchData = async () => {
    try {
      const dataVideos = await getVideos();
      setVideos(dataVideos);

      const dataCategories =  await getCategories();
      setCategories(dataCategories);
    } catch (error) {
      console.error(error);
    }
  };

  const values = {
    videos,
    categories,

    onCreateCategory,
    onDeleteCategory,
    onUpdateCategory,
    onCreateVideo
  }

  return (
    <DataContext.Provider value={values}>
        {children}
    </DataContext.Provider>
  )

}