 

const Button = ({content, classe}:{content :string, classe:string}) => {
    return (
        <div>
            <button type="submit" className={classe}>{content}</button>
        </div>
    );
};

export default Button;