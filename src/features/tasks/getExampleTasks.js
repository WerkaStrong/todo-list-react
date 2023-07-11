const EXAMPLE_tASKS_URL = "/todo-list-react/exampleTasks.json";

export const getExampleTasks = async () => {
    const response = await fetch(EXAMPLE_tASKS_URL);

    if (!response.ok) {
        new Error (response.statusText);
    }

    return await response.json();
};