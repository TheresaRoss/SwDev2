import { dbConnect } from "@/db/dbConnect";
import Hospital from "@/db/models/Hospital";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
export default function AddHospitalForm() {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    console.log(formData);
    const name = formData.get("name");
    const address = formData.get("address");
    const district = formData.get("district");
    const province = formData.get("province");
    const postalcode = formData.get("postal");
    const tel = formData.get("tel");
    const picture = formData.get("picture");
    try {
      await dbConnect();
      const hospital = await Hospital.create({
        name: name,
        address: address,
        district: district,
        province: province,
        postalcode: postalcode,
        tel: tel,
        picture: picture,
      });
    } catch (err) {
      console.log(err);
    }
    revalidateTag("hospitals");
    redirect("/hospital");

    // alert(
    //   `Name: ${name}\nSurname: ${surname}\nNational ID Card: ${nationalIdCard}\nHospital: ${hospital}\nVaccination Date: ${vaccinationDate}`
    // );
  };
  return (
    <form
      action={handleSubmit}
      className="bg-white bg-opacity-0 p-4 rounded-lg shadow-lg">
      <Field name="name" label="Name" />
      <Field name="address" label="Address" />
      <Field name="district" label="District" />
      <Field name="province" label="Province" />
      <Field name="postal" label="Postal Code" />
      <Field name="tel" label="Tel Number" />
      <Field name="picture" label="Picture URL" />
      <button className="flex justify-center items-center px-4 py-2 bg-blue-600">
        Submit
      </button>
    </form>
  );
}
export function Field({ label, name }: { label: string; name: string }) {
  return (
    <div className="mb-4">
      <label className="block text-white text-sm font-semibold mb-2">
        {label}
      </label>
      <input
        type="text"
        name={name}
        required
        className="w-full bg-transparent border-b border-white focus:outline-none text-white text-base"
      />
    </div>
  );
}
