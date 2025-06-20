import { useEffect, useState } from "react";
import CommonForm from "../common/common.comp.form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { addressFormControls } from "@/config/config.index";
import { useDispatch, useSelector } from "react-redux";
import { addNewAddress, fetchAllAddresses } from "@/store/shop/address-slice/address-slice.shop.index";
import AddressCard from "./shoppingView.comp.address-card";

const initialAddressFormData = {
  address: "",
  city: "",
  phone: "",
  pincode: "",
  notes: "",
};

function Address() {

  const { user } = useSelector((state) => state.auth);
  const { addressList } = useSelector((state) => state.shopAddress)

  const [formData, setFormData] = useState(initialAddressFormData);

  const dispatch = useDispatch();

  function handleManageAddress(event) {
    event.preventDefault();

    dispatch(addNewAddress({
      ...formData,
      userId: user?.id
    })).then((data) => {
      
      if (data?.payload?.success) {
        dispatch(fetchAllAddresses(user?.id));
        setFormData(initialAddressFormData)
      }
    })
  }

  function isFormValid() {
    return Object.keys(formData)
      .map((key) => formData[key].trim() !== "")
      .every((item) => item);
  }


  useEffect(() => {
    dispatch(fetchAllAddresses(user?.id));
  },[dispatch])

  console.log(addressList, "address Lists: ")

  return (
    <Card>
      <div className="mb-5 p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {
          addressList && addressList.length > 0 ? addressList.map((singleAddressItem) => <AddressCard addressInfo={singleAddressItem}/>) : "Title"
        }
      </div>
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
