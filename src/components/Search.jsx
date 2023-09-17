import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
function Search(){
    return(
        <div className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='glass' />
            <input type="text" name="search" id="search" placeholder='search' />
        </div>
    )
}
export default Search;