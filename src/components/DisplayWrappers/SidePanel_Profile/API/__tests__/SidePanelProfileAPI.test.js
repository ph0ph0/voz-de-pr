import SidePanelProfileAPI from "../SidePanelProfileAPI";

const state = {
  name: "",
  locationValue: "",
  selectedLocation: "",
  listOpen: false,
  dropDownIsErrored: false,
  selectedAvatar: null
};

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

var mockApi = useApiMock(SidePanelProfileAPI, state);

//Allows us to ignore window . log calls
global.log = () => {};

jest.mock("CustomHooks/user", () => ({
  useUser: () => ({
    error: null,
    loading: false,
    forgotPassword: () => {},
    submitCodeAndNewPassword: () => {},
    user: "testUser",
    updateUserLocationAndAvatar: () => {}
  })
}));

beforeEach(() => {
  mockApi = useApiMock(SidePanelProfileAPI, state);
});

//In the updateAvatar call of the api, the below function is called to create a reference
//to the file object from the file picker input so that a preview can be shown to the user.
//We need to mock this or we will get errors.
URL.createObjectURL = input => input;

it("toggles the list open and close", () => {
  mockApi.api.toggleList();
  expect(mockApi.api.listOpen).toEqual(true);

  mockApi.api.toggleList();
  expect(mockApi.api.listOpen).toEqual(false);
});

it("updates location value", () => {
  mockApi.api.updateLocationValue("new location");
  expect(mockApi.api.locationValue).toEqual("new location");
});

it("updates the selected location value", () => {
  mockApi.api.onLocationSelected("Rincon");
  expect(mockApi.api.selectedLocation).toEqual("Rincon");
  expect(mockApi.api.listOpen).toEqual(false);
  expect(mockApi.api.locationValue).toEqual("Rincon");
});

it("updates the selected avatar", () => {
  mockApi.api.updateAvatar("1");
  expect(mockApi.api.selectedAvatar).toEqual("1");
});

it("resets the dropdown", () => {
  mockApi.api.resetDropdown();
  expect(mockApi.api.locationValue).toEqual("");
  expect(mockApi.api.selectedLocation).toEqual("");
  expect(mockApi.api.listOpen).toEqual(false);
});

it("resets the side panel", () => {
  mockApi.api.resetAll();
  expect(mockApi.api.locationValue).toEqual("");
  expect(mockApi.api.selectedLocation).toEqual("");
  expect(mockApi.api.listOpen).toEqual(false);
  expect(mockApi.api.selectedAvatar).toEqual(null);
  expect(mockApi.api.dropDownIsErrored).toEqual(false);
});

// it("checks that the location exists when submitting", () => {
//     mockApi.api.updateLocationValue("wont match")
//     mockApi.api.submit()
//     expect(mockApi.api.dropDownIsErrored).toEqual(true)

//     mockApi.api.updateLocationValue("rincon")
//     mockApi.api.submit()
//     expect(mockApi.api.dropDownIsErrored).toEqual(false)
// })
