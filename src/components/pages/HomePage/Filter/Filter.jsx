import './filter.css'


function Filter({ items, onSelectItem, category}) {

    const onClickItem = (index) => {
        onSelectItem(index)
    }

    return (
        <>
            <div className="filter__btns">
                <div
                    className={`filter__btn ${category === null ? 'filter__btn_active' : ''}`}
                    onClick={() => onClickItem(null)}>Все</div>
                {
                    items.map((item, i) => {
                        return (
                            <div
                                className={`filter__btn ${category === i ? 'filter__btn_active' : ''}`}
                                key={`${item}`}
                                onClick={() => onClickItem(i)}>{item}</div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Filter;
