const API_URL = "http://localhost:3200/graphql?query="

const send = (query) => {
  return new Promise((resolve, reject) => {
    fetch(API_URL + encodeURIComponent(query), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err))
  })
}

export const onUploadAuth = (key, pid, server) => {
  const query = `query{
        authorize(input: {
            zapiKey:"${key}",
            projectId: "${pid}", 
            zapiServer: "${server}"}){
              status}}`
  return send(query)
}

export const clearCache = () => {
  const query = `query{clearCache{total, deletedFiles, authFile}}`
  return send(query)
}

export const authorize = () => {
  const query = `query{userAuthorization{projectId, zapiServer}}`
  return send(query)
}

export const search = (term, type) => {
  let query = ""
  if (term && type !== "all") {
    query =
      `query{search(input:{term: "` +
      term +
      `", type: "` +
      type +
      `",getThumbnail:true}){assets{id, thumbnail, proxy, files{category, id, mimetype, size}}}}`
  } else {
    query =
      `query{search(input:{term: "` +
      term +
      `",getThumbnail:true}){assets{id, thumbnail, proxy, files{category, id, mimetype, size}}}}`
  }

  return send(query)
}

export const downloadFile = async (id) => {
  const query =
    `
    query{
      file(input: {id:"` +
    id +
    `"}){
        filePath
      }
    }
    `
  return send(query)
}

// return video or image proxy id
export const getProxy = (files) => {
  let asset = files.find((elem) => elem["mimetype"] === "video/mp4")
  if (asset) {
    return asset
  } else {
    asset = files.find((elem) => elem["category"] === "web-proxy")
    return asset
  }
}

export const addToWorkspace = (filePath) => {
  var csInterface = new window.CSInterface()

  let folder = csInterface.getSystemPath(window.SystemPath.EXTENSION)

  const fileName = filePath.split("/").pop()

  const path = `${folder}/graphql/dist/public/${fileName}`

  csInterface.evalScript("importFile('" + path + "')")
}
