import './TechStack.scss';
import { imageItems } from '../../constants/Constants';

export default function TechStack() {
    return (
        <section className="skills">
            <h1 className='skills__title'>Skills</h1>
            <div className="skills__container">
            {imageItems.map((item) => {
                return (
                    <img key={item.id} className={item.className} height={item.height} src={item.src} alt={item.alt} />
                )
            }
            )}
          </div>
          
        </section>
    )
}