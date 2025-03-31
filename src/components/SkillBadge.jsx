import React from "react";
import '../App.css'

function SkillBadge({ skill }) {
  return (
    <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full m-1 inline-block">
      {skill}
    </span>
  );
}

export default SkillBadge;
