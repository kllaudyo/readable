const base_url = "http://localhost:3001";
const headers = {
    'Content-Type':'application/json',
    'Accept':'application/json',
    'Authorization': Math.random().toString(36).substr(-8)
};

export const
    getCategories = () =>
        fetch(`${base_url}/categories`, { headers })
            .then(res => res.json()),

    getPosts = () =>
        fetch(`${base_url}/posts`, { headers })
            .then(res => res.json());