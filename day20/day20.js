const getFreePodcasts = (data) => {
    const freePodcasts = podcasts.filter(podcast => !podcast.paid)
    return freePodcasts.map((podcast) => {
        return {
            title: podcast.title,
            rating: podcast.rating,
            paid: podcast.paid
        }
    })
}

console.log(getFreePodcasts(podcasts))