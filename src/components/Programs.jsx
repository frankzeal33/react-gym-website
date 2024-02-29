import {FaCrown} from 'react-icons/fa'
import {SiOpenaigym} from 'react-icons/si'
import {AiFillCaretRight} from 'react-icons/ai'
import SectionHead from './SectionHead';
import {programs} from '../data'
import Card from '../UI/Card';
import {Link} from 'react-router-dom'

const Programs = () => {
  return (
   <section className="programs">
    <div className="container programs_container">
        <SectionHead icon={<FaCrown/>} title="programs"/>
    
        <div className="programs_wrapper">
            {
                programs.map(({id, icon, title, info, path}) => {
                    return (
                        <Card className="programs_program" key={id}>
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{info}</small>
                            <Link to={path} className='btn sm'>Learn More<AiFillCaretRight/></Link>
                        </Card>
                    )
                })
            }
        </div>
    </div>
   </section>
  );
}

export default Programs;
