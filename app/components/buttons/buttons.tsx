interface Props { 
    buttonText: string;
    onClick?: React.MouseEventHandler
} 
 

export const Button: React.FC<Props> = ({ buttonText, onClick }) => {
    return ( 
        <button 
        className="py-2 px-6 w-48 bg-transparent border border-primaryColor text-primaryColor cursor-pointer shadow-[0_0_5px_rgb(255,255,255,0.2)] rounded-sm"
        onClick={onClick}
        >
            {buttonText}
        </button>
     );
}

export const ButtonAlt: React.FC<Props> = ({ buttonText, onClick }) => {
    return ( 
        <button 
        className="py-2 px-6 w-48 border bg-textPrimary border-textPrimary text-primaryColor cursor-pointer shadow-[0_0_5px_rgb(0,0,0,0.2)] rounded-sm"
        onClick={onClick}
        >
            {buttonText}
        </button>
     );
}
