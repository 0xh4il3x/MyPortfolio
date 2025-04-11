const SkillCard = ({ skill, level }) => (
    <div>
      <h4 className="text-lg font-medium">{skill}</h4>
      <div className="bg-gray-200 rounded-full h-2 w-full mt-2">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
  
  export default SkillCard;
  