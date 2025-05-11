import { useQuery } from "react-query";

interface QueryProps {
    queryUrl: string;
    queryName?: string | string[];
    remove?: boolean;
}

export const QueryJSON = ({ queryUrl, queryName }: QueryProps) => {
    const { isLoading, isError, data, error, refetch } = useQuery((queryName)?(queryName):'JSONQuery', () => {
        return fetch(queryUrl)
            .then(res => res.json())
    })

    return { isLoading, isError, data, error, refetch };
}

export const QueryMarkdownText = ({ queryUrl, remove }: QueryProps) => {
    const { isLoading, isError, data, error, refetch } = useQuery('TextQuery', () => {
        return fetch((!remove)?(queryUrl + ".md"):queryUrl)
            .then(res => res.text())
            .then((data) => data.replaceAll('<br/>', '\n'))
    })

    return { isLoading, isError, data, error, refetch };
}