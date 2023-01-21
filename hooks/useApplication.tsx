import { useEffect, useState } from "react";

const useApplication = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                //   setApiData(data);
                setIsLoading(false);
            } catch (error) {
                //   setServerError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { isLoading, apiData, serverError };
};