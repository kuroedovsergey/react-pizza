import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import sort from '../../assets/img/sort.svg'


function SortPopup({ items, setChoiceItemPopup }) {

    const [isActive, setIsActive] = useState(false);
    const [choiceItem, setChoiceItem] = useState(items[0].type);
    const choice = items.find(item => item.type === choiceItem).name
    const sortRef = useRef();

    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setIsActive(false)
        }
    }


    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        }
    }, [isActive])


    const toggleIsActive = () => {
        setIsActive(!isActive)
    }

    const choiceSort = (obj) => {
        setChoiceItem(obj.type)
        setIsActive(false)
        setChoiceItem(obj.type)
        setChoiceItemPopup(obj)
    }


    return (
        <div ref={sortRef} className='sort'>
            <div className="filter__sort">
                <img className={`filter__svg ${isActive ? 'active' : ''}`} src={sort} alt="sort" />
                <p>Сортировка по: <span onClick={toggleIsActive} className='filter__text'>{choice}</span></p>
            </div>
            {isActive && <div className="filter__popup">
                <ul>
                    {items &&
                        items.map((obj, i) =>
                            <li
                                className={`${choiceItem === i ? 'active' : ''}`}
                                onClick={() => choiceSort(obj)}
                                key={`${obj.name}_${i}`}
                            >{obj.name}</li>)
                    }
                </ul>
            </div>}
        </div>
    );
}

export default SortPopup;