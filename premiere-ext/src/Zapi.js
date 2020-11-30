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

export const similar = (hash) => {
  const query = `query{similar(input:{hash: "${hash}", getThumbnail: true}){
    scrollId
    total
    count
    assets{
      id
      thumbnail
      files{ size name mimetype id category attrs { width height } }
      source{ path extension filename mimetype filesize }
      media{ orientation pageNumber aspect width length timeCreated type pageStack height }
      files{ id category mimetype name }
      analysis{
        gcpVisionLabelDetection{ count type predictions{ score label } }
        gcpVisionDocTextDetection{ words type content }
        gcpVisionImageTextDetection{ words type content }
        gcpVideoTextDetection { words type content }
        gcpVideoLogoDetection { count type predictions {score label}}
        gcpVideoExplicitDetection { explicit count type predictions {score label}}
        gcpVideoLabelDetection {count type predictions  {score label} }
        gcpVideoObjectDetection { count type predictions {score label}}
        zviLabelDetection{ count type predictions{ score label } }
        zviImageSimilarity{ type simhash }}}
    }}`
return send(query)
}

export const scroll = (scrollId) => {
  const query = `query{scroll(input:{scrollId: "${scrollId}", getThumbnail: true}){
              scrollId
              total
              count
              assets{
                id
                thumbnail
                files{ size name mimetype id category attrs { width height } }
                source{ path extension filename mimetype filesize }
                media{ orientation pageNumber aspect width length timeCreated type pageStack height }
                files{ id category mimetype name }
                analysis{
                  gcpVideoTextDetection { words type content }
                  gcpVideoLogoDetection { count type predictions {score label}}
                  gcpVideoExplicitDetection { explicit count type predictions {score label}}
                  gcpVideoLabelDetection {count type predictions  {score label} }
                  gcpVideoObjectDetection { count type predictions {score label}}
                  gcpVisionLabelDetection{ count type predictions{ score label } }
                  gcpVisionDocTextDetection{ words type content }
                  gcpVisionImageTextDetection{ words type content }
                  zviLabelDetection{ count type predictions{ score label } }
                  zviImageSimilarity{ type simhash }}}
              }}`
  return send(query)
}

export const search = (term, type) => {
  let query = ""
  if (term && type !== "all") {
    query = `query{search(input:{term: "${term}", type:"${type}", getThumbnail: true}){
              scrollId
              total
              count
              assets{
                id
                thumbnail
                files{ size name mimetype id category attrs { width height } }
                source{ path extension filename mimetype filesize }
                media{ orientation pageNumber aspect width length timeCreated type pageStack height }
                files{ id category mimetype name }
                analysis{
                  gcpVideoTextDetection { words type content }
                  gcpVideoLogoDetection { count type predictions {score label}}
                  gcpVideoExplicitDetection { explicit count type predictions {score label}}
                  gcpVideoLabelDetection {count type predictions  {score label} }
                  gcpVideoObjectDetection { count type predictions {score label}}
                  gcpVisionLabelDetection{ count type predictions{ score label } }
                  gcpVisionDocTextDetection{ words type content }
                  gcpVisionImageTextDetection{ words type content }
                  zviLabelDetection{ count type predictions{ score label } }
                  zviImageSimilarity{ type simhash }}}
              }}`
  } else {
    query = `query{search(input:{term: "${term}", getThumbnail: true}){
              scrollId
              total
              count
              assets{
                id
                thumbnail
                files{ size name mimetype id category attrs { width height } }
                source{ path extension filename mimetype filesize }
                media{ orientation pageNumber aspect width length timeCreated type pageStack height }
                files{ id category mimetype name }
                analysis{
                  gcpVideoTextDetection { words type content }
                  gcpVideoLogoDetection { count type predictions {score label}}
                  gcpVideoExplicitDetection { explicit count type predictions {score label}}
                  gcpVideoLabelDetection {count type predictions  {score label} }
                  gcpVideoObjectDetection { count type predictions {score label}}
                  gcpVisionLabelDetection{ count type predictions{ score label } }
                  gcpVisionDocTextDetection{ words type content }
                  gcpVisionImageTextDetection{ words type content }
                  zviLabelDetection{ count type predictions{ score label } }
                  zviImageSimilarity{ type simhash }}}
              }}`
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
