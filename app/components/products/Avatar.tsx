import { FaUserCircle } from "react-icons/fa";

interface AvatarProps {
  src?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  if (src) {
    return <img
      src={src}
      alt="Avatar"
      className="h-[30px] w-[30px] rounded-full"
    ></img>;
  }
  return <FaUserCircle className="h-[30px] w-[30px]" />;
};

export default Avatar;
