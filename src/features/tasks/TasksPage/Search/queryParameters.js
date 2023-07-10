import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (paramName) => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get(paramName);
    return query;
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

   return ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        const newSearch = searchParams.toString();
        history.push(`${location.pathname}?${newSearch}`);

    }
};