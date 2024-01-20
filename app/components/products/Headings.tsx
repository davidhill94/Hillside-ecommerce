interface HeadingProps{
    title: string,
    center?: boolean
}

const Heading: React.FC<HeadingProps> = ({ title, center }) => {
    return ( 
        <div className={`${center ? "text-center" : "text-start"} border-b border-b-light-primary md:border-none`}>
            <h1 className="font-semibold text-2xl pb-4">{title}</h1>
        </div>
     );
}
 
export default Heading;