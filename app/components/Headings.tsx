interface HeadingProps{
    title: string,
    center?: boolean
    borderBottom?: boolean
}

const Heading: React.FC<HeadingProps> = ({ title, center, borderBottom }) => {
    return ( 
        <div className={`${center ? "text-center" : "text-start"} ${borderBottom ? "border-b border-b-light-primary" : "border-none"} md:border-none`}>
            <h1 className="font-semibold text-2xl pb-4">{title}</h1>
        </div>
     );
}
 
export default Heading;