import { useState } from "react";
import CommonForm from "../common/common.comp.form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { addressFormControls } from "@/config/config.index";

const initialAddressFormData = {
  address: "",
  city: "",
  phone: "",
  pincode: "",
  notes: "",
};

function Address() {
  const [formData, setFormData] = useState(initialAddressFormData);

  function handleManageAddress(event) {
    event.preventDefault();
  }

  function isFormValid() {
    return Object.keys(formData)
      .map((key) => formData[key].trim() !== "")
      .every((item) => item);
  }

  return (
    <Card>
      <div>Address List</div>
      <CardHeader>
        <CardTitle className="text-2xl">Add New Address</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <CommonForm
          formControls={addressFormControls}
          formData={formData}
          setFormData={setFormData}
          buttonText={"add"}
          onSubmit={handleManageAddress}
          isButtonDisabled={!isFormValid()}
        />
      </CardContent>
    </Card>
  );
}

export default Address;
