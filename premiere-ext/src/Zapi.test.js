import {
  onUploadAuth,
  clearCache,
  authorize,
  search,
  downloadFile,
  getProxy,
  addToWorkspace,
} from "./Zapi"

beforeAll(() => {
  global.fetch = jest.fn()
})

afterAll(() => {
  fetch.mockClear()
})

describe("zapi.onUploadAuth", () => {
  beforeEach(() => {
    fetch.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve({
            data: true,
          })
        },
      })
    })
  })

  it("should return true", async () => {
    const res = await onUploadAuth("1234", "456", "server")
    expect(res).toHaveProperty("data")
    expect(res["data"]).toEqual(true)
  })
})

describe("zapi.clearCache", () => {
  beforeEach(() => {
    fetch.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve({
            data: true,
          })
        },
      })
    })
  })

  it("should return true", async () => {
    const res = await clearCache()
    expect(res).toHaveProperty("data")
    expect(res["data"]).toEqual(true)
  })
})

describe("zapi.authorize", () => {
  beforeEach(() => {
    fetch.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve({
            data: true,
          })
        },
      })
    })
  })
  it("should return true", async () => {
    const res = await authorize()
    expect(res).toHaveProperty("data")
    expect(res["data"]).toEqual(true)
  })
})

describe("zapi.search", () => {
  beforeEach(() => {
    fetch.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve({
            data: true,
          })
        },
      })
    })
  })
  it("should return true", async () => {
    const res = await search("term", "type")
    expect(res).toHaveProperty("data")
    expect(res["data"]).toEqual(true)
  })

  it("should return true", async () => {
    const res = await search("term")
    expect(res).toHaveProperty("data")
    expect(res["data"]).toEqual(true)
  })
})

describe("zapi.downloadFile", () => {
  beforeEach(() => {
    fetch.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve({
            data: true,
          })
        },
      })
    })
  })
  it("should return true", async () => {
    const res = await downloadFile("id")
    expect(res).toHaveProperty("data")
    expect(res["data"]).toEqual(true)
  })
})

describe("zapi.getProxy", () => {
  beforeEach(() => {
    fetch.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve({
            data: true,
          })
        },
      })
    })
  })
  it("should return mimetypes", async () => {
    const files = [
      { mimetype: "video/mp4", url: 1 },
      { mimetype: "application/nope", url: 2 },
    ]
    const res = getProxy(files)
    expect(res).toHaveProperty("mimetype")
    expect(res).toHaveProperty("url")
    expect(res["url"]).toEqual(1)
    expect(res["mimetype"]).toEqual("video/mp4")
  })

  it("should return true", async () => {
    const files = [
      { category: "web-proxy", url: 1 },
      { mimetype: "application/nope", url: 2 },
    ]
    const res = getProxy(files)
    expect(res).toHaveProperty("category")
    expect(res).toHaveProperty("url")
    expect(res["url"]).toEqual(1)
    expect(res["category"]).toEqual("web-proxy")
  })
})

describe("zapi.addToWorkspace", () => {
  let realSystemPath
  let realCSInterace
  let mockGetSystemPath = jest.fn()
  let mockEvalScript = jest.fn()

  beforeAll(() => {
    realSystemPath = window.SystemPath
    realCSInterace = window.CSInterface
    window.CSInterface = function () {
      return {
        getSystemPath: mockGetSystemPath,
        evalScript: mockEvalScript,
      }
    }

    window.SystemPath = { EXTENSION: "test" }
  })
  afterAll(() => {
    window.SystemPath = realSystemPath
    window.CSInterface = realCSInterace
  })
  it("should return true", async () => {
    mockGetSystemPath.mockReturnValue("Home")
    addToWorkspace("file.jpg")

    expect(mockGetSystemPath.mock.calls.length).toBe(1)
    expect(mockEvalScript.mock.calls.length).toBe(1)
    expect(mockGetSystemPath.mock.calls[0][0]).toBe("test")
    expect(mockEvalScript.mock.calls[0][0]).toBe(
      "importFile('Home/graphql/dist/public/file.jpg')"
    )
  })
})
