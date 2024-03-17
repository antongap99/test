import {useEffect, useState} from 'react';

export interface UseFetchOptions {
	method: 'get' | 'post';
	url: string;
	headers?: Record<string, string>;
	body?: unknown;
}

const useFetch = <T>(options: UseFetchOptions) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [data, setData] = useState<T | null>(null);
	const { method, url, headers, body } = options;

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);



				const requestOptions: RequestInit = {
					method,
					headers: headers || {},
					body: body ? JSON.stringify(body) : undefined,
				};

				const res = await fetch(url, requestOptions);

				if (!res.ok) {
					throw new Error('Network response was not ok');
				}

				const jsonData: T = await res.json();
				setData(jsonData);
				setIsError(false);
			} catch (error) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData()
	}, [url, method, headers, body]);


	return {
		isLoading,
		isError,
		data,
	};
};

export default useFetch;