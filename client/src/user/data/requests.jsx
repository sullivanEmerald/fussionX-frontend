
const SEVER_REQUEST = {

    GETPREDICTIONS: async (url) => await fetch(url),

    GETUSERS: async (url) => await fetch(url),

    GETIMAGES: async (url) => await fetch(url)
}

const { GETPREDICTIONS, GETUSERS, GETIMAGES } = SEVER_REQUEST;

export { GETPREDICTIONS, GETUSERS, GETIMAGES };
