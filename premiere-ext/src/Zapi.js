import axios from 'axios';

export const downloadFile = async(id)=>{
    const query = `
    query{
      file(input: {id:"`+id+`"}){
        filePath
      }
    }
    `
    // load assets
    let res = await axios.get('http://localhost:3200/graphql?query='+encodeURIComponent(query), {
        headers: {
            "Content-Type":"application/json"
        }})

    const filePath = res['data']['data']['file']['filePath']

    return filePath
}

// return video or image proxy id
export const getProxy = (files)=>{
    console.log(files)
    let asset = files.find(elem => elem["mimetype"] === "video/mp4")
    if(asset){
        return asset
    }else{
        asset = files.find(elem => elem["category"] === "web-proxy")
        console.log(asset)
        return asset

    }
}

export const addToWorkspace = (filePath) =>{
    var csInterface = new window.CSInterface()
    
    let folder = csInterface.getSystemPath(window.SystemPath.EXTENSION)

    const fileName = filePath.split("/").pop()
    
    const path = `${folder}/graphql/dist/public/${fileName}`

    csInterface.evalScript("importFile('"+path+"')");
}