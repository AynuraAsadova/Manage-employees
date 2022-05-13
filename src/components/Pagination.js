import { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationLine = ({pages, setCurrentPage, currentEmployees, sortedEmployees}) => {

    const numOfPages = [];

    for (let i=1; i <= pages; i++) {
        numOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1);


    useEffect(() => {
        setCurrentPage(currentButton)
    },[currentButton, setCurrentPage])

    return (

        <div className="clearfix">
            <div className="hint-text">Showing <b>{currentEmployees.length}</b> out of <b>{sortedEmployees.length}</b> entries</div>

        <Pagination>
            <Pagination.Prev className={`${currentButton === 1 ? 'page-item disabled' : 'page-item'}`} 
            onClick={() => setCurrentButton((prev) => prev ===1 ? prev : prev - 1)  }/>

            {
                numOfPages.map((page, index) => {
                    return (
                        <Pagination.Item key={index} className={`${currentButton === page ? 'page-item active' : 'page-item'}`}
                        onClick={() => setCurrentButton(page)}>{page}</Pagination.Item>
                    )
                })
            }

            <Pagination.Next className={`${currentButton === numOfPages.length ? 'page-item disabled' : 'page-item'}`}
            onClick={() => setCurrentButton((prev) => prev === numOfPages.length ? prev : prev + 1)}
            />
            </Pagination>

        </div>
    )
}

export default PaginationLine;