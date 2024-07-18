const config = {
    // Either pick the environment variable or a hardcoded string if the env is empty
    api_endpoint: import.meta.env.VITE_API_ENDPOINT | "https://localhost:8000"
}

export default config