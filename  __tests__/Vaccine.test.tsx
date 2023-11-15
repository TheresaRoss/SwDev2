import HospitalCatalog from "@/app/hospital/component/hospitalCatalog";
import { render, screen, waitFor } from "@testing-library/react";
const mockResult = {
  success: true,
  count: 3,
  data: [
    {
      id: "652dfff531eba7b50d273683",
      name: "Chulalongkorn Hospital",
      address: "1873 Rama IV Rd",
      district: "Pathum Wan",
      province: "Bangkok",
      postalcode: "10330",
      tel: "026494000",
      picture:
        "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
    },
    {
      id: "652e002631eba7b50d279b09",
      name: "Rajavithi Hospital",
      address: "2 Phaya Thai Rd, Thung Phaya Thai",
      district: "Ratchathewi",
      province: "Bangkok",
      postalcode: "10400",
      tel: "022062900",
      picture:
        "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
    },
    {
      id: "652e003431eba7b50d27b9ba",
      name: "Thammasat University Hospital",
      address: "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
      district: "Khlong Luang",
      province: "Pathum Thani",
      postalcode: "12120",
      tel: "029269999",
      picture:
        "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
    },
  ],
};
describe("hospitalCatalog", () => {
  it("it should have correct number of hospital images", async () => {
    const hospital = await HospitalCatalog({ data: mockResult });
    render(hospital);
    await waitFor(() => {
      const hospitalImages = screen.queryAllByTestId("testdata");
      expect(hospitalImages.length).toBe(3);
    });
  });
});
