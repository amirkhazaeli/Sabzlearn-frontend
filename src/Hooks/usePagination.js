import  { useCallback, useEffect, useState } from 'react';

export default function usePagination(data, pagesSize = 8) {
    const [showData, setShowData] = useState()
    const [currentPage, setCurrentPage] = useState(1)
 
    useEffect(() => {
        const endIndex = pagesSize * currentPage;
        const startIndex = endIndex - pagesSize;
        setShowData(data.slice(startIndex, endIndex));
    },[data,currentPage])

    const currentPageHandler = useCallback((pageNumber) => {
        setCurrentPage(pageNumber)
        console.log(pageNumber);
    }, [])

    return [showData, currentPageHandler]
}
