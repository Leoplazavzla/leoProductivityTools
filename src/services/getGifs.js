const apiKey = 'SwbDhrT8ag35Tw0KzUCu1L4Wi9s2PJLC'

    const getGifs = (keyword = 'morty') =>  {
        const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
        return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const {data = []} = response
            const gifs = data.map(image => {
                const {images, title, id} = image;
                const {url} = images.downsized_large;
                return {title, id, url}
            })
            return gifs

        })
}

export default getGifs;