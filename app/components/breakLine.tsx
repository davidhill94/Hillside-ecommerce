interface BreakLineProps {
    color: string
};

const BreakLine: React.FC<BreakLineProps> = ({ color }) => {
    return ( 
        <div 
        className="flex-grow border-t my-2"
        style={{borderColor: `${color}`}}
        ></div>
     );
}
 
export default BreakLine;