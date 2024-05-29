
const Feature = ({imgSrc, title, text, icon}:{imgSrc : string, title :string, text:string, icon:string}) => {
    return (
        <div className='feature-item'>
<img src={imgSrc} alt={icon} className='feature-icon'/>
<h3 className='feature-item-title'>{title}</h3>
<p>{text}</p>
        </div>
    );
};

export default Feature;