const main = async () => {
    const txs = []
    while (true) {
        const response = await fetch("https://api.venmo.com/v1/stories/target-or-actor/1307342335377408327?only_public_stories=False&social_only=False&limit=50")
        const data = await response.json()
        if (!data.pagination.next) break
        txs.push()
    }
}