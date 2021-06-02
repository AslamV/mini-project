export const getSub = async () => {
    try{
        const data = await fetch('/translate')
        return data.json().then((data) => {
            return data.snippets
        })
    }
    catch(error){
        console.log(error)
    }
}