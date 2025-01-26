import React, { useState, useEffect, useContext} from "react";
import { doc, getDoc, setDoc, increment, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { ThemeContext } from "../App";


const ProjectCard = ({ id, title, description, link}) => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
    const { darkMode } = useContext(ThemeContext);

  // Fetch likes from Firestore and check local storage
  useEffect(() => {
    const fetchLikes = async () => {
      const docRef = doc(db, "projects", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setLikes(data.likes || 0);
      } else {
        // If the document doesn't exist, initialize it
        await setDoc(docRef, { likes: 0 });
      }

      // Check if the user has liked this project in local storage
      const localLikes = localStorage.getItem(`liked_${id}`);
      setHasLiked(localLikes === "true");
    };

    fetchLikes();
  }, [id]);

  // Handle like toggle
  const handleLike = async () => {
    const docRef = doc(db, "projects", id);

    if (hasLiked) {
      // If already liked, decrement the likes
      await updateDoc(docRef, { likes: increment(-1) });
      setLikes((prev) => prev - 1); // Update UI instantly
      setHasLiked(false);
      localStorage.setItem(`liked_${id}`, "false"); // Update local storage
    } else {
      // If not liked yet, increment the likes
      await updateDoc(docRef, { likes: increment(1) });
      setLikes((prev) => prev + 1); // Update UI instantly
      setHasLiked(true);
      localStorage.setItem(`liked_${id}`, "true"); // Update local storage
    }
  };

  return (
    <div className={`${ darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"} border border-blue-500 p-6 rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 md:w-5/6`}>
      <h3 className={`${darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"} text-2xl font-semibold mb-4`}>{title}</h3>
      <p className={`${darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"} text-base mb-6 leading-relaxed`}>
        {description}
      </p>
      <div className="flex flex-row items-center justify-between">
        <a
          href={link}
          className="inline-block text-white bg-blue-900 px-6 py-3 rounded-full shadow hover:bg-blue-800 hover:shadow-lg transition-all duration-300"
        >
          View Project
        </a>
        <div className="flex items-center mt-4">
          <button
            onClick={handleLike}
            className={`text-white px-4 py-2 rounded-full transition-all duration-300 ${
              hasLiked ? "bg-green-700 hover:bg-green-600" : "bg-blue-900 hover:bg-blue-800"
            }`}
          >
            <i className="fa-solid fa-thumbs-up"></i>
          </button>
          <span className={`ml-3 ${darkMode ? "text-black" : "text-white"}`}>{likes} Likes</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

