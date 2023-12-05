import { Link } from 'react-router-dom';
import css from './LinkRedirect.module.css';

export const LinkRedirect = ({to, text}) => {
  return (
      <Link to={`/${to}`} className={css.linkRedirect}>{text}</Link>  
  )
}