export const MainUrl = {
  getHome: () => "/",
  getAbout: () => "/about",
  getCases: () => "/cases",
  getCharity: () => "/charity",
  getCharityDetails: (id: string) => `${MainUrl.getCharity()}/${id}`,
};
