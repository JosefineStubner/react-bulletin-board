import PostLiked from "./PostLiked";
import { useState } from "react";

export default function ReactPost({question, answer}) {

  const [liked, setLiked] = useState(false);
    
  return (
  <div className="info-box">
    <h3>Fråga:</h3>
    <p>{question}</p>
    <h3>Svar:</h3>
    <p>{answer}</p>
    {!liked && <button onClick={() => setLiked(true)}>Gilla</button>}
    {liked && < PostLiked />}
  </div>
  );
}