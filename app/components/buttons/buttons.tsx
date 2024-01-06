interface ButtonProps { 
    buttonText: string,
    disabled?: boolean,
    outline?: number,
    small?: boolean,
    custom?: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
} 
 

export const Button: React.FC<ButtonProps> = ({ buttonText, disabled, outline, small, custom, onClick }) => {
    return ( 
        <button 
        disabled={disabled}
        className={`
        py-2 
        px-6 
        w-48
        border 
        border-primaryColor 
        text-primaryColor 
        cursor-pointer 
        shadow-input 
        rounded-sm
        shadow-input
        disabled:opacity-80
        disabled:cursor-not-allowed
        ${outline === 1 ? "bg-textPrimary" : outline === 2 ? "bg-secondaryColor" : "bg-transparent"}
        ${outline === 1 ? "border-textPrimary" : outline === 2 ? "border-secondaryColor" : "border-primaryColor"}
        ${outline === 1 ? "text-primaryColor" : outline === 2 ? "text-textPrimary" : "text-primaryColor"}
        ${small ? "text-sm" : "text-base"}
        ${small ? "py-1 px-3" : "py-2 px-6"}
        ${small ? "w-36" : "w-48"}
        ${custom ? custom : ""}
        `}
        onClick={onClick}
        >
            {buttonText}
        </button>
     );
}

