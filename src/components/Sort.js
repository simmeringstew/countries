const Sort = ({ search, nameSort }) => {

    const handleChange = (e) => {
        nameSort(e.target.value);
    }

    return(
        <div className="sort">
            <input value={search} placeholder="Search for a country..." onChange={e => handleChange(e)} />
        </div>
    );
}

export default Sort;
