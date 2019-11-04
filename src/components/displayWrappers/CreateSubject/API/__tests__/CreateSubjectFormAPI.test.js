import CreateSubjectFormAPI from '../CreateSubjectFormAPI'

let state = {
    currentPanel: "content",
    subjectTitle: "",
    subjectContent: "",
    imageDescription: "",
    linkDescription: "", 
    linkContent: "",
    titleIsErrored: false,
    contentIsErrored: false
}

const useApiMock = (api, defaultValue) => {
    let state = defaultValue;
    let setState = updater => {
      if (typeof updater === "function") {
        state = updater(state);
      } else {
        state = updater;
      }
      ref.api = api({ state, setState });
    };
    let ref = {
      api: api({ state, setState })
    };
    return ref;
  };

const mockApi = useApiMock(CreateSubjectFormAPI, state)

//Allows us to ignore window . log calls
global.log = () => {}

it("updates the panel that is shown to the user", () => {
  mockApi.api.showPanel("content")
  expect(mockApi.api.currentPanel).toEqual("content")

  mockApi.api.showPanel("image")
  expect(mockApi.api.currentPanel).toEqual("image")

  mockApi.api.showPanel("link")
  expect(mockApi.api.currentPanel).toEqual("link")
})

it("updates subject title", () => {
    mockApi.api.updateSubjectTitle("new title")
    expect(mockApi.api.subjectTitle).toEqual("new title")
})

it("updates subject content", () => {
    mockApi.api.updateSubjectContent("new content")
    expect(mockApi.api.subjectContent).toEqual("new content")
})

it("updates image description", () => {
    mockApi.api.updateImageDescription("new desc")
    expect(mockApi.api.imageDescription).toEqual("new desc")
})

it("updates link description", () => {
    mockApi.api.updateLinkDescription("new link desc")
    expect(mockApi.api.linkDescription).toEqual("new link desc")
})

it("updates link content", () => {
    mockApi.api.updateLinkContent("new link content")
    expect(mockApi.api.linkContent).toEqual("new link content")
})

it("checks title is not empty when submitting", () => {
  mockApi.api.updateSubjectTitle("")
  mockApi.api.submit()
  expect(mockApi.api.titleIsErrored).toEqual(true)

  mockApi.api.updateSubjectTitle("should pass")
  mockApi.api.submit()
  expect(mockApi.api.titleIsErrored).toEqual(true)
})

it("checks content is not empty when submitting", () => {
  mockApi.api.updateSubjectContent("")
  mockApi.api.submit()
  expect(mockApi.api.contentIsErrored).toEqual(true)

  mockApi.api.updateSubjectContent("should pass")
  mockApi.api.submit()
  expect(mockApi.api.contentIsErrored).toEqual(true)
})